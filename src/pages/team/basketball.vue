<template>
<section class="l-full l-flex-column">
    <div class="l-full l-flex-column">
        <header class="header">
            <div class="info"><a class="back-icon" onclick="history.back()">返回</a>
                <div class="info-c">
                    <div class="info-pic"><img :src="teamInfo && teamInfo.teamlogo"></div>
                    <div class="info-itm">
                        <h1>{{teamInfo && teamInfo.teamsxname}}</h1>
                        <p>{{makeCapTip}}</p>
                    </div>
                </div>
            </div>
            <nav class="sk-tab">
                <router-link :class="{'cur': ~$route.path.indexOf('/gl')}" :to="`/team/basketball/${teamId}/${seasonId}/gl`" replace>概览<i class="sktab-arrow"></i></router-link>
                <router-link :class="{'cur': ~$route.path.indexOf('/sc')}" :to="`/team/basketball/${teamId}/${seasonId}/sc`" replace>赛程<i class="sktab-arrow"></i></router-link>
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
} from '~store/team/lq'
import vueTap from 'v-tap'
import vue from 'vue'
vue.use(vueTap)
export default {
    // async asyncData ({store, route: {params: {tid, sid}}}) {
    //     if (store.state.teamLq.teamInfo && store.state.teamLq.teamInfo.teamId === params.tid && ) return
    //     await store.dispatch(aTypes.requestTeamInfo, params.id)
    // },
    components: {
        vueTap
    },
    computed: {
        teamInfo () {
            return this.$store.state.teamLq.teamInfo
        },
        teamMatches () {
            return this.$store.state.teamLq.teamMatches
        },
        teamMember () {
            return this.$store.state.teamLq.teamMembers
        },
        makeCapTip () {
            if (this.teamInfo) {
                return this.teamInfo.homefieldcap ? (this.teamInfo.teamhomefield + '-容纳' + this.teamInfo.homefieldcap + '人') : ''
            }
        },
        teamId () {
            return this.$route.params.tid
        },
        seasonId () {
            return this.$route.params.sid
        }
    },
    mounted () {
        this.$store.dispatch(aTypes.requestTeamInfo, {tid: this.teamId, sid: this.seasonId})
    }
}
</script>

<style>
    .top_0 {
        margin-top: 0;
    }

    .back-icon:before {
        margin-top: auto;
    }
    .sktab-arrow {
        border: .133333rem solid;
        border-color: rgba(255,255,255,0) rgba(255,255,255,0) rgba(230,230,230,1) rgba(255,255,255,0);
        margin-left: -.133333rem;
    }
    .matches .list-view-wrapper {
        background: #fff;
        margin-top: .266667rem;
    }
</style>
