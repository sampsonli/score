import ajax from '~common/ajax'
import {mapActions, mapMutations} from '~common/util'

const ns = 'team/lq'
const state = {
    teamInfo: null,
    teamMatches: null,
    teamMembers: null,
    teamId_sc: null,
    teamId_gl: null,
    teamid_zr: null
}

const actionsInfo = mapActions({
    async requestTeamInfo ({commit}, {tid, seasonId}) {
        const teamInfo = await ajax.get(`/library/lq/teaminfo?teamid=${tid}&seasonid=${seasonId}`)
        commit(mTypes.setTeamInfo, teamInfo)
        commit(mTypes.setTeamId_gl, tid)
        return teamInfo
    },
    async requestTeamMatches ({commit}, {tid, seasonId}) {
        const teamMatches = await ajax.get(`/library/lq/teammatches?teamid=${tid}&seasonid=${seasonId}`)
        commit(mTypes.setTeamMatches, teamMatches)
        commit(mTypes.setTeamId_sc, tid)
        return teamMatches
    },
    async requestTeamMember ({commit}, {tid, seasonId}) {
        const teamMember = await ajax.get(`/library/lq/teammembers?teamid=${tid}&seasonid=${seasonId}`)
        commit(mTypes.setTeamMembers, teamMember)
        commit(mTypes.setTeamId_zr, tid)
        return teamMember
    },
    getTeamInfo ({commit}) {
        return commit(mTypes.getTeamInfo)
    },
    getTeamMatches ({commit}) {
        return commit(mTypes.getTeamMatches)
    },
    getTeamMember ({commit}) {
        return commit(mTypes.getTeamMember)
    }
}, ns)

const mutationsInfo = mapMutations({
    getTeamInfo (state) {
        return state.teamInfo
    },
    setTeamInfo (state, teamInfo) {
        state.teamInfo = teamInfo
    },
    getTeamMatches () {
        return state.teamMatches
    },
    setTeamMatches (state, teamMatches) {
        state.teamMatches = teamMatches
    },
    getTeamMembers () {
        return state.teamMembers
    },
    setTeamMembers (state, teamMembers) {
        state.teamMembers = teamMembers
    },
    getTeamId () {
        return state.teamId
    },
    setTeamId_sc (state, teamId) {
        state.teamId_sc = teamId
    },
    setTeamId_gl (state, teamId) {
        state.teamId_gl = teamId
    },
    setTeamId_zr (state, teamId) {
        state.teamId_zr = teamId
    }
}, ns)
const actions = actionsInfo.actions
const mutations = mutationsInfo.mutations
export const mTypes = mutationsInfo.mTypes
export const aTypes = actionsInfo.aTypes

export default {state, mutations, actions}
