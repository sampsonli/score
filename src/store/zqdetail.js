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
    europe: null,
    predict: {
        europe: null,
        asian: null,
        daxiaoqiu: null,
        score: null,
        half: null
    },
    outer: {
        component: null,
        params: null
    }
}
const actionsInfo = mapActions({
    async getBaseInfo ({commit}, fid) {
        const baseInfo = await ajax.get(`/score/zq/baseinfo?fid=${fid}`)
        commit(mTypes.setBaseInfo, baseInfo)
        return baseInfo
    },
    /**
     * @deprecated
     * @param commit
     * @param fid
     * @returns {Promise.<*>}
     */
    async getEurope ({commit}, fid) {
        const europe = await ajax.get(`/score/zq/europe?fid=${fid}`)
        commit(mTypes.setEurope, europe)
        return europe
    },
    /**
     * @deprecated
     * @param commit
     * @param matchgroup
     * @param matchdate
     * @param stid
     * @returns {Promise.<*>}
     */
    async getCupRank ({commit}, {matchgroup, matchdate, stid}) {
        const cuprank = await ajax.get(`/score/zq/cuprank?matchgroup=${matchgroup}&matchdate=${matchdate}&stid=${stid}`)
        commit(mTypes.setCuprank, cuprank)
        return cuprank
    },
    /**
     * @deprecated
     * @param commit
     * @param homeid
     * @param awayid
     * @param matchdate
     * @param leagueid
     * @param stid
     * @param limit
     * @param hoa
     * @returns {Promise.<*>}
     */
    async getRecentRecord ({commit}, {homeid, awayid, matchdate, leagueid, stid, limit, hoa}) {
        const recentRecord = await ajax.get(`/score/zq/recent_record?homeid=${homeid}&awayid=${awayid}&matchdate=${matchdate}&leagueid=${leagueid}&stid=${stid}&limit=${limit}&hoa=${hoa}`)
        commit(mTypes.setRecentRecord, recentRecord)
        return recentRecord
    },
    /**
     * @deprecated
     * @param commit
     * @param fid
     * @returns {Promise.<*>}
     */
    async getMacauNews ({commit}, {fid}) {
        const macauNews = await ajax.get(`/score/zq/macau_news?fid=${fid}`)
        commit(mTypes.setMacauNews, macauNews)
        return macauNews
    },
    /**
     * @deprecated
     * @param commit
     * @param homeid
     * @param awayid
     * @returns {Promise.<*>}
     */
    async getFifarank ({commit}, {homeid, awayid}) {
        const fifarank = await ajax.get(`/score/zq/fifarank?homeid=${homeid}&awayid=${awayid}`)
        commit(mTypes.setFifarank, fifarank)
        return fifarank
    },
    /**
     * @deprecated
     * @param commit
     * @param homeid
     * @param awayid
     * @param matchdate
     * @param fid
     * @returns {Promise.<*>}
     */
    async getFutureMatch ({commit}, {homeid, awayid, matchdate, fid}) {
        const futureMatch = await ajax.get(`/score/zq/future_match?homeid=${homeid}&awayid=${awayid}&matchdate=${matchdate}&fid=${fid}`)
        commit(mTypes.setFutureMatch, futureMatch)
        return futureMatch
    },
    /**
     * @deprecated
     * @param commit
     * @param homeid
     * @param awayid
     * @param matchdate
     * @param stid
     * @param fid
     * @returns {Promise.<*>}
     */
    async getLeaguerank ({commit}, {homeid, awayid, matchdate, stid, fid}) {
        const leaguerank = await ajax.get(`/score/zq/leaguerank?homeid=${homeid}&awayid=${awayid}&matchdate=${matchdate}&stid=${stid}&fid=${fid}`)
        commit(mTypes.setLeaguerank, leaguerank)
        return leaguerank
    },
    /**
     * @deprecated
     * @param commit
     * @param homeid
     * @param awayid
     * @param matchdate
     * @param leagueid
     * @param limit
     * @param hoa
     * @returns {Promise.<*>}
     */
    async getJzData ({commit}, {homeid, awayid, matchdate, leagueid, limit, hoa}) {
        const jzdata = await ajax.get(`/score/zq/jz_data?homeid=${homeid}&awayid=${awayid}&matchdate=${matchdate}&leagueid=${leagueid}&limit=${limit}&hoa=${hoa}`)
        commit(mTypes.setJzdata, jzdata)
        return jzdata
    },
    async getPredict ({commit}, fid) {
        let result = await Promise.all([
            ajax.get(`/score/zq/predict_europe?fid=${fid}`),
            ajax.get(`/score/zq/predict_asian?fid=${fid}`),
            ajax.get(`/score/zq/predict_daxiaoqiu?fid=${fid}`),
            ajax.get(`/score/zq/predict_score?fid=${fid}`),
            ajax.get(`/score/zq/predict_half?fid=${fid}`)
        ])
        const [europe, asian, daxiaoqiu, score, half] = result
        commit(mTypes.setPredict, {europe, asian, daxiaoqiu, score, half})
    }

}, ns)

const mutationsInfo = mapMutations({
    setDialog (state, component) {
        state.outer.component = component
    },
    setBaseInfo (state, baseInfo) {
        state.baseInfo = baseInfo
    },
    setPredict (state, {europe, asian, daxiaoqiu, score, half}) {
        state.predict.europe = europe
        state.predict.asian = asian
        state.predict.daxiaoqiu = daxiaoqiu
        state.predict.score = score
        state.predict.half = half
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
