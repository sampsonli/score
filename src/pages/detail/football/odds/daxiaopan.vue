<template>
    <div class="zhedie-box">
        <!--<if: subtab != 'bifa' />--><div class="zj-nav noborder"> 赔率列表
                <ul class="time-item">
        <li class="time-item-cur" onclick="_hmt.push(['_trackEvent','zq_detail','click','odds_opdz'])">编辑
                    </li>
    </ul>
    </div>
        <!--<if: subtab === 'europe' />-->
        <!--<if: subtab === 'asian' />-->
        <!--<if: subtab === 'rangqiu' />-->
        <!--<if: subtab === 'daxiaopan' />--><div><div class="pl-box-hd">
        <table cellspacing="0" cellpadding="0" border="0" class="pl-table" width="100%">
            <tbody><tr>
                <th width="18%">公司</th>
                <th width="15%"></th>
                <th width="20%">大</th>
                <th>盘口</th>
                <th width="20%">小</th>
            </tr>
            </tbody></table>
    </div>

        <!--<if: !isRequesting && !oddsDataMap.daxiaopan || !oddsDataMap.daxiaopan.odds || !oddsDataMap.daxiaopan.odds.length />-->

        <!--<if: oddsDataMap.daxiaopan.odds && oddsDataMap.daxiaopan.odds.length />--><div class="pl-box-bd">
            <table cellspacing="0" cellpadding="0" border="0" class="pl-table" width="100%">
                <colgroup>
                    <col width="18%">
                    <col width="15%">
                    <col width="20%">
                    <col width="">
                    <col width="20%">
                </colgroup>

                <tbody><!--<repeat>: info in oddsDataMap.daxiaopan.odds--><!--[repeat-item]info in oddsDataMap.daxiaopan.odds--><tr>
                    <td>
                        <span class="color3">威廉希尔</span>
                    </td>
                    <td></td>
                    <td>
                        <span class="f24">1.00</span><br>
                        <span class="f24 green">0.95</span>
                    </td>
                    <td>
                        <span class="f24">2.5</span><br>
                        <span class="f24">2.5</span>
                    </td>
                    <td>
                        <span class="f24">0.73</span><br>
                        <span class="f24 red">0.80</span>
                    </td>
                </tr><!--[repeat-item]info in oddsDataMap.daxiaopan.odds--><tr>
                    <td>
                        <span class="color3">澳门</span>
                    </td>
                    <td></td>
                    <td>
                        <span class="f24">0.95</span><br>
                        <span class="f24 green">0.80</span>
                    </td>
                    <td>
                        <span class="f24">2.5</span><br>
                        <span class="f24">2.5</span>
                    </td>
                    <td>
                        <span class="f24">0.75</span><br>
                        <span class="f24 red">0.90</span>
                    </td>
                </tr><!--[repeat-item]info in oddsDataMap.daxiaopan.odds--><tr>
                    <td>
                        <span class="color3">立博</span>
                    </td>
                    <td></td>
                    <td>
                        <span class="f24">0.91</span><br>
                        <span class="f24 green">0.83</span>
                    </td>
                    <td>
                        <span class="f24">2.5</span><br>
                        <span class="f24">2.5</span>
                    </td>
                    <td>
                        <span class="f24">0.83</span><br>
                        <span class="f24 red">0.91</span>
                    </td>
                </tr><!--[repeat-item]info in oddsDataMap.daxiaopan.odds--><tr>
                    <td>
                        <span class="color3">Bet365</span>
                    </td>
                    <td></td>
                    <td>
                        <span class="f24">0.88</span><br>
                        <span class="f24 red">0.98</span>
                    </td>
                    <td>
                        <span class="f24">2/2.5</span><br>
                        <span class="f24 sheng">2.5</span>
                    </td>
                    <td>
                        <span class="f24">0.98</span><br>
                        <span class="f24 green">0.88</span>
                    </td>
                </tr><!--[repeat-item]info in oddsDataMap.daxiaopan.odds--><tr>
                    <td>
                        <span class="color3">SNAI</span>
                    </td>
                    <td></td>
                    <td>
                        <span class="f24">0.90</span><br>
                        <span class="f24 green">0.78</span>
                    </td>
                    <td>
                        <span class="f24">2.5</span><br>
                        <span class="f24">2.5</span>
                    </td>
                    <td>
                        <span class="f24">0.75</span><br>
                        <span class="f24 red">0.85</span>
                    </td>
                </tr><!--[repeat-item]info in oddsDataMap.daxiaopan.odds--><tr>
                    <td>
                        <span class="color3">皇冠</span>
                    </td>
                    <td></td>
                    <td>
                        <span class="f24">0.98</span><br>
                        <span class="f24 green">0.89</span>
                    </td>
                    <td>
                        <span class="f24">2.5</span><br>
                        <span class="f24">2.5</span>
                    </td>
                    <td>
                        <span class="f24">0.88</span><br>
                        <span class="f24 red">0.99</span>
                    </td>
                </tr><!--[repeat-item]info in oddsDataMap.daxiaopan.odds--><tr>
                    <td>
                        <span class="color3">易胜博</span>
                    </td>
                    <td></td>
                    <td>
                        <span class="f24">0.96</span><br>
                        <span class="f24 green">0.89</span>
                    </td>
                    <td>
                        <span class="f24">2.5</span><br>
                        <span class="f24">2.5</span>
                    </td>
                    <td>
                        <span class="f24">0.90</span><br>
                        <span class="f24 red">0.96</span>
                    </td>
                </tr><!--[repeat-item]info in oddsDataMap.daxiaopan.odds--><tr>
                    <td>
                        <span class="color3">伟德</span>
                    </td>
                    <td></td>
                    <td>
                        <span class="f24">1.10</span><br>
                        <span class="f24 green">0.87</span>
                    </td>
                    <td>
                        <span class="f24">2.5</span><br>
                        <span class="f24">2.5</span>
                    </td>
                    <td>
                        <span class="f24">0.70</span><br>
                        <span class="f24 red">0.90</span>
                    </td>
                </tr><!--[repeat-item]info in oddsDataMap.daxiaopan.odds--><tr>
                    <td>
                        <span class="color3">Pinnacle平博</span>
                    </td>
                    <td></td>
                    <td>
                        <span class="f24">0.86</span><br>
                        <span class="f24 red">0.99</span>
                    </td>
                    <td>
                        <span class="f24">2/2.5</span><br>
                        <span class="f24 sheng">2.5</span>
                    </td>
                    <td>
                        <span class="f24">1.02</span><br>
                        <span class="f24 green">0.89</span>
                    </td>
                </tr><!--[repeat-item]info in oddsDataMap.daxiaopan.odds--><tr>
                    <td>
                        <span class="color3">Coral</span>
                    </td>
                    <td></td>
                    <td>
                        <span class="f24">1.10</span><br>
                        <span class="f24 green">0.91</span>
                    </td>
                    <td>
                        <span class="f24">2.5</span><br>
                        <span class="f24">2.5</span>
                    </td>
                    <td>
                        <span class="f24">0.67</span><br>
                        <span class="f24 red">0.85</span>
                    </td>
                </tr><!--[repeat-item]info in oddsDataMap.daxiaopan.odds--><tr>
                    <td>
                        <span class="color3">10BET</span>
                    </td>
                    <td></td>
                    <td>
                        <span class="f24">0.95</span><br>
                        <span class="f24 green">0.92</span>
                    </td>
                    <td>
                        <span class="f24">2.5</span><br>
                        <span class="f24">2.5</span>
                    </td>
                    <td>
                        <span class="f24">0.86</span><br>
                        <span class="f24 red">0.88</span>
                    </td>
                </tr><!--[repeat-item]info in oddsDataMap.daxiaopan.odds--><tr>
                    <td>
                        <span class="color3">利记</span>
                    </td>
                    <td></td>
                    <td>
                        <span class="f24">0.92</span><br>
                        <span class="f24 red">1.00</span>
                    </td>
                    <td>
                        <span class="f24">2/2.5</span><br>
                        <span class="f24 sheng">2.5</span>
                    </td>
                    <td>
                        <span class="f24">0.98</span><br>
                        <span class="f24 green">0.90</span>
                    </td>
                </tr><!--[repeat-item]info in oddsDataMap.daxiaopan.odds--><tr>
                    <td>
                        <span class="color3">Unibet (优胜客)</span>
                    </td>
                    <td></td>
                    <td>
                        <span class="f24">0.94</span><br>
                        <span class="f24 green">0.83</span>
                    </td>
                    <td>
                        <span class="f24">2.5</span><br>
                        <span class="f24">2.5</span>
                    </td>
                    <td>
                        <span class="f24">0.83</span><br>
                        <span class="f24 red">0.94</span>
                    </td>
                </tr><!--[repeat-item]info in oddsDataMap.daxiaopan.odds--><tr>
                    <td>
                        <span class="color3">Mansion88 (明升)</span>
                    </td>
                    <td></td>
                    <td>
                        <span class="f24">0.98</span><br>
                        <span class="f24 green">0.92</span>
                    </td>
                    <td>
                        <span class="f24">2.5</span><br>
                        <span class="f24">2.5</span>
                    </td>
                    <td>
                        <span class="f24">0.92</span><br>
                        <span class="f24 red">0.98</span>
                    </td>
                </tr><!--[repeat-item]info in oddsDataMap.daxiaopan.odds--><tr>
                    <td>
                        <span class="color3">SportingBet (博天堂)</span>
                    </td>
                    <td></td>
                    <td>
                        <span class="f24">0.91</span><br>
                        <span class="f24">0.91</span>
                    </td>
                    <td>
                        <span class="f24">2.5</span><br>
                        <span class="f24">2.5</span>
                    </td>
                    <td>
                        <span class="f24">0.75</span><br>
                        <span class="f24 red">0.80</span>
                    </td>
                </tr><!--[repeat-item]info in oddsDataMap.daxiaopan.odds--><tr>
                    <td>
                        <span class="color3">金宝博</span>
                    </td>
                    <td></td>
                    <td>
                        <span class="f24">1.00</span><br>
                        <span class="f24 green">0.98</span>
                    </td>
                    <td>
                        <span class="f24">2.5</span><br>
                        <span class="f24">2.5</span>
                    </td>
                    <td>
                        <span class="f24">0.90</span><br>
                        <span class="f24 red">0.92</span>
                    </td>
                </tr><!--</repeat>: info in oddsDataMap.daxiaopan.odds-->
                </tbody></table>
        </div>

        <!--<if: oddsDataMap.daxiaopan.odds && oddsDataMap.daxiaopan.odds.length />--><div class="sk-btips">
            共16家公司为你提供数据，其中主流公司16家
            <br>
            <span>500彩票网提示：以上数据仅供参考，请以官方公布的数据为准</span>
        </div></div>
        <!--<if: subtab === 'bifa' />-->
    </div>


</template>
