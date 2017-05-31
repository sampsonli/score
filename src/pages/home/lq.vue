<template>

        <div class="l-full l-flex-column">
            <div class="in-tab responsive"><a class="wfqh">竞彩篮球<i class="toggle-arrow"></i><i class="tab-arrow"></i><i class="tab-arrow"></i></a> <a href="#/basketball/concern" class="cur">我的比赛<i class="tab-arrow"></i></a></div>

            <div class="l-flex-1 l-relative">

                <router-view></router-view>


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
        head: {
            title: '篮球比分-500彩票网'
        }
    }

</script>
