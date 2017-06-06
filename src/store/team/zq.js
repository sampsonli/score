import ajax from '~common/ajax'
import {mapActions, mapMutations} from '~common/util'

const ns = 'team'
const state = {
    teamInfo: null,
    teamMatches: null,
    teamMembers: null
}

const actionsInfo = mapActions({
    async requestTeamInfo ({commit}, tid) {
        const teamInfo = await ajax.get(`/library/zq/teaminfo?teamid=${tid}`)
        commit(mTypes.setTeamInfo, teamInfo)
        return teamInfo
    },
    async requestTeamMatches ({commit}, tid) {
        const teamMatches = await ajax.get(`/library/zq/teammatches?teamid=${tid}`)
        commit(mTypes.setTeamMatches, teamMatches)
        return teamMatches
    },
    async requestTeamMember ({commit}, tid) {
        console.log('this is member2')
        const teamMember = await ajax.get(`/library/zq/teammembers?teamid=${tid}`)
        commit(mTypes.setTeamMembers, teamMember)
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
        console.log('this is member3')
        state.teamMembers = teamMembers
    }
}, ns)
const actions = actionsInfo.actions
const mutations = mutationsInfo.mutations
export const mTypes = mutationsInfo.mTypes
export const aTypes = actionsInfo.aTypes

export default {state, mutations, actions}
