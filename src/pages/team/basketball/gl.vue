<template>
    <div class="main" :class="{'top_0': noEmptyFlag}">
        <div v-if="noEmpty(teamInfo)">
            <div class="main-box">
                <div class="box-tit">
                    <h2> 球队实力 <em class="score">综合<i>{{teamInfo.finalscore}}</i></em></h2> </div>
                <!-- <div class="score-cont" style="height:4.5rem"><iframe class="chartjs-hidden-iframe" tabindex="-1" style="width: 100%; display: block; border: 0px; height: 0px; margin: 0px; position: absolute; left: 0px; right: 0px; top: 0px; bottom: 0px;"></iframe> <canvas id="canvas" class="rader" height="1677" -->
                <!-- width="3726" style="display: block; width: 1242px; height: 559px;"></canvas> </div> -->
            </div>
            <div class="main-box">
                <div class="box-tit">
                    <h2> 赛事排名</h2> </div>
                <table width="100%" cellpadding="0" cellspacing="0" class="table" v-if="noEmpty(teamInfo.teamrank)">
                    <tbody>
                        <tr>
                            <th align="left">赛季</th>
                            <th width="15%">排名</th>
                            <th width="15%">胜</th>
                            <th width="15%">负</th>
                            <th width="15%">胜率</th>
                        </tr>
                        <tr v-for="rank in teamInfo.teamrank">
                            <td align="left">{{makeSeason(rank)}}</td>
                            <td>{{rank.standing}}</td>
                            <td>{{rank.win}}</td>
                            <td>{{rank.lost}}</td>
                            <td>{{rank.winrate}}%</td>
                        </tr>
                    </tbody>
                </table>
                <div class="member-list member-empty" v-else>暂无数据</div>
            </div>
            <div class="main-box">
                <div class="box-tit">
                    <h2> 球队简介 </h2> </div>
                <article class="box-cont introduction" v-if="noEmpty(teamInfo.introduction)">
                    <section>
                        <p>
                            {{teamInfo.introduction}}
                        </p>
                    </section>
                </article>
                <div class="member-list member-empty" v-else>暂无数据</div>
            </div>
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
        teamInfo () {
            return this.$store.state.teamLq.teamInfo
        },
        matchType () {
            return this.isCountry ? '国际积分排名' : '赛事排名'
        },
        isCountry () {
            return !(this.teamInfo.teamrank instanceof Array)
        },
        noEmptyFlag () {
            return this.noEmpty(this.teamInfo)
        },
        teamId () {
            return this.$route.params.tid
        },
        seasonId () {
            return this.$route.params.sid
        }
    },
    mounted () {
        if (!(this.$store.state.teamLq.teamId_gl === this.teamId && this.$store.state.teamLq.seasonId_gl === this.seasonId && this.$store.state.teamLq.teamInfo)) {
            this.$store.dispatch(aTypes.requestTeamInfo, {tid: this.teamId, sid: this.seasonId})
        }
    },
    methods: {
        makeSeason (rank) {
            return this.isCountry ? rank.year + '.' + rank.month : rank.seasonyear + ' ' + rank.simplegbname
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
