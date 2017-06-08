<template>

    <div></div>
</template>
<script>
    import echarts from 'echarts/lib/echarts'
    import 'echarts/lib/chart/line'
    import 'echarts/lib/chart/bar'
    import 'echarts/lib/component/legend'

    export default {
        props: {
            name1: {
                type: String,
                required: true
            },
            name2: {
                type: String,
                required: true
            },
            name3: {
                type: String,
                required: true
            },
            startTime: {
                type: String,
                required: true
            },
            endTime: {
                type: String,
                required: true
            },
            data1: {
                type: Array,
                required: true
            },
            data2: {
                type: Array,
                required: true
            },
            data3: {
                type: Array,
                required: true
            }
        },
        data () {
            return {
                xAxisData: []
            }
        },
        mounted () {
            let u = navigator.userAgent
            const isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1
            this.$el.style.height = this.$el.offsetHeight * 1.2 + 'px'
            let fontSize = 22
            if (isAndroid) {
                fontSize = this.fontSize / 2
            }
            try {
                this.echart = echarts.init(this.$el)
                for (let i = 0, j = this.data1.length; i < j; i++) {
                    this.xAxisData.push(i + 1)
                }

                const option = {
                    title: {
                        textStyle: {
                            fontSize,
                            color: '#242c35',
                            fontWeight: 'normal'
                        },
                        text: '胜平负交易量趋势'
                    },
                    tooltip: {
                        show: false,
                        trigger: 'axis',
                        textStyle: {
                            fontSize
                        }
                    },

                    grid: {
                        left: 100,
                        top: 80,
                        right: 5
                    },
                    legend: {
                        data: [this.name1, this.name2, this.name3],
                        itemGap: 30,
                        right: 0,
                        top: 0,
                        textStyle: {
                            fontSize,
                            color: '#515e6d'
                        }
                    },

                    xAxis: [
                        {
                            type: 'category',
                            position: 'bottom',
                            data: this.xAxisData,
                            axisLabel: {
                                textStyle: {
                                    fontSize,
                                    color: '#515e6d'
                                },
                                show: false

                            },
                            axisTick: {
                                show: false
                            },
                            axisLine: {
                                lineStyle: {
                                    width: 1,
                                    color: '#aab5bd'
                                }
                            }
                        }
                    ],
                    yAxis: [
                        {
                            name: this.startTime.substring(5, 16),
                            nameLocation: 'start',
                            type: 'value',
                            position: 'left',
                            splitNumber: 5,
                            axisTick: {
                                show: false
                            },
                            axisLine: {
                                show: false

                            },
                            splitLine: {
                                show: true
                            },
                            nameTextStyle: {
                                fontSize,
                                color: '#aab5bd'
                            },
                            axisLabel: {
                                formatter: '{value}万',
                                textStyle: {
                                    fontSize,
                                    color: '#515e6d'
                                }
                            }
                        },
                        {
                            name: this.endTime.substring(5, 16),
                            nameLocation: 'start',
                            type: 'value',
                            position: 'right',
                            axisTick: {
                                show: false
                            },
                            axisLine: {
                                show: false
                            },
                            splitLine: {
                                show: false
                            },
                            nameTextStyle: {
                                fontSize,
                                color: '#aab5bd'
                            },
                            axisLabel: {
                                show: false
                            }
                        }
                    ],
                    series: [
                        {
                            name: this.name1,
                            type: 'line',
                            symbol: 'none',
                            smooth: true,
                            lineStyle: { normal: { color: '#d3553d' } },
                            data: this.data1
                        },
                        {
                            name: this.name3,
                            type: 'line',
                            symbol: 'none',
                            smooth: true,
                            lineStyle: { normal: { color: '#36a171' } },
                            data: this.data2
                        },
                        {
                            name: this.name2,
                            type: 'line',
                            symbol: 'none',
                            smooth: true,
                            lineStyle: { normal: { color: '#437ba8' } },
                            data: this.data3
                        }
                    ]
                }
                if (isAndroid) {
                    option.grid['left'] = 55
                }
                this.echart.setOption(option)
            } catch (e) {
                console.log(e)
            }
        },
        beforeDestroy () {
            if (this.echart && this.echart.dispose) {
                console.log('dispose')
                this.echart.dispose()
            }
        }

    }
</script>
