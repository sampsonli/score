<!--ui: http://ui.touch500.boss.com/touch/bifen/v124/record.html-->
<template>

    <div class="l-full l-scroll-y" v-if="strength">
        <!--实力对比列表-->

        <section class="hotc-list" v-if="strength.matches.length">
            <div class="strengh-cont " v-for="match in strength.matches" v-if="match.status !== '4'"
                 v-tap="{methods: goAnalysis, fid: match.fid}">
                <div class="strengh-time">{{match.order}} {{match.simpleleague}} {{match.matchtime.substr(5)}} <em>{{match.cell.currodds&&match.cell.currodds.join('/')}}</em>
                </div>
                <div class="zhzl-box strengh-item">
                    <div class="strengh-tit"><em>{{match.homesxname}}</em><em>VS</em><em>{{match.awaysxname}}</em></div>
                    <div class="each-resone-all">
                        <div class="zhzl-vs-left"
                             :class="{'green-bg': match.cell.home_percent<match.cell.away_percent, 'gray-bg':  match.cell.away_percent<match.cell.home_percent}"
                             :style="{width:match.cell.away_percent+'%'}"></div>
                        <div class="zhzl-vs-right"
                             :class="{'green-bg': match.cell.home_percent>match.cell.away_percent, 'gray-bg':  match.cell.away_percent>match.cell.home_percent}"
                             :style="{width:match.cell.home_percent+'%'}"></div>
                    </div>
                    <div class="zhzl-bfb-left"><span>{{match.cell.home_percent}}</span><i>%</i></div>
                    <div class="zhzl-bfb-right"><span>{{match.cell.away_percent}}</span><i>%</i></div>
                </div>
            </div>


            <!--已完场-->
            <div class="tag-game-over" v-if="curStatus.history&&curStatus.latest">已完场</div>


            <div class="strengh-cont " v-for="match in strength.matches" v-if="match.status === '4'"
                 v-tap="{methods: goAnalysis, fid: match.fid}">
                <div class="strengh-time">{{match.order}} {{match.simpleleague}} {{match.matchtime.substr(5)}} <em>{{match.cell.currodds&&match.cell.currodds.join('/')}}</em>
                </div>
                <div class="zhzl-box strengh-item">
                    <div class="strengh-tit"><em>{{match.homesxname}}</em><em>{{match|score}}</em><em>{{match.awaysxname}}</em>
                    </div>
                    <div class="each-resone-all">

                        <div class="zhzl-vs-left"
                             :class="{'green-bg': match.cell.home_percent<match.cell.away_percent, 'gray-bg':  match.cell.away_percent<match.cell.home_percent}"
                             :style="{width:match.cell.away_percent+'%'}"></div>
                        <div class="zhzl-vs-right"
                             :class="{'green-bg': match.cell.home_percent>match.cell.away_percent, 'gray-bg':  match.cell.away_percent>match.cell.home_percent}"
                             :style="{width:match.cell.home_percent+'%'}"></div>
                    </div>
                    <div class="zhzl-bfb-left"><span>{{match.cell.home_percent}}</span><i>%</i></div>
                    <div class="zhzl-bfb-right"><span>{{match.cell.away_percent}}</span><i>%</i></div>
                </div>
            </div>

        </section>
        <prompt v-else type="no-data" tip0="暂无数据"/>
    </div>
    <prompt v-else type="loading" tip0="正在加载中..."/>

</template>

<script>
    import Prompt from '~components/prompt.vue'

    export default{
        fetch ({store}) {
            return store.dispatch('bfyc/fetchStrengthCompare')
        },
        computed: {
            strength: function () {
                return this.$store.state.bfyc.strenght_compare
            },
            curStatus: function () {
                let curStatus = {
                    latest: false,
                    history: false
                }
                if (this.strength && this.strength.matches) {
                    this.strength.matches.forEach(match => {
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
        components: {
            Prompt
        },

        methods: {
            goAnalysis: function ({fid}) {
                location.href = `/score/detail.html?analysis=technology#/footballdetail/analysis/${fid}`
            }
        },

        filters: {
            score: (match) => {
                if (match.homescore && match.awayscore) {
                    return `${match.homescore}:${match.awayscore}`
                } else {
                    return 'VS'
                }
            }
        }

    }
</script>
