<template>
<div class="l-full matches">
    <div class="list-view" style="height: 100%;overflow-y: auto;-webkit-overflow-scrolling: touch">
    <ul class="list-view-wrapper" v-if="noEmpty(teamMatches)">
        <li trackby="$index" class="list-view-item" style="height: 165.6px;" v-for="match in teamMatches" v-tap="{methods: goDetail, fid: match.fid}">
            <div class="schedule-itm l-flex-row">
                <div class="schedule-cont">
                    <ul class="schedule-list">
                        <li class="schedule-itm l-flex-row">
                            <div class="when-game"> <em class="game-time">{{match.matchtime.substr(5, 11)}}</em> <em class="game-league">{{match.simplegbname + ' ' + match.stagegbname}}</em> </div>
                            <div class="who-game l-flex-1 l-flex-row">
                                <div class="who-gamer who-gamer-home l-flex-1"> <img :src="match.homelogo"> <em>{{match.homesxname}}</em> </div> <em class="who-win" :class="{'no-start': noStart(match)}" v-html="scoreFmt(match)"></em>
                                <div class="who-gamer who-gamer-guest l-flex-1"> <img :src="match.awaylogo"><em>{{match.awaysxname}}</em> </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </li>
    </ul>
    <prompt v-else type="loading" tip0="正在加载中..." />
    <prompt v-else type="no-data" tip0="暂无数据" />
</div>

</div>
</template>

<script>
import {
    aTypes
} from '~store/team/lq'
import Prompt from '~components/prompt.vue'
export default {
    components: {
        Prompt
    },
    computed: {
        teamMatches () {
            return this.$store.state.teamLq.teamMatches
        },
        teamId () {
            return this.$route.params.tid
        },
        seasonId () {
            return this.$route.params.sid
        }
    },
    mounted () {
        if (!(this.$store.state.teamLq.teamId_sc === this.teamId && this.$store.state.teamLq.seasonId_sc === this.seasonId && this.$store.state.teamLq.teamInfo)) {
            this.$store.dispatch(aTypes.requestTeamMatches, {
                tid: this.teamId,
                sid: this.seasonId
            })
        }
    },
    methods: {
        goDetail ({
            fid
        }) {
            this.$router.push(`/detail/football/${fid}/situation`)
        },
        scoreFmt (match) {
            if (match.homescore && match.awayscore) {
                return `${match.homescore}<i>:</i>${match.awayscore}`
            } else {
                return 'vs'
            }
        },
        noStart (match) {
            return !(match.homescore && match.awayscore)
        },
        noEmpty (obj) {
            if (obj) { return !!Object.keys(obj).length }
            return false
        }
    }
}
</script>

<style lang="css">
</style>
