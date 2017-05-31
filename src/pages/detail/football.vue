<template>
    <div class="l-full l-flex-column">
        <div class="detailTop topBarMove2" style="display: block;">
            <a class="back-icon" onclick="history.back()" href="javascript:;">返回</a>
            <router-link to="/home/zq/jczq/cur" class="link-index f26">比分首页</router-link>
            <!--<a class="link-index f26" href="/score/index.html#/football">比分首页</a>-->

            <div onclick="home.goLeague()" class="r-sn f24">{{baseInfo.simpleleague}}</div>


            <div id="_concern" style="display: none" class="topR" onclick="home.doConcern()">
                <div class="sk-gz"></div>
            </div>
            <div id="_sharemode" style="display: block;" class="topR" onclick="home.showShareMode()">
                <div class="sk-point"></div>
            </div>
            <div class="fen-box f30 responsive">
                <span class="itm-team each-resone" id="team_home">{{baseInfo.homesxname}}</span>

                <div class="itm-bf" id="type_vs" style="display: none">&nbsp;&nbsp;VS&nbsp;&nbsp;</div>
                <div class="itm-bf" id="type_score" style="display: block;">
                    <div class="fen-bf"><span id="home_score" class="score">0</span></div>
                    <div class="fen-ld">:</div>
                    <div class="fen-bf"><span id="away_score" class="score">3</span></div>
                </div>
                <span class="itm-team each-resone" id="team_away">{{baseInfo.awaysxname}}</span>
            </div>
        </div>
        <div class="l-flex-1 l-relative">
            <detail-scroller ref="scroller" @switch="changeHeader">
                <div class="zq-header _header ">
                    <div class="fen-box">
                        <!--<if: match.status == StatusCode.FIRST_HALF ||
                                                   match.status == StatusCode.MID ||
                                                   match.status == StatusCode.LAST_HALF ||
                                                   match.status == StatusCode.ENDED />-->
                        <div class="itm-bf">
                            <div class="fen-bf" time-out="8" class-list="['fen-bf-active']">
                                <span class="score">0</span>
                                <span class="score">0</span>
                            </div>
                            <div class="fen-ld">:</div>
                            <div class="fen-bf" time-out="8" class-list="['fen-bf-active']">
                                <span class="score">3</span>
                                <span class="score">3</span>
                            </div>
                        </div>
                        <!--<if: match.status == StatusCode.CHANGED || match.status == StatusCode.UNSURE || match.status == StatusCode.REMOVED || match.status == StatusCode.CANCELED || match.status == StatusCode.PAUSED />-->
                        <!--<if: match.status == StatusCode.NOT_STARTED />-->
                        <div class="left-img" onclick="location.href='team_home/index.html#!/team/zq/5535/sc'">
                            <div class="img-box"><img
                                    src="http://odds.500.com/static/soccerdata/images/TeamPic/teamsignnew_5535.png">
                            </div>
                            <h2 class="left-name f28">{{baseInfo.homesxname}}<!--<if: match.zlc == 1 />--></h2>

                            <p class="header-pm f20">{{baseInfo.hstr}}</p>
                        </div>
                        <div class="right-img" onclick="location.href='team_home/index.html#!/team/zq/808/sc'">
                            <div class="img-box"><img
                                    src="http://odds.500.com/static/soccerdata/images/TeamPic/teamsignnew_808.png">
                            </div>
                            <h2 class="right-name f28">{{baseInfo.awaysxname}}</h2>

                            <p class="header-pm f20">{{baseInfo.astr}}</p>
                        </div>
                    </div>
                    <div class="game-info">
                        <!--<if: match.status == StatusCode.FIRST_HALF || match.status == StatusCode.LAST_HALF />-->
                        <div class="game-state f24">46<i class="dian">'</i>
                        </div>
                        <!--<if: match.status == StatusCode.MID />-->
                        <!--<if: match.status == StatusCode.ENDED />-->
                        <div class="game-time f20">05-21 12:00</div>
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
                            <router-link :to="{name: 'football-detail-analysis'}" replace>
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
                            <router-link :to="{name: ''}" replace>
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


    </div>
</template>

<script>
    import detailScroller from '~components/detail_scroller.vue'
    import {aTypes} from '~store/zqdetail'
    export default {
        async asyncData ({store, route: {params}}) {
            if (store.state.zqdetail.baseInfo && store.state.zqdetail.baseInfo.fid === params.fid) return
            await store.dispatch(aTypes.getBaseInfo, params.fid)
        },
        computed: {
            baseInfo () {
                return this.$store.state.zqdetail.baseInfo
            }
        },
        mounted () {
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
            updateScroller () {
                this.$refs.scroller.update()
            }
        },
        watch: {
            '$route.path' () {
//                console.log('update')
                this.updateScroller()
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


</style>
