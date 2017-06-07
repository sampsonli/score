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
            oddslist: {
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
                this.echart = echarts.init(this.$el)

                const option = {
                    tooltip: {
                        show: false,
                        trigger: 'axis',
                        textStyle: {
                            fontSize
                        }
                    },
                    legend: {
                        show: false
                    },
                    grid: {
                        right: 0
                    },
                    xAxis: [
                        {
                            type: 'category',
                            position: 'bottom',
                            data: this.xAxisData.slice(0, this.oddslist.length),
                            axisLabel: {
                                show: false,
                                textStyle: {
                                    fontSize: fontSize,
                                    color: '#515e6d'
                                },
                                interval: 0
                            },
                            axisLine: {
                                show: false
                            },
                            axisTick: {
                                show: false
                            }
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value',
                            max: (Math.max.apply(null, this.oddslist) + 0.02).toFixed(2),
                            min: (Math.min.apply(null, this.oddslist) - 0.02).toFixed(2),
                            axisLabel: {
                                show: false,
                                textStyle: {
                                    fontSize,
                                    color: '#515e6d'
                                }
                            },
                            splitNumber: 10,
                            axisTick: {
                                show: false
                            },
                            axisLine: {
                                show: false
                            },
                            splitLine: {
                                show: false
                            }
                        }
                    ],
                    series: [
                        {
                            type: 'line',
                            symbol: 'none',
                            smooth: true,
                            animation: false,
                            lineStyle: { normal: { color: '#d25138' } },
                            data: this.oddslist
                        }
                    ]
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
