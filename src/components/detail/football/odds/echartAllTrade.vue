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
            name: {
                type: String,
                required: true
            },
            data: {
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
                for (let i = 0, j = this.data.length; i < j; i++) {
                    this.xAxisData.push(i + 1)
                }

                const option = {
                    title: {
                        textStyle: {
                            fontSize,
                            color: '#242c35',
                            fontWeight: 'normal'
                        },
                        text: '交易量时间分布'
                    },
                    tooltip: {
                        show: false,
                        trigger: 'axis',
                        textStyle: {
                            fontSize,
                            color: '#515e6d'
                        }
                    },
                    legend: {
                        data: [this.name],
                        right: 0,
                        itemGap: 30,
                        top: 0,
                        textStyle: {
                            fontSize,
                            color: '#515e6d'
                        }
                    },
                    grid: {
                        left: 100,
                        top: 80,
                        right: 5
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
                                show: false,
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
                            splitNumber: 5,
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
                                show: true
                            },
                            nameTextStyle: {
                                fontSize
                            },
                            axisLabel: {
                                formatter: '{value}万',
                                textStyle: {
                                    fontSize,
                                    color: '#515e6d'
                                }
                            }
                        }

                    ],
                    series: [
                        {
                            name: this.name,
                            type: 'line',
                            symbol: 'none',
                            smooth: true,
                            areaStyle: { normal: { color: '#979ea7' } },
                            lineStyle: { normal: { areaStyle: 'default', color: '#858e99' } },
                            data: this.data
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
