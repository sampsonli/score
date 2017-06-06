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
            nameBar: {
                type: String,
                required: true
            },
            nameLine: {
                type: String,
                required: true
            },
            dataBar: {
                type: Array,
                required: true
            },
            dataLine: {
                type: Array,
                required: true
            }
        },
        data () {
            return {
                xAxisData: ['初', '24h', '12h', '6h', '5h', '4h', '3h', '2.5h', '2h', '1.5h', '1h', '0.5h', '终']
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
                this.echart = echarts.init(this.$el, {a: '1'})

                const option = {
                    tooltip: {
                        show: false,
                        trigger: 'axis',
                        textStyle: {
                            fontSize,
                            color: '#515e6d'
                        }
                    },
                    legend: {
                        data: [this.nameBar, this.nameLine],
                        itemGap: 30,
                        top: 35,
                        right: 0,
                        bottom: 20,
                        textStyle: {
                            fontSize: isAndroid ? (fontSize / 2) : fontSize,
                            color: '#515e6d'
                        }
                    },
                    grid: {
                        top: 100
                    },
                    xAxis: [
                        {
                            type: 'category',
                            position: 'bottom',
                            data: this.xAxisData.slice(0, this.dataBar.length),
                            axisLabel: {
                                textStyle: {
                                    fontSize,
                                    color: '#aab5bd'
                                },
                                interval: 0
                            },
                            axisTick: {
                                show: false
                            },
                            axisLine: {
                                lineStyle: {
                                    color: '#aab5bd'
                                }
                            }
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value',
                            position: 'left',
                            min: 0,
                            max: 100,
                            splitNumber: 2,
                            axisLabel: {
                                formatter: '{value}%',
                                textStyle: {
                                    fontSize,
                                    color: '#515e6d'
                                }
                            },
                            axisTick: {
                                show: false
                            },
                            axisLine: {
                                show: false,
                                lineStyle: {
                                    color: '#d4dade'
                                }
                            },
                            splitLine: {
                                show: false,
                                lineStyle: {
                                    color: '#d4dade'
                                }
                            }
                        },
                        {
                            type: 'value',
                            max: (Math.max.apply(null, this.dataLine) + 0.05).toFixed(2),
                            min: (Math.min.apply(null, this.dataLine) - 0.05).toFixed(2),
                            axisLabel: {
                                textStyle: {
                                    fontSize,
                                    color: '#515e6d'
                                }
                            },
                            splitNumber: 0,
                            axisTick: {
                                show: false
                            },
                            axisLine: {
                                show: false

                            },
                            splitLine: {
                                show: true,
                                lineStyle: {
                                    color: '#d4dade'
                                }
                            }
                        }
                    ],
                    series: [
                        {
                            name: this.nameBar,
                            type: 'bar',
                            barWidth: fontSize + 'px',
                            silent: true,
                            animation: false,
                            itemStyle: {normal: {color: '#faedeb'}, emphasis: {color: '#faedeb'}},
                            data: this.dataBar
                        },

                        {
                            name: this.nameLine,
                            type: 'line',
                            symbol: (this.dataLine && this.dataLine.length > 1) ? 'none' : 'circle',
                            symbolSize: (this.dataLine && this.dataLine.length > 1) ? 0 : 10,
                            smooth: true,
                            silent: true,
                            animation: false,
                            lineStyle: {normal: {color: '#d25138'}},
                            yAxisIndex: 1,
                            data: this.dataLine
                        }
                    ]
                }
                if (this.isAndroid) {
                    option.grid['left'] = 40
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
