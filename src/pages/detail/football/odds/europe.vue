<template>
    <div class="zhedie-box">
        <!--<if: subtab != 'bifa' />--><div class="zj-nav noborder"> 赔率列表
                <ul class="time-item">
        <li class="time-item-cur" onclick="_hmt.push(['_trackEvent','zq_detail','click','odds_opdz'])">编辑
                    </li>
    </ul>
    </div>
        <!--<if: subtab === 'europe' />--><div><div class="pl-box-hd">
        <table cellspacing="0" cellpadding="0" border="0" class="pl-table" width="100%">
            <tbody>
            <tr>
                <th width="19%">公司</th>
                <th width="7%"></th>
                <th width="28%">欧赔</th>
                <th width="28%">凯利</th>
                <th width="">返还率</th>
            </tr>
            </tbody>
        </table>
    </div>

        <!--<if: !isRequesting && !oddsDataMap.europe || !oddsDataMap.europe.odds || !oddsDataMap.europe.odds.length />-->

        <div class="pl-box-bd">
            <table cellspacing="0" cellpadding="0" border="0" class="pl-table" width="100%">
                <colgroup>
                    <col width="19%">
                    <col width="7%">
                    <col width="28%">
                    <col width="28%">
                    <col width="">
                </colgroup>
                <tbody>
                <!--<repeat>: info,idx in oddsDataMap.europe.odds--><!--[repeat-item]info,idx in oddsDataMap.europe.odds--><tr class="noLink">
                    <td>
                        <span class="color3">百家平均</span>
                    </td>
                    <td></td>
                    <td class="colorc">
                        <p class="pl-num"><span>1.55</span>/<span>3.65</span>/<span>5.59</span></p>
                        <p class="pl-num"><span>1.45</span>/<span>4.01</span>/<span>6.67</span></p>
                    </td>
                    <td>
                        <p class="pl-num"><span>0.98</span>/<span>0.84</span>/<span>0.77</span></p>
                        <p class="pl-num"><span>0.92</span>/<span>0.92</span>/<span>0.92</span></p>

                    </td>
                    <td>
                        <span class="pl-return">91.09%</span>
                        <span class="pl-return">91.76%</span>
                    </td>
                </tr><!--[repeat-item]info,idx in oddsDataMap.europe.odds--><tr>
                    <td>
                        <span class="color3">竞彩官方</span>
                    </td>
                    <td></td>
                    <td class="colorc">
                        <p class="pl-num"><span>1.42</span>/<span>3.90</span>/<span>6.00</span></p>
                        <p class="pl-num"><span class="green">1.30</span>/<span class="red">4.45</span>/<span class="red">7.40</span></p>
                    </td>
                    <td>
                        <p class="pl-num"><span>0.90</span>/<span>0.89</span>/<span>0.83</span></p>
                        <p class="pl-num"><span class="green">0.82</span>/<span class="red">1.02</span>/<span class="red">1.02</span></p>

                    </td>
                    <td>
                        <span class="pl-return">88.71%</span>
                        <span class="pl-return">88.57%</span>
                    </td>
                </tr><!--[repeat-item]info,idx in oddsDataMap.europe.odds--><tr>
                    <td>
                        <span class="color3">威廉希尔</span>
                    </td>
                    <td></td>
                    <td class="colorc">
                        <p class="pl-num"><span>1.55</span>/<span>3.60</span>/<span>6.00</span></p>
                        <p class="pl-num"><span>1.55</span>/<span>3.60</span>/<span>6.00</span></p>
                    </td>
                    <td>
                        <p class="pl-num"><span>0.98</span>/<span>0.82</span>/<span>0.83</span></p>
                        <p class="pl-num"><span>0.98</span>/<span>0.82</span>/<span>0.83</span></p>

                    </td>
                    <td>
                        <span class="pl-return">91.78%</span>
                        <span class="pl-return">91.78%</span>
                    </td>
                </tr><!--[repeat-item]info,idx in oddsDataMap.europe.odds--><tr>
                    <td>
                        <span class="color3">澳门</span>
                    </td>
                    <td></td>
                    <td class="colorc">
                        <p class="pl-num"><span>1.50</span>/<span>3.72</span>/<span>5.50</span></p>
                        <p class="pl-num"><span class="green">1.42</span>/<span class="red">4.00</span>/<span class="red">6.10</span></p>
                    </td>
                    <td>
                        <p class="pl-num"><span>0.95</span>/<span>0.85</span>/<span>0.76</span></p>
                        <p class="pl-num"><span class="green">0.90</span>/<span class="red">0.92</span>/<span class="red">0.84</span></p>

                    </td>
                    <td>
                        <span class="pl-return">89.50%</span>
                        <span class="pl-return">89.43%</span>
                    </td>
                </tr><!--[repeat-item]info,idx in oddsDataMap.europe.odds--><tr>
                    <td>
                        <span class="color3">立博</span>
                    </td>
                    <td></td>
                    <td class="colorc">
                        <p class="pl-num"><span>1.62</span>/<span>3.40</span>/<span>5.20</span></p>
                        <p class="pl-num"><span class="green">1.44</span>/<span class="red">4.00</span>/<span class="red">7.00</span></p>
                    </td>
                    <td>
                        <p class="pl-num"><span>1.03</span>/<span>0.78</span>/<span>0.72</span></p>
                        <p class="pl-num"><span class="green">0.91</span>/<span class="red">0.92</span>/<span class="red">0.97</span></p>

                    </td>
                    <td>
                        <span class="pl-return">90.60%</span>
                        <span class="pl-return">91.97%</span>
                    </td>
                </tr><!--[repeat-item]info,idx in oddsDataMap.europe.odds--><tr>
                    <td>
                        <span class="color3">Bet365</span>
                    </td>
                    <td></td>
                    <td class="colorc">
                        <p class="pl-num"><span>1.60</span>/<span>3.60</span>/<span>5.25</span></p>
                        <p class="pl-num"><span class="green">1.44</span>/<span class="red">4.00</span>/<span class="red">8.00</span></p>
                    </td>
                    <td>
                        <p class="pl-num"><span>1.01</span>/<span>0.82</span>/<span>0.73</span></p>
                        <p class="pl-num"><span class="green">0.91</span>/<span class="red">0.92</span>/<span class="red">1.11</span></p>

                    </td>
                    <td>
                        <span class="pl-return">91.47%</span>
                        <span class="pl-return">93.51%</span>
                    </td>
                </tr><!--[repeat-item]info,idx in oddsDataMap.europe.odds--><tr>
                    <td>
                        <span class="color3">Interwetten</span>
                    </td>
                    <td></td>
                    <td class="colorc">
                        <p class="pl-num"><span>1.50</span>/<span>3.60</span>/<span>5.50</span></p>
                        <p class="pl-num"><span class="green">1.40</span>/<span class="red">3.90</span>/<span class="red">6.25</span></p>
                    </td>
                    <td>
                        <p class="pl-num"><span>0.95</span>/<span>0.82</span>/<span>0.76</span></p>
                        <p class="pl-num"><span class="green">0.89</span>/<span class="red">0.89</span>/<span class="red">0.86</span></p>

                    </td>
                    <td>
                        <span class="pl-return">88.79%</span>
                        <span class="pl-return">88.44%</span>
                    </td>
                </tr><!--[repeat-item]info,idx in oddsDataMap.europe.odds--><tr>
                    <td>
                        <span class="color3">SNAI</span>
                    </td>
                    <td></td>
                    <td class="colorc">
                        <p class="pl-num"><span>1.55</span>/<span>3.80</span>/<span>5.75</span></p>
                        <p class="pl-num"><span class="green">1.45</span>/<span class="red">4.10</span>/<span class="red">6.75</span></p>
                    </td>
                    <td>
                        <p class="pl-num"><span>0.98</span>/<span>0.87</span>/<span>0.79</span></p>
                        <p class="pl-num"><span class="green">0.92</span>/<span class="red">0.94</span>/<span class="red">0.93</span></p>

                    </td>
                    <td>
                        <span class="pl-return">92.40%</span>
                        <span class="pl-return">92.45%</span>
                    </td>
                </tr><!--[repeat-item]info,idx in oddsDataMap.europe.odds--><tr>
                    <td>
                        <span class="color3">皇冠</span>
                    </td>
                    <td></td>
                    <td class="colorc">
                        <p class="pl-num"><span>1.52</span>/<span>3.80</span>/<span>5.60</span></p>
                        <p class="pl-num"><span class="green">1.47</span>/<span class="red">4.20</span>/<span class="red">7.40</span></p>
                    </td>
                    <td>
                        <p class="pl-num"><span>0.96</span>/<span>0.87</span>/<span>0.77</span></p>
                        <p class="pl-num"><span class="green">0.93</span>/<span class="red">0.96</span>/<span class="red">1.02</span></p>

                    </td>
                    <td>
                        <span class="pl-return">90.94%</span>
                        <span class="pl-return">94.92%</span>
                    </td>
                </tr><!--[repeat-item]info,idx in oddsDataMap.europe.odds--><tr>
                    <td>
                        <span class="color3">易胜博</span>
                    </td>
                    <td></td>
                    <td class="colorc">
                        <p class="pl-num"><span>1.56</span>/<span>3.80</span>/<span>5.10</span></p>
                        <p class="pl-num"><span class="green">1.44</span>/<span class="red">4.30</span>/<span class="red">5.80</span></p>
                    </td>
                    <td>
                        <p class="pl-num"><span>0.99</span>/<span>0.87</span>/<span>0.70</span></p>
                        <p class="pl-num"><span class="green">0.91</span>/<span class="red">0.98</span>/<span class="red">0.80</span></p>

                    </td>
                    <td>
                        <span class="pl-return">90.89%</span>
                        <span class="pl-return">90.96%</span>
                    </td>
                </tr><!--[repeat-item]info,idx in oddsDataMap.europe.odds--><tr>
                    <td>
                        <span class="color3">伟德</span>
                    </td>
                    <td></td>
                    <td class="colorc">
                        <p class="pl-num"><span>1.65</span>/<span>3.60</span>/<span>5.40</span></p>
                        <p class="pl-num"><span class="green">1.44</span>/<span class="red">4.30</span>/<span class="red">7.00</span></p>
                    </td>
                    <td>
                        <p class="pl-num"><span>1.04</span>/<span>0.82</span>/<span>0.75</span></p>
                        <p class="pl-num"><span class="green">0.91</span>/<span class="red">0.98</span>/<span class="red">0.97</span></p>

                    </td>
                    <td>
                        <span class="pl-return">93.54%</span>
                        <span class="pl-return">93.47%</span>
                    </td>
                </tr><!--[repeat-item]info,idx in oddsDataMap.europe.odds--><tr>
                    <td>
                        <span class="color3">Bwin</span>
                    </td>
                    <td></td>
                    <td class="colorc">
                        <p class="pl-num"><span>1.53</span>/<span>3.60</span>/<span>6.00</span></p>
                        <p class="pl-num"><span class="green">1.48</span>/<span class="red">3.75</span>/<span class="red">6.25</span></p>
                    </td>
                    <td>
                        <p class="pl-num"><span>0.97</span>/<span>0.82</span>/<span>0.83</span></p>
                        <p class="pl-num"><span class="green">0.94</span>/<span class="red">0.86</span>/<span class="red">0.86</span></p>

                    </td>
                    <td>
                        <span class="pl-return">91.07%</span>
                        <span class="pl-return">90.72%</span>
                    </td>
                </tr><!--[repeat-item]info,idx in oddsDataMap.europe.odds--><tr>
                    <td>
                        <span class="color3">Gamebookers</span>
                    </td>
                    <td></td>
                    <td class="colorc">
                        <p class="pl-num"><span>1.53</span>/<span>3.60</span>/<span>6.00</span></p>
                        <p class="pl-num"><span>1.53</span>/<span class="red">3.70</span>/<span class="green">5.75</span></p>
                    </td>
                    <td>
                        <p class="pl-num"><span>0.97</span>/<span>0.82</span>/<span>0.83</span></p>
                        <p class="pl-num"><span>0.97</span>/<span class="red">0.85</span>/<span class="green">0.79</span></p>

                    </td>
                    <td>
                        <span class="pl-return">91.07%</span>
                        <span class="pl-return">91.09%</span>
                    </td>
                </tr><!--[repeat-item]info,idx in oddsDataMap.europe.odds--><tr>
                    <td>
                        <span class="color3">Pinnacle平博</span>
                    </td>
                    <td></td>
                    <td class="colorc">
                        <p class="pl-num"><span>1.61</span>/<span>4.01</span>/<span>6.31</span></p>
                        <p class="pl-num"><span class="green">1.46</span>/<span class="red">4.39</span>/<span class="red">8.59</span></p>
                    </td>
                    <td>
                        <p class="pl-num"><span>1.02</span>/<span>0.92</span>/<span>0.87</span></p>
                        <p class="pl-num"><span class="green">0.92</span>/<span class="red">1.00</span>/<span class="red">1.19</span></p>

                    </td>
                    <td>
                        <span class="pl-return">97.18%</span>
                        <span class="pl-return">97.17%</span>
                    </td>
                </tr><!--[repeat-item]info,idx in oddsDataMap.europe.odds--><tr>
                    <td>
                        <span class="color3">10BET</span>
                    </td>
                    <td></td>
                    <td class="colorc">
                        <p class="pl-num"><span>1.62</span>/<span>3.50</span>/<span>5.15</span></p>
                        <p class="pl-num"><span class="green">1.45</span>/<span class="red">4.15</span>/<span class="red">6.80</span></p>
                    </td>
                    <td>
                        <p class="pl-num"><span>1.03</span>/<span>0.80</span>/<span>0.71</span></p>
                        <p class="pl-num"><span class="green">0.92</span>/<span class="red">0.95</span>/<span class="red">0.94</span></p>

                    </td>
                    <td>
                        <span class="pl-return">91.14%</span>
                        <span class="pl-return">92.79%</span>
                    </td>
                </tr><!--</repeat>: info,idx in oddsDataMap.europe.odds-->

                </tbody>
            </table>
        </div>

        <!--<if: oddsDataMap.europe && oddsDataMap.europe.odds && oddsDataMap.europe.odds.length />--><div class="sk-btips">
            共14家公司为你提供数据，其中主流公司14家<br>
            <span>500彩票网提示：以上数据仅供参考，请以官方公布的数据为准</span>
        </div></div>
        <!--<if: subtab === 'asian' />-->
        <!--<if: subtab === 'rangqiu' />-->
        <!--<if: subtab === 'daxiaopan' />-->
        <!--<if: subtab === 'bifa' />-->
    </div>
</template>
<script>
    import {aTypes} from '~store/zqdetail'
    export default {
        async asyncData ({store, route: {params}}) {
            await store.dispatch(aTypes.getEurope, params.fid)
        },
        computed: {
            europe () {
                return this.$store.state.zqdetail.europe
            }
        }

    }
</script>
