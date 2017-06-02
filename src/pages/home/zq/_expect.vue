<template>
    <div class="l-full l-flex-column">
        <div class="qi-list-box">
            <div class="qi-list">
                <ul class="responsive">
                    <li class="" v-if="preAndNextExpect.pre">
                        <router-link :to="{path: '/home/zq/'+ $route.params.tab + '/' + preAndNextExpect.pre}" replace>{{($route.params.tab === 'all')?'前一天':'前一期'}}</router-link>
                    </li>
                    <li class="" v-else>{{($route.params.tab === 'all')?'前一天':'前一期'}}</li>
                    <li class="qiqh" v-tap="{methods: toggleExpectList}">{{curExpect|expectFmt}}<i class="qi-arrow"></i></li>
                    <li class="" v-if="preAndNextExpect.next">
                        <router-link :to="{path: '/home/zq/'+ $route.params.tab + '/'+ preAndNextExpect.next}" replace>{{($route.params.tab === 'all')?'后一天':'后一期'}}</router-link>
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
                        <div class="list-tit">
                            <span class="list-day"> {{$item.order}}&nbsp;&nbsp;{{$item.simpleleague}}</span>

                            <span class="list-state color3" v-if="feature.a[$item.status]">
                                {{$item.matchtime.substring(5, 16)}}
                            </span>
                            <span class="list-state color3"
                                  v-if="$item.status === StatusCode.ENDED">完场</span>

                            <span class="crazy-sports f20" v-if="$item.iscrazybet==='1'">猜球</span>

                            <span class="list-state green"
                                  v-if="$item.status === StatusCode.MID">中场休息</span>
                            <span class="list-state green"
                                  v-if="$item.status === StatusCode.FIRST_HALF || $item.status === StatusCode.LAST_HALF">
                                {{$item.match_at | matchAtFmt($item.status === StatusCode.FIRST_HALF)}}
                                <i class="dian">'</i>
                            </span>
                            <span class="list-state green"
                                  v-if="$item.status===StatusCode.ENDED && $item.extra_statusid === StatusCode.SPOT_KICK_STARTED">
                                点球 {{$item.spot_kick_score}}
                            </span>

                            <span class="list-time"
                                  v-if="feature.b[$item.status]">
								{{$item.matchtime.substring(5, 16)}}
                            </span>
                            <span class="list-time"
                                  v-if="feature.a[$item.status]">
                            </span>
                        </div>
                        <div class="list-team">
                            <div class="team team-l f30">
                                <img data-inited="0" src="http://tccache.500.com/mobile/touch/images/bifen/mr-logo.png"
                                     :data-src="$item.homelogo || 'http://tccache.500.com/mobile/touch/images/bifen/mr-logo.png'">
                                {{$item.homesxname | truncate(4)}}
                                <sub class="team-site f22"
                                     v-if="$item.zlc == 1">(中)</sub>
                                <i class="red-pai f22"
                                   v-show="$item.home_red_counts > 0">{{$item.home_red_counts}}</i>
                            </div>

                            <div class="team-c"
                                 v-if="feature.b[$item.status]"
                                 :class="{'green': $item.status !== StatusCode.ENDED,'color3': $item.status === StatusCode.ENDED}">
                                <p class="score">
                                    <em class="score-itm"
                                        v-scroll-text="{'score':$item.homescore,'class':'itmMove',timeOut:1,oldClass:'score-itm',isEnd:$item.status == StatusCode.ENDED}">

                                        <i>{{$item.homescore}}</i>
                                        <i>{{$item.homescore}}</i>
                                    </em>
                                    <span class="score-c">:</span>
                                    <em class="score-itm"
                                        v-scroll-text="{'score':$item.awayscore,'class':'itmMove',timeOut:1,oldClass:'score-itm',isEnd:$item.status == StatusCode.ENDED}">
                                        <i>{{$item.awayscore}}</i>
                                        <i>{{$item.awayscore}}</i>
                                    </em>
                                </p>
                            </div>
                            <div class="team-c"
                                 v-if="$item.status === StatusCode.NOT_STARTED"
                                 @click.stop="onCollect($item.fid,$item.isfocus)">
                                <i class="collect"
                                   :class="{'cur': $item.isfocus==='1'}"></i>
                            </div>

                            <div class="team-c"
                                 v-if="$item.status===StatusCode.CANCELED"><span class="f30 ffw">取消</span></div>
                            <div class="team-c"
                                 v-if="$item.status===StatusCode.CHANGED"><span class="f30 ffw">改期</span></div>
                            <div class="team-c"
                                 v-if="$item.status===StatusCode.REMOVED"><span class="f30 ffw">腰斩</span></div>
                            <div class="team-c"
                                 v-if="$item.status===StatusCode.PAUSED"><span class="f30 ffw">中断</span></div>
                            <div class="team-c"
                                 v-if="$item.status===StatusCode.UNSURE"><span class="f30 ffw">待定</span></div>

                            <div class="team team-r f30">
                                <i class="red-pai f22"
                                   v-if="$item.away_red_counts>0">{{$item.away_red_counts}}</i>
                                {{$item.awaysxname | truncate(4)}}
                                <img data-inited="0" src="http://tccache.500.com/mobile/touch/images/bifen/mr-logo.png"
                                     :data-src="$item.awaylogo || 'http://tccache.500.com/mobile/touch/images/bifen/mr-logo.png'">
                            </div>
                        </div>
                        <div class="list-info f22">
                            <span v-if="$item.status === StatusCode.MID||$item.status===StatusCode.LAST_HALF||$item.status===StatusCode.ENDED">半场 {{$item.homehalfscore}}:{{$item.awayhalfscore}}&nbsp;</span>
                            <span v-if="$item.status === StatusCode.ENDED && $item.extra_statusid === StatusCode.EXTRA_STARTED">90'内 {{$item.homescore}}:{{$item.awayscore}}&nbsp;</span>
                            <span v-if="$item.status === StatusCode.ENDED && $item.extra_statusid === StatusCode.EXTRA_ENDED">90'内 {{$item.homescore}}:{{$item.awayscore}} 加时 {{$item.extra_time_score}}&nbsp;</span>
                            <span v-if="$item.status === StatusCode.ENDED && $item.extra_statusid === StatusCode.SPOT_KICK_ENDED">90'内 {{$item.homescore}}:{{$item.awayscore}} {{$item.extra_exist === '1' ? ('加时' + $item.extra_time_score) : ''}} 点球 {{$item.spot_kick_score}}</span>
                        </div>
                        <div class="tips-box"
                             v-if="$route.params.tab ==='hot'">
					<span class="easily-selected"
                          v-if="$item.tags.indexOf(1)>-1">主胜易中</span>
                            <span class="easily-selected"
                                  v-if="$item.tags.indexOf(2)>-1">平局易中</span>
                            <span class="easily-selected"
                                  v-if="$item.tags.indexOf(3)>-1">主负易中</span>
                            <span class="highest-sales"
                                  v-if="$item.tags.indexOf(4)>-1">热度最高</span>
                            <span class="attention"
                                  v-if="$item.tags.indexOf(5)>-1">关注最多</span>
                            <span class="danguan"
                                  v-if="$item.tags.indexOf(6)>-1">单关</span>
                        </div>
                    </li>
                </ul>
            </matches-scroller>
        </div>


    </div>
