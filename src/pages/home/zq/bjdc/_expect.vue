<template>
    <div class="l-full l-flex-column">
        <div class="qi-list-box">
            <div class="qi-list">
                <ul class="responsive">
                    <li class="" v-if="preAndNextExpect.pre">
                        <router-link :to="{path: '/home/zq/bjdc/'+ preAndNextExpect.pre}" replace>前一期</router-link>
                    </li>
                    <li class="" v-else>前一期</li>
                    <li class="qiqh" v-tap="{methods: toggleExpectList}">{{curExpect}} 期<i class="qi-arrow"></i></li>
                    <li class="" v-if="preAndNextExpect.next">
                        <router-link :to="{path: '/home/zq/bjdc/'+ preAndNextExpect.next}" replace>后一期</router-link>
                    </li>
                    <li class="" v-else>后一期</li>
                </ul>
            </div>
        </div>
        <div class="qi-pop-box" style="position: relative;top:0" v-if="showExpectList">
            <div class="ui-navbox-item">
                <ul>
                    <li v-tap="{methods: selectExpect, expect: expect}" :class="{'select': expect === curExpect}"
                        v-for="expect in expectList"><span>{{expect}}</span></li>
                </ul>
            </div>
        </div>
        <div class="ui-alert-layer" style="z-index: 8" v-if="showExpectList" v-tap="{methods: toggleExpectList}"></div>
        <div class="l-flex-1 l-relative">
            <matches-scroller ref="scroller">
                <ul class="list">
                    <li v-for="match in showedMatches" class="list-item" v-tap="{methods: goDetail, fid: match.fid}"
                        :class="{'__first_no_end': match._flag}">
                        <div class="list-tit">
                            <span class="list-day"> {{match.order}}&nbsp;&nbsp;{{match.simpleleague}}</span>
                            <span class="list-state color3">{{match.status_desc}}</span>
                            <span class="crazy-sports f20" v-if="match.iscrazybet==='1'">猜球</span>
                            <span class="list-time">{{match.matchtime.substr(5, 11)}}</span>
                        </div>
                        <div class="list-team">
                            <div class="team team-l f30">
                                <img src="http://odds.500.com/static/soccerdata/images/TeamPic/teamsignnew_1194.png"
                                     :data-src="match.homelogo" data-inited="0">
                                {{match.homesxname}}<i class="red-pai f22" style="display: none;">0</i>
                            </div>
                            <div class="team-c color3" v-if="match.status==='4'">
                                <p class="score">
                                    <em class="score-itm"><i>{{match.homescore}}</i></em>
                                    <span class="score-c">:</span>
                                    <em class="score-itm"><i>{{match.awayscore}}</i></em>
                                </p>
                            </div>
                            <div class="team-c" v-if="match.status!=='4'"><i class="collect"></i></div>
                            <div class="team team-r f30">
                                {{match.awaysxname}}
                                <img src="http://odds.500.com/static/soccerdata/images/TeamPic/teamsignnew_1194.png"
                                     :data-src="match.awaylogo" data-inited="0">
                            </div>
                        </div>
                        <div class="list-info f22"><span>半场 {{match.extra_time_score}}&nbsp;</span></div>
                    </li>
                </ul>
            </matches-scroller>
        </div>


    </div>
</template>
<script>
    import MatchesScroller from '~components/matches_scroller.vue'
    import {aTypes} from '~store/home'
    export default {
        async asyncData ({store, route: {params}}) {
            let matchInfo = store.state.home.zq.bjdc
            if (params.expect === 'cur') {
                if (matchInfo.allMatches[matchInfo.curExpect]) return
            } else {
                if (matchInfo.allMatches[params.expect]) return
            }
            await store.dispatch(aTypes.fetchBjdcMatches, params.expect)
        },
        data () {
            return {
                showExpectList: false,
                selectOptions: null,
                filteredMatches: null
            }
        },
        watch: {
            beginFilter (begin) {
                if (begin) {
                    this.$store.dispatch('home/startFilter', {
                        matches: this.matches,
                        inited: this.selectOptions,
                        onOk: ({selectOptions, filteredMatches}) => {
                            this.filteredMatches = filteredMatches
                            this.selectOptions = selectOptions
                            this.$store.dispatch('home/finishFilter')
                        },
                        onCancel: () => {
                            this.$store.dispatch('home/finishFilter')
                        }
                    })
                }
            },
            showedMatches () {
                this.$refs.scroller.config()
            },
            matches () {
                this.showExpectList = false
                this.filteredMatches = null
            }
        },
        components: {
            MatchesScroller
        },
        computed: {
            beginFilter () {
                return this.$store.state.home.filter.begin
            },
            matchInfo () {
                return this.$store.state.home.zq.bjdc
            },
            showedMatches () {
                return this.filteredMatches || this.matches
            },
            matches () {
                if (this.$route.params.expect === 'cur') {
                    return this.matchInfo.allMatches[this.matchInfo.curExpect]
                } else {
                    return this.matchInfo.allMatches[this.$route.params.expect]
                }
            },
            curExpect () {
                if (this.$route.params.expect === 'cur') {
                    return this.matchInfo.curExpect
                } else {
                    return this.$route.params.expect
                }
            },
            preAndNextExpect () {
                let result = {}
                let index = 0
                this.matchInfo.expectList.some((expect, idx) => {
                    if (expect === this.curExpect) {
                        index = idx
                    }
                })
                result.next = this.matchInfo.expectList[index + 1]
                result.pre = this.matchInfo.expectList[index - 1]
                return result
            },
            expectList () {
                return this.matchInfo.expectList
            }
        },
        methods: {
            goDetail ({fid}) {
                this.$router.push(`/detail/football/${fid}/situation`)
            },
            toggleExpectList () {
                this.showExpectList = !this.showExpectList
            },
            selectExpect ({expect}) {
                this.$router.replace(`/home/zq/bjdc/${expect}`)
            }
        }
    }
</script>
<style>
    .qi-list-box {
        position: relative;
        top: 0;
    }

    .list-item {
        /*overflow: hidden;*/
        /*transform: translate(0,0);*/
    }

    .qi-list-box a {
        display: block;
        color: inherit;
    }
</style>
