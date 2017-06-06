<template>
<div class="l-full l-scroll-y">
    <div class="main">
        <div class="main-box">
            <div class="box-tit">
                <h2>{{matchType}}</h2> </div>
            <table width="100%" cellpadding="0" cellspacing="0" class="table">
                <tbody v-if="isCountry">
                    <tr>
                        <th align="left">日期</th>
                        <th width="20%">排名</th>
                        <th width="20%">排名变化</th>
                        <th width="20%">积分</th>
                    </tr>
                    <tr>
                        <td align="left">{{makeSeason(teamInfo.teamrank)}}</td>
                        <td>{{teamInfo.teamrank.rank}}</td>
                        <td>{{teamInfo.teamrank.rankchange}}</td>
                        <td>{{teamInfo.teamrank.point}}</td>
                    </tr>
                </tbody>
                <tbody v-else>
                    <tr>
                        <th align="left">赛季</th>
                        <th width="15%">排名</th>
                        <th width="15%">胜</th>
                        <th width="15%">平</th>
                        <th width="15%">负</th>
                    </tr>
                    <tr v-for="rank in teamInfo.teamrank">
                        <td align="left">{{makeSeason(rank)}}</td>
                        <td>{{rank.standing}}</td>
                        <td>{{rank.win}}</td>
                        <td>{{rank.draw}}</td>
                        <td>{{rank.lost}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="main-box">
            <div class="box-tit">
                <h2> 球队简介 </h2> </div>
            <article class="box-cont introduction">
                <section>
                    <p>
                        {{teamInfo.introduction}}
                    </p>
                </section>
            </article>
        </div>
    </div>
</div>
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
        matchType () {
            return this.isCountry ? '国际积分排名' : '赛事排名'
        },
        isCountry () {
            return !(this.teamInfo.teamrank instanceof Array)
        }
    },
    mounted () {
        this.$store.dispatch(aTypes.requestTeamInfo, this.$route.params.tid)
    },
    methods: {
        makeSeason (rank) {
            return this.isCountry ? rank.year + '.' + rank.month : rank.seasonyear + ' ' + rank.simplegbname
        }
    }
}
</script>

<style lang="css">
</style>
