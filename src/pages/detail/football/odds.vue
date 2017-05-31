<template>
    <div class="main-inner">
        <!--<if: tab === TabMap.ODDS />-->
        <div class="sk-detail-tap-box">
            <ul class="sk-detail-tap five">
                <li :class="{cur: ~$route.path.indexOf('/europe')}"><router-link :to="{name: 'football-detail-odds-europe'}" replace>欧赔</router-link></li>
                <li :class="{cur: ~$route.path.indexOf('/asian')}"><router-link :to="{name: 'football-detail-odds-asian'}" replace>亚盘</router-link></li>
                <li :class="{cur: ~$route.path.indexOf('/rangqiu')}"><router-link :to="{name: 'football-detail-odds-rangqiu'}" replace>让球</router-link></li>
                <li :class="{cur: ~$route.path.indexOf('/daxiaopan')}"><router-link :to="{name: 'football-detail-odds-daxiaopan'}" replace>大小盘</router-link></li>
                <li :class="{cur: ~$route.path.indexOf('/bifa')}"><router-link :to="{name: 'football-detail-odds-bifa'}" replace>必发</router-link></li>
            </ul>

        </div>
        <div>
            <router-view></router-view>
        </div>




    <!--<if: subtab=='crazybet' />-->
    </div>
</template>
<style scoped>
    a:-webkit-any-link {
        color: inherit;
    }
    a {
        display: block;
    }
</style>
