<template>
    <div>
        <!--<if: hasStrengthInfo />--><div class="gl-box">
        <div class="gl-nav">战力特征对比</div>
        <div class="zhzl-box">
            <div class="zhzl-title">综合战力</div>
            <div class="zhzl-vs">
                <div class="zhzl-l zhzl-green" style="width: 55%;">
                    <div class="wua">
                        <div class="hh"></div>
                    </div>
                </div>
                <div class="zhzl-r zhzl-gray" style="width: 45%;">
                    <div class="wua">
                        <div class="hh"></div>
                    </div>
                </div>
            </div>
            <div class="zhzl-bfb-left"><span>55</span><i>%</i></div>
            <div class="zhzl-bfb-right"><span>45</span><i>%</i></div>
        </div>
        <div class="zhedie hide">
            <ul class="zhzl-list">
                <!--<if: strengthInfo.confrontation />--><li class="responsive">
                <div class="zhzl-left">3胜2平1负</div>
                <div class="each-resone">
                    <div class="zhzl-classify">交锋</div>
                    <div class="responsive">
                        <div class="each-resone l-relative">
                            <div class="zhzl-vs-left green-bg" style="width:69%;"></div>
                        </div>
                        <div class="each-resone l-relative">
                            <div class="zhzl-vs-right gray-bg" style="width:31%;"></div>
                        </div>
                    </div>
                </div>
                <div class="zhzl-right">1胜2平3负</div>
            </li>
                <!--<if: strengthInfo.recent_record />--><li class="responsive">
                <div class="zhzl-left">6胜3平1负</div>
                <div class="each-resone">
                    <div class="zhzl-classify">近况</div>
                    <div class="responsive">
                        <div class="each-resone l-relative">
                            <div class="zhzl-vs-left gray-bg" style="width:50%;"></div>
                        </div>
                        <div class="each-resone l-relative">
                            <div class="zhzl-vs-right gray-bg" style="width:50%;"></div>
                        </div>
                    </div>
                </div>
                <div class="zhzl-right">7胜0平3负</div>
            </li>
                <!--<if: strengthInfo.same_home_away />-->
                <!--<if: strengthInfo.attack_info />--><li class="responsive">
                <div class="zhzl-left">场均进1.9球</div>
                <div class="each-resone">
                    <div class="zhzl-classify">攻击</div>
                    <div class="responsive">
                        <div class="each-resone l-relative">
                            <div class="zhzl-vs-left gray-bg" style="width:40%;"></div>
                        </div>
                        <div class="each-resone l-relative">
                            <div class="zhzl-vs-right green-bg" style="width:60%;"></div>
                        </div>
                    </div>
                </div>
                <div class="zhzl-right">场均进2.9球</div>
            </li>
                <!--<if: strengthInfo.defense_info />--><li class="responsive">
                <div class="zhzl-left">场均失0.8球</div>
                <div class="each-resone">
                    <div class="zhzl-classify">防守</div>
                    <div class="responsive">
                        <div class="each-resone l-relative">
                            <div class="zhzl-vs-left green-bg" style="width:60%;"></div>
                        </div>
                        <div class="each-resone l-relative">
                            <div class="zhzl-vs-right gray-bg" style="width:40%;"></div>
                        </div>
                    </div>
                </div>
                <div class="zhzl-right">场均失1.2球</div>
            </li>
                <!--<if: strengthInfo.team_worth />-->
            </ul>
            <div class="zhzl-tips">数据来自主客队战绩统计</div>
        </div>
        <div class="box-arrow noborder" onclick="_hmt.push(['_trackEvent','zq_detail','click','analysis_js_zl'])">
            <div class="zd-arrow"></div>
        </div>
    </div>
        <div class="gl-box">
            <div class="gl-nav"> <span class="i-po">场面控制（场均）</span> </div>
            <!--<if: compareInfo.scene_ctrl />--><div class="dataBox">
            <ul class="dataItem">
                <li class="itemL">
                    <em class="num">55.4</em>
                    <span class="numSub">%</span>
                </li>
                <li class="itemC">
                    <span>控球率</span>
                </li>
                <li class="itemR">
                    <em class="num">51.2</em>
                    <span class="numSub">%</span>
                </li>
            </ul>
            <ul class="dataItem">
                <li class="itemL">
                    <em class="num">64.1</em>
                    <span class="numSub">次</span>
                </li>
                <li class="itemC">
                    <span>进攻次数</span>
                </li>
                <li class="itemR">
                    <em class="num">74.3</em>
                    <span class="numSub">次</span>
                </li>
            </ul>
        </div>
            <!--<if: compareInfo.scene_ctrl.presentations />-->
            <!--<if: (!compareInfo||!compareInfo.scene_ctrl)&&!isCompareInfoRequest />-->
            <!--<if: isCompareInfoRequest />-->
        </div>
        <div class="gl-box">
            <div class="gl-nav"> <span class="i-po">攻防特征（场均）</span> </div>
            <!--<if: compareInfo.attack_defense />--><div class="dataBox">
            <ul class="dataItem">
                <li class="itemL">
                    <em class="num">8.4</em>
                    <span>次/球</span>
                </li>
                <li class="itemC">
                    <span>进攻效率</span>
                </li>
                <li class="itemR">
                    <em class="num">6.1</em>
                    <span>次/球</span>
                </li>
            </ul>
            <ul class="dataItem">
                <li class="itemL">
                    <em class="num">16.0</em>
                    <span>次</span>
                </li>
                <li class="itemC">
                    <span>射门次数</span>
                </li>
                <li class="itemR">
                    <em class="num">17.7</em>
                    <span>次</span>
                </li>
            </ul>
            <ul class="dataItem">
                <li class="itemL">
                    <em class="num">15.7</em>
                    <span>次/球</span>
                </li>
                <li class="itemC">
                    <span>防守效率</span>
                </li>
                <li class="itemR">
                    <em class="num">12.1</em>
                    <span>次/球</span>
                </li>
            </ul>
            <ul class="dataItem">
                <li class="itemL">
                    <em class="num">12.6</em>
                    <span>次</span>
                </li>
                <li class="itemC">
                    <span>被射门次数</span>
                </li>
                <li class="itemR">
                    <em class="num">14.5</em>
                    <span>次</span>
                </li>
            </ul>
        </div>
            <!--<if: compareInfo.attack_defense.presentations />--><div class="infoTips">
            <i class="icon"></i>
            <p class="f24">本场比赛可能产生较大进球数</p>
        </div>
            <!--<if: (!compareInfo||!compareInfo.attack_defense)&&!isCompareInfoRequest />-->
            <!--<if: isCompareInfoRequest />-->
        </div>
        <div class="gl-box">
            <div class="gl-nav"> <span class="i-po">半全场</span> </div>
            <!--<if: compareInfo.full_half />--><div class="dataBox">
            <ul class="dataItem">
                <li class="itemL">
                    <em class="num">1.1</em>
                    <span>球</span>
                </li>
                <li class="itemC">
                    <span>上半场进球</span>
                </li>
                <li class="itemR">
                    <em class="num">1.5</em>
                    <span>球</span>
                </li>
            </ul>
            <ul class="dataItem">
                <li class="itemL">
                    <em class="num">0.2</em>
                    <span>球</span>
                </li>
                <li class="itemC">
                    <span>上半场失球</span>
                </li>
                <li class="itemR">
                    <em class="num">0.4</em>
                    <span>球</span>
                </li>
            </ul>
            <ul class="dataItem">
                <li class="itemL">
                    <em class="num">0.8</em>
                    <span>球</span>
                </li>
                <li class="itemC">
                    <span>下半场进球</span>
                </li>
                <li class="itemR">
                    <em class="num">1.4</em>
                    <span>球</span>
                </li>
            </ul>
            <ul class="dataItem">
                <li class="itemL">
                    <em class="num">0.6</em>
                    <span>球</span>
                </li>
                <li class="itemC">
                    <span>下半场失球</span>
                </li>
                <li class="itemR">
                    <em class="num">0.8</em>
                    <span>球</span>
                </li>
            </ul>
        </div>
            <!--<if: compareInfo.full_half.presentations />--><div class="infoTips">
            <i class="icon"></i>
            <p class="f24">主队擅长先发制人客队擅长先发制人</p>
        </div>
            <!--<if: (!compareInfo||!compareInfo.full_half)&&!isCompareInfoRequest />-->
            <!--<if: isCompareInfoRequest />-->
        </div>
        <div class="gl-box jishu-sjtj">
            <div class="gl-nav">事件统计</div>
            <!--<if: compareInfo.evt_statistic />--><div class="zhedie">
            <ul class="zhzl-list">
                <li class="responsive">
                    <div class="zhzl-left">12.1</div>
                    <div class="each-resone">
                        <div class="zhzl-classify">场均犯规</div>
                        <div class="responsive">
                            <div class="each-resone l-relative">
                                <div class="zhzl-vs-left green-bg" style="width:56.1%;"></div>
                            </div>
                            <div class="each-resone l-relative">
                                <div class="zhzl-vs-right gray-bg" style="width:43.9%;"></div>
                            </div>
                        </div>
                    </div>
                    <div class="zhzl-right">9.5</div>
                </li>
                <li class="responsive">
                    <div class="zhzl-left">1.7</div>
                    <div class="each-resone">
                        <div class="zhzl-classify">场均红黄牌</div>
                        <div class="responsive">
                            <div class="each-resone l-relative">
                                <div class="zhzl-vs-left green-bg" style="width:59.5%;"></div>
                            </div>
                            <div class="each-resone l-relative">
                                <div class="zhzl-vs-right gray-bg" style="width:40.5%;"></div>
                            </div>
                        </div>
                    </div>
                    <div class="zhzl-right">1.2</div>
                </li>
                <li class="responsive">
                    <div class="zhzl-left">7.1</div>
                    <div class="each-resone">
                        <div class="zhzl-classify">场均角球</div>
                        <div class="responsive">
                            <div class="each-resone l-relative">
                                <div class="zhzl-vs-left green-bg" style="width:54.3%;"></div>
                            </div>
                            <div class="each-resone l-relative">
                                <div class="zhzl-vs-right gray-bg" style="width:45.7%;"></div>
                            </div>
                        </div>
                    </div>
                    <div class="zhzl-right">6.0</div>
                </li>
                <li class="responsive">
                    <div class="zhzl-left">15.3</div>
                    <div class="each-resone">
                        <div class="zhzl-classify">场均任意球</div>
                        <div class="responsive">
                            <div class="each-resone l-relative">
                                <div class="zhzl-vs-left gray-bg" style="width:48.6%;"></div>
                            </div>
                            <div class="each-resone l-relative">
                                <div class="zhzl-vs-right green-bg" style="width:51.4%;"></div>
                            </div>
                        </div>
                    </div>
                    <div class="zhzl-right">16.2</div>
                </li>
                <!--<if: compareInfo.evt_statistic.jz_red_yellow_times || compareInfo.evt_statistic.jz_foul_times />-->
                <!--<if: compareInfo.evt_statistic.jz_foul_times />-->
                <!--<if: compareInfo.evt_statistic.jz_red_yellow_times />-->
            </ul>
        </div>
            <!--<if: compareInfo.evt_statistic.presentations />-->
            <!--<if: (!compareInfo||!compareInfo.evt_statistic)&&!isCompareInfoRequest />-->
            <!--<if: isCompareInfoRequest />-->
        </div>

    </div>
</template>
