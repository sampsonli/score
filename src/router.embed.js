/**
 * Created by lichun on 2017/5/10.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '~pages/home.vue'
import Zq from '~pages/home/zq.vue'
import ZqSfc from '~pages/home/zq/sfc/_expect.vue'
import ZqHot from '~pages/home/zq/hot/_expect.vue'
import ZqAll from '~pages/home/zq/all/_expect.vue'
import ZqBjdc from '~pages/home/zq/bjdc/_expect.vue'
import ZqJczq from '~pages/home/zq/jczq/_expect.vue'
import Lq from '~pages/home/lq.vue'

import LqJclq from '~pages/home/lq/jclq/_expect.vue'
import Bfyc from '~pages/bfyc.vue'
import BfycStrength from '~pages/bfyc/strength.vue'
import BfycPredict from '~pages/bfyc/predict.vue'
import BfycHotcool from '~pages/bfyc/hotcool.vue'
import BfycRecord from '~pages/bfyc/record.vue'
import FootballDetail from '~pages/detail/football.vue'

import TeamFootball from '~pages/team/football.vue'
import TeamFootballSc from '~pages/team/football/sc.vue'
import TeamFootballGl from '~pages/team/football/gl.vue'
import TeamFootballZr from '~pages/team/football/zr.vue'

import TeamBasketball from '~pages/team/basketball.vue'
import TeamBasketballSc from '~pages/team/basketball/sc.vue'
import TeamBasketballGl from '~pages/team/basketball/gl.vue'

Vue.use(VueRouter)
const mode = process.env.VUE_ENV === 'app' ? 'hash' : 'history'

export function createRouter () {
    return new VueRouter({
        mode,
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
                                path: 'sfc/:expect?',
                                component: ZqSfc,
                                name: 'home-zq-sfc-expect'
                            },
                            {
                                path: 'hot/:expect?',
                                component: ZqHot,
                                name: 'home-zq-hot-expect'
                            },
                            {
                                path: 'all/:expect?',
                                component: ZqAll,
                                name: 'home-zq-all-expect'
                            },
                            {
                                path: 'bjdc/:expect?',
                                component: ZqBjdc,
                                name: 'home-zq-bjdc-expect'
                            },
                            {
                                path: 'jczq/:expect?',
                                component: ZqJczq,
                                name: 'home-zq-jczq-expect'
                            }
                        ]
                    },
                    {
                        path: 'lq',
                        component: Lq,
                        name: 'home-lq',
                        children: [
                            {
                                path: 'jclq/:expect?',
                                component: LqJclq,
                                name: 'home-lq-jclq-expect'
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
                path: 'detail/football',
                component: FootballDetail,
                name: 'detail-football'
            },
            {
                path: 'team/football/:tid',
                component: TeamFootball,
                name: 'team-football',
                children: [
                    {
                        path: 'sc',
                        component: TeamFootballSc,
                        name: 'team-football-sc'
                    },
                    {
                        path: 'gl',
                        component: TeamFootballGl,
                        name: 'team-football-gl'
                    },
                    {
                        path: 'zr',
                        component: TeamFootballZr,
                        name: 'team-football-zr'
                    },
                    {
                        path: '*',
                        redirect: 'sc'
                    }
                ]
            },
            {
                path: '/team/basketball/:tid/:sid',
                component: TeamBasketball,
                name: 'team-basketball',
                children: [
                    {
                        path: 'sc',
                        component: TeamBasketballSc,
                        name: 'team-basketball-sc'
                    },
                    {
                        path: 'gl',
                        component: TeamBasketballGl,
                        name: 'team-basketball-gl'
                    },
                    {
                        path: '*',
                        redirect: 'sc'
                    }
                ]
            }
        ]
    })
}
