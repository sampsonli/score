<template>
    <div class="zhedie-box">
        <!--<if: subtab != 'bifa' />-->
        <!--<if: subtab === 'europe' />-->
        <!--<if: subtab === 'asian' />-->
        <!--<if: subtab === 'rangqiu' />-->
        <!--<if: subtab === 'daxiaopan' />-->
        <!--<if: subtab === 'bifa' />--><div><div class="bifa-stat">
        <div class="gl-nav">
            必发数据
        </div>
        <!--<if: oddsDataMap.bifa.spdex_data />--><table cellspacing="0" cellpadding="0" border="0" class="fx-table" width="100%">
        <tbody><tr>
            <th>选项</th>
            <th width="16%">成交价</th>
            <th width="26%">交易量</th>
            <th width="26%">庄家盈亏</th>
            <th width="15%">冷热</th>
        </tr>
        <tr>
            <td>主胜</td>
            <td>1.48</td>
            <td>33300</td>
            <td><span class="green2">-8640</span></td>
            <td>29</td>
        </tr>
        <tr>
            <td>平</td>
            <td>4.50</td>
            <td>2072</td>
            <td><span class="red2">31322</span></td>
            <td>-78</td>
        </tr>
        <tr>
            <td>主负</td>
            <td>9.40</td>
            <td>5273</td>
            <td><span class="green2">-8919</span></td>
            <td>-6</td>
        </tr>
        </tbody></table>
        <!--<if: oddsDataMap.bifa.presentations />--><div class="infoTips">
        <i class="icon"></i>
        <p class="f24">本场比赛必发交易规模较小，数据参考性不强</p>
    </div>
        <!--<if: !oddsDataMap.bifa&&!isBifaRequest />-->
        <!--<if: isBifaRequest />-->
    </div>
        <div class="bifa-stat bifa-volume">
            <div class="gl-nav clear">
                交易数据
                <!--
        <ul class="volumeTab">
            <li drunk-class="{'cur':bifaTab=='all'}" drunk-on="click:bifaTab='all'">总览</li>
            <li drunk-if="oddsDataMap.bifa.big_trade" drunk-class="{'cur':bifaTab=='big'}" drunk-on="click:bifaTab='big'">大额</li>
        </ul>
        -->
            </div>
            <!--<if: bifaTab=='all'&&oddsDataMap.bifa.all_trade.pie_chart />--><div class="volumeBox">
            <div class="bili-box">
                <div class="chart into">
                    <div class="volumeChart" _echarts_instance_="ec_1495948379651" style="-webkit-tap-highlight-color: transparent; user-select: none; position: relative; background: transparent;"><div style="position: relative; overflow: hidden; width: 250px; height: 250px; padding: 0px; margin: 0px; border-width: 0px;"><canvas width="500" height="500" data-zr-dom-id="zr_0" style="position: absolute; left: 0px; top: 0px; width: 250px; height: 250px; user-select: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); padding: 0px; margin: 0px; border-width: 0px;"></canvas></div><div></div></div>
                    <div class="info">
                        <em class="f34">40,645</em>
                        <p class="f22">总交易[港币]</p>
                    </div>
                </div>
                <div class="wdl-box">
                    <div class="wins"> <span class="wdl-bili"><em class="wdl-mun">81.9</em> <em class="wdl-bfh">%</em></span> <span class="wdl-tips">胜</span> <span class="wdl-count f20">33,300</span></div>
                    <div class="draws"> <span class="wdl-bili"><em class="wdl-mun">5.1</em> <em class="wdl-bfh">%</em></span> <span class="wdl-tips">平</span> <span class="wdl-count f20">2,072</span></div>
                    <div class="losses"> <span class="wdl-bili"><em class="wdl-mun">13.0</em> <em class="wdl-bfh">%</em></span> <span class="wdl-tips">负</span> <span class="wdl-count f20">5,273</span></div>
                </div>
            </div>
            <p class="bili-tips">

            </p>
            <div class="volumeAll">
                <div class="all-qushi1" _echarts_instance_="ec_1495948379652" style="-webkit-tap-highlight-color: transparent; user-select: none; position: relative; background: transparent;"><div style="position: relative; overflow: hidden; width: 690px; height: 440px; padding: 0px; margin: 0px; border-width: 0px;"><canvas width="1380" height="880" data-zr-dom-id="zr_0" style="position: absolute; left: 0px; top: 0px; width: 690px; height: 440px; user-select: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); padding: 0px; margin: 0px; border-width: 0px;"></canvas></div><div></div></div>
                <div class="all-qushi1" _echarts_instance_="ec_1495948379653" style="-webkit-tap-highlight-color: transparent; user-select: none; position: relative; background: transparent;"><div style="position: relative; overflow: hidden; width: 690px; height: 441px; padding: 0px; margin: 0px; border-width: 0px;"><canvas width="1380" height="882" data-zr-dom-id="zr_0" style="position: absolute; left: 0px; top: 0px; width: 690px; height: 441px; user-select: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); padding: 0px; margin: 0px; border-width: 0px;"></canvas></div><div></div></div>
            </div>
        </div>
            <!--<if: bifaTab=='big'&&oddsDataMap.bifa.big_trade />-->
            <!--<if: !oddsDataMap.bifa&&!isBifaRequest />-->
            <!--<if: isBifaRequest />-->
        </div></div>
    </div>
</template>
