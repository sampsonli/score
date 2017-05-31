/**
 * Created by lichun on 2017/1/19.
 */
import SockJS from 'sockjs-client'
import Vue from 'vue'
import Vuex from 'vuex'
import home from './home'
import zqdetail from './zqdetail'
// import axios from '~common/axios'
Vue.use(Vuex)

const state = {
    name: 'lichun',
    websocket: {
        connect: null,
        data: null,
        latestSub: null,
        reconnect: 0,
        interval: null
    }
}
const mutations = {
    initSocket (state, {connect, interval}) {
        state.connect = connect
        state.interval = interval
    },
    addConnectNum (state) {
        state.websocket.reconnect ++
    },
    setLatestSub (state, latestSub) {
        state.websocket.latestSub = latestSub
    },
    updateSocketData (state, data) {
        state.websocket.data = data
    }

}
const actions = {
    initWebsocket ({commit, dispatch}) {
        return new Promise((resolve, reject) => {
            let connect = new SockJS(`http://em.500.com/score/sock`)
            let interval = null
            let hasFinished = false
            connect.onmessage = function (e) {
                if (e.data !== 'o' && e.data !== 'h') {
                    let data = JSON.parse(e.data)
                    commit('updateSocketData', data)
                } else {
                    // alert('收到服务端心跳')
                }
            }
            connect.onopen = function () {
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
                }, 10000)
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
            }, 1000)
            commit('initSocket', {connect, interval})
        })
    },
    subscribe ({commit, state}, {stamp, data}) {
        try {
            let latestSub = JSON.stringify({
                action: 'subs',
                stamp,
                data
            })
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

export function createStore () {
    return new Vuex.Store({
        state,
        actions,
        mutations,
        modules: {
            home, zqdetail
        }
    })
}
