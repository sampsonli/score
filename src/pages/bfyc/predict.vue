<!--ui: http://ui.touch500.boss.com/touch/bifen/v124/predict.html-->
<template>
    <div class="v124-wrap l-full l-flex-column">

        <!--顶部的时间-->
        <section class="hotc-header">
            {{cur|fdate}}
            <ul>
                <li :class="{'cur': expect_list&&cur===expect_list[0]}"
                    v-tap="{methods: changeExpect , expect: expect_list&&expect_list[0]}">昨日
                </li>
                <li :class="{'cur': expect_list&&cur===expect_list[1]}"
                    v-tap="{methods: changeExpect , expect: expect_list&&expect_list[1]}">今日
                </li>
                <li :class="{'cur': expect_list&&cur===expect_list[2]}"
                    v-tap="{methods: changeExpect , expect: expect_list&&expect_list[2]}">明日
                </li>
            </ul>
        </section>
        <div class="hot-cool-wrap l-flex-1 l-relative">
            <div class="l-full l-scroll-y">
                <!--比赛列表-->
                <section class="hotc-list">
                    <!--预测广告-->
                    <div class="notice-predict" v-if="good_news">
                        <p v-html="good_news">
                        </p>
                    </div>
                    <template v-if="matches">
                        <template v-if="matches.length">

                            <ul>
                                <template v-for="match,idx in matches" v-if="match.status !== '4'">
                                    <!--未完场-->
                                    <li class="hotc-item hotc-item-going" v-tap="{methods: goAnalysis, fid: match.fid}"
                                        v-if="idx!==1">
                                        <div class="hotc-left">
                                            <div class="hotc-info-tit">{{match.homesxname}} VS {{match.awaysxname}}
                                            </div>
                                            <div class="hotc-info-time">{{match.order}} {{match.simpleleague}}
                                                {{match.matchtime.substr(5)}}
                                            </div>
                                        </div>
                                        <div class="hotc-right">
                                            <!--<div class="left-statue">命</br>中</div>-->
                                            <div class="right-predict">
                                                <p>{{match.cell.probability}}<em>%</em></p>
                                                <p>{{match.cell.predict_result|predictResult}}
                                                    {{match.cell.predict_reback}}</p>
                                            </div>
                                        </div>
                                    </li>

                                    <li class="hotc-item hotc-item-going" v-tap="{methods: goAnalysis, fid: match.fid}"
                                        v-if="idx===1" style="position: -webkit-sticky">
                                        <div class="hotc-left">
                                            <div class="hotc-info-tit">{{match.homesxname}} VS {{match.awaysxname}}
                                            </div>
                                            <div class="hotc-info-time">{{match.order}} {{match.simpleleague}}
                                                {{match.matchtime.substr(5)}}
                                            </div>
                                        </div>
                                        <div class="hotc-right">
                                            <!--<div class="left-statue">命</br>中</div>-->
                                            <div class="right-predict">
                                                <p>{{match.cell.probability}}<em>%</em></p>
                                                <p>{{match.cell.predict_result|predictResult}}
                                                    {{match.cell.predict_reback}}</p>
                                            </div>
                                        </div>
                                    </li>
                                </template>
                            </ul>
                            <!--已完场-->
                            <div class="tag-game-over" v-if="curStatus.history&&curStatus.latest">已完场</div>

                            <ul>
                                <template v-for="match in matches" v-if="match.status === '4'">
                                    <li class="hotc-item" v-tap="{methods: goAnalysis, fid: match.fid}">
                                        <div class="hotc-left">
                                            <div class="hotc-info-tit">{{match.homesxname}}
                                                {{match.homescore}}:{{match.awayscore}} {{match.awaysxname}}
                                            </div>
                                            <div class="hotc-info-time">
                                                {{match.order}} {{match.simpleleague}}
                                                {{match.matchtime.substr(5)}}
                                            </div>
                                        </div>

                                        <!--未中 加上statue-hit-no-->
                                        <div class="hotc-right statue-hit-no" v-if="match.cell.on_target==='0'">
                                            <div class="left-statue">未<br/>中</div>
                                            <div class="right-predict">
                                                <p>{{match.cell.probability}}<em>%</em></p>
                                                <p>{{match.cell.predict_result|predictResult}}
                                                    {{match.cell.predict_reback}}</p>
                                            </div>
                                        </div>

                                        <div class="hotc-right" v-if="match.cell.on_target==='1'">
                                            <div class="left-statue">命<br/>中</div>
                                            <div class="right-predict">
                                                <p>{{match.cell.probability}}<em>%</em></p>
                                                <p>{{match.cell.predict_result|predictResult}}
                                                    {{match.cell.predict_reback}}</p>
                                            </div>
                                        </div>
                                    </li>
                                </template>
                            </ul>

                            <p class="txt-predict">
                                赛前随赔率变化，预测概率也将有所变化。

                                <br/>离开赛时间越近预测概率准确性也就越高哦。

                            </p>
                        </template>
                        <prompt v-else type="no-data" tip0="暂无数据"/>
                    </template>
                    <prompt v-else type="loading" tip0="正在加载中..."/>


                </section>

            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import Prompt from '~components/prompt.vue'
    export default {
        async asyncData ({store}) {
            if (store.state.bfyc.awesome_predict) {
                return {
                    cur: store.state.bfyc.awesome_predict.curr_expect
                }
            } else {
                let predict = await store.dispatch('bfyc/fetchAwesomePredict')
                return {
                    cur: predict.curr_expect
                }
            }
        },

        components: {
            Prompt
        },

        computed: {
            good_news () {
                return this.$store.state.bfyc.awesome_predict && this.$store.state.bfyc.awesome_predict.good_news
            },
            expect_list () {
                return this.$store.state.bfyc.awesome_predict && this.$store.state.bfyc.awesome_predict.expect_list
            },
            curr_expect () {
                return this.$store.state.bfyc.awesome_predict && this.$store.state.bfyc.awesome_predict.curr_expect
            },
            matches () {
                return this.$store.state.bfyc.awesome_predict && this.cur && this.$store.state.bfyc.awesome_predict.allMatches[this.cur]
            },
            curStatus: function () {
                let curStatus = {
                    latest: false,
                    history: false
                }
                if (this.matches) {
                    this.matches.forEach(match => {
                        if (match.status !== '4') {
                            curStatus.latest = true
                        } else {
                            curStatus.history = true
                        }
                    })
                }
                return curStatus
            }
        },
        watch: {
            curr_expect (currExpect) {
                this.cur = currExpect
            }
        },

        methods: {
            changeExpect ({expect}) {
                this.cur = expect
                if (!this.$store.state.bfyc.awesome_predict.allMatches[this.cur] || !this.$store.state.bfyc.awesome_predict.allMatches[this.cur].length) {
                    this.$store.dispatch('bfyc/fetchAwesomePredict', this.cur)
                }
            },
            goAnalysis: function ({fid}) {
                location.href = `/score/detail.html#/footballdetail/predict/${fid}`
            }
        },
        filters: {
            predictResult: (pr) => {
//                3-主胜 1-平局 0-主负
                switch (pr) {
                case '1':
                    return '平局'
                case '0':
                    return '主负'
                case '3':
                    return '主胜'
                }
            },
            fdate: (cur) => {
                return cur && cur.replace('-', '年').replace('-', '月') + '日'
            }
        }
    }
</script>
