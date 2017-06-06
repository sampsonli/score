<template>
<div class="l-full">
    <div class="l-full l-scroll-y">
        <div class="main member">
            <team-member v-for="(members, idx) in membersObj.members" :type='getMemberType(idx)' :members='members'></team-member>
        </div>
    </div>
</div>
</template>

<script>
import {aTypes} from '~store/team/zq'
import teamMember from '~components/team_members.vue'
export default {
    component: {
        teamMember
    },
    computed: {
        teamMember () {
            return this.$store.state.teamZq.teamMembers
        },
        membersObj () {
            let fType = []
            let members = []
            Object.keys(this.teamMember).forEach((key, idx) => {
                fType[idx] = key
                members[idx] = this.teamMember[key]
            })
            return {fType, members}
        }
    },
    methods: {
        getMemberType (idx) {
            switch (this.membersObj.fType[idx]) {
            case 'forward': return '前锋'
            case 'keeper': return '门卫'
            case 'midfield': return '中场'
            case 'guard': return '后卫'
            case 'coach': return '教练'
            }
        }
    },
    mounted () {
        this.$store.dispatch(aTypes.requestTeamMember, this.$route.params.tid)
    }
}
</script>

<style lang="css">
</style>
