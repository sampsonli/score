<template>
<div class="l-full">
    <div class="l-full l-scroll-y">
        <div class="main member" :class="{'top_0': noEmptyFlag}">
            <div v-if="noEmpty(teamMembers)">
                <team-member v-if="noEmpty(items)" v-for="(items, idx) in membersObj.members" :type='getMemberType(idx)' :members='items' :key="idx"></team-member>
            </div>
            <prompt v-else type="no-data" tip0="暂无数据"/>
            <prompt v-else type="loading" tip0="正在加载中..."/>
        </div>
    </div>
</div>
</template>

<script>
import {aTypes} from '~store/team/zq'
import teamMember from '~components/team_members.vue'
import Prompt from '~components/prompt.vue'
export default {
    data () {
        return {
            typeMap: {
                'forward': {
                    en: 'forward',
                    zn: '前锋',
                    order: 1
                },
                'midfield': {
                    en: 'midfiled',
                    zn: '中场',
                    order: 2
                },
                'guard': {
                    en: 'guard',
                    zn: '后卫',
                    order: 3
                },
                'keeper': {
                    en: 'keeper',
                    zn: '门卫',
                    order: 4
                },
                'coach': {
                    en: 'coach',
                    zn: '教练',
                    order: 5
                }
            }
        }
    },
    components: {
        teamMember,
        Prompt
    },
    computed: {
        teamMembers () {
            return this.$store.state.teamZq.teamMembers
        },
        membersObj () {
            let fType = []
            let members = []
            if (!(this.teamMembers)) { return {members: []} }
            fType = Object.keys(this.typeMap)
            fType.forEach((key, idx) => {
                members[idx] = this.teamMembers[key]
            })
            return {fType, members}
        },
        noEmptyFlag () {
            return this.noEmpty(this.teamMembers)
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
        },
        noEmpty (obj) {
            if (obj) { return !!Object.keys(obj).length }
            return false
        }
    },
    mounted () {
        if (!(this.$store.state.teamZq.teamId_zr === this.$route.params.tid && this.$store.state.teamZq.teamMembers)) {
            this.$store.dispatch(aTypes.requestTeamMember, this.$route.params.tid)
        }
    }
}
</script>

<style lang="css">
</style>
