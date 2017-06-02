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
        tab: 'jczq',
        matches: null,
        expectList: null,
        curExpect: null,
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
    subscribeBasketballInfo ({dispatch}, fidList) {
        if (!fidList || fidList.length < 1) {
            return
        }
        const eventList = fidList.map(fid => 'LIVE:BASKETBALL:INFO:' + fid)
        dispatch('subscribe', {stamp: pushEvents.BASKETBALL_INFO, data: eventList})
    },
    async fetchZqMatches ({commit}, {expect, tab}) {
        let url = ``
        if (tab === 'jczq' || tab === 'bjdc' || tab === 'all' || tab === 'sfc') {
            url = `/score/zq/info?vtype=${tab}&expect=${expect === 'cur' ? '' : expect}&_t=${Date.now()}`
        } else if (tab === 'hot') {
            url = `/score/zq/hot?expect=${expect === 'cur' ? '' : expect}&_t=${Date.now()}`
        }
        const matchesInfo = await ajax.get(url)
        matchesInfo.matches.some(match => {
            if (match.status < 4) {
                match._flag = true
                return true
            }
        })
        matchesInfo._expect = expect
        matchesInfo.tab = tab
        commit(mTypes.setZqMatches, matchesInfo)
        return matchesInfo
    },

    async fetchLqMatches ({commit}, {expect, tab}) {
        let url = ``
        if (tab === 'jclq' || tab === 'all') {
            url = `/score/lq/info?vtype=${tab}&expect=${expect === 'cur' ? '' : expect}&_t=${Date.now()}`
        } else if (tab === 'hot') {
            url = `/score/zq/hot?expect=${expect === 'cur' ? '' : expect}&_t=${Date.now()}`
        }
        const matchesInfo = await ajax.get(url)
        matchesInfo.matches.some(match => {
            if (match.status < 4) {
                match._flag = true
                return true
            }
        })
        matchesInfo._expect = expect
        matchesInfo.tab = tab
        commit(mTypes.setLqMatches, matchesInfo)
        return matchesInfo
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
        state.filter.onOk = onOk || (() => {})
        state.filter.onCancel = onCancel || (() => {})
    },
    endFilter (state) {
        state.filter.matches = null
        state.filter.show = false
        state.filter.begin = false
        state.filter.inited = null
        state.filter.onOk = () => {}
        state.filter.onCancel = () => {}
    },
    setZqMatches (state, data) {
        let {curr_expect, expect_list, matches, tab} = data
        state.zq.tab = tab
        // eslint-disable-next-line
        state.zq.expectList = expect_list
        // eslint-disable-next-line
        state.zq.curExpect = curr_expect
        state.zq.matches = matches
    },
    setLqMatches (state, data) {
        let {curr_expect, expect_list, matches, tab} = data
        state.lq.tab = tab
        // eslint-disable-next-line
        state.lq.expectList = expect_list
        // eslint-disable-next-line
        state.lq.curExpect = curr_expect
        state.lq.matches = matches
    }
}, ns)

const actions = actionsInfo.actions
const mutations = mutationsInfo.mutations
export const aTypes = actionsInfo.aTypes
export const mTypes = mutationsInfo.mTypes
export default {state, actions, mutations}
