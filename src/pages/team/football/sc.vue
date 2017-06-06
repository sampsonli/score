<template>
<div class="l-full matches schedule-foot">
    <div class="list-view" style="height: 100%;overflow-y: auto;-webkit-overflow-scrolling: touch">

        <ul class="list-view-wrapper">
            <li trackby="$index" class="list-view-item" style="height: 165.6px;" v-for="match in teamMatches" v-tap="{methods: goDetail, fid: match.fid}">
                <div class="schedule-itm l-flex-row">
                    <div class="when-game"> <em class="game-time">{{match.matchtime.substr(5, 11)}}</em> <em class="game-league">{{match.simplegbname + ' ' + match.stagegbname}}</em> </div>
                    <div class="who-game l-flex-1 l-flex-row">
                        <div class="who-gamer who-gamer-home l-flex-1"> <img :src="match.homelogo"> <em>{{match.homesxname}}</em> </div> <em class="who-win">1<i>:</i>0</em>
                        <div class="who-gamer who-gamer-guest l-flex-1"> <img :src="match.awaylogo"><em>{{match.awaysxname}}</em> </div>
                    </div>
                </div>
            </li>
        </ul>

    </div>
</div>
</template>

<script>
import {aTypes} from '~store/team/zq'
export default {
    computed: {
        teamMatches () {
            return this.$store.state.teamZq.teamMatches
        }
    },
    mounted () {
        this.$store.dispatch(aTypes.requestTeamMatches, this.$route.params.tid)
    },
    methods: {
        goDetail ({fid}) {
            this.$router.push(`/detail/football/${fid}/situation`)
        }
    }
}
</script>

<style lang="css">
</style>
