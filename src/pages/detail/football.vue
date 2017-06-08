<template>
    <div class="l-full l-flex-column">
        <div class="detailTop topBarMove2" style="display: block;">
            <a class="back-icon" onclick="history.back()" href="javascript:;">返回</a>
            <router-link to="/home/zq/jczq/cur" class="link-index f26">比分首页</router-link>
            <!--<a class="link-index f26" href="/score/index.html#/football">比分首页</a>-->

            <div onclick="home.goLeague()" class="r-sn f24">{{match.simpleleague}}</div>


            <div id="_concern" style="display: none" class="topR" onclick="home.doConcern()">
                <div class="sk-gz"></div>
            </div>
            <div id="_sharemode" style="display: block;" class="topR" onclick="home.showShareMode()">
                <div class="sk-point"></div>
            </div>
            <div class="fen-box f30 responsive">
                <span class="itm-team each-resone" id="team_home">{{match.homesxname}}</span>

                <div class="itm-bf" v-if="match.status == StatusCode.NOT_STARTED">&nbsp;&nbsp;VS&nbsp;&nbsp;</div>
                <div class="itm-bf" v-else>
                    <div class="fen-bf"><span id="home_score" class="score">{{match.homescore}}</span></div>
                    <div class="fen-ld">:</div>
                    <div class="fen-bf"><span id="away_score" class="score">{{match.awayscore}}</span></div>
                </div>
                <span class="itm-team each-resone" id="team_away">{{match.awaysxname}}</span>
            </div>
        </div>
        <div class="l-flex-1 l-relative">
            <detail-scroller ref="scroller" @switch="changeHeader" @end="reachEnd">
                <div class="zq-header _header ">
                    <div class="fen-box">

                        <div class="itm-bf" v-if="match.status == StatusCode.FIRST_HALF ||
                                   match.status == StatusCode.MID ||
                                   match.status == StatusCode.LAST_HALF ||
                                   match.status == StatusCode.ENDED">
                            <div class="fen-bf" drunk-scroll-text="match.homescore" time-out='8' class-list="['fen-bf-active']">
                                <span class="score">{{match.homescore}}</span>
                                <span class="score">{{match.homescore}}</span>
                            </div>
                            <div class="fen-ld">:</div>
                            <div class="fen-bf" drunk-scroll-text="match.awayscore" time-out='8' class-list="['fen-bf-active']">
                                <span class="score">{{match.awayscore}}</span>
                                <span class="score">{{match.awayscore}}</span>
                            </div>
                        </div>

                        <div
                                v-if="match.status == StatusCode.CHANGED || match.status == StatusCode.UNSURE || match.status == StatusCode.REMOVED || match.status == StatusCode.CANCELED || match.status == StatusCode.PAUSED"
                                class="wks">{{match.status_desc}}
                        </div>
                        <div v-if="match.status == StatusCode.NOT_STARTED" class="wks">VS</div>


                        <div class="left-img" v-tap="{methods: goTeam, teamId: match.homeid}">
                            <div class="img-box"><img
                                    :src="match.homelogo">
                            </div>
                            <h2 class="left-name f28">{{match.homesxname}}<span class="zhongli f20"
                                                                                v-if="match.zlc == 1"> (中)</span></h2>

                            <p class="header-pm f20">{{match.hstr?match.hstr:'暂无排名'}}</p>
                        </div>
                        <div class="right-img" v-tap="{methods: goTeam, teamId: match.awayid}">
                            <div class="img-box"><img
                                    :src="match.awaylogo">
                            </div>
                            <h2 class="right-name f28">{{match.awaysxname}}</h2>

                            <p class="header-pm f20">{{match.astr?match.astr:'暂无排名'}}</p>
                        </div>
                    </div>
                    <div class="game-info">
                        <div v-if="match.status === StatusCode.FIRST_HALF || match.status === StatusCode.LAST_HALF"
                             class="game-state f24">{{ match.match_at|matchAtFmt(match.status == StatusCode.FIRST_HALF)}}<i class="dian">'</i>
                        </div>
                        <div v-if="match.status === StatusCode.MID" class="game-state f24">中场休息</div>
                        <div v-if="match.status === StatusCode.ENDED" class="game-state f24">完场</div>
                        <div class="game-time f20">{{match.matchtime.slice(5,16)}}</div>

                    </div>
                    <div class="sk-tips"></div>
                </div>
                <div slot="navigator" class="navigator hide">
                    <ul>
                        <li
                                :class="{cur: ~$route.path.indexOf('/situation')}">
                            <router-link :to="{name: 'football-detail-situation'}" replace>
                                <span>赛况<i class="sktab-arrow"></i></span>
                            </router-link>
                        </li>
                        <li
                                :class="{cur: ~$route.path.indexOf('/analysis')}">
                            <router-link :to="{name: 'football-detail-analysis-zj'}" replace>
                                <span>分析<i class="sktab-arrow"></i></span>
                            </router-link>

                        </li>
                        <li
                                :class="{cur: ~$route.path.indexOf('/predict')}">
                            <router-link :to="{name: 'football-detail-predict'}" replace>
                                <span>预测<i class="sktab-arrow"></i></span>
                            </router-link>
                        </li>
                        <li
                                :class="{cur: ~$route.path.indexOf('/odds')}">
                            <router-link :to="{name: 'football-detail-odds-europe'}" replace>
                                <span>赔率<i class="sktab-arrow"></i></span>
                            </router-link>
                        </li>
                        <li
                                :class="{cur: ~$route.path.indexOf('/comment')}">
                            <router-link :to="{name: 'football-detail-comment'}" replace>
                                <span>聊球<i class="sktab-arrow"></i></span>
                            </router-link>
                        </li>


                        <li
                                :class="{cur: ~$route.path.indexOf('/crazybet')}">
                            <router-link :to="{name: 'football-detail-crazybet'}" replace>
                                <span>猜球<i class="sktab-arrow"></i></span>
                            </router-link>
                        </li>

                    </ul>
                </div>
                <div class="navigator " style="width: 0"></div>
                <div class="main-inner2">
                    <router-view></router-view>
                </div>

            </detail-scroller>

        </div>
        <div  v-if="outer.component" class="popLayer"></div>
        <transition name="slide">
            <div v-if="outer.component" class="l-full" style="z-index: 101">
                <component :is="outer.component"></component>
            </div>
        </transition>


        <div v-if="~$route.path.indexOf('/comment')">
            <div class="comm-enter">
                <div class="enter-ipt">
                    <i class="ipt-icon"></i>
                    <p class="ipt-txt">我来说两句…</p>
                    <span class="ipt-count">5评</span>
                </div>
            </div>
        </div>


    </div>
