<template>
    <div class="main-box">
        <div class="box-tit">
            <h2> {{type}} </h2> </div>
        <div class="member-list">
            <table width="100%" cellpadding="0" cellspacing="0">
                <colgroup>
                    <col width="10%">
                    <col width="">
                    <col width="18%"> </colgroup>
                <tbody>
                    <tr v-for="member in members">
                        <td align="left"> <img class="member-face" :src="member.avatar"> </td>
                        <td align="left"> <strong>{{member.name}}</strong>
                            <p>{{member.nation}}</p>
                        </td>
                        <td align="right"> <strong>{{member.number | number}}</strong>
                            <p>{{showGoalResult(member)}}</p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        type: {
            type: String,
            required: true
        },
        members: {
            type: Array,
            required: true
        }
    },
    methods: {
        showGoalResult (member) {
            let goalStr = member.goals ? member.goals + '球' : member.goals
            let assistsStr = member.assists ? member.assists + '助' : member.assists
            return goalStr + assistsStr
        }
    },
    filters: {
        number (num) {
            return num ? (num + '号') : '--'
        }
    }
}
</script>

<style lang="css">
</style>
