<template>
    <div>
        <div class="zhedie-box " v-if="leagueRank && leagueRank.hometeam && leagueRank.hometeam.home && leagueRank.hometeam.home.matches_count">
            <div class="zj-nav" drunk-init-data="leagueRankTan='all'">
                {{ leagueRank.issame == '1'?leagueRank.title:''}} 联赛积分排名
                <ul class="volumeTab" id="tabBefore">
                    <li :class="{'cur':leagueRankTan==='all'}" drunk-on="click:leagueRankTan='all'">全部</li>
                    <li :class="{'cur':leagueRankTan==='sab'}" drunk-on="click:leagueRankTan='sab'">主客</li>
                </ul>
            </div>
            <div class="zhedie show" v-if="leagueRankTan==='all'">
                <table width="100%" cellpadding="0" cellspacing="0" class="fx-table fb">
                    <tbody>
                    <tr>
                        <th colspan="2">排名</th>
                        <th width="18%">赛事</th>
                        <th width="10%">赛</th>
                        <th width="15%">胜/平/负</th>
                        <th width="12%">进/失</th>
                        <th width="12%">积分</th>
                    </tr>
                    <tr>
                        <td>{{leagueRank.hometeam.all.standing}}</td>
                        <td>
                            <div class="rank-team"><img :src="match.homelogo">{{match.homesxname}}</div>
                        </td>
                        <td>{{leagueRank.hometeam.leaguename}}</td>
                        <td>{{leagueRank.hometeam.all.matches_count}}</td>
                        <td>{{leagueRank.hometeam.all.win}}/{{leagueRank.hometeam.all.draw}}/{{leagueRank.hometeam.all.lost}}</td>
                        <td>{{leagueRank.hometeam.all.innum}}/{{leagueRank.hometeam.all.lostnum}}</td>
                        <td>
                            <p class="textcenter">{{leagueRank.hometeam.all.score}}</p>
                        </td>
                    </tr>
                    <tr>
                        <td>{{leagueRank.awayteam.all.standing}}</td>
                        <td>
                            <div class="rank-team"><img :src="match.awaylogo">{{match.awaysxname}}</div>
                        </td>
                        <td>{{leagueRank.awayteam.leaguename}}</td>
                        <td>{{leagueRank.awayteam.all.matches_count}}</td>
                        <td>{{leagueRank.awayteam.all.win}}/{{leagueRank.awayteam.all.draw}}/{{leagueRank.awayteam.all.lost}}</td>
                        <td>{{leagueRank.awayteam.all.innum}}/{{leagueRank.awayteam.all.lostnum}}</td>
                        <td>
                            <p class="textcenter">{{leagueRank.awayteam.all.score}}</p>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div class="zhedie show" v-if="leagueRankTan==='sab'">
                <table width="100%" cellpadding="0" cellspacing="0" class="fx-table fb">
                    <tbody>
                    <tr>
                        <th colspan="2">排名</th>

                        <th width="18%">赛事</th>
                        <th width="10%">赛</th>
                        <th width="15%">胜/平/负</th>
                        <th width="12%">进/失</th>
                        <th width="12%">积分</th>
                    </tr>
                    <tr>
                        <td>{{leagueRank.hometeam.home.standing}}</td>
                        <td>
                            <div class="rank-team"><img drunk-lazy-load="match.homelogo">{{match.homesxname}}</div>
                        </td>
                        <td>{{leagueRank.hometeam.leaguename}}</td>
                        <td>{{leagueRank.hometeam.home.matches_count}}</td>
                        <td>{{leagueRank.hometeam.home.win}}/{{leagueRank.hometeam.home.draw}}/{{leagueRank.hometeam.home.lost}}</td>
                        <td>{{leagueRank.hometeam.home.innum}}/{{leagueRank.hometeam.home.lostnum}}</td>
                        <td>
                            <p class="textcenter">{{leagueRank.hometeam.home.score}}</p>
                        </td>
                    </tr>
                    <tr>
                        <td>{{leagueRank.awayteam.away.standing}}</td>
                        <td>
                            <div class="rank-team"><img drunk-lazy-load="match.awaylogo">{{match.awaysxname}}</div>
                        </td>
                        <td>{{leagueRank.awayteam.leaguename}}</td>
                        <td>{{leagueRank.awayteam.away.matches_count}}</td>
                        <td>{{leagueRank.awayteam.away.win}}/{{leagueRank.awayteam.away.draw}}/{{leagueRank.awayteam.away.lost}}</td>
                        <td>{{leagueRank.awayteam.away.innum}}/{{leagueRank.awayteam.away.lostnum}}</td>
                        <td>
                            <p class="textcenter">{{leagueRank.awayteam.away.score}}</p>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="inte-look zhedie" v-if="leagueRank.issame === '1'">完整积分榜&gt;</div>
        <!--<div class="inte-look zhedie" v-if="leagueRank.issame == '1'" onclick="location.href='match_center/index.html#/footballleague/integral/{{match.seasonid}}'">完整积分榜&gt;</div>-->
    </div>
</template>

<script>
    import {aTypes} from '~store/zqdetail'
    export default {
        async asyncData ({store, route: {params}}) {
            let baseInfo = store.state.zqdetail.baseInfo
            if (!baseInfo || store.state.zqdetail.baseInfo.fid !== params.fid) {
                baseInfo = await store.dispatch(aTypes.getBaseInfo, params.fid)
            }
            const {stageid, matchtime, homeid, awayid, league_id, matchgroup} = baseInfo
            const matchdate = matchtime.substr(0, 10)
            await store.dispatch(aTypes.getAnalysisZj, {homeid, awayid, stid: stageid, matchdate, matchgroup, fid: params.fid, leagueid: league_id, limit: 10, hoa: 0})
        },
        data () {
           return {
               leagueRankTan: 'all'
           }
        },
        computed: {
            match () {
                return this.$store.state.zqdetail.baseInfo
            },
            zj () {
                return this.$store.state.zqdetail.analysis.zj
            },
            leagueRank () {
                return this.zj.leaguerank
            },

        }
    }

</script>
