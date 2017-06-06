<template>
<section class="l-full l-flex-column">
    <div class="l-full l-flex-column">
        <header class="header">
            <div class="info"><a class="back-icon" onclick="history.back()">返回</a>
                <div class="info-c">
                    <div class="info-pic"><img :src="teamInfo.teamlogo"></div>
                    <div class="info-itm">
                        <h1>{{teamInfo.teamsxname}}</h1>
                        <p>{{makeCapTip}}</p>
                    </div>
                </div>
            </div>
            <nav class="sk-tab">
                <router-link :class="{'cur': ~$route.path.indexOf('/gl')}" :to="`/team/football/${teamId}/gl`" replace>概览<i class="sktab-arrow"></i></router-link>
                <router-link :class="{'cur': ~$route.path.indexOf('/sc')}" :to="`/team/football/${teamId}/sc`" replace>赛程<i class="sktab-arrow"></i></router-link>
                <router-link :class="{'cur': ~$route.path.indexOf('/zr')}" :to="`/team/football/${teamId}/zr`" replace>阵容<i class="sktab-arrow"></i></router-link>
            </nav>
        </header>
        <div class="l-flex-1 l-relative">
            <router-view></router-view>
        </div>
    </div>
</section>
</template>
<script>
import {
    aTypes
} from '~store/team/zq'
export default {
    computed: {
        teamInfo () {
            return this.$store.state.teamZq.teamInfo
        },
        teamMatches () {
            return this.$store.state.teamZq.teamMatches
        },
        teamMember () {
            return this.$store.state.teamZq.teamMember
        },
        makeCapTip () {
            return this.teamInfo.homefieldcap ? (this.teamInfo.teamsxname + '-容纳' + this.teamInfo.homefieldcap + '人') : ''
        },
        teamId () {
            return this.$route.params.tid
        }
    },
    mounted () {
        this.$store.dispatch(aTypes.requestTeamInfo, this.$route.params.tid)
    }
}
</script>

<style>

</style>
