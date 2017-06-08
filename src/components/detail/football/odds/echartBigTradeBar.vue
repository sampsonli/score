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
            data1: {
                type: Array,
                required: true
            },
            data2: {
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
                        text: '大额交易分布'
                    },
                    tooltip: {
                        show: false,
                        trigger: 'axis',
                        textStyle: {
                            fontSize
                        }
                    },
                    legend: {
                        data: [this.name1, this.name2],
                        right: 0,
                        top: 0,
                        textStyle: {
                            fontSize,
                            color: '#515e6d'
                        }
                    },
                    grid: {
                        left: 110,
                        right: 5,
                        top: 80
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
                                }
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
                                show: false
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
                            name: this.name1,
                            type: 'bar',
                            symbol: 'none',
                            smooth: true,
                            itemStyle: { normal: { areaStyle: 'default', color: '#515e6d' } },
                            data: this.data1,
                            barWidth: 30
                        },
                        {
                            name: this.name2,
                            type: 'bar',
                            symbol: 'none',
                            smooth: true,
                            itemStyle: { normal: { areaStyle: 'default', color: '#caced3' } },
                            data: this.data2,
                            barWidth: 30
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
