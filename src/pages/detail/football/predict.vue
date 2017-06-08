<template>
    <div>
        <div class="gl-box box-yc">
            <div class="gl-nav">胜平负 <span class="yc-more"></span></div>
            <div class="box-ycInner">

                <div class="dataBox" v-if="predictEurope" v-tap="{methods: selectTab, tab: 'europe'}">
                    <ul class="dataItem">
                        <li class="itemL"
                            :class="{'red2':predictEurope.outter.result.pw>predictEurope.outter.result.pd&&predictEurope.outter.result.pw>predictEurope.outter.result.pl}">
                            <em class="num">{{predictEurope.outter.result.pw}}</em>
                            <span class="numSub">%</span>
                            <span class="item-info2">主胜</span>
                        </li>
                        <li class="itemC"
                            :class="{'red2':predictEurope.outter.result.pd>predictEurope.outter.result.pw&&predictEurope.outter.result.pd>predictEurope.outter.result.pl}">
                            <em class="num">{{predictEurope.outter.result.pd}}</em>
                            <span class="numSub">%</span>
                            <span class="item-info2">平</span>
                        </li>
                        <li class="itemR"
                            :class="{'red2':predictEurope.outter.result.pl>predictEurope.outter.result.pw&&predictEurope.outter.result.pl>predictEurope.outter.result.pd}">
                            <em class="num">{{predictEurope.outter.result.pl}}</em>
                            <span class="numSub">%</span>
                            <span class="item-info2">主负</span>
                        </li>
                    </ul>
                </div>

                <echart-bar-line v-if="predictEurope" v-tap="{methods: selectTab, tab: 'europe'}"  class="chart-yuce" name-bar="主胜概率" name-line="赔率趋势" :data-bar="predictEurope.outter.chart.nbars" :data-line="predictEurope.outter.chart.curve"></echart-bar-line>

                <div class="feed-back" v-if="!predictEurope">
                    <div class="feed-box">
                        <em>暂无数据</em>
                    </div>
                </div>
            </div>
        </div>

        <div class="gl-box box-yc" v-if="predictAsian">
            <div class="gl-nav">
                亚盘{{predictAsian.inner.this_match.curr_odds[1]?('（盘口：'+predictAsian.inner.this_match.curr_odds[1]+'）'):'--'}}
                <span class="yc-more" ></span></div>
            <div class="box-ycInner">

                <div class="dataBox" v-if="predictAsian" v-tap="{methods: selectTab, tab: 'asian'}">
                    <ul class="dataItem">
                        <li class="itemL"
                            :class="{'red2':predictAsian.outter.result.pw>predictAsian.outter.result.pd&&predictAsian.outter.result.pw>predictAsian.outter.result.pl}">
                            <em class="num">{{predictAsian.outter.result.pw}}</em>
                            <span class="numSub">%</span>
                            <span class="item-info2">赢盘</span>
                        </li>
                        <li class="itemC"
                            :class="{'red2':predictAsian.outter.result.pd>predictAsian.outter.result.pw&&predictAsian.outter.result.pd>predictAsian.outter.result.pl}">
                            <em class="num">{{predictAsian.outter.result.pd}}</em>
                            <span class="numSub">%</span>
                            <span class="item-info2">走盘</span>
                        </li>
                        <li class="itemR"
                            :class="{'red2':predictAsian.outter.result.pl>predictAsian.outter.result.pw&&predictAsian.outter.result.pl>predictAsian.outter.result.pd}">
                            <em class="num">{{predictAsian.outter.result.pl}}</em>
                            <span class="numSub">%</span>
                            <span class="item-info2">输盘</span>
                        </li>
                    </ul>
                </div>

                <echart-bar-line v-if="predictAsian" v-tap="{methods: selectTab, tab: 'asian'}" class="chart-yuce" name-bar="赢盘概率" name-line="赔率趋势" :data-bar="predictAsian.outter.chart.nbars" :data-line="predictAsian.outter.chart.curve"></echart-bar-line>

                <div class="feed-back" v-if="!predictAsian">
                    <div class="feed-box">
                        <em>暂无数据</em>
                    </div>
                </div>

            </div>
        </div>

        <div class="gl-box box-yc" v-if="predictDaXiao">
            <div class="gl-nav">
                大小盘{{predictDaXiao.inner.this_match.curr_odds[1]?('（盘口：'+predictDaXiao.inner.this_match.curr_odds[1]+'）'):''}}
                <span class="yc-more"></span></div>
            <div class="box-ycInner">

                <div class="dataBox"  v-if="predictDaXiao" v-tap="{methods: selectTab, tab: 'daXiao'}">
                    <ul class="dataItem">
                        <li class="itemL"
                            :class="{'red2':predictDaXiao.outter.result.pw>predictDaXiao.outter.result.pd&&predictDaXiao.outter.result.pw>predictDaXiao.outter.result.pl}">
                            <em class="num">{{predictDaXiao.outter.result.pw}}</em>
                            <span class="numSub">%</span>
                            <span class="item-info2">大球</span>
                        </li>
                        <li class="itemC"
                            :class="{'red2':predictDaXiao.outter.result.pd>predictDaXiao.outter.result.pw&&predictDaXiao.outter.result.pd>predictDaXiao.outter.result.pl}">
                            <em class="num">{{predictDaXiao.outter.result.pd}}</em>
                            <span class="numSub">%</span>
                            <span class="item-info2">走盘</span>
                        </li>
                        <li class="itemR"
                            :class="{'red2':predictDaXiao.outter.result.pl>predictDaXiao.outter.result.pw&&predictDaXiao.outter.result.pl>predictDaXiao.outter.result.pd}">
                            <em class="num">{{predictDaXiao.outter.result.pl}}</em>
                            <span class="numSub">%</span>
                            <span class="item-info2">小球</span>
                        </li>
                    </ul>
                </div>

                <echart-bar-line v-if="predictDaXiao" v-tap="{methods: selectTab, tab: 'daXiao'}"  class="chart-yuce" name-bar="大球概率" name-line="赔率趋势" :data-bar="predictDaXiao.outter.chart.nbars" :data-line="predictDaXiao.outter.chart.curve"></echart-bar-line>


                <div class="feed-back" v-if="!predictDaXiao">
                    <div class="feed-box">
                        <em>暂无数据</em>
                    </div>
                </div>
            </div>
        </div>

        <div class="gl-box box-yc">

            <div class="gl-nav">比分与进球 <span class="yc-more" ></span></div>
            <div class="box-ycInner box-yc-bifen">

                <div class="dataBox" v-if="predictScore" v-tap="{methods: selectTab, tab: 'score'}">
                    <ul class="dataItem">
                        <li class="itemL"
                            :class="{'red2':predictScore.outter.score[0].prob>predictScore.outter.score[1].prob&&predictScore.outter.score[0].prob>predictScore.outter.score[2].prob}">
                            <em class="num">{{predictScore.outter.score[0].prob}}</em> <span class="numSub">%</span> <span
                                class="item-info2">{{predictScore.outter.score[0].score}}</span></li>
                        <li class="itemC"
                            :class="{'red2':predictScore.outter.score[1].prob>predictScore.outter.score[0].prob&&predictScore.outter.score[1].prob>predictScore.outter.score[2].prob}">
                            <em class="num">{{predictScore.outter.score[1].prob}}</em> <span class="numSub">%</span> <span
                                class="item-info2">{{predictScore.outter.score[1].score}}</span></li>
                        <li class="itemR"
                            :class="{'red2':predictScore.outter.score[2].prob>predictScore.outter.score[0].prob&&predictScore.outter.score[2].prob>predictScore.outter.score[1].prob}">
                            <em class="num">{{predictScore.outter.score[2].prob}}</em> <span class="numSub">%</span> <span
                                class="item-info2">{{predictScore.outter.score[2].score}}</span></li>
                    </ul>
                    <ul class="dataItem">
                        <li class="itemL"
                            :class="{'red2':predictScore.outter.nums[0].prob>predictScore.outter.nums[1].prob&&predictScore.outter.nums[0].prob>predictScore.outter.nums[2].prob}">
                            <em class="num">{{predictScore.outter.nums[0].prob}}</em> <span class="numSub">%</span> <span
                                class="item-info2">{{predictScore.outter.nums[0].num}}球</span></li>
                        <li class="itemC"
                            :class="{'red2':predictScore.outter.nums[1].prob>predictScore.outter.nums[0].prob&&predictScore.outter.nums[1].prob>predictScore.outter.nums[2].prob}">
                            <em class="num">{{predictScore.outter.nums[1].prob}}</em> <span class="numSub">%</span> <span
                                class="item-info2">{{predictScore.outter.nums[1].num}}球</span></li>
                        <li class="itemR"
                            :class="{'red2':predictScore.outter.nums[2].prob>predictScore.outter.nums[0].prob&&predictScore.outter.nums[2].prob>predictScore.outter.nums[1].prob}">
                            <em class="num">{{predictScore.outter.nums[2].prob}}</em> <span class="numSub">%</span> <span
                                class="item-info2">{{predictScore.outter.nums[2].num}}球</span></li>
                    </ul>
                </div>


                <echart-position v-if="predictScore" class="chart-yuce" style="height: 5.2rem" :name1="match.homesxname+'(主)'" :name2="match.awaysxname" :data1="predictScore.u.hu" :data2="predictScore.u.au"></echart-position>

                <div class="feed-back" v-if="!predictScore">
                    <div class="feed-box">
                        <em>暂无数据</em>
                    </div>
                </div>
            </div>
        </div>

        <div class="gl-box box-yc">
            <div class="gl-nav">半场 <span class="yc-more" ></span></div>
            <div class="box-ycInner">

                <div class="dataBox" v-if="predictHalf"  v-tap="{methods: selectTab, tab: 'bc'}">
                    <ul class="dataItem">
                        <li class="itemL"
                            :class="{'red2':predictHalf.outter.prob.win>predictHalf.outter.prob.draw&&predictHalf.outter.prob.win>predictHalf.outter.prob.lost}">
                            <em class="num">{{predictHalf.outter.prob.win}}</em> <span class="numSub">%</span> <span
                                class="item-info2">主胜</span></li>
                        <li class="itemC"
                            :class="{'red2':predictHalf.outter.prob.draw>predictHalf.outter.prob.win&&predictHalf.outter.prob.draw>predictHalf.outter.prob.lost}">
                            <em class="num">{{predictHalf.outter.prob.draw}}</em> <span class="numSub">%</span> <span
                                class="item-info2">平</span></li>
                        <li class="itemR"
                            :class="{'red2':predictHalf.outter.prob.lost>predictHalf.outter.prob.draw&&predictHalf.outter.prob.lost>predictHalf.outter.prob.win}">
                            <em class="num">{{predictHalf.outter.prob.lost}}</em> <span class="numSub">%</span> <span
                                class="item-info2">主负</span></li>
                    </ul>
                    <ul class="dataItem">
                        <li class="itemL"
                            :class="{'red2':predictHalf.outter.score[0].prob>predictHalf.outter.score[1].prob&&predictHalf.outter.score[0].prob>predictHalf.outter.score[2].prob}">
                            <em class="num">{{predictHalf.outter.score[0].prob}}</em> <span class="numSub">%</span> <span
                                class="item-info2">{{predictHalf.outter.score[0].score}}</span></li>
                        <li class="itemC"
                            :class="{'red2':predictHalf.outter.score[1].prob>predictHalf.outter.score[0].prob&&predictHalf.outter.score[1].prob>predictHalf.outter.score[2].prob}">
                            <em class="num">{{predictHalf.outter.score[1].prob}}</em> <span class="numSub">%</span> <span
                                class="item-info2">{{predictHalf.outter.score[1].score}}</span></li>
                        <li class="itemR"
                            :class="{'red2':predictHalf.outter.score[2].prob>predictHalf.outter.score[0].prob&&predictHalf.outter.score[2].prob>predictHalf.outter.score[1].prob}">
                            <em class="num">{{predictHalf.outter.score[2].prob}}</em> <span class="numSub">%</span> <span
                                class="item-info2">{{predictHalf.outter.score[2].score}}</span></li>
                    </ul>
                    <ul class="dataItem">
                        <li class="itemL"
                            :class="{'red2':predictHalf.outter.nums[0].prob>predictHalf.outter.score[1].prob&&predictHalf.outter.score[0].prob>predictHalf.outter.score[2].prob}">
                            <em class="num">{{predictHalf.outter.nums[0].prob}}</em> <span class="numSub">%</span> <span
                                class="item-info2">{{predictHalf.outter.nums[0].num}}球</span></li>
                        <li class="itemC"
                            :class="{'red2':predictHalf.outter.nums[1].prob>predictHalf.outter.score[0].prob&&predictHalf.outter.score[1].prob>predictHalf.outter.score[2].prob}">
                            <em class="num">{{predictHalf.outter.nums[1].prob}}</em> <span class="numSub">%</span> <span
                                class="item-info2">{{predictHalf.outter.nums[1].num}}球</span></li>
                        <li class="itemR"
                            :class="{'red2':predictHalf.outter.nums[2].prob>predictHalf.outter.score[0].prob&&predictHalf.outter.score[2].prob>predictHalf.outter.score[1].prob}">
                            <em class="num">{{predictHalf.outter.nums[2].prob}}</em> <span class="numSub">%</span> <span
                                class="item-info2">{{predictHalf.outter.nums[2].num}}球</span></li>
                    </ul>
                </div>
                <div class="feed-back" v-if="!predictHalf">
                    <div class="feed-box">
                        <em>暂无数据</em>
                    </div>
                </div>
            </div>
        </div>
        <div class="sk-btips">
            500彩票网提示：<br>以上数据仅供参考，请以官方公布的数据为准
        </div>
    </div>
