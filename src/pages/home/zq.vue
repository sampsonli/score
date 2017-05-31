<template>

    <div class="l-full l-flex-column">
        <div class="in-tab responsive l-relative" style="z-index: 11">
            <a class="wfqh" :class="{'cur': isNav}" v-tap="{methods: tapNav}">
                {{curNavName}}
                <i class="toggle-arrow" :class="{'rotate180': showNav}"></i>
                <i class="tab-arrow"></i>
                <!--<i class="tab-arrow"></i>-->
            </a>
            <router-link to="/home/zq/hot/cur" :class="{'cur': ~$route.path.indexOf('/hot/')}" replace>精选<i
                    class="tab-arrow"></i></router-link>
            <a :class="{'cur': ~$route.path.indexOf('/my/')}">我的比赛<i class="tab-arrow"></i></a>
        </div>

        <div v-if="showNav">
            <div class="l-relative" style="z-index: 11;">
                <div class="ui-navbox-item">
                    <ul>
                        <li :class="{'select': ~$route.path.indexOf('/jczq/')}">
                            <router-link to="/home/zq/jczq/cur" replace><span>竞彩足球</span></router-link>
                        </li>
                        <li :class="{'select': ~$route.path.indexOf('/sfc/')}">
                            <router-link to="/home/zq/sfc/cur" replace><span>胜负彩</span></router-link>
                        </li>
                        <li :class="{'select': ~$route.path.indexOf('/bjdc/')}">
                            <router-link to="/home/zq/bjdc/cur" replace><span>北京单场</span></router-link>
                        </li>
                        <li :class="{'select': ~$route.path.indexOf('/all/')}">
                            <router-link to="/home/zq/all/cur" replace><span>全部</span></router-link>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="ui-alert-layer" v-tap="{methods: toggleNav}" style="z-index: 10"></div>
        </div>

        <div class="l-flex-1 l-relative">

            <router-view/>


        </div>

    </div>


</template>
<style>
    .in-tab {
        padding-top: 0;
        position: relative;
        top: 0

    }
</style>
<script>
    export default {
        data () {
            return {
                showNav: false
            }
        },
        computed: {
            curNavName () {
                if (~this.$route.path.indexOf('/jczq/')) {
                    return '竞彩足球'
                } else if (~this.$route.path.indexOf('/bjdc/')) {
                    return '北京单场'
                } else if (~this.$route.path.indexOf('/sfc/')) {
                    return '胜负彩'
                } else if (~this.$route.path.indexOf('/all/')) {
                    return '全部'
                } else {
                    return '竞彩足球'
                }
            },
            isNav () {
                return !!(~this.$route.path.indexOf('/jczq/') || ~this.$route.path.indexOf('/bjdc/') || ~this.$route.path.indexOf('/sfc/') || ~this.$route.path.indexOf('/all/'))
            }
        },
        methods: {
            tapNav () {
                if (~this.$route.path.indexOf('/jczq/') || ~this.$route.path.indexOf('/bjdc/') || ~this.$route.path.indexOf('/sfc/') || ~this.$route.path.indexOf('/all/')) {
                    this.showNav = !this.showNav
                } else {
                    this.$router.replace('/home/zq/jczq/')
                }
            },
            toggleNav () {
                this.showNav = !this.showNav
            }
        },
        watch: {
            '$route.path' () {
                this.showNav = false
            }
        },
        head: {
            title: '足球比分-500彩票网'
        }
    }

</script>
