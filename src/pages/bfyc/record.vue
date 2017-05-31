<!--ui: http://ui.touch500.boss.com/touch/bifen/v124/record.html-->
<template>
    <div class="v124-wrap l-flex-column l-full">
        <section class="record-header">
            <ul>
                <li :class="{'cur':tab === 'result' }" @click="onTab('result')">胜平负</li>
                <li :class="{'cur':tab === 'asian' }" @click="onTab('asian')">亚盘</li>
                <li :class="{'cur':tab === 'bigsmall' }" @click="onTab('bigsmall')">大小球</li>
            </ul>
        </section>
        <div class="hot-cool-wrap l-flex-1 l-relative" v-if="record">
            <!--胜平负-->
            <div class="l-full l-scroll-y">
                <div v-if="tab === 'result' && noEmpty(record.result)">
                    <div class="gl-nav sticky" v-if="record.result.recent_record.length">近期战绩</div>
                    <section v-for="item in record.result.recent_record">
                        <div class="hotc-item record-item" v-tap="{methods: goAnalysis, fid: item.fid}">
                            <div class="hotc-right" v-if="item.cell.result === '3'">
                                <div class="right-predict">{{item.cell.continous}}<em>连胜</em></div>
                            </div>
                            <div class="hotc-right always-draw" v-if="item.cell.result === '1'">
                                <div class="right-predict">{{item.cell.continous}}<em>连平</em></div>
                            </div>
                            <div class="hotc-right  always-fail" v-if="item.cell.result === '0'">
                                <div class="right-predict">{{item.cell.continous}}<em>连负</em></div>
                            </div>

                            <div class="hotc-left">
                                <div class="hotc-info-tit">{{item.cell.teamsxname}}</div>
                                <div class="hotc-info-time">{{item.simpleleague}} {{item.matchtime.substr(5)}} <em>{{item.homesxname}}
                                    VS {{item.awaysxname}}</em></div>
                            </div>
                        </div>
                    </section>

                    <div class="gl-nav sticky" v-if="record.result.history_battle.length">历史交战</div>
                    <section v-for="list in record.result.history_battle">
                        <div class="hotc-item record-item" v-tap="{methods: goAnalysis, fid: list.fid}">
                            <div class="hotc-right" v-if="list.cell.result === '3'">
                                <div class="right-predict">{{list.cell.continous}}<em>连胜</em></div>
                            </div>
                            <div class="hotc-right always-draw" v-if="list.cell.result === '1'">
                                <div class="right-predict">{{list.cell.continous}}<em>连平</em></div>
                            </div>
                            <div class="hotc-right  always-fail" v-if="list.cell.result === '0'">
                                <div class="right-predict">{{list.cell.continous}}<em>连负</em></div>
                            </div>

                            <div class="hotc-left">
                                <div class="hotc-info-tit">{{list.cell.teamsxname}}</div>
                                <div class="hotc-info-time">{{list.simpleleague}} {{list.matchtime.substr(5)}} <em>{{list.homesxname}}
                                    VS {{list.awaysxname}}</em></div>
                            </div>
                        </div>
                    </section>
                </div>


            </div>
            <div class="l-full l-scroll-y" v-if="tab === 'result' && !noEmpty(record.result)">
                <prompt type="no-data" tip0="暂无数据"/>
            </div>

            <!--压盘-->
            <div class="l-full l-scroll-y">
                <div v-if="tab === 'asian' && noEmpty(record.asian)">
                    <div class="gl-nav sticky" v-if="record.asian.recent_record.length">近期战绩</div>
                    <section v-for="item in record.asian.recent_record">
                        <div class="hotc-item record-item" v-tap="{methods: goAnalysis, fid: item.fid}">
                            <div class="hotc-right" v-if="item.cell.result === '3'">
                                <div class="right-predict">{{item.cell.continous}}<em>连赢</em></div>
                            </div>
                            <div class="hotc-right always-draw" v-if="item.cell.result === '1'">
                                <div class="right-predict">{{item.cell.continous}}<em>连走</em></div>
                            </div>
                            <div class="hotc-right  always-fail" v-if="item.cell.result === '0'">
                                <div class="right-predict">{{item.cell.continous}}<em>连输</em></div>
                            </div>

                            <div class="hotc-left">
                                <div class="hotc-info-tit">{{item.cell.teamsxname}}</div>
                                <div class="hotc-info-time">{{item.simpleleague}} {{item.matchtime.substr(5)}} <em>{{item.homesxname}}
                                    VS {{item.awaysxname}}</em></div>
                            </div>
                        </div>
                    </section>

                    <div class="gl-nav sticky" v-if="record.asian.history_battle.length">历史交战</div>
                    <section v-for="list in record.asian.history_battle">
                        <div class="hotc-item record-item" v-tap="{methods: goAnalysis, fid: list.fid}">

                            <div class="hotc-right" v-if="list.cell.result === '3'">
                                <div class="right-predict">{{list.cell.continous}}<em>连赢</em></div>
                            </div>
                            <div class="hotc-right always-draw" v-if="list.cell.result === '1'">
                                <div class="right-predict">{{list.cell.continous}}<em>连走</em></div>
                            </div>
                            <div class="hotc-right  always-fail" v-if="list.cell.result === '0'">
                                <div class="right-predict">{{list.cell.continous}}<em>连输</em></div>
                            </div>

                            <div class="hotc-left">
                                <div class="hotc-info-tit">{{list.cell.teamsxname}}</div>
                                <div class="hotc-info-time">{{list.simpleleague}} {{list.matchtime.substr(5)}} <em>{{list.homesxname}}
                                    VS {{list.awaysxname}}</em></div>
                            </div>
                        </div>
                    </section>
                </div>

            </div>
            <div class="l-full l-scroll-y" v-if="tab === 'asian' && !noEmpty(record.asian)">
                <prompt type="no-data" tip0="暂无数据"/>
            </div>

            <!--大小球-->
            <div class="l-full l-scroll-y">
                <div v-if="tab === 'bigsmall' && noEmpty(record.bigsmall)">
                    <div class="gl-nav sticky" v-if="record.bigsmall.recent_record.length">近期战绩</div>
                    <section v-for="item in record.bigsmall.recent_record">
                        <div class="hotc-item record-item" v-tap="{methods: goAnalysis, fid: item.fid}">
                            <div class="hotc-right" v-if="item.cell.result === '3'">
                                <div class="right-predict">{{item.cell.continous}}<em>连大</em></div>
                            </div>
                            <div class="hotc-right  always-fail" v-if="item.cell.result === '0'">
                                <div class="right-predict">{{item.cell.continous}}<em>连小</em></div>
                            </div>

                            <div class="hotc-left">
                                <div class="hotc-info-tit">{{item.cell.teamsxname}}</div>
                                <div class="hotc-info-time">{{item.simpleleague}} {{item.matchtime.substr(5)}} <em>{{item.homesxname}}
                                    VS {{item.awaysxname}}</em></div>
                            </div>
                        </div>
                    </section>
                    <div class="gl-nav sticky" v-if="record.bigsmall.history_battle.length">历史交战</div>
                    <section v-for="list in record.bigsmall.history_battle">
                        <div class="hotc-item record-item" v-tap="{methods: goAnalysis, fid: list.fid}">

                            <div class="hotc-right" v-if="list.cell.result === '3'">
                                <div class="right-predict">{{list.cell.continous}}<em>连大</em></div>
                            </div>
                            <div class="hotc-right  always-fail" v-if="list.cell.result === '0'">
                                <div class="right-predict">{{list.cell.continous}}<em>连小</em></div>
                            </div>

                            <div class="hotc-left">
                                <div class="hotc-info-tit">{{list.cell.teamsxname}}</div>
                                <div class="hotc-info-time">{{list.simpleleague}} {{list.matchtime.substr(5)}} <em>{{list.homesxname}}
                                    VS {{list.awaysxname}}</em></div>
                            </div>
                        </div>
                    </section>
                </div>

            </div>
            <div class="l-full l-scroll-y" v-if="tab === 'bigsmall' && !noEmpty(record.bigsmall)">
                <prompt type="no-data" tip0="暂无数据"/>
            </div>

        </div>
        <prompt v-else type="loading" tip0="正在加载中..."/>
    </div>
</template>

<script>
    import Prompt from '~components/prompt.vue'

    export default{
        fetch  ({store}) {
            return store.dispatch('bfyc/fetchCombatFeature')
        },
        components: {
            Prompt
        },
        data () {
            return {
                tab: 'result'
            }
        },
        computed: {
            record: function () {
                // console.log(this.$store.state.combat_feature);
                return this.$store.state.bfyc.combat_feature
            }

        },

        methods: {
            onTab: function (type) {
                this.tab = type
            },
            goAnalysis: function ({fid}) {
                location.href = `/score/detail.html?analysis=record#/footballdetail/analysis/${fid}`
            },
            noEmpty: function (obj) {
                return !!Object.keys(obj).length
            }
        }

    }
</script>
