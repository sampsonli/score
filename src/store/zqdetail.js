/**
 * Created by sampson on 2017/5/27.
 */
/**
 * Created by sampson on 2017/5/10.
 */
import axios from '~common/axios'
import {mapActions, mapMutations} from '~common/util'
const ns = 'zqdetail'
const state = {
    baseInfo: null,
    europe: null
}
const actionsInfo = mapActions({
    getBaseInfo ({commit}, fid) {
        return axios.get(`/score/zq/baseinfo?fid=${fid}`).then((resp) => {
            if (resp.status === 200) {
                if (resp.data.status === '100') {
                    return resp.data.data
                } else {
                    throw new Error(resp.data.message)
                }
            } else { // http 请求错误
                throw new Error(resp.message)
            }
        }).then((data) => {
            commit(mTypes.setBaseInfo, data)
            return data
        })
    },
    getEurope ({commit}, fid) {
        return axios.get(`/score/zq/europe?fid=${fid}`).then((resp) => {
            if (resp.status === 200) {
                if (resp.data.status === '100') {
                    return resp.data.data
                } else {
                    throw new Error(resp.data.message)
                }
            } else { // http 请求错误
                throw new Error(resp.message)
            }
        }).then((data) => {
            commit(mTypes.setEurope, data)
            return data
        })
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
export default { state, actions, mutations }
