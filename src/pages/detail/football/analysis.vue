<template>
    <div>
        <div class="sk-detail-tap-box">
            <ul class="sk-detail-tap three">
                <li onclick="_hmt.push(['_trackEvent','zq_detail','click','analysis_zj'])" class="cur">战绩
                    </li>
                <li onclick="_hmt.push(['_trackEvent','zq_detail','click','analysis_js'])">技术
                    </li>

                <li onclick="_hmt.push(['_trackEvent','zq_detail','click','analysis_pm'])">盘面
                    </li>
                <li onclick="_hmt.push(['_trackEvent','zq_detail','click','analysis_zr'])">阵容
                    </li>
            </ul>
        </div>

        <!--<if: subtab === 'technology' />-->
        <!--<if: subtab === 'disk' />-->
        <!--<if: subtab === 'record' />--><div>
        <div class="zhedie-box"><!--<if: leagueRank && leagueRank.hometeam && leagueRank.hometeam.home.matches_count != null />--><div class="zhedie-box ">
            <div class="zj-nav">
                日职乙第15轮 联赛积分排名
               <ul class="volumeTab" id="tabBefore">
                <li class="cur">全部</li>
                <li>主客</li>
            </ul>
            </div>
            <!--<if: leagueRankTan=='all' />--><div class="zhedie show">
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
                    <td>19</td>
                    <td>
                        <div class="rank-team"><img src="http://odds.500.com/static/soccerdata/images/TeamPic/teamsignnew_5535.png">金泽</div>
                    </td>
                    <td>日职乙</td>
                    <td>14</td>
                    <td>3/4/7</td>
                    <td>11/18</td>
                    <td>
                        <p class="textcenter">13</p>
                    </td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>
                        <div class="rank-team"><img src="http://odds.500.com/static/soccerdata/images/TeamPic/teamsignnew_808.png">福  冈</div>
                    </td>
                    <td>日职乙</td>
                    <td>14</td>
                    <td>8/3/3</td>
                    <td>17/11</td>
                    <td>
                        <p class="textcenter">27</p>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
            <!--<if: leagueRankTan=='sab' />-->
        </div>
            <!--<if: leagueRank.issame == '1' />--><div class="inte-look zhedie" onclick="location.href='match_center/index.html#/footballleague/integral/4240'">完整积分榜&gt;</div>
        </div>
        <div class="zhedie-box"><!--<if: cupRank && cupRank.length && match.stagemode=='2' />-->

            <!--<if: FIFARank && FIFARank.home && FIFARank.away />--></div>
        <div class="zhedie-box"><div class="zj-nav">
            <span class="saixuan" onclick="_hmt.push(['_trackEvent','zq_detail','click','analysis_zj_ls'])">筛选</span>
            历史交战
        </div>

            <!--<if: !isRequesting && !fightingInfoHidden && fightingInfoNoData />-->

            <!--<if: !fightingInfoHidden && !fightingInfoNoData />--><div class="zhedie">
                <div class="zd-detail">
                    <div class="gaik clear">
                        <span class="f30 color3 fl">近2场交战&nbsp;&nbsp;&nbsp;金泽</span>

                        <span class="f30 fl">
                <i class="win tcell">1胜</i>
                <i class="tie tcell">0平</i>
                <i class="lose tcell">1负</i>
            </span>
                        <span class="f30 color3 fl">
                胜率50%
            </span>
                    </div>

                    <div class="total-tips">
                        场均净胜0.5球，场均总进1.5球，
                        大球0次，小球2次
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
                        <th>赛果</th>
                    </tr>
                    <!--<repeat>: info in fightingInfo.matches--><!--[repeat-item]info in fightingInfo.matches--><tr>
                        <td>
                            <span class="color9">日职乙</span><span class="colorc f20">15-08-08</span>
                        </td>
                        <td>
                            <div class="textright lose">
                                <!--<if: info.homestanding && info.homestanding != 0 />--><span class="color9">[5]</span>金泽
                    </div>
                        </td>
                        <td>0:1<span class="color9">(0:0)</span></td>
                        <td>
                            <div class="textleft">
                                福  冈<!--<if: info.awaystanding && info.awaystanding != 0 />--><span class="color9">[6]</span>
                            </div>
                        </td>
                        <td onclick="_hmt.push(['_trackEvent','zq_detail','click','analysis_zj_ls2'])">
                            <!--<if: fightingInfoResultType == 'result1' />--><div class="blue-k">负</div>
                            <!--<if: fightingInfoResultType == 'result2' />-->
                            <!--<if: fightingInfoResultType == 'result3' />-->
                        </td>
                    </tr><!--[repeat-item]info in fightingInfo.matches--><tr>
                        <td>
                            <span class="color9">日职乙</span><span class="colorc f20">15-06-21</span>
                        </td>
                        <td>
                            <div class="textright">
                                <!--<if: info.homestanding && info.homestanding != 0 />--><span class="color9">[5]</span>福  冈
                    </div>
                        </td>
                        <td>0:2<span class="color9">(0:1)</span></td>
                        <td>
                            <div class="textleft win">
                                金泽<!--<if: info.awaystanding && info.awaystanding != 0 />--><span class="color9">[3]</span>
                            </div>
                        </td>
                        <td onclick="_hmt.push(['_trackEvent','zq_detail','click','analysis_zj_ls2'])">
                            <!--<if: fightingInfoResultType == 'result1' />--><div class="red-k">胜</div>
                            <!--<if: fightingInfoResultType == 'result2' />-->
                            <!--<if: fightingInfoResultType == 'result3' />-->
                        </td>
                    </tr><!--</repeat>: info in fightingInfo.matches-->
                    </tbody>
                </table>
            </div></div>
        <div class="zhedie-box"><div class="zj-nav">
            <span class="saixuan">筛选</span>
            近期战绩
       </div>

            <!--<if: !isRequesting && !recentRecordHidden && recentRecordNoData />-->

            <!--<if: !recentRecordHidden && !recentRecordNoData />--><div class="zhedie">
                <div class="zd-detail">
                    <div class="gaik clear">
                        <span class="f30 color3 fl">近10场 金泽</span>

                        <span class="f30 fl">
                <i class="win tcell">3胜</i>
                <i class="tie tcell">3平</i>
                <i class="lose tcell">4负</i>
            </span>

                        <span class="f30 color3 fl">
                胜率30%
            </span>
                    </div>
                    <div class="total-tips">
                        场均进1.0球，场均失1.1球， 大球3次，小球7次
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
                        <th>赛果</th>
                    </tr>
                    <!--<repeat>: info in recentRecord.home.matches|filterBy:recentRecordFilterOptions,homeRecentRecordShowAll--><!--[repeat-item]info in recentRecord.home.matches|filterBy:recentRecordFilterOptions,homeRecentRecordShowAll--><tr>
                        <td>
                            <span class="color9">日职乙</span><span class="colorc f20">17-05-17</span>
                        </td>
                        <td>
                            <div class="textright">
                                <!--<if: info.homestanding && info.homestanding != 0 />--><span class="color9">[7]</span>德  岛
                    </div>
                        </td>
                        <td>1:1<span class="color9">(1:1)</span></td>
                        <td>
                            <div class="textleft tie">
                                金泽<!--<if: info.awaystanding && info.awaystanding != 0 />--><span class="color9">[18]</span>
                            </div>
                        </td>
                        <td>
                            <!--<if: recentRecordResultType_home == 'result1' />--><div class="green-k">平</div>
                            <!--<if: recentRecordResultType_home == 'result2' />-->
                            <!--<if: recentRecordResultType_home == 'result3' />-->
                        </td>
                    </tr><!--[repeat-item]info in recentRecord.home.matches|filterBy:recentRecordFilterOptions,homeRecentRecordShowAll--><tr>
                        <td>
                            <span class="color9">日职乙</span><span class="colorc f20">17-05-13</span>
                        </td>
                        <td>
                            <div class="textright tie">
                                <!--<if: info.homestanding && info.homestanding != 0 />--><span class="color9">[19]</span>金泽
                    </div>
                        </td>
                        <td>1:1<span class="color9">(0:0)</span></td>
                        <td>
                            <div class="textleft">
                                山  形<!--<if: info.awaystanding && info.awaystanding != 0 />--><span class="color9">[16]</span>
                            </div>
                        </td>
                        <td>
                            <!--<if: recentRecordResultType_home == 'result1' />--><div class="green-k">平</div>
                            <!--<if: recentRecordResultType_home == 'result2' />-->
                            <!--<if: recentRecordResultType_home == 'result3' />-->
                        </td>
                    </tr><!--[repeat-item]info in recentRecord.home.matches|filterBy:recentRecordFilterOptions,homeRecentRecordShowAll--><tr>
                        <td>
                            <span class="color9">日职乙</span><span class="colorc f20">17-05-07</span>
                        </td>
                        <td>
                            <div class="textright win">
                                <!--<if: info.homestanding && info.homestanding != 0 />--><span class="color9">[21]</span>金泽
                    </div>
                        </td>
                        <td>2:1<span class="color9">(1:0)</span></td>
                        <td>
                            <div class="textleft">
                                千  叶<!--<if: info.awaystanding && info.awaystanding != 0 />--><span class="color9">[11]</span>
                            </div>
                        </td>
                        <td>
                            <!--<if: recentRecordResultType_home == 'result1' />--><div class="red-k">胜</div>
                            <!--<if: recentRecordResultType_home == 'result2' />-->
                            <!--<if: recentRecordResultType_home == 'result3' />-->
                        </td>
                    </tr><!--[repeat-item]info in recentRecord.home.matches|filterBy:recentRecordFilterOptions,homeRecentRecordShowAll--><tr>
                        <td>
                            <span class="color9">日职乙</span><span class="colorc f20">17-05-03</span>
                        </td>
                        <td>
                            <div class="textright">
                                <!--<if: info.homestanding && info.homestanding != 0 />--><span class="color9">[4]</span>东  京
                    </div>
                        </td>
                        <td>2:1<span class="color9">(0:0)</span></td>
                        <td>
                            <div class="textleft lose">
                                金泽<!--<if: info.awaystanding && info.awaystanding != 0 />--><span class="color9">[20]</span>
                            </div>
                        </td>
                        <td>
                            <!--<if: recentRecordResultType_home == 'result1' />--><div class="blue-k">负</div>
                            <!--<if: recentRecordResultType_home == 'result2' />-->
                            <!--<if: recentRecordResultType_home == 'result3' />-->
                        </td>
                    </tr><!--[repeat-item]info in recentRecord.home.matches|filterBy:recentRecordFilterOptions,homeRecentRecordShowAll--><tr>
                        <td>
                            <span class="color9">日职乙</span><span class="colorc f20">17-04-29</span>
                        </td>
                        <td>
                            <div class="textright">
                                <!--<if: info.homestanding && info.homestanding != 0 />--><span class="color9">[14]</span>岐  阜
                    </div>
                        </td>
                        <td>1:0<span class="color9">(1:0)</span></td>
                        <td>
                            <div class="textleft lose">
                                金泽<!--<if: info.awaystanding && info.awaystanding != 0 />--><span class="color9">[20]</span>
                            </div>
                        </td>
                        <td>
                            <!--<if: recentRecordResultType_home == 'result1' />--><div class="blue-k">负</div>
                            <!--<if: recentRecordResultType_home == 'result2' />-->
                            <!--<if: recentRecordResultType_home == 'result3' />-->
                        </td>
                    </tr><!--[repeat-item]info in recentRecord.home.matches|filterBy:recentRecordFilterOptions,homeRecentRecordShowAll--><tr>
                        <td>
                            <span class="color9">日职乙</span><span class="colorc f20">17-04-23</span>
                        </td>
                        <td>
                            <div class="textright lose">
                                <!--<if: info.homestanding && info.homestanding != 0 />--><span class="color9">[20]</span>金泽
                    </div>
                        </td>
                        <td>0:2<span class="color9">(0:0)</span></td>
                        <td>
                            <div class="textleft">
                                熊  本<!--<if: info.awaystanding && info.awaystanding != 0 />--><span class="color9">[19]</span>
                            </div>
                        </td>
                        <td>
                            <!--<if: recentRecordResultType_home == 'result1' />--><div class="blue-k">负</div>
                            <!--<if: recentRecordResultType_home == 'result2' />-->
                            <!--<if: recentRecordResultType_home == 'result3' />-->
                        </td>
                    </tr><!--</repeat>: info in recentRecord.home.matches|filterBy:recentRecordFilterOptions,homeRecentRecordShowAll-->
                    </tbody>
                </table>

                <!--<if: recentRecord.home.matches.length > maxVisibleCount />--><div class="box-arrow">
                <div class="zd-arrow"></div>
            </div>
                <!--<if: !isRequesting && !recentRecordHidden && (!recentRecord.home.matches || !recentRecord.home.matches.length || recentRecord.home.matches == 0) />-->

                <div class="zd-detail">
                    <div class="gaik clear">
                        <span class="f30 color3 fl">近10场 福  冈</span>

                        <span class="f30 fl">
                <i class="win tcell">5胜</i>
                <i class="tie tcell">3平</i>
                <i class="lose tcell">2负</i>
            </span>

                        <span class="f30 color3 fl">
                胜率50%
            </span>
                    </div>
                    <div class="total-tips">
                        场均进1.0球，场均失0.6球， 大球3次，小球7次
                    </div>
                </div>

                <table width="100%" cellpadding="0" cellspacing="0" class="fx-table">
                    <colgroup>
                        <col width="20%">
                        <col width="20%">
                        <col width="20%">
                        <col width="20%">
                        <col width="20%">
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
                        <th>赛果</th>
                    </tr>
                    <!--<repeat>: info in recentRecord.away.matches|filterBy:recentRecordFilterOptions,awayRecentRecordShowAll,true--><!--[repeat-item]info in recentRecord.away.matches|filterBy:recentRecordFilterOptions,awayRecentRecordShowAll,true--><tr>
                        <td>
                            <span class="color9">日职乙</span><span class="colorc f20">17-05-17</span>
                        </td>
                        <td>
                            <div class="textright">
                                <!--<if: info.homestanding && info.homestanding != 0 />--><span class="color9">[1]</span>湘  南
                    </div>
                        </td>
                        <td>0:3<span class="color9">(0:1)</span></td>
                        <td>
                            <div class="textleft win">
                                福  冈<!--<if: info.awaystanding && info.awaystanding != 0 />--><span class="color9">[3]</span>
                            </div>
                        </td>
                        <td>
                            <!--<if: recentRecordResultType_away == 'result1' />--><div class="red-k">胜</div>
                            <!--<if: recentRecordResultType_away == 'result2' />-->
                            <!--<if: recentRecordResultType_away == 'result3' />-->
                        </td>
                    </tr><!--[repeat-item]info in recentRecord.away.matches|filterBy:recentRecordFilterOptions,awayRecentRecordShowAll,true--><tr>
                        <td>
                            <span class="color9">日职乙</span><span class="colorc f20">17-05-13</span>
                        </td>
                        <td>
                            <div class="textright win">
                                <!--<if: info.homestanding && info.homestanding != 0 />--><span class="color9">[5]</span>福  冈
                    </div>
                        </td>
                        <td>1:0<span class="color9">(0:0)</span></td>
                        <td>
                            <div class="textleft">
                                冈  山<!--<if: info.awaystanding && info.awaystanding != 0 />--><span class="color9">[17]</span>
                            </div>
                        </td>
                        <td>
                            <!--<if: recentRecordResultType_away == 'result1' />--><div class="red-k">胜</div>
                            <!--<if: recentRecordResultType_away == 'result2' />-->
                            <!--<if: recentRecordResultType_away == 'result3' />-->
                        </td>
                    </tr><!--[repeat-item]info in recentRecord.away.matches|filterBy:recentRecordFilterOptions,awayRecentRecordShowAll,true--><tr>
                        <td>
                            <span class="color9">日职乙</span><span class="colorc f20">17-05-07</span>
                        </td>
                        <td>
                            <div class="textright">
                                <!--<if: info.homestanding && info.homestanding != 0 />--><span class="color9">[7]</span>松  本
                    </div>
                        </td>
                        <td>0:1<span class="color9">(0:1)</span></td>
                        <td>
                            <div class="textleft win">
                                福  冈<!--<if: info.awaystanding && info.awaystanding != 0 />--><span class="color9">[9]</span>
                            </div>
                        </td>
                        <td>
                            <!--<if: recentRecordResultType_away == 'result1' />--><div class="red-k">胜</div>
                            <!--<if: recentRecordResultType_away == 'result2' />-->
                            <!--<if: recentRecordResultType_away == 'result3' />-->
                        </td>
                    </tr><!--[repeat-item]info in recentRecord.away.matches|filterBy:recentRecordFilterOptions,awayRecentRecordShowAll,true--><tr>
                        <td>
                            <span class="color9">日职乙</span><span class="colorc f20">17-05-03</span>
                        </td>
                        <td>
                            <div class="textright">
                                <!--<if: info.homestanding && info.homestanding != 0 />--><span class="color9">[8]</span>德  岛
                    </div>
                        </td>
                        <td>2:1<span class="color9">(1:1)</span></td>
                        <td>
                            <div class="textleft lose">
                                福  冈<!--<if: info.awaystanding && info.awaystanding != 0 />--><span class="color9">[6]</span>
                            </div>
                        </td>
                        <td>
                            <!--<if: recentRecordResultType_away == 'result1' />--><div class="blue-k">负</div>
                            <!--<if: recentRecordResultType_away == 'result2' />-->
                            <!--<if: recentRecordResultType_away == 'result3' />-->
                        </td>
                    </tr><!--[repeat-item]info in recentRecord.away.matches|filterBy:recentRecordFilterOptions,awayRecentRecordShowAll,true--><tr>
                        <td>
                            <span class="color9">日职乙</span><span class="colorc f20">17-04-29</span>
                        </td>
                        <td>
                            <div class="textright win">
                                <!--<if: info.homestanding && info.homestanding != 0 />--><span class="color9">[7]</span>福  冈
                    </div>
                        </td>
                        <td>1:0<span class="color9">(0:0)</span></td>
                        <td>
                            <div class="textleft">
                                东  京<!--<if: info.awaystanding && info.awaystanding != 0 />--><span class="color9">[1]</span>
                            </div>
                        </td>
                        <td>
                            <!--<if: recentRecordResultType_away == 'result1' />--><div class="red-k">胜</div>
                            <!--<if: recentRecordResultType_away == 'result2' />-->
                            <!--<if: recentRecordResultType_away == 'result3' />-->
                        </td>
                    </tr><!--[repeat-item]info in recentRecord.away.matches|filterBy:recentRecordFilterOptions,awayRecentRecordShowAll,true--><tr>
                        <td>
                            <span class="color9">日职乙</span><span class="colorc f20">17-04-22</span>
                        </td>
                        <td>
                            <div class="textright">
                                <!--<if: info.homestanding && info.homestanding != 0 />--><span class="color9">[13]</span>水  户
                    </div>
                        </td>
                        <td>1:1<span class="color9">(1:0)</span></td>
                        <td>
                            <div class="textleft tie">
                                福  冈<!--<if: info.awaystanding && info.awaystanding != 0 />--><span class="color9">[6]</span>
                            </div>
                        </td>
                        <td>
                            <!--<if: recentRecordResultType_away == 'result1' />--><div class="green-k">平</div>
                            <!--<if: recentRecordResultType_away == 'result2' />-->
                            <!--<if: recentRecordResultType_away == 'result3' />-->
                        </td>
                    </tr><!--</repeat>: info in recentRecord.away.matches|filterBy:recentRecordFilterOptions,awayRecentRecordShowAll,true-->
                    </tbody>
                </table>
                <!--<if: recentRecord.away.matches.length > maxVisibleCount />--><div class="box-arrow">
                <div class="zd-arrow"></div>
            </div>
                <!--<if: !isRequesting && !recentRecordHidden && (!recentRecord.away.matches || !recentRecord.away.matches.length ||
                        recentRecord.away.matches == 0) />-->
            </div></div>
        <div class="zhedie-box"><div class="zhedie-box zhedie-box-wl">
            <div class="zj-nav">
                未来赛事
            </div>
            <div class="zhedie show">

                <table width="100%" cellpadding="0" cellspacing="0" class="fx-table">
                    <tbody><tr>
                        <th width="22%"><span class="color3 f28">金泽</span></th>
                        <th width="20%">日期</th>
                        <th width="17%"><div class="textright">主队</div></th>
                        <th width="7%"></th>
                        <th width="17%"><div class="textleft">客队</div></th>
                        <th>相隔</th>
                    </tr>
                    <!--<repeat>: futureMatchInfo in futureMatch.home--><!--[repeat-item]futureMatchInfo in futureMatch.home--><tr>
                        <td>日职乙</td>
                        <td>2017-05-28</td>
                        <td><div class="textright">金泽</div></td>
                        <td>vs</td>
                        <td><div class="textleft">松  本</div></td>
                        <td>7天</td>
                    </tr><!--[repeat-item]futureMatchInfo in futureMatch.home--><tr>
                        <td>日职乙</td>
                        <td>2017-06-03</td>
                        <td><div class="textright">名古屋</div></td>
                        <td>vs</td>
                        <td><div class="textleft">金泽</div></td>
                        <td>13天</td>
                    </tr><!--[repeat-item]futureMatchInfo in futureMatch.home--><tr>
                        <td>日职乙</td>
                        <td>2017-06-11</td>
                        <td><div class="textright">赞 岐</div></td>
                        <td>vs</td>
                        <td><div class="textleft">金泽</div></td>
                        <td>21天</td>
                    </tr><!--</repeat>: futureMatchInfo in futureMatch.home-->
                    </tbody></table>
                <!--<if: !isRequesting && !(futureMatch.home && futureMatch.home.length > 0) />-->

                <table width="100%" cellpadding="0" cellspacing="0" class="fx-table">
                    <tbody><tr>
                        <th width="22%"><span class="color3 f28">福  冈</span></th>
                        <th width="20%">日期</th>
                        <th width="17%"><div class="textright">主队</div></th>
                        <th width="7%"></th>
                        <th width="17%"><div class="textleft">客队</div></th>
                        <th>相隔</th>
                    </tr>
                    <!--<repeat>: futureMatchInfo in futureMatch.away--><!--[repeat-item]futureMatchInfo in futureMatch.away--><tr>
                        <td>日职乙</td>
                        <td>2017-05-28</td>
                        <td><div class="textright">福  冈</div></td>
                        <td>vs</td>
                        <td><div class="textleft">群  马</div></td>
                        <td>7天</td>
                    </tr><!--[repeat-item]futureMatchInfo in futureMatch.away--><tr>
                        <td>日职乙</td>
                        <td>2017-06-03</td>
                        <td><div class="textright">福  冈</div></td>
                        <td>vs</td>
                        <td><div class="textleft">赞 岐</div></td>
                        <td>13天</td>
                    </tr><!--[repeat-item]futureMatchInfo in futureMatch.away--><tr>
                        <td>日职乙</td>
                        <td>2017-06-10</td>
                        <td><div class="textright">千  叶</div></td>
                        <td>vs</td>
                        <td><div class="textleft">福  冈</div></td>
                        <td>20天</td>
                    </tr><!--</repeat>: futureMatchInfo in futureMatch.away-->
                    </tbody></table>
                <!--<if: !isRequesting && !(futureMatch.away && futureMatch.away.length > 0) />-->
            </div>

            <!--<if: !futureMatchHidden && (!isRequesting && !(futureMatch.home && futureMatch.home.length > 0) && !(futureMatch.away && futureMatch.away.length > 0)) />-->

        </div></div>
        <div class="zhedie-box"><div class="zhedie-box">
            <div class="zj-nav">
                澳门心水推荐
            </div>
            <!--<if: macauNews && macauNews.stars !== undefined />--><div class="zhedie show">
            <div class="pm-namel">
                <span>福冈黄蜂</span>
                <span class="suggest-status">胜</span>
                <span class="suggest-power">信心指数</span>
                <span class="suggest-stars">
            <!--<repeat>: i in macauNews.stars--><!--[repeat-item]i in macauNews.stars--><i class="ico-star ico-star-active"></i><!--[repeat-item]i in macauNews.stars--><i class="ico-star ico-star-active"></i><!--[repeat-item]i in macauNews.stars--><i class="ico-star ico-star-active"></i><!--[repeat-item]i in macauNews.stars--><i class="ico-star ico-star-active"></i><!--</repeat>: i in macauNews.stars-->
                    <!--<repeat>: i in (5 - macauNews.stars)--><!--[repeat-item]i in (5 - macauNews.stars)--><i class="ico-star"></i><!--</repeat>: i in (5 - macauNews.stars)-->
            </span>
            </div>
            <div class="macao-txt">
                <p>福冈黄蜂近5轮取胜4场，球队状态非常出色，当然看好福冈黄蜂此番出征再下一城。</p>
            </div>
        </div>
            <!--<if: !isRequesting && !(macauNews && macauNews.stars !== undefined) />-->
        </div></div>
    </div>
        <!--<if: subtab === 'lineup' />-->

        <div class="sk-btips">
            500彩票网提示：<br>以上数据仅供参考，请以官方公布的数据为准
            </div>
    </div>
</template>
