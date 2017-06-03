<template>
    <div>
        <div class="gl-box box-bsyp">
            <div class="gl-nav">泊松亚盘</div>
            <!--<if: poissonInfo />--><div class="dataBox">
            <span class="dataTit f22">澳门初盘</span>
            <ul class="dataItem">
                <li class="itemL">
                    <em class="num">1.04</em>
                </li>
                <li class="itemC">
                    <span class="item-tit">平手</span>
                </li>
                <li class="itemR">
                    <em class="num">0.82</em>
                </li>
            </ul>
            <span class="dataTit f22">泊松推算盘</span>
            <ul class="dataItem">
                <li class="itemL">
                    <em class="num green2">0.99</em>
                </li>
                <li class="itemC">
                    <span class="item-tit">平手</span>
                </li>
                <li class="itemR">
                    <em class="num red2">0.87</em>
                </li>
            </ul>
        </div>
            <!--<if: poissonInfo.presnetations />--><div class="infoTips"><i class="icon"></i><p class="f24">根据500泊松模型推算得出，本场比赛澳门初盘与推算盘口相同，从水位看，客队占优势。</p>	</div>

            <!--<if: !poissonInfo&&!isPoissonRequest />-->
            <!--<if: isPoissonRequest />-->
        </div>

        <div class="gl-box box-tongp">
            <div class="zj-nav">
                <span class="i-po">同赔分析</span>
            </div>
            <!--<if: probability />--><div class="dataBox">
            <ul class="dataItem">
                <li class="itemL">
                    <em class="num">30</em>
                    <span>%</span>
                    <span class="item-info">主胜</span>
                </li>
                <li class="itemC red2">
                    <em class="num">60</em>
                    <span>%</span>
                    <span class="item-info">平局</span>
                </li>
                <li class="itemR">
                    <em class="num">10</em>
                    <span>%</span>
                    <span class="item-info">主负</span>
                </li>
            </ul>
        </div>

            <!--<if: probability />--><div class="opgl-tips clear">
            <p class="color9">
                场均初赔：
                <span class="chupei">2.80</span>
                <span class="chupei">3.30</span>
                <span class="chupei">2.50</span>
            </p>

            <p class="color9">
                场均终赔：
                <span class="chupei">2.78</span>
                <span class="chupei">3.40</span>
                <span class="chupei">2.59</span>
            </p>
            <a class="color78 fr yb-btn" href="javascript:;">历史样本详情&gt;</a>
        </div>
            <!--<if: !probability&&!isProbabilityRequest />-->
            <!--<if: isProbabilityRequest />-->
        </div>

        <div class="gl-box box-panl">
            <div class="gl-nav">盘路特征对比</div>
            <!--<if: handicapFeature />-->
            <!--<if: hasHandicapFeature />-->
            <!--<if: !handicapFeature&&!isHandiRequest />--><div class="feed-back">
            <div class="feed-box">
                <em>暂无数据</em>
            </div>
        </div>
            <!--<if: isHandiRequest />-->
        </div>
        <!--<if: from!='app_online'&&(hasUserBetPercent_spf || hasUserBetPercent_nspf) />-->
        <div class="gl-box">
            <div class="gl-nav">冷热分布</div>
            <!--<if: coldHotInfo />--><table width="100%" cellpadding="0" cellspacing="0" class="fx-table fb">
            <tbody><tr>
                <th>选项</th>
                <th width="22%">百家欧赔</th>
                <th width="22%">必发</th>
                <th width="18%">人气</th>
            </tr>
            <tr>
                <td><em class="f24">主胜</em></td>
                <td>33.1%</td>
                <td>--%</td>
                <td>47.5%</td>
            </tr>
            <tr>
                <td><em class="f24">平局</em></td>
                <td>30.2%</td>
                <td>--%</td>
                <td>13.6%</td>
            </tr>
            <tr>
                <td><em class="f24">主负</em></td>
                <td>36.7%</td>
                <td>--%</td>
                <td>39.0%</td>
            </tr>
            </tbody></table>
            <!--<if: !coldHotInfo&&!isColdHotInfoRequest />-->
            <!--<if: isColdHotInfoRequest />-->
        </div>
    </div>
</template>
