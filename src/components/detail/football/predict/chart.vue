<template>
    <div class="l-full l-flex-column  slide-bottom-to-top drunk-created">
        <div class="popTopbar"></div>
        <div class="popInner box-yc">
            <div class="full-scroll">
                <div class="popHeader">
                    <h4 class="popTit">概率分布</h4>
                    <ul class="dataItem">
                        <li class="itemL red2">
                            <em class="num">40</em>
                            <span class="numSub">%</span>
                            <span class="item-info2">主胜</span>
                        </li>
                        <li class="itemC">
                            <em class="num">25</em>
                            <span class="numSub">%</span>
                            <span class="item-info2">平</span>
                        </li>
                        <li class="itemR">
                            <em class="num">35</em>
                            <span class="numSub">%</span>
                            <span class="item-info2">主负</span>
                        </li>
                    </ul>
                </div>
                <ul class="popTab clear">
                    <li class="f30 cur">历史对比
                    </li>
                    <li class="f30">趋势记录
                    </li>
                </ul>
                <div class="popDetail">
                    <h4 class="popTit">本场比赛</h4>
                    <ul class="dataItem">
                        <li class="itemL">
                            <div>韩足杯</div>
                            <div>2017-06-06 </div>
                        </li>
                        <li class="itemC">
                            <table cellpadding="0" cellspacing="0" width="100%">
                                <tbody>
                                <tr>
                                    <td width="35%">
                                        济州联...
                                    </td>
                                    <td width="10%" class="textcenter">
                                        -
                                    </td>
                                    <td>
                                        <!--<if: predictEurope.inner.this_match.result=='3' />-->
                                        <!--<if: predictEurope.inner.this_match.result=='1' />-->
                                        <!--<if: predictEurope.inner.this_match.result=='0' />-->
                                    </td>
                                </tr>
                                <tr>
                                    <td>水原三...</td>
                                    <td class="textcenter">
                                        -
                                    </td>
                                    <td>&nbsp;</td>
                                </tr>
                                </tbody>
                            </table>
                        </li>
                        <li class="itemR">
                            <!--<if: predicttab=='europe' />--><div class="chart-similar" _echarts_instance_="ec_1496719011430" style="height: 195px; -webkit-tap-highlight-color: transparent; -webkit-user-select: none; position: relative; background: transparent;"><div style="position: relative; overflow: hidden; width: 160px; height: 195px; padding: 0px; margin: 0px; border-width: 0px;"><canvas width="320" height="390" data-zr-dom-id="zr_0" style="position: absolute; left: 0px; top: 0px; width: 160px; height: 195px; -webkit-user-select: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); padding: 0px; margin: 0px; border-width: 0px;"></canvas></div><div></div></div>
                        </li>
                    </ul>
                    <div class="popDetail-pl">
                        <table cellpadding="0" cellspacing="0" width="100%">
                            <tbody>
                            <tr>
                                <td width="13%">初赔：</td>
                                <td width="10%">2.00</td>
                                <td width="12%" align="center">3.30</td>
                                <td width="10%" align="right">3.40</td>
                                <td>&nbsp;</td>
                            </tr>
                            <tr>
                                <td>即赔：</td>
                                <td class="red2">
                                    2.20
                                </td>
                                <td align="center" class="red2">
                                    3.40
                                </td>
                                <td align="right" class="green2">
                                    3.20
                                </td>
                                <td>&nbsp;</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <h4 class="popTit">历史样本</h4>
                    <ul class="dataItem dataItem-tit">
                        <li class="itemL">联赛</li>
                        <li class="itemC">对阵</li>
                        <li class="itemR">相似度</li>
                    </ul>

                    <!--<repeat>: item in predictEurope.inner.history_sample--><!--[repeat-item]item in predictEurope.inner.history_sample--><ul class="dataItem">

                    <li class="itemL">
                        <div>德丙联</div>
                        <div>2014-08-09 </div>
                    </li>
                    <li class="itemC">
                        <table cellpadding="0" cellspacing="0" width="100%">
                            <tbody>
                            <tr>
                                <td width="45%">杜伊斯...</td>
                                <td width="10%" class="textcenter">1</td>
                                <td><!--<if: item.result=='3' />-->
                                    <!--<if: item.result=='1' />--><span class="state green">平</span>
                                    <!--<if: item.result=='0' />--></td>
                            </tr>
                            <tr>
                                <td>哈雷斯...</td>
                                <td class="textcenter">1</td>
                                <td>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </li>

                    <li class="itemR">
                        <em class="similar-num">100</em>

                        <!--<if: predicttab=='europe' />--><div class="chart-similar" _echarts_instance_="ec_1496719011431" style="height: 195px; -webkit-tap-highlight-color: transparent; -webkit-user-select: none; position: relative; background: transparent;"><div style="position: relative; overflow: hidden; width: 160px; height: 195px; padding: 0px; margin: 0px; border-width: 0px;"><canvas width="320" height="390" data-zr-dom-id="zr_0" style="position: absolute; left: 0px; top: 0px; width: 160px; height: 195px; -webkit-user-select: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); padding: 0px; margin: 0px; border-width: 0px;"></canvas></div><div></div></div>
                    </li>
                </ul><!--[repeat-item]item in predictEurope.inner.history_sample--><ul class="dataItem">

                    <li class="itemL">
                        <div>斯洛文甲</div>
                        <div>2016-04-11 </div>
                    </li>
                    <li class="itemC">
                        <table cellpadding="0" cellspacing="0" width="100%">
                            <tbody>
                            <tr>
                                <td width="45%">科佩尔</td>
                                <td width="10%" class="textcenter">0</td>
                                <td><!--<if: item.result=='3' />-->
                                    <!--<if: item.result=='1' />-->
                                    <!--<if: item.result=='0' />--><span class="state blue">主负</span></td>
                            </tr>
                            <tr>
                                <td>波萨维...</td>
                                <td class="textcenter">1</td>
                                <td>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </li>

                    <li class="itemR">
                        <em class="similar-num">100</em>

                        <!--<if: predicttab=='europe' />--><div class="chart-similar" _echarts_instance_="ec_1496719011432" style="height: 195px; -webkit-tap-highlight-color: transparent; -webkit-user-select: none; position: relative; background: transparent;"><div style="position: relative; overflow: hidden; width: 160px; height: 195px; padding: 0px; margin: 0px; border-width: 0px;"><canvas width="320" height="390" data-zr-dom-id="zr_0" style="position: absolute; left: 0px; top: 0px; width: 160px; height: 195px; -webkit-user-select: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); padding: 0px; margin: 0px; border-width: 0px;"></canvas></div><div></div></div>
                    </li>
                </ul><!--[repeat-item]item in predictEurope.inner.history_sample--><ul class="dataItem">

                    <li class="itemL">
                        <div>意丙1B</div>
                        <div>2015-11-01 </div>
                    </li>
                    <li class="itemC">
                        <table cellpadding="0" cellspacing="0" width="100%">
                            <tbody>
                            <tr>
                                <td width="45%">凯勒雷...</td>
                                <td width="10%" class="textcenter">1</td>
                                <td><!--<if: item.result=='3' />-->
                                    <!--<if: item.result=='1' />--><span class="state green">平</span>
                                    <!--<if: item.result=='0' />--></td>
                            </tr>
                            <tr>
                                <td>特拉莫</td>
                                <td class="textcenter">1</td>
                                <td>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </li>

                    <li class="itemR">
                        <em class="similar-num">100</em>

                        <!--<if: predicttab=='europe' />--><div class="chart-similar" _echarts_instance_="ec_1496719011433" style="height: 195px; -webkit-tap-highlight-color: transparent; -webkit-user-select: none; position: relative; background: transparent;"><div style="position: relative; overflow: hidden; width: 160px; height: 195px; padding: 0px; margin: 0px; border-width: 0px;"><canvas width="320" height="390" data-zr-dom-id="zr_0" style="position: absolute; left: 0px; top: 0px; width: 160px; height: 195px; -webkit-user-select: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); padding: 0px; margin: 0px; border-width: 0px;"></canvas></div><div></div></div>
                    </li>
                </ul><!--[repeat-item]item in predictEurope.inner.history_sample--><ul class="dataItem">

                    <li class="itemL">
                        <div>北美联</div>
                        <div>2015-09-06 </div>
                    </li>
                    <li class="itemC">
                        <table cellpadding="0" cellspacing="0" width="100%">
                            <tbody>
                            <tr>
                                <td width="45%">印地十...</td>
                                <td width="10%" class="textcenter">3</td>
                                <td><!--<if: item.result=='3' />--><span class="state red">主胜</span>
                                    <!--<if: item.result=='1' />-->
                                    <!--<if: item.result=='0' />--></td>
                            </tr>
                            <tr>
                                <td>杰克逊...</td>
                                <td class="textcenter">0</td>
                                <td>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </li>

                    <li class="itemR">
                        <em class="similar-num">100</em>

                        <!--<if: predicttab=='europe' />--><div class="chart-similar" _echarts_instance_="ec_1496719011434" style="height: 195px; -webkit-tap-highlight-color: transparent; -webkit-user-select: none; position: relative; background: transparent;"><div style="position: relative; overflow: hidden; width: 160px; height: 195px; padding: 0px; margin: 0px; border-width: 0px;"><canvas width="320" height="390" data-zr-dom-id="zr_0" style="position: absolute; left: 0px; top: 0px; width: 160px; height: 195px; -webkit-user-select: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); padding: 0px; margin: 0px; border-width: 0px;"></canvas></div><div></div></div>
                    </li>
                </ul><!--[repeat-item]item in predictEurope.inner.history_sample--><ul class="dataItem">

                    <li class="itemL">
                        <div>德巴联</div>
                        <div>2017-03-18 </div>
                    </li>
                    <li class="itemC">
                        <table cellpadding="0" cellspacing="0" width="100%">
                            <tbody>
                            <tr>
                                <td width="45%">慕尼黑...</td>
                                <td width="10%" class="textcenter">1</td>
                                <td><!--<if: item.result=='3' />--><span class="state red">主胜</span>
                                    <!--<if: item.result=='1' />-->
                                    <!--<if: item.result=='0' />--></td>
                            </tr>
                            <tr>
                                <td>奥格斯...</td>
                                <td class="textcenter">0</td>
                                <td>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </li>

                    <li class="itemR">
                        <em class="similar-num">100</em>

                        <!--<if: predicttab=='europe' />--><div class="chart-similar" _echarts_instance_="ec_1496719011435" style="height: 195px; -webkit-tap-highlight-color: transparent; -webkit-user-select: none; position: relative; background: transparent;"><div style="position: relative; overflow: hidden; width: 160px; height: 195px; padding: 0px; margin: 0px; border-width: 0px;"><canvas width="320" height="390" data-zr-dom-id="zr_0" style="position: absolute; left: 0px; top: 0px; width: 160px; height: 195px; -webkit-user-select: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); padding: 0px; margin: 0px; border-width: 0px;"></canvas></div><div></div></div>
                    </li>
                </ul><!--[repeat-item]item in predictEurope.inner.history_sample--><ul class="dataItem">

                    <li class="itemL">
                        <div>中超</div>
                        <div>2017-05-12 </div>
                    </li>
                    <li class="itemC">
                        <table cellpadding="0" cellspacing="0" width="100%">
                            <tbody>
                            <tr>
                                <td width="45%">广州富...</td>
                                <td width="10%" class="textcenter">1</td>
                                <td><!--<if: item.result=='3' />-->
                                    <!--<if: item.result=='1' />--><span class="state green">平</span>
                                    <!--<if: item.result=='0' />--></td>
                            </tr>
                            <tr>
                                <td>河北华...</td>
                                <td class="textcenter">1</td>
                                <td>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </li>

                    <li class="itemR">
                        <em class="similar-num">100</em>

                        <!--<if: predicttab=='europe' />--><div class="chart-similar" _echarts_instance_="ec_1496719011436" style="height: 195px; -webkit-tap-highlight-color: transparent; -webkit-user-select: none; position: relative; background: transparent;"><div style="position: relative; overflow: hidden; width: 160px; height: 195px; padding: 0px; margin: 0px; border-width: 0px;"><canvas width="320" height="390" data-zr-dom-id="zr_0" style="position: absolute; left: 0px; top: 0px; width: 160px; height: 195px; -webkit-user-select: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); padding: 0px; margin: 0px; border-width: 0px;"></canvas></div><div></div></div>
                    </li>
                </ul><!--[repeat-item]item in predictEurope.inner.history_sample--><ul class="dataItem">

                    <li class="itemL">
                        <div>智甲</div>
                        <div>2014-03-02 </div>
                    </li>
                    <li class="itemC">
                        <table cellpadding="0" cellspacing="0" width="100%">
                            <tbody>
                            <tr>
                                <td width="45%">安图法...</td>
                                <td width="10%" class="textcenter">2</td>
                                <td><!--<if: item.result=='3' />-->
                                    <!--<if: item.result=='1' />-->
                                    <!--<if: item.result=='0' />--><span class="state blue">主负</span></td>
                            </tr>
                            <tr>
                                <td>尤尼昂</td>
                                <td class="textcenter">3</td>
                                <td>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </li>

                    <li class="itemR">
                        <em class="similar-num">100</em>

                        <!--<if: predicttab=='europe' />--><div class="chart-similar" _echarts_instance_="ec_1496719011437" style="height: 195px; -webkit-tap-highlight-color: transparent; -webkit-user-select: none; position: relative; background: transparent;"><div style="position: relative; overflow: hidden; width: 160px; height: 195px; padding: 0px; margin: 0px; border-width: 0px;"><canvas width="320" height="390" data-zr-dom-id="zr_0" style="position: absolute; left: 0px; top: 0px; width: 160px; height: 195px; -webkit-user-select: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); padding: 0px; margin: 0px; border-width: 0px;"></canvas></div><div></div></div>
                    </li>
                </ul><!--[repeat-item]item in predictEurope.inner.history_sample--><ul class="dataItem">

                    <li class="itemL">
                        <div>罗甲</div>
                        <div>2014-11-01 </div>
                    </li>
                    <li class="itemC">
                        <table cellpadding="0" cellspacing="0" width="100%">
                            <tbody>
                            <tr>
                                <td width="45%">CS卡...</td>
                                <td width="10%" class="textcenter">2</td>
                                <td><!--<if: item.result=='3' />--><span class="state red">主胜</span>
                                    <!--<if: item.result=='1' />-->
                                    <!--<if: item.result=='0' />--></td>
                            </tr>
                            <tr>
                                <td>波图森...</td>
                                <td class="textcenter">1</td>
                                <td>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </li>

                    <li class="itemR">
                        <em class="similar-num">100</em>

                        <!--<if: predicttab=='europe' />--><div class="chart-similar" _echarts_instance_="ec_1496719011438" style="height: 195px; -webkit-tap-highlight-color: transparent; -webkit-user-select: none; position: relative; background: transparent;"><div style="position: relative; overflow: hidden; width: 160px; height: 195px; padding: 0px; margin: 0px; border-width: 0px;"><canvas width="320" height="390" data-zr-dom-id="zr_0" style="position: absolute; left: 0px; top: 0px; width: 160px; height: 195px; -webkit-user-select: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); padding: 0px; margin: 0px; border-width: 0px;"></canvas></div><div></div></div>
                    </li>
                </ul><!--[repeat-item]item in predictEurope.inner.history_sample--><ul class="dataItem">

                    <li class="itemL">
                        <div>波甲</div>
                        <div>2014-02-25 </div>
                    </li>
                    <li class="itemC">
                        <table cellpadding="0" cellspacing="0" width="100%">
                            <tbody>
                            <tr>
                                <td width="45%">萨维斯...</td>
                                <td width="10%" class="textcenter">0</td>
                                <td><!--<if: item.result=='3' />-->
                                    <!--<if: item.result=='1' />-->
                                    <!--<if: item.result=='0' />--><span class="state blue">主负</span></td>
                            </tr>
                            <tr>
                                <td>列治亚</td>
                                <td class="textcenter">3</td>
                                <td>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </li>

                    <li class="itemR">
                        <em class="similar-num">100</em>

                        <!--<if: predicttab=='europe' />--><div class="chart-similar" _echarts_instance_="ec_1496719011439" style="height: 195px; -webkit-tap-highlight-color: transparent; -webkit-user-select: none; position: relative; background: transparent;"><div style="position: relative; overflow: hidden; width: 160px; height: 195px; padding: 0px; margin: 0px; border-width: 0px;"><canvas width="320" height="390" data-zr-dom-id="zr_0" style="position: absolute; left: 0px; top: 0px; width: 160px; height: 195px; -webkit-user-select: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); padding: 0px; margin: 0px; border-width: 0px;"></canvas></div><div></div></div>
                    </li>
                </ul><!--[repeat-item]item in predictEurope.inner.history_sample--><ul class="dataItem">

                    <li class="itemL">
                        <div>德北联</div>
                        <div>2016-10-29 </div>
                    </li>
                    <li class="itemC">
                        <table cellpadding="0" cellspacing="0" width="100%">
                            <tbody>
                            <tr>
                                <td width="45%">雷登</td>
                                <td width="10%" class="textcenter">0</td>
                                <td><!--<if: item.result=='3' />-->
                                    <!--<if: item.result=='1' />-->
                                    <!--<if: item.result=='0' />--><span class="state blue">主负</span></td>
                            </tr>
                            <tr>
                                <td>席尔登...</td>
                                <td class="textcenter">1</td>
                                <td>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </li>

                    <li class="itemR">
                        <em class="similar-num">100</em>

                        <!--<if: predicttab=='europe' />--><div class="chart-similar" _echarts_instance_="ec_1496719011440" style="height: 195px; -webkit-tap-highlight-color: transparent; -webkit-user-select: none; position: relative; background: transparent;"><div style="position: relative; overflow: hidden; width: 160px; height: 195px; padding: 0px; margin: 0px; border-width: 0px;"><canvas width="320" height="390" data-zr-dom-id="zr_0" style="position: absolute; left: 0px; top: 0px; width: 160px; height: 195px; -webkit-user-select: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); padding: 0px; margin: 0px; border-width: 0px;"></canvas></div><div></div></div>
                    </li>
                </ul><!--[repeat-item]item in predictEurope.inner.history_sample--><ul class="dataItem">

                    <li class="itemL">
                        <div>亚冠杯</div>
                        <div>2016-05-25 </div>
                    </li>
                    <li class="itemC">
                        <table cellpadding="0" cellspacing="0" width="100%">
                            <tbody>
                            <tr>
                                <td width="45%">首尔F...</td>
                                <td width="10%" class="textcenter">1</td>
                                <td><!--<if: item.result=='3' />--><span class="state red">主胜</span>
                                    <!--<if: item.result=='1' />-->
                                    <!--<if: item.result=='0' />--></td>
                            </tr>
                            <tr>
                                <td>浦和红...</td>
                                <td class="textcenter">0</td>
                                <td>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </li>

                    <li class="itemR">
                        <em class="similar-num">100</em>

                        <!--<if: predicttab=='europe' />--><div class="chart-similar" _echarts_instance_="ec_1496719011441" style="height: 195px; -webkit-tap-highlight-color: transparent; -webkit-user-select: none; position: relative; background: transparent;"><div style="position: relative; overflow: hidden; width: 160px; height: 195px; padding: 0px; margin: 0px; border-width: 0px;"><canvas width="320" height="390" data-zr-dom-id="zr_0" style="position: absolute; left: 0px; top: 0px; width: 160px; height: 195px; -webkit-user-select: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); padding: 0px; margin: 0px; border-width: 0px;"></canvas></div><div></div></div>
                    </li>
                </ul><!--[repeat-item]item in predictEurope.inner.history_sample--><ul class="dataItem">

                    <li class="itemL">
                        <div>K2联赛</div>
                        <div>2015-06-03 </div>
                    </li>
                    <li class="itemC">
                        <table cellpadding="0" cellspacing="0" width="100%">
                            <tbody>
                            <tr>
                                <td width="45%">安山警...</td>
                                <td width="10%" class="textcenter">0</td>
                                <td><!--<if: item.result=='3' />-->
                                    <!--<if: item.result=='1' />-->
                                    <!--<if: item.result=='0' />--><span class="state blue">主负</span></td>
                            </tr>
                            <tr>
                                <td>江原F...</td>
                                <td class="textcenter">2</td>
                                <td>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </li>

                    <li class="itemR">
                        <em class="similar-num">100</em>

                        <!--<if: predicttab=='europe' />--><div class="chart-similar" _echarts_instance_="ec_1496719011442" style="height: 195px; -webkit-tap-highlight-color: transparent; -webkit-user-select: none; position: relative; background: transparent;"><div style="position: relative; overflow: hidden; width: 160px; height: 195px; padding: 0px; margin: 0px; border-width: 0px;"><canvas width="320" height="390" data-zr-dom-id="zr_0" style="position: absolute; left: 0px; top: 0px; width: 160px; height: 195px; -webkit-user-select: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); padding: 0px; margin: 0px; border-width: 0px;"></canvas></div><div></div></div>
                    </li>
                </ul><!--[repeat-item]item in predictEurope.inner.history_sample--><ul class="dataItem">

                    <li class="itemL">
                        <div>西乙</div>
                        <div>2015-10-03 </div>
                    </li>
                    <li class="itemC">
                        <table cellpadding="0" cellspacing="0" width="100%">
                            <tbody>
                            <tr>
                                <td width="45%">努曼西...</td>
                                <td width="10%" class="textcenter">1</td>
                                <td><!--<if: item.result=='3' />--><span class="state red">主胜</span>
                                    <!--<if: item.result=='1' />-->
                                    <!--<if: item.result=='0' />--></td>
                            </tr>
                            <tr>
                                <td>邦费雷...</td>
                                <td class="textcenter">0</td>
                                <td>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </li>

                    <li class="itemR">
                        <em class="similar-num">100</em>

                        <!--<if: predicttab=='europe' />--><div class="chart-similar" _echarts_instance_="ec_1496719011443" style="height: 195px; -webkit-tap-highlight-color: transparent; -webkit-user-select: none; position: relative; background: transparent;"><div style="position: relative; overflow: hidden; width: 160px; height: 195px; padding: 0px; margin: 0px; border-width: 0px;"><canvas width="320" height="390" data-zr-dom-id="zr_0" style="position: absolute; left: 0px; top: 0px; width: 160px; height: 195px; -webkit-user-select: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); padding: 0px; margin: 0px; border-width: 0px;"></canvas></div><div></div></div>
                    </li>
                </ul><!--[repeat-item]item in predictEurope.inner.history_sample--><ul class="dataItem">

                    <li class="itemL">
                        <div>欧冠杯</div>
                        <div>2014-07-23 </div>
                    </li>
                    <li class="itemC">
                        <table cellpadding="0" cellspacing="0" width="100%">
                            <tbody>
                            <tr>
                                <td width="45%">阿克托...</td>
                                <td width="10%" class="textcenter">3</td>
                                <td><!--<if: item.result=='3' />--><span class="state red">主胜</span>
                                    <!--<if: item.result=='1' />-->
                                    <!--<if: item.result=='0' />--></td>
                            </tr>
                            <tr>
                                <td>第比利...</td>
                                <td class="textcenter">0</td>
                                <td>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </li>

                    <li class="itemR">
                        <em class="similar-num">100</em>

                        <!--<if: predicttab=='europe' />--><div class="chart-similar" _echarts_instance_="ec_1496719011444" style="height: 195px; -webkit-tap-highlight-color: transparent; -webkit-user-select: none; position: relative; background: transparent;"><div style="position: relative; overflow: hidden; width: 160px; height: 195px; padding: 0px; margin: 0px; border-width: 0px;"><canvas width="320" height="390" data-zr-dom-id="zr_0" style="position: absolute; left: 0px; top: 0px; width: 160px; height: 195px; -webkit-user-select: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); padding: 0px; margin: 0px; border-width: 0px;"></canvas></div><div></div></div>
                    </li>
                </ul><!--[repeat-item]item in predictEurope.inner.history_sample--><ul class="dataItem">

                    <li class="itemL">
                        <div>土甲</div>
                        <div>2017-01-28 </div>
                    </li>
                    <li class="itemC">
                        <table cellpadding="0" cellspacing="0" width="100%">
                            <tbody>
                            <tr>
                                <td width="45%">代尼兹...</td>
                                <td width="10%" class="textcenter">1</td>
                                <td><!--<if: item.result=='3' />-->
                                    <!--<if: item.result=='1' />--><span class="state green">平</span>
                                    <!--<if: item.result=='0' />--></td>
                            </tr>
                            <tr>
                                <td>阿达纳</td>
                                <td class="textcenter">1</td>
                                <td>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </li>

                    <li class="itemR">
                        <em class="similar-num">100</em>

                        <!--<if: predicttab=='europe' />--><div class="chart-similar" _echarts_instance_="ec_1496719011445" style="height: 195px; -webkit-tap-highlight-color: transparent; -webkit-user-select: none; position: relative; background: transparent;"><div style="position: relative; overflow: hidden; width: 160px; height: 195px; padding: 0px; margin: 0px; border-width: 0px;"><canvas width="320" height="390" data-zr-dom-id="zr_0" style="position: absolute; left: 0px; top: 0px; width: 160px; height: 195px; -webkit-user-select: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); padding: 0px; margin: 0px; border-width: 0px;"></canvas></div><div></div></div>
                    </li>
                </ul><!--[repeat-item]item in predictEurope.inner.history_sample--><ul class="dataItem">

                    <li class="itemL">
                        <div>日联杯</div>
                        <div>2016-04-20 </div>
                    </li>
                    <li class="itemC">
                        <table cellpadding="0" cellspacing="0" width="100%">
                            <tbody>
                            <tr>
                                <td width="45%">仙台维...</td>
                                <td width="10%" class="textcenter">0</td>
                                <td><!--<if: item.result=='3' />-->
                                    <!--<if: item.result=='1' />--><span class="state green">平</span>
                                    <!--<if: item.result=='0' />--></td>
                            </tr>
                            <tr>
                                <td>福冈黄...</td>
                                <td class="textcenter">0</td>
                                <td>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </li>

                    <li class="itemR">
                        <em class="similar-num">100</em>

                        <!--<if: predicttab=='europe' />--><div class="chart-similar" _echarts_instance_="ec_1496719011446" style="height: 195px; -webkit-tap-highlight-color: transparent; -webkit-user-select: none; position: relative; background: transparent;"><div style="position: relative; overflow: hidden; width: 160px; height: 195px; padding: 0px; margin: 0px; border-width: 0px;"><canvas width="320" height="390" data-zr-dom-id="zr_0" style="position: absolute; left: 0px; top: 0px; width: 160px; height: 195px; -webkit-user-select: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); padding: 0px; margin: 0px; border-width: 0px;"></canvas></div><div></div></div>
                    </li>
                </ul><!--[repeat-item]item in predictEurope.inner.history_sample--><ul class="dataItem">

                    <li class="itemL">
                        <div>亚冠杯</div>
                        <div>2014-02-09 </div>
                    </li>
                    <li class="itemC">
                        <table cellpadding="0" cellspacing="0" width="100%">
                            <tbody>
                            <tr>
                                <td width="45%">塔什干...</td>
                                <td width="10%" class="textcenter">1</td>
                                <td><!--<if: item.result=='3' />-->
                                    <!--<if: item.result=='1' />-->
                                    <!--<if: item.result=='0' />--><span class="state blue">主负</span></td>
                            </tr>
                            <tr>
                                <td>科威特...</td>
                                <td class="textcenter">3</td>
                                <td>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </li>

                    <li class="itemR">
                        <em class="similar-num">100</em>

                        <!--<if: predicttab=='europe' />--><div class="chart-similar" _echarts_instance_="ec_1496719011447" style="height: 195px; -webkit-tap-highlight-color: transparent; -webkit-user-select: none; position: relative; background: transparent;"><div style="position: relative; overflow: hidden; width: 160px; height: 195px; padding: 0px; margin: 0px; border-width: 0px;"><canvas width="320" height="390" data-zr-dom-id="zr_0" style="position: absolute; left: 0px; top: 0px; width: 160px; height: 195px; -webkit-user-select: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); padding: 0px; margin: 0px; border-width: 0px;"></canvas></div><div></div></div>
                    </li>
                </ul><!--[repeat-item]item in predictEurope.inner.history_sample--><ul class="dataItem">

                    <li class="itemL">
                        <div>德东北</div>
                        <div>2016-11-26 </div>
                    </li>
                    <li class="itemC">
                        <table cellpadding="0" cellspacing="0" width="100%">
                            <tbody>
                            <tr>
                                <td width="45%">巴贝斯...</td>
                                <td width="10%" class="textcenter">2</td>
                                <td><!--<if: item.result=='3' />--><span class="state red">主胜</span>
                                    <!--<if: item.result=='1' />-->
                                    <!--<if: item.result=='0' />--></td>
                            </tr>
                            <tr>
                                <td>马瑟维...</td>
                                <td class="textcenter">0</td>
                                <td>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </li>

                    <li class="itemR">
                        <em class="similar-num">100</em>

                        <!--<if: predicttab=='europe' />--><div class="chart-similar" _echarts_instance_="ec_1496719011448" style="height: 195px; -webkit-tap-highlight-color: transparent; -webkit-user-select: none; position: relative; background: transparent;"><div style="position: relative; overflow: hidden; width: 160px; height: 195px; padding: 0px; margin: 0px; border-width: 0px;"><canvas width="320" height="390" data-zr-dom-id="zr_0" style="position: absolute; left: 0px; top: 0px; width: 160px; height: 195px; -webkit-user-select: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); padding: 0px; margin: 0px; border-width: 0px;"></canvas></div><div></div></div>
                    </li>
                </ul><!--[repeat-item]item in predictEurope.inner.history_sample--><ul class="dataItem">

                    <li class="itemL">
                        <div>韩联盟</div>
                        <div>2015-07-18 </div>
                    </li>
                    <li class="itemC">
                        <table cellpadding="0" cellspacing="0" width="100%">
                            <tbody>
                            <tr>
                                <td width="45%">仁川地...</td>
                                <td width="10%" class="textcenter">1</td>
                                <td><!--<if: item.result=='3' />-->
                                    <!--<if: item.result=='1' />-->
                                    <!--<if: item.result=='0' />--><span class="state blue">主负</span></td>
                            </tr>
                            <tr>
                                <td>龙仁市</td>
                                <td class="textcenter">2</td>
                                <td>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </li>

                    <li class="itemR">
                        <em class="similar-num">100</em>

                        <!--<if: predicttab=='europe' />--><div class="chart-similar" _echarts_instance_="ec_1496719011449" style="height: 195px; -webkit-tap-highlight-color: transparent; -webkit-user-select: none; position: relative; background: transparent;"><div style="position: relative; overflow: hidden; width: 160px; height: 195px; padding: 0px; margin: 0px; border-width: 0px;"><canvas width="320" height="390" data-zr-dom-id="zr_0" style="position: absolute; left: 0px; top: 0px; width: 160px; height: 195px; -webkit-user-select: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); padding: 0px; margin: 0px; border-width: 0px;"></canvas></div><div></div></div>
                    </li>
                </ul><!--[repeat-item]item in predictEurope.inner.history_sample--><ul class="dataItem">

                    <li class="itemL">
                        <div>韩联盟</div>
                        <div>2015-08-14 </div>
                    </li>
                    <li class="itemC">
                        <table cellpadding="0" cellspacing="0" width="100%">
                            <tbody>
                            <tr>
                                <td width="45%">蔚山尾...</td>
                                <td width="10%" class="textcenter">4</td>
                                <td><!--<if: item.result=='3' />--><span class="state red">主胜</span>
                                    <!--<if: item.result=='1' />-->
                                    <!--<if: item.result=='0' />--></td>
                            </tr>
                            <tr>
                                <td>釜山运...</td>
                                <td class="textcenter">0</td>
                                <td>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </li>

                    <li class="itemR">
                        <em class="similar-num">100</em>

                        <!--<if: predicttab=='europe' />--><div class="chart-similar" _echarts_instance_="ec_1496719011450" style="height: 195px; -webkit-tap-highlight-color: transparent; -webkit-user-select: none; position: relative; background: transparent;"><div style="position: relative; overflow: hidden; width: 160px; height: 195px; padding: 0px; margin: 0px; border-width: 0px;"><canvas width="320" height="390" data-zr-dom-id="zr_0" style="position: absolute; left: 0px; top: 0px; width: 160px; height: 195px; -webkit-user-select: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); padding: 0px; margin: 0px; border-width: 0px;"></canvas></div><div></div></div>
                    </li>
                </ul><!--</repeat>: item in predictEurope.inner.history_sample-->

                </div>
                <div class="popDetail" style="display: none;">
                    <div class="chart-yuce" _echarts_instance_="ec_1496719011429" style="-webkit-tap-highlight-color: transparent; -webkit-user-select: none; position: relative; background: transparent;"><div style="position: relative; overflow: hidden; width: 690px; height: 440px; padding: 0px; margin: 0px; border-width: 0px;"><canvas width="1380" height="880" data-zr-dom-id="zr_0" style="position: absolute; left: 0px; top: 0px; width: 690px; height: 440px; -webkit-user-select: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); padding: 0px; margin: 0px; border-width: 0px;"></canvas></div><div></div></div>
                    <table width="100%" cellpadding="0" cellspacing="0" class="fx-table">
                        <tbody>
                        <tr>
                            <th>时间</th>
                            <th width="18%">主胜</th>
                            <th width="18%">平</th>
                            <th width="18%">主负</th>
                        </tr>
                        <!--<repeat>: item,idx in predictEurope.outter.table--><!--[repeat-item]item,idx in predictEurope.outter.table--><tr>
                            <td>初赔</td>
                            <td>40%</td>
                            <td>35%</td>
                            <td>25%</td>
                        </tr><!--[repeat-item]item,idx in predictEurope.outter.table--><tr>
                            <td>赛前24h</td>
                            <td>40%</td>
                            <td>30%</td>
                            <td>30%</td>
                        </tr><!--[repeat-item]item,idx in predictEurope.outter.table--><tr>
                            <td>赛前12h</td>
                            <td>40%</td>
                            <td>25%</td>
                            <td>35%</td>
                        </tr><!--</repeat>: item,idx in predictEurope.outter.table-->

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div class="popFooter" v-tap="{methods: closeDialog}">
            <span class="arrow"></span>

            <h2 class="f30">胜平负</h2>
        </div>
    </div>
</template>
<script>
    import {mTypes} from '~store/zqdetail'
    export default {
        methods: {
            closeDialog () {
                this.$store.commit(mTypes.setDialog, null)
            }
        }

    }
</script>
