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
import vueTap from 'v-tap'
import vue from 'vue'
vue.use(vueTap)
export default {
    // async asyncData ({store, route: {params}}) {
    //     if (store.state.teamZq.teamInfo && store.state.teamZq.teamInfo.teamId === params.fid) return
    //     await store.dispatch(aTypes.requestTeamInfo, params.fid)
    // },
    components: {
        vueTap
    },
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
            if (this.teamInfo) {
                return this.teamInfo.homefieldcap ? (this.teamInfo.teamhomefield + '-容纳' + this.teamInfo.homefieldcap + '人') : ''
            }
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
    .top_0 {
        margin-top: 0;
    }

    .back-icon:before {
        margin-top: auto;
        top: auto;
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