</template>
<script>
    import MatchesScroller from '~components/matches_scroller.vue'
    import {FootballStatusCode as StatusCode, pushEvents} from '~common/constants'
    import {aTypes} from '~store/home'
    import scrollText from '~directives/scroll_text'
    export default {
        async asyncData ({store, route: {params: {expect, tab}}}) {
            if (store.state.home.zq.curExpect === expect && store.state.home.zq.tab === tab) return
            await store.dispatch(aTypes.fetchZqMatches, {expect, tab})
        },
        data () {
            return {
                feature: {
                    a: {
                        [StatusCode.NOT_STARTED]: true,
                        [StatusCode.CANCELED]: true,
                        [StatusCode.CHANGED]: true,
                        [StatusCode.REMOVED]: true,
                        [StatusCode.PAUSED]: true,
                        [StatusCode.UNSURE]: true
                    },
                    b: {
                        [StatusCode.MID]: true,
                        [StatusCode.FIRST_HALF]: true,
                        [StatusCode.LAST_HALF]: true,
                        [StatusCode.ENDED]: true
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
                fids && fids.length && this.$store.dispatch(aTypes.subscribeFootballInfo, fids.split(','))
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
            zq () {
                return this.$store.state.home.zq
            },
            showedMatches () {
                return this.filteredMatches || this.matches
            },
            matches () {
                return this.zq.matches
            },
            curExpect () {
                return this.zq.curExpect
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
                this.zq.expectList.some((expect, idx) => {
                    if (expect === this.curExpect) {
                        index = idx
                    }
                })
                result.next = this.zq.expectList[index + 1]
                result.pre = this.zq.expectList[index - 1]
                return result
            },
            expectList () {
                return this.zq.expectList
            }
        },
        mounted () {
            this.$store.dispatch(aTypes.subscribeFootballInfo, Object.keys(this.fidIndexMap))
        },
        methods: {
            goDetail ({fid}) {
                this.$router.push(`/detail/football/${fid}/situation`)
            },
            toggleExpectList () {
                this.showExpectList = !this.showExpectList
            },
            selectExpect ({expect}) {
                this.$router.replace(`/home/zq/${this.$route.params.tab}/${expect}`)
            }
        },
        filters: {
            combatDesc: (cell) => {
                switch (cell.result) {
                case '3':
                    return `${cell.continous}连胜`
                case '1':
                    return `${cell.continous}连平`
                case '0':
                    return `${cell.continous}连负`
                default:
                    return ''
                }
            },
            predictResult: (code) => {
                switch (code) {
                case '3':
                    return '主胜'
                case '1':
                    return '平局'
                case '0':
                    return '主负'
                default:
                    return ''
                }
            },
            matchtimeFmt: (macthtime) => {
                return macthtime.match(/\d{2}:\d{2}/)[0]
            },
            matchdateFmt: (macthtime) => {
                return macthtime.match(/\d{2}-\d{2}/)[0]
            },
            // eslint-disable-next-line
            matchAtFmt: (match_at, isFirstHalf) => {
                // eslint-disable-next-line
                let second = Number(match_at)
                if (second >= 45 * 60) {
                    return isFirstHalf ? '45+' : '90+'
                }
                var minute = Math.ceil(Number(match_at) / 60)
                if (minute <= 0) {
                    minute = 1
                }
                return isFirstHalf ? minute : (minute + 45)
            },
            matchtimeFm: (macthtime) => {
                return macthtime.match(/\d{2}:\d{2}/)[0]
            },
            truncate: function (input, length, tail) {
                if (input.length <= length) {
                    return input
                }
                return input.slice(0, length) + (tail != null ? tail : '...')
            },
            contains: function (list, item) {
                if (!list || !list.length) {
                    return false
                }
                return list.indexOf(item) > -1
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
