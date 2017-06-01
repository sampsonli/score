/**
 * Created by sampson on 2017/5/10.
 */
import ajax from '~common/ajax'
import {mapActions, mapMutations} from '~common/util'
import {pushEvents} from '~common/constants'
const ns = 'home'
const state = {
    filter: {
        begin: false,
        show: false,
        matches: null,
        init: null,
        onOk: () => {
        },
        onCancel: () => {
        }
    },
    zq: {
        bjdc: {
            expectList: null,
            cExpect: null,
            curExpect: null,
            allMatches: {}
        },
        jczq: {
            expectList: null,
            curExpect: null,
            allMatches: {}
        },
        all: {
            expectList: null,
            cExpect: null,
            curExpect: null,
            allMatches: {}
        },
        sfc: {
            expectList: null,
            cExpect: null,
            curExpect: null,
            allMatches: {}
        },
        hot: {
            expectList: null,
            cExpect: null,
            curExpect: null,
            allMatches: {}
        },
        mymatch: null,
        state: {
            bjdc: null,
            jczq: null
        }
    },
    lq: {
        jclq: {
            expectList: null,
            cExpect: null,
            curExpect: null,
            allMatches: {}
        }
    }
}
const actionsInfo = mapActions({
    subscribeFootballInfo ({dispatch}, fidList) {
        if (!fidList || fidList.length < 1) {
            return
        }
        const eventList = fidList.map(fid => 'LIVE:FOOTBALL:INFO:' + fid)
        dispatch('subscribe', {stamp: pushEvents.FOOTBALL_INFO, data: eventList})
    },
    async fetchBjdcMatches ({commit}, expect) {
        const bjdc = await ajax.get(`/score/zq/info?vtype=bjdc&expect=${expect === 'cur' ? '' : expect}&_t=${Date.now()}`)
        bjdc.matches.some(match => {
            if (match.status < 4) {
                match._flag = true
                return true
            }
        })
        bjdc._expect = expect
        commit(mTypes.setBjdc, bjdc)
        return bjdc
    },
    async fetchZqAllMatches ({commit}, expect) {
        const zqAll = await ajax.get(`/score/zq/info?vtype=all&expect=${expect === 'cur' ? '' : expect}&_t=${Date.now()}`)
        zqAll.matches.some(match => {
            if (match.status < 4) {
                match._flag = true
                return true
            }
        })
        zqAll._expect = expect
        commit(mTypes.setZqAll, zqAll)
        return zqAll
    },
    async fetchJclqMatches ({commit}, expect) {
        const jclq = await ajax.get(`/score/lq/info?vtype=jclq&expect=${expect === 'cur' ? '' : expect}&_t=${Date.now()}`)

        jclq.matches.some(match => {
            if (match.status < 4) {
                match._flag = true
                return true
            }
        })
        jclq._expect = expect
        commit(mTypes.setJclq, jclq)
        return jclq
    },
    async fetchJczqMatches ({commit}, expect) {
        const jczq = await ajax.get(`/score/zq/info?vtype=jczq&expect=${expect === 'cur' ? '' : expect}&_t=${Date.now()}`)
        jczq.matches.some(match => {
            if (match.status < 4) {
                match._flag = true
                return true
            }
        })
        jczq._expect = expect
        commit(mTypes.setJczq, jczq)
        return jczq
    },
    async fetchSfcMatches ({commit}, expect) {
        const sfc = await ajax.get(`/score/zq/info?vtype=sfc&expect=${expect === 'cur' ? '' : expect}&_t=${Date.now()}`)
        sfc.matches.some(match => {
            if (match.status < 4) {
                match._flag = true
                return true
            }
        })
        sfc._expect = expect
        commit(mTypes.setSfc, sfc)
        return sfc
    },
    async fetchHotMatches ({commit}, expect) {
        const zqHot = await ajax.get(`/score/zq/hot?expect=${expect === 'cur' ? '' : expect}&_t=${Date.now()}`)
        zqHot.matches.some(match => {
            if (match.status < 4) {
                match._flag = true
                return true
            }
        })
        zqHot._expect = expect
        commit(mTypes.setHot, zqHot)
        return zqHot
    },
    triggerFilter ({commit}) {
        commit(mTypes.beginFilter)
    },
    startFilter ({commit}, {matches, inited, onOk, onCancel}) {
        commit(mTypes.initFilter, {matches, inited, onOk, onCancel})
    },
    finishFilter ({commit}) {
        commit(mTypes.endFilter)
    }
}, ns)

