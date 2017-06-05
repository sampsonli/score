<template>
    <div>
        <div class="zhedie-box"><!--<if: leagueRank && leagueRank.hometeam && leagueRank.hometeam.home.matches_count != null />--><div class="zhedie-box ">
            <div class="zj-nav">
                联赛积分排名
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
                    <td>1</td>
                    <td>
                        <div class="rank-team"><img src="http://odds.500.com/static/soccerdata/images/TeamPic/teamsignnew_1330.png">尤  文</div>
                    </td>
                    <td>意甲</td>
                    <td>38</td>
                    <td>29/4/5</td>
                    <td>77/27</td>
                    <td>
                        <p class="textcenter">91</p>
                    </td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>
                        <div class="rank-team"><img src="http://odds.500.com/static/soccerdata/images/TeamPic/teamsignnew_883.png">皇  马</div>
                    </td>
                    <td>西甲</td>
                    <td>38</td>
                    <td>29/6/3</td>
                    <td>106/41</td>
                    <td>
                        <p class="textcenter">93</p>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
            <!--<if: leagueRankTan=='sab' />-->
        </div>
            <!--<if: leagueRank.issame == '1' />-->
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
                        <span class="f30 color3 fl">近6场交战&nbsp;&nbsp;&nbsp;尤  文</span>

                        <span class="f30 fl">
                <i class="win tcell">3胜</i>
                <i class="tie tcell">2平</i>
                <i class="lose tcell">1负</i>
            </span>
                        <span class="f30 color3 fl">
                胜率50%
            </span>
                    </div>

                    <div class="total-tips">
                        场均净胜0.5球，场均总进2.8球，
                        大球4次，小球2次
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
                            <span class="color9">欧冠</span><span class="colorc f20">15-05-14</span>
                        </td>
                        <td>
                            <div class="textright">
                                <!--<if: info.homestanding && info.homestanding != 0 />-->皇  马
                    </div>
                        </td>
                        <td>1:1<span class="color9">(1:0)</span></td>
                        <td>
                            <div class="textleft tie">
                                尤  文<!--<if: info.awaystanding && info.awaystanding != 0 />-->
                            </div>
                        </td>
                        <td onclick="_hmt.push(['_trackEvent','zq_detail','click','analysis_zj_ls2'])">
                            <!--<if: fightingInfoResultType == 'result1' />--><div class="green-k">平</div>
                            <!--<if: fightingInfoResultType == 'result2' />-->
                            <!--<if: fightingInfoResultType == 'result3' />-->
                        </td>
                    </tr><!--[repeat-item]info in fightingInfo.matches--><tr>
                        <td>
                            <span class="color9">欧冠</span><span class="colorc f20">15-05-06</span>
                        </td>
                        <td>
                            <div class="textright win">
                                <!--<if: info.homestanding && info.homestanding != 0 />-->尤  文
                    </div>
                        </td>
                        <td>2:1<span class="color9">(1:1)</span></td>
                        <td>
                            <div class="textleft">
                                皇  马<!--<if: info.awaystanding && info.awaystanding != 0 />-->
                            </div>
                        </td>
                        <td onclick="_hmt.push(['_trackEvent','zq_detail','click','analysis_zj_ls2'])">
                            <!--<if: fightingInfoResultType == 'result1' />--><div class="red-k">胜</div>
                            <!--<if: fightingInfoResultType == 'result2' />-->
                            <!--<if: fightingInfoResultType == 'result3' />-->
                        </td>
                    </tr><!--[repeat-item]info in fightingInfo.matches--><tr>
                        <td>
                            <span class="color9">欧冠</span><span class="colorc f20">13-11-06</span>
                        </td>
                        <td>
                            <div class="textright tie">
                                <!--<if: info.homestanding && info.homestanding != 0 />--><span class="color9">[3]</span>尤  文
                    </div>
                        </td>
                        <td>2:2<span class="color9">(1:0)</span></td>
                        <td>
                            <div class="textleft">
                                皇  马<!--<if: info.awaystanding && info.awaystanding != 0 />--><span class="color9">[1]</span>
                            </div>
                        </td>
                        <td onclick="_hmt.push(['_trackEvent','zq_detail','click','analysis_zj_ls2'])">
                            <!--<if: fightingInfoResultType == 'result1' />--><div class="green-k">平</div>
                            <!--<if: fightingInfoResultType == 'result2' />-->
                            <!--<if: fightingInfoResultType == 'result3' />-->
                        </td>
                    </tr><!--[repeat-item]info in fightingInfo.matches--><tr>
                        <td>
                            <span class="color9">欧冠</span><span class="colorc f20">13-10-24</span>
                        </td>
                        <td>
                            <div class="textright">
                                <!--<if: info.homestanding && info.homestanding != 0 />--><span class="color9">[1]</span>皇  马
                    </div>
                        </td>
                        <td>2:1<span class="color9">(2:1)</span></td>
                        <td>
                            <div class="textleft lose">
                                尤  文<!--<if: info.awaystanding && info.awaystanding != 0 />--><span class="color9">[2]</span>
                            </div>
                        </td>
                        <td onclick="_hmt.push(['_trackEvent','zq_detail','click','analysis_zj_ls2'])">
                            <!--<if: fightingInfoResultType == 'result1' />--><div class="blue-k">负</div>
                            <!--<if: fightingInfoResultType == 'result2' />-->
                            <!--<if: fightingInfoResultType == 'result3' />-->
                        </td>
                    </tr><!--[repeat-item]info in fightingInfo.matches--><tr>
                        <td>
                            <span class="color9">和平杯</span><span class="colorc f20">09-08-01</span>
                        </td>
                        <td>
                            <div class="textright win">
                                <!--<if: info.homestanding && info.homestanding != 0 />-->尤  文
                    </div>
                        </td>
                        <td>2:1<span class="color9">(1:1)</span></td>
                        <td>
                            <div class="textleft">
                                皇  马<!--<if: info.awaystanding && info.awaystanding != 0 />-->
                            </div>
                        </td>
                        <td onclick="_hmt.push(['_trackEvent','zq_detail','click','analysis_zj_ls2'])">
                            <!--<if: fightingInfoResultType == 'result1' />--><div class="red-k">胜</div>
                            <!--<if: fightingInfoResultType == 'result2' />-->
                            <!--<if: fightingInfoResultType == 'result3' />-->
                        </td>
                    </tr><!--[repeat-item]info in fightingInfo.matches--><tr>
                        <td>
                            <span class="color9">欧冠</span><span class="colorc f20">08-11-06</span>
                        </td>
                        <td>
                            <div class="textright">
                                <!--<if: info.homestanding && info.homestanding != 0 />--><span class="color9">[2]</span>皇  马
                    </div>
                        </td>
                        <td>0:2<span class="color9">(0:1)</span></td>
                        <td>
                            <div class="textleft win">
                                尤  文<!--<if: info.awaystanding && info.awaystanding != 0 />--><span class="color9">[1]</span>
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
                        <span class="f30 color3 fl">近10场 尤  文</span>

                        <span class="f30 fl">
                <i class="win tcell">6胜</i>
                <i class="tie tcell">3平</i>
                <i class="lose tcell">1负</i>
            </span>

                        <span class="f30 color3 fl">
                胜率60%
            </span>
                    </div>
                    <div class="total-tips">
                        场均进1.9球，场均失0.8球， 大球6次，小球4次
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
                            <span class="color9">意甲</span><span class="colorc f20">17-05-27</span>
                        </td>
                        <td>
                            <div class="textright">
                                <!--<if: info.homestanding && info.homestanding != 0 />--><span class="color9">[15]</span>博洛尼
                    </div>
                        </td>
                        <td>1:2<span class="color9">(0:0)</span></td>
                        <td>
                            <div class="textleft win">
                                尤  文<!--<if: info.awaystanding && info.awaystanding != 0 />--><span class="color9">[1]</span>
                            </div>
                        </td>
                        <td>
                            <!--<if: recentRecordResultType_home == 'result1' />--><div class="red-k">胜</div>
                            <!--<if: recentRecordResultType_home == 'result2' />-->
                            <!--<if: recentRecordResultType_home == 'result3' />-->
                        </td>
                    </tr><!--[repeat-item]info in recentRecord.home.matches|filterBy:recentRecordFilterOptions,homeRecentRecordShowAll--><tr>
                        <td>
                            <span class="color9">意甲</span><span class="colorc f20">17-05-21</span>
                        </td>
                        <td>
                            <div class="textright win">
                                <!--<if: info.homestanding && info.homestanding != 0 />--><span class="color9">[1]</span>尤  文
                    </div>
                        </td>
                        <td>3:0<span class="color9">(2:0)</span></td>
                        <td>
                            <div class="textleft">
                                克罗托<!--<if: info.awaystanding && info.awaystanding != 0 />--><span class="color9">[18]</span>
                            </div>
                        </td>
                        <td>
                            <!--<if: recentRecordResultType_home == 'result1' />--><div class="red-k">胜</div>
                            <!--<if: recentRecordResultType_home == 'result2' />-->
                            <!--<if: recentRecordResultType_home == 'result3' />-->
                        </td>
                    </tr><!--[repeat-item]info in recentRecord.home.matches|filterBy:recentRecordFilterOptions,homeRecentRecordShowAll--><tr>
                        <td>
                            <span class="color9">意杯</span><span class="colorc f20">17-05-18</span>
                        </td>
                        <td>
                            <div class="textright">
                                <!--<if: info.homestanding && info.homestanding != 0 />-->拉齐奥
                    </div>
                        </td>
                        <td>0:2<span class="color9">(0:2)</span></td>
                        <td>
                            <div class="textleft win">
                                尤  文<!--<if: info.awaystanding && info.awaystanding != 0 />-->
                            </div>
                        </td>
                        <td>
                            <!--<if: recentRecordResultType_home == 'result1' />--><div class="red-k">胜</div>
                            <!--<if: recentRecordResultType_home == 'result2' />-->
                            <!--<if: recentRecordResultType_home == 'result3' />-->
                        </td>
                    </tr><!--[repeat-item]info in recentRecord.home.matches|filterBy:recentRecordFilterOptions,homeRecentRecordShowAll--><tr>
                        <td>
                            <span class="color9">意甲</span><span class="colorc f20">17-05-15</span>
                        </td>
                        <td>
                            <div class="textright">
                                <!--<if: info.homestanding && info.homestanding != 0 />--><span class="color9">[3]</span>罗  马
                    </div>
                        </td>
                        <td>3:1<span class="color9">(1:1)</span></td>
                        <td>
                            <div class="textleft lose">
                                尤  文<!--<if: info.awaystanding && info.awaystanding != 0 />--><span class="color9">[1]</span>
                            </div>
                        </td>
                        <td>
                            <!--<if: recentRecordResultType_home == 'result1' />--><div class="blue-k">负</div>
                            <!--<if: recentRecordResultType_home == 'result2' />-->
                            <!--<if: recentRecordResultType_home == 'result3' />-->
                        </td>
                    </tr><!--[repeat-item]info in recentRecord.home.matches|filterBy:recentRecordFilterOptions,homeRecentRecordShowAll--><tr>
                        <td>
                            <span class="color9">欧冠</span><span class="colorc f20">17-05-10</span>
                        </td>
                        <td>
                            <div class="textright win">
                                <!--<if: info.homestanding && info.homestanding != 0 />-->尤  文
                    </div>
                        </td>
                        <td>2:1<span class="color9">(2:0)</span></td>
                        <td>
                            <div class="textleft">
                                摩纳哥<!--<if: info.awaystanding && info.awaystanding != 0 />-->
                            </div>
                        </td>
                        <td>
                            <!--<if: recentRecordResultType_home == 'result1' />--><div class="red-k">胜</div>
                            <!--<if: recentRecordResultType_home == 'result2' />-->
                            <!--<if: recentRecordResultType_home == 'result3' />-->
                        </td>
                    </tr><!--[repeat-item]info in recentRecord.home.matches|filterBy:recentRecordFilterOptions,homeRecentRecordShowAll--><tr>
                        <td>
                            <span class="color9">意甲</span><span class="colorc f20">17-05-07</span>
                        </td>
                        <td>
                            <div class="textright tie">
                                <!--<if: info.homestanding && info.homestanding != 0 />--><span class="color9">[1]</span>尤  文
                    </div>
                        </td>
                        <td>1:1<span class="color9">(0:0)</span></td>
                        <td>
                            <div class="textleft">
                                都  灵<!--<if: info.awaystanding && info.awaystanding != 0 />--><span class="color9">[9]</span>
                            </div>
                        </td>
                        <td>
                            <!--<if: recentRecordResultType_home == 'result1' />--><div class="green-k">平</div>
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
                        <span class="f30 color3 fl">近10场 皇  马</span>

                        <span class="f30 fl">
                <i class="win tcell">7胜</i>
                <i class="tie tcell">0平</i>
                <i class="lose tcell">3负</i>
            </span>

                        <span class="f30 color3 fl">
                胜率70%
            </span>
                    </div>
                    <div class="total-tips">
                        场均进2.9球，场均失1.2球， 大球9次，小球1次
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
                            <span class="color9">西甲</span><span class="colorc f20">17-05-22</span>
                        </td>
                        <td>
                            <div class="textright">
                                <!--<if: info.homestanding && info.homestanding != 0 />--><span class="color9">[11]</span>马拉加
                    </div>
                        </td>
                        <td>0:2<span class="color9">(0:1)</span></td>
                        <td>
                            <div class="textleft win">
                                皇  马<!--<if: info.awaystanding && info.awaystanding != 0 />--><span class="color9">[1]</span>
                            </div>
                        </td>
                        <td>
                            <!--<if: recentRecordResultType_away == 'result1' />--><div class="red-k">胜</div>
                            <!--<if: recentRecordResultType_away == 'result2' />-->
                            <!--<if: recentRecordResultType_away == 'result3' />-->
                        </td>
                    </tr><!--[repeat-item]info in recentRecord.away.matches|filterBy:recentRecordFilterOptions,awayRecentRecordShowAll,true--><tr>
                        <td>
                            <span class="color9">西甲</span><span class="colorc f20">17-05-18</span>
                        </td>
                        <td>
                            <div class="textright">
                                <!--<if: info.homestanding && info.homestanding != 0 />--><span class="color9">[13]</span>塞尔塔
                    </div>
                        </td>
                        <td>1:4<span class="color9">(0:1)</span></td>
                        <td>
                            <div class="textleft win">
                                皇  马<!--<if: info.awaystanding && info.awaystanding != 0 />--><span class="color9">[2]</span>
                            </div>
                        </td>
                        <td>
                            <!--<if: recentRecordResultType_away == 'result1' />--><div class="red-k">胜</div>
                            <!--<if: recentRecordResultType_away == 'result2' />-->
                            <!--<if: recentRecordResultType_away == 'result3' />-->
                        </td>
                    </tr><!--[repeat-item]info in recentRecord.away.matches|filterBy:recentRecordFilterOptions,awayRecentRecordShowAll,true--><tr>
                        <td>
                            <span class="color9">西甲</span><span class="colorc f20">17-05-15</span>
                        </td>
                        <td>
                            <div class="textright win">
                                <!--<if: info.homestanding && info.homestanding != 0 />--><span class="color9">[2]</span>皇  马
                    </div>
                        </td>
                        <td>4:1<span class="color9">(2:0)</span></td>
                        <td>
                            <div class="textleft">
                                塞维利<!--<if: info.awaystanding && info.awaystanding != 0 />--><span class="color9">[4]</span>
                            </div>
                        </td>
                        <td>
                            <!--<if: recentRecordResultType_away == 'result1' />--><div class="red-k">胜</div>
                            <!--<if: recentRecordResultType_away == 'result2' />-->
                            <!--<if: recentRecordResultType_away == 'result3' />-->
                        </td>
                    </tr><!--[repeat-item]info in recentRecord.away.matches|filterBy:recentRecordFilterOptions,awayRecentRecordShowAll,true--><tr>
                        <td>
                            <span class="color9">欧冠</span><span class="colorc f20">17-05-11</span>
                        </td>
                        <td>
                            <div class="textright">
                                <!--<if: info.homestanding && info.homestanding != 0 />-->马竞技
                    </div>
                        </td>
                        <td>2:1<span class="color9">(2:1)</span></td>
                        <td>
                            <div class="textleft lose">
                                皇  马<!--<if: info.awaystanding && info.awaystanding != 0 />-->
                            </div>
                        </td>
                        <td>
                            <!--<if: recentRecordResultType_away == 'result1' />--><div class="blue-k">负</div>
                            <!--<if: recentRecordResultType_away == 'result2' />-->
                            <!--<if: recentRecordResultType_away == 'result3' />-->
                        </td>
                    </tr><!--[repeat-item]info in recentRecord.away.matches|filterBy:recentRecordFilterOptions,awayRecentRecordShowAll,true--><tr>
                        <td>
                            <span class="color9">西甲</span><span class="colorc f20">17-05-07</span>
                        </td>
                        <td>
                            <div class="textright">
                                <!--<if: info.homestanding && info.homestanding != 0 />--><span class="color9">[19]</span>格拉纳
                    </div>
                        </td>
                        <td>0:4<span class="color9">(0:4)</span></td>
                        <td>
                            <div class="textleft win">
                                皇  马<!--<if: info.awaystanding && info.awaystanding != 0 />--><span class="color9">[2]</span>
                            </div>
                        </td>
                        <td>
                            <!--<if: recentRecordResultType_away == 'result1' />--><div class="red-k">胜</div>
                            <!--<if: recentRecordResultType_away == 'result2' />-->
                            <!--<if: recentRecordResultType_away == 'result3' />-->
                        </td>
                    </tr><!--[repeat-item]info in recentRecord.away.matches|filterBy:recentRecordFilterOptions,awayRecentRecordShowAll,true--><tr>
                        <td>
                            <span class="color9">欧冠</span><span class="colorc f20">17-05-03</span>
                        </td>
                        <td>
                            <div class="textright win">
                                <!--<if: info.homestanding && info.homestanding != 0 />-->皇  马
                    </div>
                        </td>
                        <td>3:0<span class="color9">(1:0)</span></td>
                        <td>
                            <div class="textleft">
                                马竞技<!--<if: info.awaystanding && info.awaystanding != 0 />-->
                            </div>
                        </td>
                        <td>
                            <!--<if: recentRecordResultType_away == 'result1' />--><div class="red-k">胜</div>
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
                        <th width="22%"><span class="color3 f28">尤  文</span></th>
                        <th width="20%">日期</th>
                        <th width="17%"><div class="textright">主队</div></th>
                        <th width="7%"></th>
                        <th width="17%"><div class="textleft">客队</div></th>
                        <th>相隔</th>
                    </tr>
                    <!--<repeat>: futureMatchInfo in futureMatch.home--><!--</repeat>: futureMatchInfo in futureMatch.home-->
                    </tbody></table>
                <!--<if: !isRequesting && !(futureMatch.home && futureMatch.home.length > 0) />-->

                <table width="100%" cellpadding="0" cellspacing="0" class="fx-table">
                    <tbody><tr>
                        <th width="22%"><span class="color3 f28">皇  马</span></th>
                        <th width="20%">日期</th>
                        <th width="17%"><div class="textright">主队</div></th>
                        <th width="7%"></th>
                        <th width="17%"><div class="textleft">客队</div></th>
                        <th>相隔</th>
                    </tr>
                    <!--<repeat>: futureMatchInfo in futureMatch.away--><!--</repeat>: futureMatchInfo in futureMatch.away-->
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
                <span>平局</span>
                <span class="suggest-status"></span>
                <span class="suggest-power">信心指数</span>
                <span class="suggest-stars">
            <!--<repeat>: i in macauNews.stars--><!--[repeat-item]i in macauNews.stars--><i class="ico-star ico-star-active"></i><!--[repeat-item]i in macauNews.stars--><i class="ico-star ico-star-active"></i><!--[repeat-item]i in macauNews.stars--><i class="ico-star ico-star-active"></i><!--[repeat-item]i in macauNews.stars--><i class="ico-star ico-star-active"></i><!--</repeat>: i in macauNews.stars-->
                    <!--<repeat>: i in (5 - macauNews.stars)--><!--[repeat-item]i in (5 - macauNews.stars)--><i class="ico-star"></i><!--</repeat>: i in (5 - macauNews.stars)-->
            </span>
            </div>
            <div class="macao-txt">
                <p>两队今届欧冠表现都非常出色，来到决赛关头谁都不想轻易言败，一场恶斗在所难免，双方在90分鐘内打和应该是意料之中。</p>
            </div>
        </div>
            <!--<if: !isRequesting && !(macauNews && macauNews.stars !== undefined) />-->
        </div></div>
    </div>
