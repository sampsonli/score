/**
 * Created by lichun on 2017/1/19.
 */
import SockJS from 'sockjs-client'
import Vue from 'vue'
import Vuex from 'vuex'
import home from './home'
import zqdetail from './zqdetail'
import teamZq from './team/zq'
import teamLq from './team/lq'
Vue.use(Vuex)

const state = {
    time: 0,
    name: 'lichun',
    websocket: {
        connect: null,
        data: null,
        latestSub: null,
        reconnect: 0
    }
}
const mutations = {
    initSocket (state, {connect}) {
        state.websocket.connect = connect
    },
    addConnectNum (state) {
        state.websocket.reconnect ++
    },
    setLatestSub (state, latestSub) {
        state.websocket.latestSub = latestSub
    },
    updateSocketData (state, data) {
        state.websocket.data = data
    },
    setTime (state, time) {
        console.log('setLTme')
        state.time = time
    }

}
const actions = {
    initWebsocket ({commit, dispatch, state}) {
        return new Promise((resolve, reject) => {
            if (state.websocket.connect) return resolve()
            let connect = new SockJS(`http://em.500.com/score/sock`)
            let interval = null
            let hasFinished = false
            connect.onmessage = function (e) {
                let data = JSON.parse(e.data)
                commit('updateSocketData', data)
            }
            connect.onopen = function () {
                /*
                let homeScore = 0
                setInterval(() => {
                    let data = {
                        "status":"1",
                        "fid":660486,
                        "awayscore":"0",
                        "status_desc":"上半场",
                        "homescore":(homeScore++)+ '',
                        "home_red_counts":"0",
                        "away_red_counts":"0",
                        "match_at":"1080"
                    }
                    // console.log(data)
                    commit('updateSocketData', {data, stamp: 0})
                }, 2000) */
                if (state.websocket.latestSub) {
                    connect.send(state.websocket.latestSub)
                }
                interval = setInterval(() => {
                    connect.send(JSON.stringify({
                        'action': 'ping',
                        'from': {
                            url: window.location.href,
                            time: new Date().getTime()
                        }
                    }))
                }, 15000)
                if (hasFinished) return
                hasFinished = true
                resolve()
            }
            connect.onclose = function () {
                console.warn('5s后 websocket 重连')
                clearInterval(interval)
                setTimeout(() => {
                    commit('addConnectNum')
                    dispatch('initWebsocket')
                }, 5000)
            }
            connect.onerror = function (e) {
                console.error('sock error')
                e.code = '102'
                if (hasFinished) return
                hasFinished = true
                reject(e)
            }
            setTimeout(() => {
                if (hasFinished) return
                hasFinished = true
                let error = new Error('超时')
                error.code = '103'
                reject(error)
            }, 2000)
            commit('initSocket', {connect})
        })
    },
    async subscribe ({commit, dispatch, state}, {stamp, data}) {
        try {
            let latestSub = JSON.stringify({
                action: 'subs',
                stamp,
                data
            })
            // if (!state.websocket.connect) await dispatch('initWebsocket')
            state.websocket.connect && state.websocket.connect.send(latestSub)
            commit('setLatestSub', latestSub)
        } catch (e) {
            console.error(e.message)
        }
    },
    fetchItem ({commit}) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('hello world')
            }, 2000)
        })
    }
}

const getters = {
    getSocketData (state) {
        return state.websocket.data
    }
}

export function createStore () {
    return new Vuex.Store({
        state,
        actions,
        mutations,
        getters,
        modules: {
            home, zqdetail, teamZq, teamLq
        }
    })
}