const mutationsInfo = mapMutations({
    beginFilter (state) {
        state.filter.begin = !state.filter.begin
    },
    initFilter (state, {matches, inited, onOk, onCancel}) {
        state.filter.matches = matches
        state.filter.show = true
        state.filter.inited = inited
        state.filter.onOk = onOk || (() => {
        })
        state.filter.onCancel = onCancel || (() => {
        })
    },
    endFilter (state) {
        state.filter.matches = null
        state.filter.show = false
        state.filter.begin = false
        state.filter.inited = null
        state.filter.onOk = () => {
        }
        state.filter.onCancel = () => {
        }
    },
    setBjdc (state, data) {
        let {curr_expect, expect_list, matches, _expect} = data
        // eslint-disable-next-line
        state.zq.bjdc.expectList = expect_list
        let allMatches = {...state.zq.bjdc.allMatches}
        // eslint-disable-next-line
        if (_expect === 'cur') {
            // eslint-disable-next-line
            state.zq.bjdc.curExpect = curr_expect
        }
        allMatches[curr_expect] = matches
        state.zq.bjdc.allMatches = allMatches
    },
    setZqAll (state, data) {
        let {curr_expect, expect_list, matches, _expect} = data
        // eslint-disable-next-line
        state.zq.all.expectList = expect_list
        let allMatches = {...state.zq.all.allMatches}
        // eslint-disable-next-line
        if (_expect === 'cur') {
            // eslint-disable-next-line
            state.zq.all.curExpect = curr_expect
        }
        allMatches[curr_expect] = matches
        state.zq.all.allMatches = allMatches
    },
    setJczq (state, data) {
        let {curr_expect, expect_list, matches, _expect} = data
        // eslint-disable-next-line
        state.zq.jczq.expectList = expect_list
        let allMatches = {...state.zq.jczq.allMatches}
        // eslint-disable-next-line
        if (_expect === 'cur') {
            // eslint-disable-next-line
            state.zq.jczq.curExpect = curr_expect
        }
        allMatches[curr_expect] = matches
        state.zq.jczq.allMatches = allMatches
    },
    setSfc (state, data) {
        let {curr_expect, expect_list, matches, _expect} = data
        // eslint-disable-next-line
        state.zq.sfc.expectList = expect_list
        let allMatches = {...state.zq.sfc.allMatches}
        // eslint-disable-next-line
        if (_expect === 'cur') {
            // eslint-disable-next-line
            state.zq.sfc.curExpect = curr_expect
        }
        allMatches[curr_expect] = matches
        state.zq.sfc.allMatches = allMatches
    },
    setHot (state, data) {
        let {curr_expect, expect_list, matches, _expect} = data
        // eslint-disable-next-line
        state.zq.hot.expectList = expect_list
        let allMatches = {...state.zq.hot.allMatches}
        // eslint-disable-next-line
        if (_expect === 'cur') {
            // eslint-disable-next-line
            state.zq.hot.curExpect = curr_expect
        }
        allMatches[curr_expect] = matches
        state.zq.hot.allMatches = allMatches
    },
    setJclq (state, data) {
        let {curr_expect, expect_list, matches, _expect} = data
        // eslint-disable-next-line
        state.lq.jclq.expectList = expect_list
        // eslint-disable-next-line
        state.lq.jclq.curExpect = curr_expect
        state.lq.jclq.allMatches[curr_expect] = matches
        state.lq.jclq.allMatches[_expect] = matches
    }
}, ns)

const actions = actionsInfo.actions
const mutations = mutationsInfo.mutations
export const aTypes = actionsInfo.aTypes
export const mTypes = mutationsInfo.mTypes
export default {state, actions, mutations}
