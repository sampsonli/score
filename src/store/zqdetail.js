/**
 * Created by sampson on 2017/5/27.
 */
/**
 * Created by sampson on 2017/5/10.
 */
import ajax from '~common/ajax'
import {mapActions, mapMutations} from '~common/util'
const ns = 'zqdetail'
const state = {
    analysis: {
        cuprank: null,
        jzdata: null,
        fifarank: null,
        futureMatch: null,
        macauNews: null,
        recentRecord: null,
        leaguerank: null
    },
    baseInfo: null,
    europe: null
}
const actionsInfo = mapActions({
    async getBaseInfo ({commit}, fid) {
        const baseInfo = await ajax.get(`/score/zq/baseinfo?fid=${fid}`)
        commit(mTypes.setBaseInfo, baseInfo)
        return baseInfo
    },
    async getEurope ({commit}, fid) {
        const europe = await ajax.get(`/score/zq/europe?fid=${fid}`)
        commit(mTypes.setEurope, europe)
        return europe
    },
    async getCupRank ({commit}, {matchgroup, matchdate, stid}) {
        const cuprank = await ajax.get(`/score/zq/cuprank?matchgroup=${matchgroup}&matchdate=${matchdate}&stid=${stid}`)
        commit(mTypes.setCuprank, cuprank)
        return cuprank
    },
    async getRecentRecord ({commit}, {matchgroup, matchdate, stid}) {
        const recentRecord = await ajax.get(`/score/zq/recent_record?matchgroup=${matchgroup}&matchdate=${matchdate}&stid=${stid}`)
        commit(mTypes.setRecentRecord, recentRecord)
        return recentRecord
    },
    async getMacauNews ({commit}, {fid}) {
        const macauNews = await ajax.get(`/score/zq/macau_news?fid=${fid}`)
        commit(mTypes.setMacauNews, macauNews)
        return macauNews
    },
    async getFifarank ({commit}, {homeid, awayid}) {
        const fifarank = await ajax.get(`/score/zq/fifarank?homeid=${homeid}&awayid=${awayid}`)
        commit(mTypes.setFifarank, fifarank)
        return fifarank
    },
    async getFutureMatch ({commit}, {homeid, awayid, matchdate, leagueid, limit, hoa}) {
        const futureMatch = await ajax.get(`/score/zq/future_match?homeid=${homeid}&awayid=${awayid}&matchdate=${matchdate}&leagueid=${leagueid}&limit=${limit}&hoa=${hoa}`)
        commit(mTypes.setFutureMatch, futureMatch)
        return futureMatch
    },
    async getLeaguerank ({commit}, {homeid, awayid, matchdate, stid, fid}) {
        const leaguerank = await ajax.get(`/score/zq/leaguerank?homeid=${homeid}&awayid=${awayid}&matchdate=${matchdate}&stid=${stid}&fid=${fid}`)
        commit(mTypes.setLeaguerank, leaguerank)
        return leaguerank
    },
    async getJzData ({commit}, {homeid, awayid, matchdate, leagueid, limit, hoa}) {
        const jzdata = await ajax.get(`/score/zq/jz_data?homeid=${homeid}&awayid=${awayid}&matchdate=${matchdate}&leagueid=${leagueid}&limit=${limit}&hoa=${hoa}`)
        commit(mTypes.setJzdata, jzdata)
        return jzdata
    }

}, ns)

const mutationsInfo = mapMutations({
    setBaseInfo (state, baseInfo) {
        state.baseInfo = baseInfo
    },
    setEurope (state, europe) {
        state.europe = europe
    },
    setMacauNews (state, macauNews) {
        state.analysis.macauNews = macauNews
    },
    setRecentRecord (state, recentRecord) {
        state.analysis.recentRecord = recentRecord
    },
    setCuprank (state, cuprank) {
        state.analysis.cuprank = cuprank
    },
    setLeaguerank (state, leaguerank) {
        state.analysis.leaguerank = leaguerank
    },
    setFifarank (state, fifarank) {
        state.analysis.fifarank = fifarank
    },
    setFutureMatch (state, futureMatch) {
        state.analysis.futureMatch = futureMatch
    },
    setJzdata (state, jzdata) {
        state.analysis.jzdata = jzdata
    }
}, ns)

const actions = actionsInfo.actions
const mutations = mutationsInfo.mutations
export const aTypes = actionsInfo.aTypes
export const mTypes = mutationsInfo.mTypes
export default {state, actions, mutations}
