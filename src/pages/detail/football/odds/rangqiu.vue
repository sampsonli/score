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
        <!--<if: subtab === 'rangqiu' />--><div><div class="pl-box-hd">
        <table cellspacing="0" cellpadding="0" border="0" class="pl-table" width="100%">
            <tbody>
            <tr>
                <th width="19%">公司</th>
                <th width="7%">让</th>
                <th width="28%">欧赔</th>
                <th width="28%">凯利</th>
                <th width="">返还率</th>
            </tr>
            </tbody>
        </table>
    </div>

        <!--<if: !isRequesting && !oddsDataMap.rangqiu || !oddsDataMap.rangqiu.odds || !oddsDataMap.rangqiu.odds.length />-->


        <!--<if: oddsDataMap.rangqiu && oddsDataMap.rangqiu.odds && oddsDataMap.rangqiu.odds.length />--><div class="pl-box-bd">
            <table cellspacing="0" cellpadding="0" border="0" class="pl-table" width="100%">
                <colgroup>
                    <col width="19%">
                    <col width="7%">
                    <col width="28%">
                    <col width="28%">
                    <col width="">
                </colgroup>

                <tbody>

                <!--<repeat>: info in oddsDataMap.rangqiu.odds--><!--[repeat-item]info in oddsDataMap.rangqiu.odds--><tr>
                    <td>
                        <span class="color3">竞彩官方</span>
                    </td>
                    <td>
                        -1
                    </td>
                    <td class="colorc">
                        <p class="pl-num"><span>2.35</span>/<span>3.35</span>/<span>2.47</span></p>
                        <p class="pl-num"><span class="green">2.10</span>/<span>3.35</span>/<span class="red">2.82</span></p>
                    </td>

                    <td>
                        <p class="pl-num"><span>0.93</span>/<span>0.88</span>/<span>0.85</span></p>
                        <p class="pl-num"><span class="green">0.83</span>/<span>0.88</span>/<span class="red">0.97</span></p>

                    </td>

                    <td>

                        <span class="pl-return">88.58%</span>
                        <span class="pl-return">88.55%</span>
                    </td>
                </tr><!--[repeat-item]info in oddsDataMap.rangqiu.odds--><tr>
                    <td>
                        <span class="color3">Bet365</span>
                    </td>
                    <td>
                        -1
                    </td>
                    <td class="colorc">
                        <p class="pl-num"><span>2.75</span>/<span>3.40</span>/<span>2.25</span></p>
                        <p class="pl-num"><span class="green">2.10</span>/<span class="red">3.50</span>/<span class="red">2.63</span></p>
                    </td>

                    <td>
                        <p class="pl-num"><span>1.08</span>/<span>0.89</span>/<span>0.78</span></p>
                        <p class="pl-num"><span class="green">0.83</span>/<span class="red">0.92</span>/<span class="red">0.91</span></p>

                    </td>

                    <td>

                        <span class="pl-return">90.73%</span>
                        <span class="pl-return">87.56%</span>
                    </td>
                </tr><!--[repeat-item]info in oddsDataMap.rangqiu.odds--><tr>
                    <td>
                        <span class="color3">SNAI</span>
                    </td>
                    <td>
                        -1
                    </td>
                    <td class="colorc">
                        <p class="pl-num"><span>2.50</span>/<span>3.50</span>/<span>2.27</span></p>
                        <p class="pl-num"><span class="green">2.25</span>/<span class="green">3.40</span>/<span class="red">2.60</span></p>
                    </td>

                    <td>
                        <p class="pl-num"><span>0.98</span>/<span>0.92</span>/<span>0.78</span></p>
                        <p class="pl-num"><span class="green">0.89</span>/<span class="green">0.89</span>/<span class="red">0.90</span></p>

                    </td>

                    <td>

                        <span class="pl-return">88.79%</span>
                        <span class="pl-return">89.03%</span>
                    </td>
                </tr><!--[repeat-item]info in oddsDataMap.rangqiu.odds--><tr>
                    <td>
                        <span class="color3">Unibet (优胜客)</span>
                    </td>
                    <td>
                        -1
                    </td>
                    <td class="colorc">
                        <p class="pl-num"><span>2.55</span>/<span>3.45</span>/<span>2.28</span></p>
                        <p class="pl-num"><span class="green">2.32</span>/<span class="red">3.50</span>/<span class="red">2.55</span></p>
                    </td>

                    <td>
                        <p class="pl-num"><span>1.00</span>/<span>0.90</span>/<span>0.79</span></p>
                        <p class="pl-num"><span class="green">0.91</span>/<span class="red">0.92</span>/<span class="red">0.88</span></p>

                    </td>

                    <td>

                        <span class="pl-return">89.24%</span>
                        <span class="pl-return">90.18%</span>
                    </td>
                </tr><!--[repeat-item]info in oddsDataMap.rangqiu.odds--><tr>
                    <td>
                        <span class="color3">SportingBet (博天堂)</span>
                    </td>
                    <td>
                        -1
                    </td>
                    <td class="colorc">
                        <p class="pl-num"><span>2.60</span>/<span>3.50</span>/<span>2.38</span></p>
                        <p class="pl-num"><span class="green">2.45</span>/<span>3.50</span>/<span class="red">2.50</span></p>
                    </td>

                    <td>
                        <p class="pl-num"><span>1.02</span>/<span>0.92</span>/<span>0.82</span></p>
                        <p class="pl-num"><span class="green">0.96</span>/<span>0.92</span>/<span class="red">0.86</span></p>

                    </td>

                    <td>

                        <span class="pl-return">91.70%</span>
                        <span class="pl-return">91.42%</span>
                    </td>
                </tr><!--[repeat-item]info in oddsDataMap.rangqiu.odds--><tr>
                    <td>
                        <span class="color3">香港马会</span>
                    </td>
                    <td>
                        -1
                    </td>
                    <td class="colorc">
                        <p class="pl-num"><span>2.40</span>/<span>3.20</span>/<span>2.50</span></p>
                        <p class="pl-num"><span class="green">2.20</span>/<span>3.20</span>/<span class="red">2.75</span></p>
                    </td>

                    <td>
                        <p class="pl-num"><span>0.94</span>/<span>0.84</span>/<span>0.86</span></p>
                        <p class="pl-num"><span class="green">0.87</span>/<span>0.84</span>/<span class="red">0.95</span></p>

                    </td>

                    <td>

                        <span class="pl-return">88.56%</span>
                        <span class="pl-return">88.44%</span>
                    </td>
                </tr><!--[repeat-item]info in oddsDataMap.rangqiu.odds--><tr>
                    <td>
                        <span class="color3">12BET (壹貳博)</span>
                    </td>
                    <td>
                        -1
                    </td>
                    <td class="colorc">
                        <p class="pl-num"><span>2.80</span>/<span>3.40</span>/<span>2.10</span></p>
                        <p class="pl-num"><span class="green">2.30</span>/<span>3.40</span>/<span class="red">2.55</span></p>
                    </td>

                    <td>
                        <p class="pl-num"><span>1.10</span>/<span>0.89</span>/<span>0.72</span></p>
                        <p class="pl-num"><span class="green">0.91</span>/<span>0.89</span>/<span class="red">0.88</span></p>

                    </td>

                    <td>

                        <span class="pl-return">88.70%</span>
                        <span class="pl-return">89.20%</span>
                    </td>
                </tr><!--[repeat-item]info in oddsDataMap.rangqiu.odds--><tr>
                    <td>
                        <span class="color3">必发</span>
                    </td>
                    <td>
                        -1
                    </td>
                    <td class="colorc">
                        <p class="pl-num"><span>1.55</span>/<span>1.51</span>/<span>2.42</span></p>
                        <p class="pl-num"><span class="red">2.40</span>/<span class="red">3.45</span>/<span class="red">2.96</span></p>
                    </td>

                    <td>
                        <p class="pl-num"><span>0.61</span>/<span>0.40</span>/<span>0.83</span></p>
                        <p class="pl-num"><span class="red">0.94</span>/<span class="red">0.90</span>/<span class="red">1.02</span></p>

                    </td>

                    <td>

                        <span class="pl-return">58.12%</span>
                        <span class="pl-return">95.75%</span>
                    </td>
                </tr><!--</repeat>: info in oddsDataMap.rangqiu.odds-->

                </tbody>
            </table>
        </div>

        <!--<if: oddsDataMap.rangqiu && oddsDataMap.rangqiu.odds && oddsDataMap.rangqiu.odds.length />--><div class="sk-btips">
            共8家公司为你提供数据，其中主流公司7家
            <br>
            <span>500彩票网提示：以上数据仅供参考，请以官方公布的数据为准</span>
        </div></div>
        <!--<if: subtab === 'daxiaopan' />-->
        <!--<if: subtab === 'bifa' />-->
    </div>
</template>
