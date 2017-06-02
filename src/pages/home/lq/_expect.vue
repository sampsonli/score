<template>
    <div class="l-full l-flex-column">
        <div class="qi-list-box">
            <div class="qi-list">
                <ul class="responsive">
                    <li class="" v-if="preAndNextExpect.pre">
                        <router-link :to="{path: '/home/lq/'+ $route.params.tab + '/' + preAndNextExpect.pre}" replace>{{($route.params.tab === 'all')?'前一天':'前一期'}}</router-link>
                    </li>
                    <li class="" v-else>{{($route.params.tab === 'all')?'前一天':'前一期'}}</li>
                    <li class="qiqh" v-tap="{methods: toggleExpectList}">{{curExpect|expectFmt}}<i class="qi-arrow"></i></li>
                    <li class="" v-if="preAndNextExpect.next">
                        <router-link :to="{path: '/home/lq/'+ $route.params.tab + '/'+ preAndNextExpect.next}" replace>{{($route.params.tab === 'all')?'后一天':'后一期'}}</router-link>
                    </li>
                    <li class="" v-else>{{($route.params.tab === 'all')?'后一天':'后一期'}}</li>
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

                    <li class="list-item" :class="{'__first_no_end': $item._flag}"
                        v-tap="{methods: goDetail, fid: $item.fid}"
                        :id="$item.fid"
                        v-for="$item in showedMatches">
                        <div class="list-tit"><span class="list-day">{{$item.order}}&nbsp;&nbsp;{{$item.simpleleague}}</span>
                            <span class="list-state color3"
                                  v-if="$item.status == StatusCode.NOT_STARTED">{{$item.matchdate.slice(5,10)}} {{$item.matchdate.slice(11,16)}}</span>
                            <span class="list-state green"
                                  v-if="feature.a[$item.status]">{{$item.match_at}} {{$item.status_desc}}</span>
                            <div class="list-state green"
                                 v-if="feature.b[$item.status]">{{$item.match_at}} {{ StatusName[$item.status] || $item.status_desc}}
                            </div>
                            <span class="list-state green"
                                  v-if="$item.status == StatusCode.MID">中场休息</span>
                            <span class="list-state color3"
                                  v-if="$item.status == StatusCode.ENDED">完场</span>
                            <span class="list-state color3"
                                  v-if="$item.status == StatusCode.CHANGED">改期</span>
                            <span class="list-time">{{$item.status != StatusCode.NOT_STARTED?($item.matchdate.slice(5,10)+'&nbsp;&nbsp;'+$item.matchdate.slice(11,16)):''}}</span>
                        </div>
                        <div class="list-team">
                            <div class="team team-l f30"><img
                                    data-inited="0" src="http://tccache.500.com/mobile/touch/images/bifen/mr-logo.png"
                                    :data-src="$item.awaylogo || 'http://tccache.500.com/mobile/touch/images/bifen/mr-logo.png'"> {{$item.awaysxname|truncate(4)}}
                            </div>
                            <div class="team-c"
                                 v-if="$item.status != StatusCode.NOT_STARTED && $item.status != StatusCode.CHANGED"
                                 :class="{'green':$item.status != StatusCode.ENDED,'color3':$item.status == StatusCode.ENDED}">
                                <p class="score">
                                    <em class="score-itm"
                                        v-scroll-text="{'score':$item.awayscore,'class':'itmMove',timeOut:1,oldClass:'score-itm',isEnd:$item.status == StatusCode.ENDED}">
                                        <i>{{$item.awayscore}}</i>
                                        <i>{{$item.awayscore}}</i>
                                    </em>
                                    <span class="score-c">:</span>
                                    <em class="score-itm"
                                        v-scroll-text="{'score':$item.homescore,'class':'itmMove',timeOut:1,oldClass:'score-itm',isEnd:$item.status == StatusCode.ENDED}">
                                        <i>{{$item.homescore}}</i>
                                        <i>{{$item.homescore}}</i>
                                    </em>
                                </p>
                            </div>
                            <div class="team-c"
                                 v-if="$item.status == StatusCode.NOT_STARTED">
                                <i class="collect"
                                   :class="{'cur':$item.isfocus == '1'}"
                                   @click.stop="onCollect($item.fid,$item.isfocus)"></i>
                            </div>
                            <div class="team team-r f30">
                                {{$item.homesxname|truncate(4)}} <img
                                    data-inited="0" src="http://tccache.500.com/mobile/touch/images/bifen/mr-logo.png"
                                    :data-src="$item.homelogo || 'http://tccache.500.com/mobile/touch/images/bifen/mr-logo.png'">
                            </div>
                        </div>
                        <div class="list-info f22"
                             v-if="$item.status==StatusCode.ENDED"> 总分：{{$item.total}}&nbsp;&nbsp;分差：{{$item.diff}} </div>
                    </li>
                </ul>
            </matches-scroller>
        </div>


    </div>
