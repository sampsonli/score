<template>
    <div>
        <div><div class="sk-nav bge6">事件</div>

            <!--<if: !isRequesting && !(eventlist && eventlist.length) />-->

            <!--<if: eventlist && eventlist.length />--><div class="shikuang-box">
                <ul class="shikuang-line">
                    <!--<if: (status && status == StatusCode.ENDED) || match.status == StatusCode.ENDED />--><li class="d-zt-box"><span class="d-zt">结束</span></li>

                    <!--<repeat>: event,index in eventlist--><!--[repeat-item]event,index in eventlist--><li class="shikuang-lineRight">

                    <span class="sk-time">87'</span>
                    <span class="shikuang-ball">
                    <i class="black-ball">
                        <!--<if: event.eventtype == EventType.LIANG_HUANG_BIAN_HONG />-->
                    </i>
                </span>

                    <!--<if: event.is_team == 1 && event.eventtype != EventType.HUAN_REN />-->

                    <!--<if: event.eventtype == EventType.JIN_QIU />--><code class="jinqiu">进球</code>
                    <!--<if: event.eventtype == EventType.DIAN_QIU />-->
                    <!--<if: event.eventtype == EventType.WU_XIAO />-->
                    <!--<if: event.eventtype == EventType.WU_LONG />-->

                    <!--<if: event.eventtype == EventType.HUAN_REN />-->
                    <!--服务端的数据太恶心，只能使用如此龌龊的三元表达式：服务没有数据，且进球的情况下，展示球队-->
                    <!--<if: event.is_team != 1 && event.eventtype != EventType.HUAN_REN />--><div class="ren-name">【福  冈】</div>

                    <!--<if: event.eventtype == EventType.HUAN_REN />-->
                    <!--<span class="s-bf">1:3</span>-->
                </li><!--[repeat-item]event,index in eventlist--><li class="shikuang-lineRight">

                    <span class="sk-time">73'</span>
                    <span class="shikuang-ball">
                    <i class="black-ball">
                        <!--<if: event.eventtype == EventType.LIANG_HUANG_BIAN_HONG />-->
                    </i>
                </span>

                    <!--<if: event.is_team == 1 && event.eventtype != EventType.HUAN_REN />-->

                    <!--<if: event.eventtype == EventType.JIN_QIU />--><code class="jinqiu">进球</code>
                    <!--<if: event.eventtype == EventType.DIAN_QIU />-->
                    <!--<if: event.eventtype == EventType.WU_XIAO />-->
                    <!--<if: event.eventtype == EventType.WU_LONG />-->

                    <!--<if: event.eventtype == EventType.HUAN_REN />-->
                    <!--服务端的数据太恶心，只能使用如此龌龊的三元表达式：服务没有数据，且进球的情况下，展示球队-->
                    <!--<if: event.is_team != 1 && event.eventtype != EventType.HUAN_REN />--><div class="ren-name">【福  冈】</div>

                    <!--<if: event.eventtype == EventType.HUAN_REN />-->
                    <!--<span class="s-bf">1:3</span>-->
                </li><!--[repeat-item]event,index in eventlist--><li class="shikuang-lineRight">

                    <span class="sk-time">42'</span>
                    <span class="shikuang-ball">
                    <i class="black-ball">
                        <!--<if: event.eventtype == EventType.LIANG_HUANG_BIAN_HONG />-->
                    </i>
                </span>

                    <!--<if: event.is_team == 1 && event.eventtype != EventType.HUAN_REN />-->

                    <!--<if: event.eventtype == EventType.JIN_QIU />--><code class="jinqiu">进球</code>
                    <!--<if: event.eventtype == EventType.DIAN_QIU />-->
                    <!--<if: event.eventtype == EventType.WU_XIAO />-->
                    <!--<if: event.eventtype == EventType.WU_LONG />-->

                    <!--<if: event.eventtype == EventType.HUAN_REN />-->
                    <!--服务端的数据太恶心，只能使用如此龌龊的三元表达式：服务没有数据，且进球的情况下，展示球队-->
                    <!--<if: event.is_team != 1 && event.eventtype != EventType.HUAN_REN />--><div class="ren-name">【福  冈】</div>

                    <!--<if: event.eventtype == EventType.HUAN_REN />-->
                    <!--<span class="s-bf">1:3</span>-->
                </li><!--[repeat-item]event,index in eventlist--><li class="shikuang-lineRight">

                    <span class="sk-time">24'</span>
                    <span class="shikuang-ball">
                    <i class="black-ball">
                        <!--<if: event.eventtype == EventType.LIANG_HUANG_BIAN_HONG />-->
                    </i>
                </span>

                    <!--<if: event.is_team == 1 && event.eventtype != EventType.HUAN_REN />-->

                    <!--<if: event.eventtype == EventType.JIN_QIU />--><code class="jinqiu">进球</code>
                    <!--<if: event.eventtype == EventType.DIAN_QIU />-->
                    <!--<if: event.eventtype == EventType.WU_XIAO />-->
                    <!--<if: event.eventtype == EventType.WU_LONG />-->

                    <!--<if: event.eventtype == EventType.HUAN_REN />-->
                    <!--服务端的数据太恶心，只能使用如此龌龊的三元表达式：服务没有数据，且进球的情况下，展示球队-->
                    <!--<if: event.is_team != 1 && event.eventtype != EventType.HUAN_REN />--><div class="ren-name">【福  冈】</div>

                    <!--<if: event.eventtype == EventType.HUAN_REN />-->
                    <!--<span class="s-bf">1:3</span>-->
                </li><!--[repeat-item]event,index in eventlist--><li class="shikuang-lineRight">

                    <span class="sk-time">18'</span>
                    <span class="shikuang-ball">
                    <i class="black-ball">
                        <!--<if: event.eventtype == EventType.LIANG_HUANG_BIAN_HONG />-->
                    </i>
                </span>

                    <!--<if: event.is_team == 1 && event.eventtype != EventType.HUAN_REN />-->

                    <!--<if: event.eventtype == EventType.JIN_QIU />--><code class="jinqiu">进球</code>
                    <!--<if: event.eventtype == EventType.DIAN_QIU />-->
                    <!--<if: event.eventtype == EventType.WU_XIAO />-->
                    <!--<if: event.eventtype == EventType.WU_LONG />-->

                    <!--<if: event.eventtype == EventType.HUAN_REN />-->
                    <!--服务端的数据太恶心，只能使用如此龌龊的三元表达式：服务没有数据，且进球的情况下，展示球队-->
                    <!--<if: event.is_team != 1 && event.eventtype != EventType.HUAN_REN />--><div class="ren-name">【福  冈】</div>

                    <!--<if: event.eventtype == EventType.HUAN_REN />-->
                    <!--<span class="s-bf">1:3</span>-->
                </li><!--[repeat-item]event,index in eventlist--><li class="shikuang-lineLeft">

                    <span class="sk-time">17'</span>
                    <span class="shikuang-ball">
                    <i class="yellow-card">
                        <!--<if: event.eventtype == EventType.LIANG_HUANG_BIAN_HONG />-->
                    </i>
                </span>

                    <!--<if: event.is_team == 1 && event.eventtype != EventType.HUAN_REN />--><div class="ren-name">【金泽】</div>

                    <!--<if: event.eventtype == EventType.JIN_QIU />-->
                    <!--<if: event.eventtype == EventType.DIAN_QIU />-->
                    <!--<if: event.eventtype == EventType.WU_XIAO />-->
                    <!--<if: event.eventtype == EventType.WU_LONG />-->

                    <!--<if: event.eventtype == EventType.HUAN_REN />-->
                    <!--服务端的数据太恶心，只能使用如此龌龊的三元表达式：服务没有数据，且进球的情况下，展示球队-->
                    <!--<if: event.is_team != 1 && event.eventtype != EventType.HUAN_REN />-->

                    <!--<if: event.eventtype == EventType.HUAN_REN />-->
                    <!--<span class="s-bf">1:3</span>-->
                </li><!--</repeat>: event,index in eventlist-->

                    <!--<if: (status && status == StatusCode.NOT_STARTED) || match.status == StatusCode.NOT_STARTED />-->
                    <!--<if: status != null && status != StatusCode.NOT_STARTED />--><li class="d-zt-box"><span class="d-zt">开始</span></li>
                </ul>
            </div>

            <div class="sk-intro">
                <img src="http://tccache.500.com/mobile/touch/images/bifen/intro.png" width="100%">
            </div></div>
        <div><div class="sk-nav">统计</div>

            <!--<if: !isRequesting && (!statistic || statistic.h_ballcontrol_rate == null) />-->

            <!--<if: statistic />--><div class="tongji-box">
                <div class="zhzl-box">
                    <div class="zhzl-title">控球率</div>
                    <div class="zhzl-vs">
                        <div class="zhzl-l zhzl-green" style="width: 53%;">
                            <div class="wua">
                                <div class="hh"></div>
                            </div>
                        </div>
                        <div class="zhzl-r zhzl-gray" style="width: 47%;">
                            <div class="wua">
                                <div class="hh"></div>
                            </div>
                        </div>
                    </div>
                    <div class="zhzl-bfb-left">53<i>%</i></div>
                    <div class="zhzl-bfb-right">47<i>%</i></div>
                </div>
                <div class="zhedie">
                    <ul class="zhzl-list">
                        <!--<repeat>: name,type in StatisticType--><!--[repeat-item]name,type in StatisticType--><li class="responsive">
                        <div class="zhzl-left">8</div>
                        <div class="each-resone">
                            <div class="zhzl-classify">射门</div>
                            <div class="responsive">
                                <div class="each-resone l-relative">
                                    <div class="zhzl-vs-left gray-bg" style="width:27.586206896551722%;"></div>
                                </div>
                                <div class="each-resone l-relative">
                                    <div class="zhzl-vs-right green-bg" style="width:72.41379310344827%;"></div>
                                </div>
                            </div>
                        </div>
                        <div class="zhzl-right">21</div>
                    </li><!--[repeat-item]name,type in StatisticType--><li class="responsive">
                        <div class="zhzl-left">2</div>
                        <div class="each-resone">
                            <div class="zhzl-classify">射正</div>
                            <div class="responsive">
                                <div class="each-resone l-relative">
                                    <div class="zhzl-vs-left gray-bg" style="width:14.285714285714285%;"></div>
                                </div>
                                <div class="each-resone l-relative">
                                    <div class="zhzl-vs-right green-bg" style="width:85.71428571428571%;"></div>
                                </div>
                            </div>
                        </div>
                        <div class="zhzl-right">12</div>
                    </li><!--[repeat-item]name,type in StatisticType--><li class="responsive">
                        <div class="zhzl-left">56</div>
                        <div class="each-resone">
                            <div class="zhzl-classify">危险进攻</div>
                            <div class="responsive">
                                <div class="each-resone l-relative">
                                    <div class="zhzl-vs-left green-bg" style="width:55.44554455445545%;"></div>
                                </div>
                                <div class="each-resone l-relative">
                                    <div class="zhzl-vs-right gray-bg" style="width:44.554455445544555%;"></div>
                                </div>
                            </div>
                        </div>
                        <div class="zhzl-right">45</div>
                    </li><!--[repeat-item]name,type in StatisticType--><li class="responsive">
                        <div class="zhzl-left">116</div>
                        <div class="each-resone">
                            <div class="zhzl-classify">进攻次数</div>
                            <div class="responsive">
                                <div class="each-resone l-relative">
                                    <div class="zhzl-vs-left green-bg" style="width:56.58536585365853%;"></div>
                                </div>
                                <div class="each-resone l-relative">
                                    <div class="zhzl-vs-right gray-bg" style="width:43.41463414634146%;"></div>
                                </div>
                            </div>
                        </div>
                        <div class="zhzl-right">89</div>
                    </li><!--[repeat-item]name,type in StatisticType--><li class="responsive">
                        <div class="zhzl-left">0</div>
                        <div class="each-resone">
                            <div class="zhzl-classify">红牌</div>
                            <div class="responsive">
                                <div class="each-resone l-relative">
                                    <div class="zhzl-vs-left gray-bg" style="width:2%;"></div>
                                </div>
                                <div class="each-resone l-relative">
                                    <div class="zhzl-vs-right gray-bg" style="width:2%;"></div>
                                </div>
                            </div>
                        </div>
                        <div class="zhzl-right">0</div>
                    </li><!--[repeat-item]name,type in StatisticType--><li class="responsive">
                        <div class="zhzl-left">1</div>
                        <div class="each-resone">
                            <div class="zhzl-classify">黄牌</div>
                            <div class="responsive">
                                <div class="each-resone l-relative">
                                    <div class="zhzl-vs-left green-bg" style="width:100%;"></div>
                                </div>
                                <div class="each-resone l-relative">
                                    <div class="zhzl-vs-right gray-bg" style="width:0%;"></div>
                                </div>
                            </div>
                        </div>
                        <div class="zhzl-right">0</div>
                    </li><!--[repeat-item]name,type in StatisticType--><li class="responsive">
                        <div class="zhzl-left">10</div>
                        <div class="each-resone">
                            <div class="zhzl-classify">犯规</div>
                            <div class="responsive">
                                <div class="each-resone l-relative">
                                    <div class="zhzl-vs-left green-bg" style="width:66.66666666666666%;"></div>
                                </div>
                                <div class="each-resone l-relative">
                                    <div class="zhzl-vs-right gray-bg" style="width:33.33333333333333%;"></div>
                                </div>
                            </div>
                        </div>
                        <div class="zhzl-right">5</div>
                    </li><!--[repeat-item]name,type in StatisticType--><li class="responsive">
                        <div class="zhzl-left">1</div>
                        <div class="each-resone">
                            <div class="zhzl-classify">越位</div>
                            <div class="responsive">
                                <div class="each-resone l-relative">
                                    <div class="zhzl-vs-left gray-bg" style="width:50%;"></div>
                                </div>
                                <div class="each-resone l-relative">
                                    <div class="zhzl-vs-right gray-bg" style="width:50%;"></div>
                                </div>
                            </div>
                        </div>
                        <div class="zhzl-right">1</div>
                    </li><!--[repeat-item]name,type in StatisticType--><li class="responsive">
                        <div class="zhzl-left">0</div>
                        <div class="each-resone">
                            <div class="zhzl-classify">角球</div>
                            <div class="responsive">
                                <div class="each-resone l-relative">
                                    <div class="zhzl-vs-left gray-bg" style="width:0%;"></div>
                                </div>
                                <div class="each-resone l-relative">
                                    <div class="zhzl-vs-right green-bg" style="width:100%;"></div>
                                </div>
                            </div>
                        </div>
                        <div class="zhzl-right">10</div>
                    </li><!--[repeat-item]name,type in StatisticType--><li class="responsive">
                        <div class="zhzl-left">6</div>
                        <div class="each-resone">
                            <div class="zhzl-classify">任意球</div>
                            <div class="responsive">
                                <div class="each-resone l-relative">
                                    <div class="zhzl-vs-left gray-bg" style="width:35.294117647058826%;"></div>
                                </div>
                                <div class="each-resone l-relative">
                                    <div class="zhzl-vs-right green-bg" style="width:64.70588235294117%;"></div>
                                </div>
                            </div>
                        </div>
                        <div class="zhzl-right">11</div>
                    </li><!--</repeat>: name,type in StatisticType-->

                    </ul>
                </div>
            </div></div>


        <!--<component>: me-sports--><!--<if: news&&news.length />-->

        <!--</component>: me-sports-->

        <!--<if: (eventlist && eventlist.length) || (statistic && statistic.h_ballcontrol_rate != null) />--><div class="sk-btips">
        500彩票网提示：<br>以上数据仅供参考，请以官方公布的数据为准
            </div>
    </div>
</template>
