import ajax from '~common/ajax'
import {mapActions, mapMutations} from '~common/util'

const ns = 'team/lq'
const state = {
    teamInfo: null,
    teamMatches: null,
    teamMembers: null,
    teamId_sc: null,
    teamId_gl: null,
    teamid_zr: null,
    seasonId_sc: null,
    seasonId_gl: null,
    seasonId_zr: null
}

const actionsInfo = mapActions({
    async requestTeamInfo ({commit}, {tid, sid}) {
        const teamInfo = await ajax.get(`/library/lq/teaminfo?teamid=${tid}&seasonid=${sid}`)
        commit(mTypes.setTeamInfo, teamInfo)
        commit(mTypes.setTeamId_gl, tid)
        commit(mTypes.setSeasonId_gl, sid)
        return teamInfo
    },
    async requestTeamMatches ({commit}, {tid, sid}) {
        const teamMatches = await ajax.get(`/library/lq/teammatches?teamid=${tid}&seasonid=${sid}`)
        commit(mTypes.setTeamMatches, teamMatches)
        commit(mTypes.setTeamId_sc, tid)
        commit(mTypes.setSeasonId_sc, sid)
        return teamMatches
    },
    async requestTeamMember ({commit}, {tid, sid}) {
        const teamMember = await ajax.get(`/library/lq/teammembers?teamid=${tid}&seasonid=${sid}`)
        commit(mTypes.setTeamMembers, teamMember)
        commit(mTypes.setTeamId_zr, tid)
        commit(mTypes.setSeasonId_zr, sid)
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
    setTeamId_sc (state, teamId) {
        state.teamId_sc = teamId
    },
    setTeamId_gl (state, teamId) {
        state.teamId_gl = teamId
    },
    setSeasonId_zr (state, seasonId) {
        state.seasonId_zr = seasonId
    },
    setSeasonId_sc (state, seasonId) {
        state.seasonId_sc = seasonId
    },
    setSeasonId_gl (state, seasonId) {
        state.seasonId_gl = seasonId
    }
}, ns)
const actions = actionsInfo.actions
const mutations = mutationsInfo.mutations
export const mTypes = mutationsInfo.mTypes
export const aTypes = actionsInfo.aTypes

export default {state, mutations, actions}