</template>

<script>
    import {FootballStatusCode as StatusCode} from '~common/constants'
    import detailScroller from '~components/detail_scroller.vue'
    import {aTypes} from '~store/zqdetail'
    export default {
        async asyncData ({store, route: {params}}) {
            await store.dispatch(aTypes.getBaseInfo, params.fid)
        },
        data () {
            return {
                StatusCode
            }
        },
        computed: {
            match () {
                return this.$store.state.zqdetail.baseInfo
            },
            outer () {
                return this.$store.state.zqdetail.outer
            }
        },
        mounted () {
            if (~this.$route.path.indexOf('/crazybet')) {
                this.$refs.scroller.scrollTo(document.querySelector('.zq-header').offsetHeight, true)
                this.$refs.scroller.switchStop(true)
            }
        },
        components: {
            detailScroller
        },
        methods: {
            changeHeader (status) {
                if (status) {
                    this.$el.querySelector('.detailTop').className = 'detailTop topBarMove'
                } else {
                    this.$el.querySelector('.detailTop').className = 'detailTop topBarMove2'
                }
            },
            reachEnd () {
                console.log('end')
            },
            updateScroller () {
                this.$refs.scroller.update()
            },
            goTeam ({teamId}) {
                this.$router.push(`/team/football/${teamId}/sc`)
            }
        },
        watch: {
            '$route.path' (path) {
                this.$refs.scroller.update()
                if (~path.indexOf('/crazybet')) {
                    this.$refs.scroller.scrollTo(document.querySelector('.zq-header').offsetHeight, true)
                    this.$refs.scroller.switchStop(true)
                } else {
                    this.$refs.scroller.scrollTo(0, true)
                    this.$refs.scroller.switchStop(false)
                }
            }
        },
        filters: {
            matchAtFmt: (matchAt, isFirstHalf) => {
                let second = Number(matchAt)
                if (second >= 45 * 60) {
                    return isFirstHalf ? '45+' : '90+'
                }
                let minute = Math.ceil(Number(matchAt) / 60)
                if (minute <= 0) {
                    minute = 1
                }
                return isFirstHalf ? minute : (minute + 45)
            }
        }

    }

</script>
<style>
    .detailTop {
        position: relative;
    }

    .zq-header {
        position: relative;
        top: -1px
    }

    .navigator {
        top: 0
    }

    .sktab-arrow {
         border: none !important;
         margin-left: auto !important;

    }
    .back-icon:before {
        margin-top: auto;
    }


    .slide-enter-active, .slide-leave-active {
        -webkit-transition: -webkit-transform .3s ease;
        transition: transform .3s ease;
    }
    .slide-enter-active, .slide-leave {
        -webkit-transform: translate(0, 0);
        transform: translate(0, 0);
    }

    .slide-leave-active, .slide-enter {
        -webkit-transform: translate(0, 100%);
        transform: translate(0, 100%);
    }


</style>
