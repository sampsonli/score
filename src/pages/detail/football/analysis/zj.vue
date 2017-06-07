<template>
    <div>
        <div class="zhedie-box "
             v-if="leagueRank && leagueRank.hometeam && leagueRank.hometeam.home && leagueRank.hometeam.home.matches_count">
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
                        <td>
                            {{leagueRank.hometeam.all.win}}/{{leagueRank.hometeam.all.draw}}/{{leagueRank.hometeam.all.lost}}
                        </td>
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
                        <td>
                            {{leagueRank.awayteam.all.win}}/{{leagueRank.awayteam.all.draw}}/{{leagueRank.awayteam.all.lost}}
                        </td>
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
                        <td>
                            {{leagueRank.hometeam.home.win}}/{{leagueRank.hometeam.home.draw}}/{{leagueRank.hometeam.home.lost}}
                        </td>
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
                        <td>
                            {{leagueRank.awayteam.away.win}}/{{leagueRank.awayteam.away.draw}}/{{leagueRank.awayteam.away.lost}}
                        </td>
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

        <div class="zhedie-box zhedie-box-wl" v-if="cupRank && cupRank.length && match.stagemode==='2'">
            <div class="zj-nav">
                {{match.simpleleague}}{{match.stagename}}-{{match.matchgroup}}组-赛前积分排名
            </div>

            <div class="zhedie show">
                <table width="100%" cellpadding="0" cellspacing="0" class="fx-table fb">
                    <tbody>
                    <tr>
                        <th colspan="2"></th>
                        <th width="12%">赛</th>
                        <th width="15%">胜/平/负</th>
                        <th width="15%">进/失</th>
                        <th width="12%">净</th>
                        <th width="10%">积分</th>
                    </tr>
                    <tr :class="{'vs-ing': info.teamid == match.homeid || info.teamid == match.awayid}"
                        v-for="info in cupRank">
                        <td>{{info.standing}}</td>
                        <td>
                            <div class="rank-team"><img :src="info.teamlogo">{{info.sxname}}</div>
                        </td>
                        <td>{{info.matches_count}}</td>
                        <td>{{info.win_count}}/{{info.draw_count}}/{{info.lost_count}}</td>
                        <td>{{info.innum}}/{{info.lostnum}}</td>
                        <td>{{info.diff}}</td>
                        <td><p class="textcenter">{{info.score}}</p></td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div class="inte-look zhedie">完整积分榜&gt;</div>
            <!--<div class="inte-look zhedie"  onclick="location.href='match_center/index.html#/footballleague/integral/{{match.seasonid}}'">完整积分榜&gt;</div>-->

        </div>

        <div class="zhedie-box zhedie-box-wl" v-if="FIFARank && FIFARank.home && FIFARank.away">
            <div class="zj-nav">
                国际足联排名
            </div>
            <div class="zhedie show">
                <table width="100%" cellpadding="0" cellspacing="0" class="fx-table">
                    <tbody>
                    <tr>
                        <th colspan="2"></th>

                        <th width="14%">排名变化</th>
                        <th width="14%">积分</th>
                        <th width="14%">积分变化</th>
                        <th width="18%">日期</th>
                    </tr>
                    <tr>
                        <td>{{FIFARank.home[0].rank}}</td>
                        <td>
                            <div class="rank-team"><img :src="match.homelogo">{{match.homesxname}}</div>
                        </td>
                        <td>{{FIFARank.home[0].rankchange > 0 ? '+' : ''}}{{FIFARank.home[0].rankchange}}</td>
                        <td>{{FIFARank.home[0].point}}</td>
                        <td>{{FIFARank.home[0].pointchange > 0 ? '+' : ''}}{{FIFARank.home[0].pointchange}}</td>
                        <td>{{FIFARank.home[0].date}}</td>
                    </tr>
                    <tr>
                        <td>{{FIFARank.away[0].rank}}</td>
                        <td>
                            <div class="rank-team"><img :src="match.awaylogo">{{match.awaysxname}}</div>
                        </td>
                        <td>{{FIFARank.away[0].rankchange > 0 ? '+' : ''}}{{FIFARank.away[0].rankchange}}</td>
                        <td>{{FIFARank.away[0].point}}</td>
                        <td>{{FIFARank.away[0].pointchange > 0 ? '+' : ''}}{{FIFARank.away[0].pointchange}}</td>
                        <td>{{FIFARank.away[0].date}}</td>
                    </tr>
                    </tbody>
                </table>
            </div>

        </div>


        <!--<div class="zj-nav">
            <span class="saixuan"
                    onclick="_hmt.push(['_trackEvent','zq_detail','click','analysis_zj_ls'])"
                      drunk-on="click: filterVisible = true, currFilterOptions = fightingFilterOptions, $event.stopPropagation()">筛选</span>
            历史交战
        </div>


        <div class="zhedie" drunk-if="!fightingInfoHidden && !fightingInfoNoData">
            <div class="zd-detail">
                <div class="gaik clear">
                    <span class="f30 color3 fl">近{{fightingInfo.all_matches.all_count|default:0}}场交战&nbsp;&nbsp;&nbsp;{{match.homesxname}}</span>

                    <span class="f30 fl">
                <i class="win tcell">{{fightingInfo.all_matches.win_count|default:'0'}}胜</i>
                <i class="tie tcell">{{fightingInfo.all_matches.draw_count|default:'0'}}平</i>
                <i class="lose tcell">{{fightingInfo.all_matches.lost_count|default:'0'}}负</i>
            </span>
                    <span class="f30 color3 fl">
                胜率{{fightingInfo.all_matches.win_rate|default:'0'}}%
            </span>
                </div>

                <div class="total-tips">
                    场均净胜{{fightingInfo.all_matches.avar_gd|default:0}}球，场均总进{{fightingInfo.all_matches.avar_all|default:0}}球，
                    大球{{fightingInfo.all_matches.big_ball|default:0}}次，小球{{fightingInfo.all_matches.small_ball|default:0}}次
                </div>
            </div>

            <table width="100%" cellpadding="0" cellspacing="0" class="fx-table">
                <colgroup>
                    <col width="20%">
                    <col width="22%">
                    <col width="18%">
                    <col width="22%">
                    <col>
                </colgroup>
                <tbody>
                <tr>
                    <th>赛事</th>
                    <th>
                        <div class="textright">主队</div>
                    </th>
                    <th>比分</th>
                    <th>
                        <div class="textleft">客队</div>
                    </th>
                    <th>{{ {'result1': '赛果', 'result2': '盘路', 'result3': '大小'}[fightingInfoResultType] }}</th>
                </tr>
                <tr drunk-repeat="info in fightingInfo.matches">
                    <td>
                        <span class="color9">{{info.simplegbname}}</span><span class="colorc f20">{{info.matchdate.slice(2)}}</span>
                    </td>
                    <td>
                        <div class="textright"
                             drunk-class="{win: info.homeid == match.homeid && info.result1 == '胜', lose: info.homeid == match.homeid && info.result1 == '负', tie: info.homeid == match.homeid && info.result1 == '平'}">
                            <span class="color9" drunk-if="info.homestanding && info.homestanding != 0">[{{info.homestanding}}]</span>{{info.homesxname|default:''|truncate:4,''}}
                        </div>
                    </td>
                    <td>{{info.homescore}}:{{info.awayscore}}<span class="color9">({{info.homehalfscore}}:{{info.awayhalfscore}})</span>
                    </td>
                    <td>
                        <div class="textleft"
                             drunk-class="{win: info.awayid== match.homeid && info.result1 == '胜', lose: info.awayid== match.homeid && info.result1 == '负', tie: info.awayid== match.homeid && info.result1 == '平'}">
                            {{info.awaysxname|default:''|truncate:4,''}}<span class="color9"
                                                                              drunk-if="info.awaystanding && info.awaystanding != 0">[{{info.awaystanding}}]</span>
                        </div>
                    </td>
                    <td onclick="_hmt.push(['_trackEvent','zq_detail','click','analysis_zj_ls2'])"
                        drunk-on="click: toggleFightingInfoResultType()">
                        <div drunk-if="fightingInfoResultType == 'result1'"
                             drunk-class="{'red-k': info.result1 == '胜', 'blue-k': info.result1 == '负', 'green-k': info.result1 == '平', 'gray-k': !info.result1}">
                            {{info.result1||'&#45;&#45;'}}
                        </div>
                        <div drunk-if="fightingInfoResultType == 'result2'"
                             drunk-class="{'red-k': info.result2 == '赢', 'blue-k': info.result2 == '输', 'green-k': info.result2 == '走', 'gray-k': !info.result2}">
                            {{(info.handicapline > 0 ? '+' : '') + info.handicapline}}&nbsp;{{info.result2||'&#45;&#45;'}}
                        </div>
                        <div drunk-if="fightingInfoResultType == 'result3'"
                             drunk-class="{'red-k': info.result3 == '大', 'blue-k': info.result3 == '小', 'gray-k': !info.result3}">
                            {{info.result3||'&#45;&#45;'}}
                        </div>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>-->

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
            await store.dispatch(aTypes.getAnalysisZj, {
                homeid,
                awayid,
                stid: stageid,
                matchdate,
                matchgroup,
                fid: params.fid,
                leagueid: league_id,
                limit: 10,
                hoa: 0
            })
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
            cupRank () {
                return this.zj.cuprank
            },
            FIFARank () {
                return this.zj.fifarank
            },
            fightingInfo () {
                return this.zj.jzdata
            }

        }
    }

</script>
