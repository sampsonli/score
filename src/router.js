/**
 * Created by lichun on 2017/5/10.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = () => import('~pages/home.vue' /* webpackChunkName: "pages/home" */)

const Zq = () => import('~pages/home/zq.vue' /* webpackChunkName: "pages/home-zq" */)

const ZqExpect = () => import('~pages/home/zq/_expect.vue' /* webpackChunkName: "pages/home-zq-jczq-expect" */)

const Lq = () => import('~pages/home/lq.vue' /* webpackChunkName: "pages/home-lq" */)

const LqExpect = () => import('~pages/home/lq/_expect.vue' /* webpackChunkName: "pages/home-zq-jczq-expect" */)

const Bfyc = () => import('~pages/bfyc.vue' /* webpackChunkName: "pages/bfyc" */)

const BfycStrength = () => import('~pages/bfyc/strength.vue' /* webpackChunkName: "pages/bfyc-strength" */)

const BfycPredict = () => import('~pages/bfyc/predict.vue' /* webpackChunkName: "pages/bfyc-predict" */)

const BfycHotcool = () => import('~pages/bfyc/hotcool.vue' /* webpackChunkName: "pages/bfyc-hotcool" */)

const BfycRecord = () => import('~pages/bfyc/record.vue' /* webpackChunkName: "pages/bfyc-record" */)

const FootballDetail = () => import('~pages/detail/football.vue' /* webpackChunkName: "pages/detail-football" */)

const FootballSituation = () => import('~pages/detail/football/situation.vue' /* webpackChunkName: "pages/detail-football-situation" */)

const FootballAnalysis = () => import('~pages/detail/football/analysis.vue' /* webpackChunkName: "pages/detail-football-analysis" */)

const FootballPredict = () => import('~pages/detail/football/predict.vue' /* webpackChunkName: "pages/detail-football-predict" */)

const FootballOdds = () => import('~pages/detail/football/odds.vue' /* webpackChunkName: "pages/detail-football-odds" */)
const FootballOddseEurope = () => import('~pages/detail/football/odds/europe.vue' /* webpackChunkName: "pages/detail-football-odds-europe" */)
const FootballOddseAsian = () => import('~pages/detail/football/odds/asian.vue' /* webpackChunkName: "pages/detail-football-odds-asian" */)
const FootballOddseRangqiu = () => import('~pages/detail/football/odds/rangqiu.vue' /* webpackChunkName: "pages/detail-football-odds-rangqiu" */)
const FootballOddseDaxiaopan = () => import('~pages/detail/football/odds/daxiaopan.vue' /* webpackChunkName: "pages/detail-football-odds-daxiaopan" */)
const FootballOddseBifa = () => import('~pages/detail/football/odds/bifa.vue' /* webpackChunkName: "pages/detail-football-odds-bifa" */)

export function createRouter () {
    return new VueRouter({
        mode: 'history',
        base: '/',
        routes: [
            {
                path: '/home',
                component: Home,
                name: 'home',
                children: [
                    {
                        path: 'zq',
                        component: Zq,
                        name: 'home-zq',
                        children: [
                            {
                                path: ':tab/:expect',
                                component: ZqExpect,
                                name: 'home-zq-sfc-expect'
                            },
                            {
                                path: '*',
                                redirect: 'jczq/cur'
                            }
                        ]
                    },
                    {
                        path: 'lq',
                        component: Lq,
                        name: 'home-lq',
                        children: [
                            {
                                path: ':tab/:expect?',
                                component: LqExpect,
                                name: 'home-lq-jclq-expect'
                            },
                            {
                                path: '*',
                                redirect: 'jclq/cur'
                            }
                        ]
                    }
                ]
            },
            {
                path: '/bfyc',
                component: Bfyc,
                name: 'bfyc',
                children: [
                    {
                        path: 'strength',
                        component: BfycStrength,
                        name: 'bfyc-strength'
                    },
                    {
                        path: 'predict',
                        component: BfycPredict,
                        name: 'bfyc-predict'
                    },
                    {
                        path: 'hotcool',
                        component: BfycHotcool,
                        name: 'bfyc-hotcool'
                    },
                    {
                        path: 'record',
                        component: BfycRecord,
                        name: 'bfyc-record'
                    }
                ]
            },
            {
                path: '/detail/football/:fid',
                component: FootballDetail,
                name: 'detail-football',
                children: [
                    {
                        path: 'situation',
                        component: FootballSituation,
                        name: 'football-detail-situation'
                    },
                    {
                        path: 'analysis',
                        component: FootballAnalysis,
                        name: 'football-detail-analysis'
                    },
                    {
                        path: 'predict',
                        component: FootballPredict,
                        name: 'football-detail-predict'
                    },
                    {
                        path: 'odds',
                        component: FootballOdds,
                        name: 'football-detail-odds',
                        children: [
                            {
                                path: 'europe',
                                component: FootballOddseEurope,
                                name: 'football-detail-odds-europe'
                            },
                            {
                                path: 'asian',
                                component: FootballOddseAsian,
                                name: 'football-detail-odds-asian'
                            },
                            {
                                path: 'rangqiu',
                                component: FootballOddseRangqiu,
                                name: 'football-detail-odds-rangqiu'
                            },
                            {
                                path: 'daxiaopan',
                                component: FootballOddseDaxiaopan,
                                name: 'football-detail-odds-daxiaopan'
                            },
                            {
                                path: 'bifa',
                                component: FootballOddseBifa,
                                name: 'football-detail-odds-bifa'
                            },
                            {
                                path: '*',
                                redirect: 'europe'
                            }
                        ]
                    },
                    {
                        path: 'comment',
                        component: FootballSituation,
                        name: 'football-detail-comment'
                    }
                ]
            }
        ]
    })
}
