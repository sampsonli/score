<template>


    <div class="zhedie-box">
        <!--<if: subtab != 'bifa' />--><div class="zj-nav noborder"> 赔率列表
                <ul class="time-item">
        <li class="time-item-cur" onclick="_hmt.push(['_trackEvent','zq_detail','click','odds_opdz'])">编辑
                    </li>
    </ul>
    </div>
        <!--<if: subtab === 'europe' />-->
        <!--<if: subtab === 'asian' />--><div><div class="pl-box-hd">
        <table cellspacing="0" cellpadding="0" border="0" class="pl-table" width="100%">
            <tbody><tr>
                <th width="18%">公司</th>
                <th width="15%"></th>
                <th width="20%">水</th>
                <th>盘口</th>
                <th width="20%">水</th>
            </tr>
            </tbody></table>
    </div>

        <!--<if: !isRequesting && !oddsDataMap.asian || !oddsDataMap.asian.odds || !oddsDataMap.asian.odds.length />-->

        <!--<if: oddsDataMap.asian.odds && oddsDataMap.asian.odds.length />--><div class="pl-box-bd">
            <table cellspacing="0" cellpadding="0" border="0" class="pl-table" width="100%">
                <colgroup>
                    <col width="18%">
                    <col width="15%">
                    <col width="20%">
                    <col width="">
                    <col width="20%">
                </colgroup>

                <tbody><!--<repeat>: info in oddsDataMap.asian.odds--><!--[repeat-item]info in oddsDataMap.asian.odds--><tr>
                    <td>
                        <span class="color3">澳门</span>
                    </td>
                    <td></td>
                    <td class="carriage">
                        <span class="color6 f24">1.020</span><br>

                        <span class="f24 green">0.840</span>
                    </td>
                    <td class="carriage">
                        <span class="color6 f24">一球</span><br>

                        <span class="color6 f24">一球</span>
                    </td>
                    <td class="carriage">
                        <span class="color6 f24">0.820</span><br>

                        <span class="f24 red">1.000</span>
                    </td>
                </tr><!--[repeat-item]info in oddsDataMap.asian.odds--><tr>
                    <td>
                        <span class="color3">Bet365</span>
                    </td>
                    <td></td>
                    <td class="carriage">
                        <span class="color6 f24">0.875</span><br>

                        <span class="f24 red">1.050</span>
                    </td>
                    <td class="carriage">
                        <span class="color6 f24">半球/一球</span><br>

                        <span class="color6 f24 sheng">一球/球半</span>
                    </td>
                    <td class="carriage">
                        <span class="color6 f24">0.975</span><br>

                        <span class="f24 green">0.750</span>
                    </td>
                </tr><!--[repeat-item]info in oddsDataMap.asian.odds--><tr>
                    <td>
                        <span class="color3">皇冠</span>
                    </td>
                    <td></td>
                    <td class="carriage">
                        <span class="color6 f24">0.980</span><br>

                        <span class="f24 green">0.800</span>
                    </td>
                    <td class="carriage">
                        <span class="color6 f24">一球</span><br>

                        <span class="color6 f24">一球</span>
                    </td>
                    <td class="carriage">
                        <span class="color6 f24">0.900</span><br>

                        <span class="f24 red">1.110</span>
                    </td>
                </tr><!--[repeat-item]info in oddsDataMap.asian.odds--><tr>
                    <td>
                        <span class="color3">易胜博</span>
                    </td>
                    <td></td>
                    <td class="carriage">
                        <span class="color6 f24">1.030</span><br>

                        <span class="f24 green">0.790</span>
                    </td>
                    <td class="carriage">
                        <span class="color6 f24">一球</span><br>

                        <span class="color6 f24">一球</span>
                    </td>
                    <td class="carriage">
                        <span class="color6 f24">0.870</span><br>

                        <span class="f24 red">1.130</span>
                    </td>
                </tr><!--[repeat-item]info in oddsDataMap.asian.odds--><tr>
                    <td>
                        <span class="color3">伟德</span>
                    </td>
                    <td></td>
                    <td class="carriage">
                        <span class="color6 f24">0.900</span><br>

                        <span class="f24 red">1.080</span>
                    </td>
                    <td class="carriage">
                        <span class="color6 f24">半球/一球</span><br>

                        <span class="color6 f24 sheng">一球/球半</span>
                    </td>
                    <td class="carriage">
                        <span class="color6 f24">0.990</span><br>

                        <span class="f24 green">0.820</span>
                    </td>
                </tr><!--[repeat-item]info in oddsDataMap.asian.odds--><tr>
                    <td>
                        <span class="color3">Pinnacle平博</span>
                    </td>
                    <td></td>
                    <td class="carriage">
                        <span class="color6 f24">0.735</span><br>

                        <span class="f24 red">1.090</span>
                    </td>
                    <td class="carriage">
                        <span class="color6 f24">半球/一球</span><br>

                        <span class="color6 f24 sheng">一球/球半</span>
                    </td>
                    <td class="carriage">
                        <span class="color6 f24">1.200</span><br>

                        <span class="f24 green">0.806</span>
                    </td>
                </tr><!--[repeat-item]info in oddsDataMap.asian.odds--><tr>
                    <td>
                        <span class="color3">10BET</span>
                    </td>
                    <td></td>
                    <td class="carriage">
                        <span class="color6 f24">0.860</span><br>

                        <span class="f24 green">0.810</span>
                    </td>
                    <td class="carriage">
                        <span class="color6 f24">半球/一球</span><br>

                        <span class="color6 f24 sheng">一球</span>
                    </td>
                    <td class="carriage">
                        <span class="color6 f24">0.950</span><br>

                        <span class="f24 red">1.020</span>
                    </td>
                </tr><!--[repeat-item]info in oddsDataMap.asian.odds--><tr>
                    <td>
                        <span class="color3">利记</span>
                    </td>
                    <td></td>
                    <td class="carriage">
                        <span class="color6 f24">0.880</span><br>

                        <span class="f24 green">0.810</span>
                    </td>
                    <td class="carriage">
                        <span class="color6 f24">半球/一球</span><br>

                        <span class="color6 f24 sheng">一球</span>
                    </td>
                    <td class="carriage">
                        <span class="color6 f24">1.040</span><br>

                        <span class="f24 red">1.120</span>
                    </td>
                </tr><!--[repeat-item]info in oddsDataMap.asian.odds--><tr>
                    <td>
                        <span class="color3">Unibet (优胜客)</span>
                    </td>
                    <td></td>
                    <td class="carriage">
                        <span class="color6 f24">0.980</span><br>

                        <span class="f24 red">1.060</span>
                    </td>
                    <td class="carriage">
                        <span class="color6 f24">一球</span><br>

                        <span class="color6 f24 sheng">一球/球半</span>
                    </td>
                    <td class="carriage">
                        <span class="color6 f24">0.770</span><br>

                        <span class="f24 green">0.730</span>
                    </td>
                </tr><!--[repeat-item]info in oddsDataMap.asian.odds--><tr>
                    <td>
                        <span class="color3">Mansion88 (明升)</span>
                    </td>
                    <td></td>
                    <td class="carriage">
                        <span class="color6 f24">0.920</span><br>

                        <span class="f24 green">0.790</span>
                    </td>
                    <td class="carriage">
                        <span class="color6 f24">半球/一球</span><br>

                        <span class="color6 f24 sheng">一球</span>
                    </td>
                    <td class="carriage">
                        <span class="color6 f24">1.000</span><br>

                        <span class="f24 red">1.150</span>
                    </td>
                </tr><!--[repeat-item]info in oddsDataMap.asian.odds--><tr>
                    <td>
                        <span class="color3">金宝博</span>
                    </td>
                    <td></td>
                    <td class="carriage">
                        <span class="color6 f24">1.000</span><br>

                        <span class="f24 green">0.800</span>
                    </td>
                    <td class="carriage">
                        <span class="color6 f24">一球</span><br>

                        <span class="color6 f24">一球</span>
                    </td>
                    <td class="carriage">
                        <span class="color6 f24">0.920</span><br>

                        <span class="f24 red">1.130</span>
                    </td>
                </tr><!--[repeat-item]info in oddsDataMap.asian.odds--><tr>
                    <td>
                        <span class="color3">12BET (壹貳博)</span>
                    </td>
                    <td></td>
                    <td class="carriage">
                        <span class="color6 f24">0.920</span><br>

                        <span class="f24 green">0.790</span>
                    </td>
                    <td class="carriage">
                        <span class="color6 f24">半球/一球</span><br>

                        <span class="color6 f24 sheng">一球</span>
                    </td>
                    <td class="carriage">
                        <span class="color6 f24">1.000</span><br>

                        <span class="f24 red">1.150</span>
                    </td>
                </tr><!--[repeat-item]info in oddsDataMap.asian.odds--><tr>
                    <td>
                        <span class="color3">必发</span>
                    </td>
                    <td></td>
                    <td class="carriage">
                        <span class="color6 f24">0.550</span><br>

                        <span class="f24 red">1.110</span>
                    </td>
                    <td class="carriage">
                        <span class="color6 f24">半球/一球</span><br>

                        <span class="color6 f24 sheng">一球/球半</span>
                    </td>
                    <td class="carriage">
                        <span class="color6 f24">0.710</span><br>

                        <span class="f24 red">0.820</span>
                    </td>
                </tr><!--[repeat-item]info in oddsDataMap.asian.odds--><tr>
                    <td>
                        <span class="color3">BETDAQ</span>
                    </td>
                    <td></td>
                    <td class="carriage">
                        <span class="color6 f24">0.810</span><br>

                        <span class="f24 green">0.790</span>
                    </td>
                    <td class="carriage">
                        <span class="color6 f24">半球/一球</span><br>

                        <span class="color6 f24 sheng">一球</span>
                    </td>
                    <td class="carriage">
                        <span class="color6 f24">1.040</span><br>

                        <span class="f24 red">1.160</span>
                    </td>
                </tr><!--</repeat>: info in oddsDataMap.asian.odds-->
                </tbody></table>
        </div>

        <!--<if: oddsDataMap.asian.odds && oddsDataMap.asian.odds.length />--><div class="sk-btips">
            共14家公司为你提供数据，其中主流公司12家
            <br>
            <span>500彩票网提示：以上数据仅供参考，请以官方公布的数据为准</span>
        </div></div>
        <!--<if: subtab === 'rangqiu' />-->
        <!--<if: subtab === 'daxiaopan' />-->
        <!--<if: subtab === 'bifa' />-->
    </div>
</template>
