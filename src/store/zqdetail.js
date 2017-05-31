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
    }
}, ns)

const mutationsInfo = mapMutations({
    setBaseInfo (state, baseInfo) {
        state.baseInfo = baseInfo
    },
    setEurope (state, europe) {
        state.europe = europe
    }
}, ns)

const actions = actionsInfo.actions
const mutations = mutationsInfo.mutations
export const aTypes = actionsInfo.aTypes
export const mTypes = mutationsInfo.mTypes
export default {state, actions, mutations}