</template>

<script>
    import {aTypes} from '~store/zqdetail'
//    import {wait} from '~common/util'
    export default {
        async asyncData ({store, route: {params}}) {
            let baseInfo = store.state.zqdetail.baseInfo
            if (!baseInfo || store.state.zqdetail.baseInfo.fid !== params.fid) {
                baseInfo = await store.dispatch(aTypes.getBaseInfo, params.fid)
            }
            const {stageid, matchtime, homeid, awayid, league_id, matchgroup} = baseInfo
            const matchdate = matchtime.substr(0, 10)
            const stid = stageid

//            await wait(3000)
            await store.dispatch(aTypes.getLeaguerank, {homeid, awayid, stid, matchdate, fid: params.fid})
            await store.dispatch(aTypes.getCupRank, {matchgroup, matchdate, stid})
            await store.dispatch(aTypes.getRecentRecord, {homeid, awayid, matchdate, leagueid: league_id, stid, limit: 10, hoa: 0})
            await store.dispatch(aTypes.getMacauNews, params)
            await store.dispatch(aTypes.getFifarank, {homeid, awayid})
            await store.dispatch(aTypes.getFutureMatch, {homeid, awayid, matchdate, fid: params.fid})
        },
        computed: {
            analysis () {
                return this.$store.state.zqdetail.analysis
            }
        }
    }

</script>
