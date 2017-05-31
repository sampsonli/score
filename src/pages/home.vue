<template>
    <div class="l-full l-flex-column" style="overflow: hidden">
        <!--head begin-->
        <div class="headernav">
            <div class="headernavL"><a onclick="home.back()" class="home-icon">返回</a></div>
            <ul class="toggle-cz">
                <li :class="{'cur': ~$route.path.indexOf('/zq/')}">
                    <router-link to="/home/zq/jczq/cur" replace>足球</router-link>
                </li>
                <li :class="{'cur': ~$route.path.indexOf('/lq/')}">
                    <router-link to="/home/lq/jclq/cur" replace>篮球</router-link>
                </li>
            </ul>
            <div class="headernavR">
                <a href="../score/match_center/index.html?from=web_home" class="league-icon"></a>
                <a class="sx-icon" v-tap="{methods: triggerFilter}"></a>
            </div>
        </div>


        <!--顶部的tab-->
        <div class="l-flex-1 l-relative">

            <router-view/>

        </div>
        <transition name="slide">
            <league v-if="filter.show"
                    :matches="filter.matches"
                    :inited="filter.inited"
                    @ok="filter.onOk($event)"
                    @cancel="filter.onCancel($event)"></league>
        </transition>

    </div>

</template>
<style>
    .headernav {
        position: relative;
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

<script>
    import Vue from 'vue'
    import vueTap from 'v-tap'
    import league from '~components/league.vue'
    Vue.use(vueTap)

    export default{

        components: {league},
        computed: {
            filter () {
                return this.$store.state.home.filter
            }
        },
        methods: {
            triggerFilter () {
                this.$store.dispatch('home/triggerFilter')
            }
        },
        mounted () {
//            入口
        }

    }
</script>