</template>
<script>
    import MatchesScroller from '~components/matches_scroller.vue'
    import {BasketballStatusCode as StatusCode, pushEvents} from '~common/constants'
    import {aTypes} from '~store/home'
    import scrollText from '~directives/scroll_text'
    export default {
        async asyncData ({store, route: {params: {expect, tab}}}) {
            if (store.state.home.lq.curExpect === expect && store.state.home.lq.tab === tab) return
            await store.dispatch(aTypes.fetchLqMatches, {expect, tab})
        },
        data () {
            return {
                feature: {
                    a: {
                        [StatusCode.SECTION_1]: true,
                        [StatusCode.SECTION_2]: true,
                        [StatusCode.SECTION_3]: true,
                        [StatusCode.SECTION_4]: true,
                    },
                    b: {
                        [StatusCode.OVERTIME_1]: true,
                        [StatusCode.OVERTIME_2]: true,
                        [StatusCode.OVERTIME_3]: true,
                        [StatusCode.OVERTIME_4]: true,
                    }
                },
                StatusCode,
                showExpectList: false,
                selectOptions: null,
                filteredMatches: null
            }
        },
        watch: {
            beginFilter (begin) {
                if (begin) {
                    this.$store.dispatch(aTypes.startFilter, {
                        matches: this.matches,
                        inited: this.selectOptions,
                        onOk: ({selectOptions, filteredMatches}) => {
                            this.filteredMatches = filteredMatches
                            this.selectOptions = selectOptions
                            this.$store.dispatch(aTypes.finishFilter)
                        },
                        onCancel: () => {
                            this.$store.dispatch(aTypes.finishFilter)
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
            },
            fids (fids) {
                fids && fids.length && this.$store.dispatch(aTypes.subscribeBasketballInfo, fids.split(','))
            },
            socketData ({data, stamp}) {
                if (stamp === pushEvents.FOOTBALL_INFO) {
                    let match = this.matches[this.fidIndexMap[data.fid]]
                    if (match && match.fid === data.fid) {
                        this.matches[this.fidIndexMap[data.fid]] = {...this.matches[this.fidIndexMap[data.fid]], ...data}
                    }
                }
            }

        },
        components: {
            MatchesScroller
        },
        directives: {
            scrollText
        },
        computed: {
            socketData () {
                return this.$store.getters.getSocketData
            },
            beginFilter () {
                return this.$store.state.home.filter.begin
            },
            lq () {
                return this.$store.state.home.lq
            },
            showedMatches () {
                return this.filteredMatches || this.matches
            },
            matches () {
                return this.lq.matches
            },
            curExpect () {
                return this.lq.curExpect
            },
            fidIndexMap () {
                const map = {}
                this.matches.forEach((match, idx) => {
                    if (match.status !== StatusCode.ENDED) {
                        map[match.fid] = idx
                    }
                })
                return map
            },
            fids () {
                return Object.keys(this.fidIndexMap).join(',')
            },
            preAndNextExpect () {
                let result = {}
                let index = 0
                this.lq.expectList.some((expect, idx) => {
                    if (expect === this.curExpect) {
                        index = idx
                    }
                })
                result.next = this.lq.expectList[index + 1]
                result.pre = this.lq.expectList[index - 1]
                return result
            },
            expectList () {
                return this.lq.expectList
            }
        },
        mounted () {
            this.$store.dispatch(aTypes.subscribeBasketballInfo, Object.keys(this.fidIndexMap))
        },
        methods: {
            goDetail ({fid}) {
                this.$router.push(`/detail/football/${fid}/situation`)
            },
            toggleExpectList () {
                this.showExpectList = !this.showExpectList
            },
            selectExpect ({expect}) {
                this.$router.replace(`/home/lq/${this.$route.params.tab}/${expect}`)
            }
        },
        filters: {
            matchtimeFmt: (macthtime) => {
                return macthtime.match(/\d{2}:\d{2}/)[0]
            },
            matchdateFmt: (macthtime) => {
                return macthtime.match(/\d{2}-\d{2}/)[0]
            },
            // eslint-disable-next-line
            matchAtFmt: (match_at, isFirstHalf) => {
                let second = Number(match_at)
                if (second >= 45 * 60) {
                    return isFirstHalf ? '45+' : '90+'
                }
                let minute = Math.ceil(Number(match_at) / 60)
                if (minute <= 0) {
                    minute = 1
                }
                return isFirstHalf ? minute : (minute + 45)
            },
            truncate: function (input, length, tail) {
                if (input.length <= length) {
                    return input
                }
                return input.slice(0, length) + (tail != null ? tail : '...')
            },
            expectFmt:function(expect){
                if (!expect || expect.match(/\d{4}-\d{2}-\d{2}/) == null) {
                    return  expect + ' 期';
                }
                return expect + ' ' + ['周日', '周一', '周二', '周三', '周四', '周五', '周六'][new Date(expect).getDay()];
            }
        }
    }
</script>
<style>
    .qi-list-box {
        position: relative;
        top: 0;
    }
    .qi-list-box a {
        display: block;
        color: inherit;
    }
</style>
