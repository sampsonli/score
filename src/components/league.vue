<template>
    <div class="saixuan-box saixuan-show l-full l-flex-column" style="z-index: 10">
        <div class="red-head">筛选</div>
        <div class="sll-bs" v-if="!filteredMatches.length">所有联赛，共<span class="red">{{matches.length}}</span>场比赛</div>
        <div class="sll-bs" v-else>你已选<span class="red">{{filteredMatches.length}}</span>场比赛</div>
        <div class="saixuan-tab-box" style="margin-bottom: .2rem">
            <ul class="saixuan-tab responsive">
                <li v-tap="{methods: selectAll}">全选</li>
                <li v-tap="{methods: inverseAll}">反选</li>
                <li v-tap="{methods: selectFiveLeague}">五大联赛</li>
            </ul>
        </div>
        <div class="l-flex-1 l-relative">
            <div class="ui-navbox-item l-full l-scroll-y">
                <ul>
                    <li :class="{select:selectOptions[league]}" v-for="league in leagueNameList"><span v-tap="{methods: toggleLeague, league: league}">{{league}}</span></li>
                </ul>
            </div>
        </div>
        <div class="saixuan-footer">
            <div class="saixuan-footer-fixed">
                <ul class="btn-sx responsive">
                    <li class="white-btn" v-tap="{methods: cancel}">取消</li>
                    <li class="red-btn" v-tap="{methods: confirm}">确定</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        props: ['matches', 'inited'],
        data () {
            return {
                fiveLeagues: { '西甲': 1, '意甲': 2, '英超': 3, '德甲': 4, '法甲': 5 },
                selectOptions: {},
                leagueNameList: [],
                filteredMatches: []
            }
        },
        mounted () {
            let selectOptions = {}
            if (!this.inited) {
                this.matches.forEach(match => {
                    selectOptions[match.simpleleague] = false
                })
            } else {
                selectOptions = this.inited
            }
            this.selectOptions = selectOptions
            this.leagueNameList = Object.keys(selectOptions)
            this.filteredMatches = this.matches.filter(match => this.selectOptions[match.simpleleague])
        },
        methods: {
            toggleLeague ({league}) {
                this.selectOptions[league] = !this.selectOptions[league]
                this.filteredMatches = this.matches.filter(match => this.selectOptions[match.simpleleague])
            },
            cancel () {
                this.$emit('cancel')
            },

            selectAll: function () {
                Object.keys(this.selectOptions).forEach((key) => {
                    this.selectOptions[key] = true
                })
                this.filteredMatches = this.matches.filter(match => this.selectOptions[match.simpleleague])
            },
            inverseAll: function () {
                Object.keys(this.selectOptions).forEach((key) => {
                    this.selectOptions[key] = !this.selectOptions[key]
                })
                this.filteredMatches = this.matches.filter(match => this.selectOptions[match.simpleleague])
            },
            selectFiveLeague () {
                Object.keys(this.selectOptions).forEach((key) => {
                    this.selectOptions[key] = !!this.fiveLeagues[key]
                })
                this.filteredMatches = this.matches.filter(match => this.selectOptions[match.simpleleague])
            },
            confirm: function () {
                /* if (Object.keys(this.selectOptions).length < 1) {
                    return alert('至少选择1个联赛')
                } */
                this.$emit('ok', {
                    selectOptions: this.selectOptions,
                    filteredMatches: this.matches.filter(match => this.selectOptions[match.simpleleague])
                })
            }
        }
    }
</script>