</template>
<script>
    import europePop from '~components/detail/football/predict/europePop.vue'
    import asianPop from '~components/detail/football/predict/asianPop.vue'
//    const europePop = () => import('~components/detail/football/predict/europePop.vue' /* webpackChunkName: "components/detail-football-predict-europe-pop" */)
//    const asianPop = () => import('~components/detail/football/predict/asianPop.vue' /* webpackChunkName: "components/detail-football-predict-asian-pop" */)

    import echartBarLine from '~components/detail/football/predict/echartBarLine.vue'
    import echartPosition from '~components/detail/football/predict/echartPosition.vue'
    import {mTypes, aTypes} from '~store/zqdetail'
    export default {
        async asyncData ({store, route: {params}}) {
            await store.dispatch(aTypes.getPredict, params.fid)
        },
        components: {
            echartBarLine, echartPosition
        },
        methods: {
            selectTab ({tab}) {
                let component = null
                switch (tab) {
                case 'europe':
                    component = europePop
                    break
                case 'asian':
                    component = asianPop
                    break
                }

                this.$store.commit(mTypes.setDialog, component)
            }
        },
        computed: {
            match () {
                return this.$store.state.zqdetail.baseInfo
            },
            predictEurope () {
                return this.$store.state.zqdetail.predict.europe
            },
            predictDaXiao () {
                return this.$store.state.zqdetail.predict.daxiaoqiu
            },
            predictScore () {
                return this.$store.state.zqdetail.predict.score
            },
            predictHalf () {
                return this.$store.state.zqdetail.predict.half
            },
            predictAsian () {
                return this.$store.state.zqdetail.predict.asian
            }

        },
        mounted () {

        }
    }
</script>
<style>
    .chart-position {
        height: 5.2rem
    }
</style>
