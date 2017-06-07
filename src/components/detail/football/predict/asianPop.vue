<template>
    <div class="popBox l-full l-flex-column  slide-bottom-to-top">
        <div class="popTopbar" v-tap="{methods: closeDialog}"></div>
        <div class="popInner box-yc">
            <div class="full-scroll">
                <div class="popHeader">
                    <h4 class="popTit">概率分布</h4>
                    <ul class="dataItem">
                        <li class="itemL" :class="{'red2': outter.result.pw>outter.result.pd&&outter.result.pw>outter.result.pl}">
                            <em class="num">{{outter.result.pw}}</em>
                            <span class="numSub">%</span>
                            <span class="item-info2">主胜</span>
                        </li>
                        <li class="itemC" :class="{'red2':outter.result.pd>outter.result.pw&&outter.result.pd>outter.result.pl}">
                            <em class="num">{{outter.result.pd}}</em>
                            <span class="numSub">%</span>
                            <span class="item-info2">平</span>
                        </li>
                        <li class="itemR" :class="{'red2':outter.result.pl>outter.result.pw&&outter.result.pl>outter.result.pd}">
                            <em class="num">{{outter.result.pl}}</em>
                            <span class="numSub">%</span>
                            <span class="item-info2">主负</span>
                        </li>
                    </ul>
                </div>
                <ul class="popTab clear">
                    <li class="f30" :class="{cur: tab==='history'}" v-tap="{methods: switchTab, tab: 'history'}">历史对比
                    </li>
                    <li class="f30" :class="{cur: tab==='trend'}" v-tap="{methods: switchTab, tab: 'trend'}">趋势记录
                    </li>
                </ul>
                <div class="popDetail" v-if="tab === 'history'">
                    <h4 class="popTit">本场比赛</h4>
                    <ul class="dataItem">
                        <li class="itemL">
                            <div>{{match.simpleleague}}</div>
                            <div>{{match.matchtime.substring(0,11)}}</div>
                        </li>
                        <li class="itemC">
                            <table cellpadding="0" cellspacing="0" width="100%">
                                <tbody>
                                <tr>
                                    <td width="35%">
                                        {{(inner.this_match.homesxname||'').substr(0,3)}}
                                    </td>
                                    <td width="10%" class="textcenter">
                                        {{inner.this_match.result==='-1'?'-':inner.this_match.homescore}}
                                    </td>
                                    <td>
                                        <span v-if="inner.this_match.result=='3'"
                                              class="state red">主胜</span>
                                        <span v-if="inner.this_match.result=='1'" class="state green">平</span>
                                        <span v-if="inner.this_match.result=='0'" class="state blue">主负</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>{{(inner.this_match.awaysxname||'').substr(0,3)}}</td>
                                    <td class="textcenter">
                                        {{inner.this_match.result==='-1'?'-':inner.this_match.awayscore}}
                                    </td>
                                    <td>&nbsp;</td>
                                </tr>
                                </tbody>
                            </table>
                        </li>
                        <li class="itemR">
                            <echart-line :oddslist="inner.this_match.oddslist" class="chart-similar"></echart-line>
                        </li>
                    </ul>
                    <div class="popDetail-pl">
                        <table cellpadding="0" cellspacing="0" width="100%">
                            <tbody>
                            <tr>
                                <td width="13%">初赔：</td>
                                <td width="10%">{{inner.this_match.first_odds[0]}}</td>
                                <td width="30%" align="center">{{inner.this_match.first_odds[1]}}</td>
                                <td width="10%" align="right">{{inner.this_match.first_odds[2]}}</td>
                                <td>&nbsp;</td>
                            </tr>
                            <tr>
                                <td>即赔：</td>
                                <td :class="{'red2':inner.this_match.curr_odds[0]>inner.this_match.first_odds[0],'green2':inner.this_match.curr_odds[0]<inner.this_match.first_odds[0]}">
                                    {{inner.this_match.curr_odds[0]}}
                                </td>
                                <td align="center"
                                    :class="{'red2':inner.this_match.curr_odds[1]>inner.this_match.first_odds[1],'green2':inner.this_match.curr_odds[1]<inner.this_match.first_odds[1]}">
                                    {{inner.this_match.curr_odds[1]}}
                                </td>
                                <td align="right"
                                    :class="{'red2':inner.this_match.curr_odds[2]>inner.this_match.first_odds[2],'green2':inner.this_match.curr_odds[2]<inner.this_match.first_odds[2]}">
                                    {{inner.this_match.curr_odds[2]}}
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


                    <ul class="dataItem" v-for="item in inner.history_sample">

                        <li class="itemL">
                            <div>{{item.simplegbname}}</div>
                            <div>{{item.matchtime.substring(0,11)}}</div>
                        </li>
                        <li class="itemC">
                            <table cellpadding="0" cellspacing="0" width="100%">
                                <tbody>
                                <tr>
                                    <td width="45%">{{(item.homesxname||'').substr(0,3)}}</td>
                                    <td width="10%" class="textcenter">{{item.homescore}}</td>
                                    <td><span v-if="item.result==='3'" class="state red">主胜</span>
                                        <span v-if="item.result==='1'" class="state green">平</span>
                                        <span v-if="item.result==='0'" class="state blue">主负</span></td>
                                </tr>
                                <tr>
                                    <td>{{(item.awaysxname||'').substr(0,3)}}</td>
                                    <td class="textcenter">{{item.awayscore}}</td>
                                    <td>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </li>

                        <li class="itemR">
                            <em class="similar-num">{{item.similarity}}</em>
                            <echart-line :oddslist="item.oddslist" class="chart-similar"></echart-line>

                        </li>
                    </ul>

                </div>
                <div class="popDetail" v-if="tab === 'trend'">
                    <echart-bar-line class="chart-yuce" name-bar="主胜概率" name-line="赔率趋势" :data-bar="outter.chart.nbars" :data-line="outter.chart.curve"></echart-bar-line>

                    <table width="100%" cellpadding="0" cellspacing="0" class="fx-table">
                        <tbody>
                        <tr>
                            <th>时间</th>
                            <th width="18%">主胜</th>
                            <th width="18%">平</th>
                            <th width="18%">主负</th>
                        </tr>
                        <tr v-for="item,idx in outter.table">
                            <td>{{panTimeMap[idx]}}</td>
                            <td>{{item.pw}}%</td>
                            <td>{{item.pd}}%</td>
                            <td>{{item.pl}}%</td>
                        </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div class="popFooter" v-tap="{methods: closeDialog}">
            <span class="arrow"></span>

            <h2 class="f30">亚盘（盘口：{{inner.this_match.curr_odds[1]}}）</h2>
        </div>
    </div>
</template>
<script>
    import {mTypes} from '~store/zqdetail'
    import echartBarLine from '~components/detail/football/predict/echartBarLine.vue'
    import echartLine from '~components/detail/football/predict/echartLine.vue'
    export default {
        data () {
            return {
                tab: 'history',
                panTimeMap: ['初赔', '赛前24h', '赛前12h', '赛前6h', '赛前5h', '赛前4h', '赛前3h', '赛前2.5h', '赛前2h', '赛前1.5h', '赛前1h', '赛前0.5h', '终赔']
            }
        },
        components: {
            echartBarLine, echartLine
        },
        methods: {
            closeDialog () {
                this.$store.commit(mTypes.setDialog, null)
            },
            switchTab ({tab}) {
                this.tab = tab
            }
        },
        computed: {
            outter () {
                return this.$store.state.zqdetail.predict.asian.outter
            },
            inner () {
                return this.$store.state.zqdetail.predict.asian.inner
            },
            match () {
                return this.$store.state.zqdetail.baseInfo
            }
        }

    }
</script>
