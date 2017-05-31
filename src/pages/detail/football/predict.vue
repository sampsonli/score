<template>
    <div><div class="gl-box box-yc">
        <div class="gl-nav">胜平负 <span class="yc-more"></span></div>
        <div class="box-ycInner">

            <!--<if: predictEurope />--><div class="dataBox">
            <ul class="dataItem">
                <li class="itemL red2">
                    <em class="num">70</em>
                    <span class="numSub">%</span>
                    <span class="item-info2">主胜</span>
                </li>
                <li class="itemC">
                    <em class="num">25</em>
                    <span class="numSub">%</span>
                    <span class="item-info2">平</span>
                </li>
                <li class="itemR">
                    <em class="num">5</em>
                    <span class="numSub">%</span>
                    <span class="item-info2">主负</span>
                </li>
            </ul>
        </div>

            <!--<if: predictEurope />--><div class="chart-yuce" _echarts_instance_="ec_1495939967569" style="-webkit-tap-highlight-color: transparent; user-select: none; position: relative; background: transparent;"><div style="position: relative; overflow: hidden; width: 690px; height: 440px; padding: 0px; margin: 0px; border-width: 0px; cursor: default;"><canvas width="1380" height="880" data-zr-dom-id="zr_0" style="position: absolute; left: 0px; top: 0px; width: 690px; height: 440px; user-select: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); padding: 0px; margin: 0px; border-width: 0px;"></canvas></div><div></div></div>
            <!--<if: !predictEurope&&!isPredictEuropeRequest />-->
            <!--<if: isPredictEuropeRequest />-->
        </div>
    </div>

        <!--<if: predictAsian />--><div class="gl-box box-yc">
            <div class="gl-nav">
                亚盘（盘口：一球/球半）
                <span class="yc-more"></span></div>
            <div class="box-ycInner">

                <!--<if: predictAsian />--><div class="dataBox">
                <ul class="dataItem">
                    <li class="itemL red2">
                        <em class="num">60</em>
                        <span class="numSub">%</span>
                        <span class="item-info2">赢盘</span>
                    </li>
                    <li class="itemC">
                        <em class="num">0</em>
                        <span class="numSub">%</span>
                        <span class="item-info2">走盘</span>
                    </li>
                    <li class="itemR">
                        <em class="num">40</em>
                        <span class="numSub">%</span>
                        <span class="item-info2">输盘</span>
                    </li>
                </ul>
            </div>

                <!--<if: predictAsian />--><div class="chart-yuce" _echarts_instance_="ec_1495939967570" style="-webkit-tap-highlight-color: transparent; user-select: none; position: relative; background: transparent;"><div style="position: relative; overflow: hidden; width: 690px; height: 440px; padding: 0px; margin: 0px; border-width: 0px; cursor: default;"><canvas width="1380" height="880" data-zr-dom-id="zr_0" style="position: absolute; left: 0px; top: 0px; width: 690px; height: 440px; user-select: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); padding: 0px; margin: 0px; border-width: 0px;"></canvas></div><div></div></div>
                <!--<if: !predictAsian&&!isPredictAsianRequest />-->
                <!--<if: isPredictAsianRequest />-->
            </div>
        </div>

        <!--<if: predictDaXiao />--><div class="gl-box box-yc">
            <div class="gl-nav">
                大小盘（盘口：2.5）
                <span class="yc-more"></span></div>
            <div class="box-ycInner">

                <!--<if: predictDaXiao />--><div class="dataBox">
                <ul class="dataItem">
                    <li class="itemL">
                        <em class="num">35</em>
                        <span class="numSub">%</span>
                        <span class="item-info2">大球</span>
                    </li>
                    <li class="itemC">
                        <em class="num">0</em>
                        <span class="numSub">%</span>
                        <span class="item-info2">走盘</span>
                    </li>
                    <li class="itemR red2">
                        <em class="num">65</em>
                        <span class="numSub">%</span>
                        <span class="item-info2">小球</span>
                    </li>
                </ul>
            </div>

                <!--<if: predictDaXiao />--><div class="chart-yuce" _echarts_instance_="ec_1495939967571" style="-webkit-tap-highlight-color: transparent; user-select: none; position: relative; background: transparent;"><div style="position: relative; overflow: hidden; width: 690px; height: 440px; padding: 0px; margin: 0px; border-width: 0px; cursor: default;"><canvas width="1380" height="880" data-zr-dom-id="zr_0" style="position: absolute; left: 0px; top: 0px; width: 690px; height: 440px; user-select: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); padding: 0px; margin: 0px; border-width: 0px;"></canvas></div><div></div></div>
                <!--<if: !predictDaXiao&&!isPredictDaXiaoRequest />-->
                <!--<if: isPredictDaXiaoRequest />-->
            </div>
        </div>

        <div class="gl-box box-yc">

            <div class="gl-nav">比分与进球 <span class="yc-more"></span></div>
            <div class="box-ycInner box-yc-bifen">

                <!--<if: predictScore />--><div class="dataBox">
                <ul class="dataItem">
                    <li class="itemL red2">
                        <em class="num">15</em> <span class="numSub">%</span> <span class="item-info2">1:0</span></li>
                    <li class="itemC">
                        <em class="num">13</em> <span class="numSub">%</span> <span class="item-info2">2:0</span></li>
                    <li class="itemR">
                        <em class="num">11</em> <span class="numSub">%</span> <span class="item-info2">1:1</span></li>
                </ul>
                <ul class="dataItem">
                    <li class="itemL red2">
                        <em class="num">26</em> <span class="numSub">%</span> <span class="item-info2">2球</span></li>
                    <li class="itemC">
                        <em class="num">22</em> <span class="numSub">%</span> <span class="item-info2">1球</span></li>
                    <li class="itemR">
                        <em class="num">21</em> <span class="numSub">%</span> <span class="item-info2">3球</span></li>
                </ul>
            </div>
                <!--<if: predictScore />--><div class="chart-yuce" style="height: 5.2rem; -webkit-tap-highlight-color: transparent; user-select: none; position: relative; background: transparent;" _echarts_instance_="ec_1495939967572"><div style="position: relative; overflow: hidden; width: 690px; height: 390px; padding: 0px; margin: 0px; border-width: 0px; cursor: default;"><canvas width="1380" height="780" data-zr-dom-id="zr_0" style="position: absolute; left: 0px; top: 0px; width: 690px; height: 390px; user-select: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); padding: 0px; margin: 0px; border-width: 0px;"></canvas></div><div style="position: absolute; display: block; border-style: solid; white-space: nowrap; z-index: 9999999; transition: left 0.4s cubic-bezier(0.23, 1, 0.32, 1), top 0.4s cubic-bezier(0.23, 1, 0.32, 1); background-color: rgba(255, 255, 255, 0.96); border-width: 1px; border-color: rgb(244, 244, 244); border-radius: 4px; color: rgb(255, 255, 255); font-style: normal; font-variant: normal; font-weight: normal; font-stretch: normal; font-size: 22px; font-family: &quot;Microsoft YaHei&quot;; line-height: 33px; padding: 10px 20px; left: 499.667px; top: 59.09px;"> <span style="color:#d3553d;font-size:26px">6%</span> | <span style="color:#437ba8;font-size:26px">1%</span></div></div>
                <!--<if: !predictScore&&!isPredictScoreRequest />-->
                <!--<if: isPredictScoreRequest />-->
            </div>
        </div>

        <div class="gl-box box-yc">
            <div class="gl-nav">半场 <span class="yc-more"></span></div>
            <div class="box-ycInner">

                <!--<if: predictHalf />--><div class="dataBox">
                <ul class="dataItem">
                    <li class="itemL red2">
                        <em class="num">43</em> <span class="numSub">%</span> <span class="item-info2">主胜</span></li>
                    <li class="itemC">
                        <em class="num">40</em> <span class="numSub">%</span> <span class="item-info2">平</span></li>
                    <li class="itemR">
                        <em class="num">17</em> <span class="numSub">%</span> <span class="item-info2">主负</span></li>
                </ul>
                <ul class="dataItem">
                    <li class="itemL red2">
                        <em class="num">29</em> <span class="numSub">%</span> <span class="item-info2">0:0</span></li>
                    <li class="itemC">
                        <em class="num">24</em> <span class="numSub">%</span> <span class="item-info2">1:0</span></li>
                    <li class="itemR">
                        <em class="num">12</em> <span class="numSub">%</span> <span class="item-info2">0:1</span></li>
                </ul>
                <ul class="dataItem">
                    <li class="itemL red2">
                        <em class="num">36</em> <span class="numSub">%</span> <span class="item-info2">1球</span></li>
                    <li class="itemC">
                        <em class="num">29</em> <span class="numSub">%</span> <span class="item-info2">0球</span></li>
                    <li class="itemR">
                        <em class="num">22</em> <span class="numSub">%</span> <span class="item-info2">2球</span></li>
                </ul>
            </div>
                <!--<if: !predictHalf&&!isPredictHalfRequest />-->
                <!--<if: isPredictHalfRequest />-->
            </div>
        </div>
        <div class="sk-btips">
            500彩票网提示：<br>以上数据仅供参考，请以官方公布的数据为准
        </div></div>
</template>
