<template>

    <div></div>
</template>
<script>
    import echarts from 'echarts/lib/echarts'
    import 'echarts/lib/chart/line'
    import 'echarts/lib/chart/bar'
    import 'echarts/lib/component/legend'
    import 'echarts/lib/component/tooltip'

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
                xAxisData: [0, 1, 2, 3, 4, 5, 6]
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
                        show: true,
                        trigger: 'axis',
                        textStyle: {
                            fontSize: fontSize
                        },
                        position: function (p) {   // 其中p为当前鼠标的位置
                            return [p[0] + 20, p[1] * 0.4]
                        },
                        padding: [10, 20, 10, 20],
                        formatter: function (prams) {
                            let str = ' <span style="color:#d3553d;font-size:26px">{c0}%</span> | <span style="color:#437ba8;font-size:26px">{c1}%</span>'
                            if (prams && prams.length === 2) {
                                str = str.replace(/{c0}/g, prams[0].data)
                                str = str.replace(/{c1}/g, prams[1].data)
                            }
                            if (prams && prams.length === 1) {
                                if (prams[0].seriesName.indexOf('主') > -1) {
                                    str = str.replace(/{c0}/g, prams[0].data)
                                    str = str.replace(/{c1}%/g, '')
                                } else {
                                    str = str.replace(/{c0}%/g, '')
                                    str = str.replace(/{c1}/g, prams[0].data)
                                }
                            }
                            return str
                        },
                        backgroundColor: 'rgba(255,255,255,0.96)',
                        borderWidth: 1,
                        borderColor: '#f4f4f4',
                        axisPointer: {
                            type: 'line',
                            lineStyle: {
                                color: '#242c35',
                                opacity: 0.15
                            }
                        }
                    },

                    legend: {
                        data: [this.name1, this.name2],
                        right: 0,
                        itemGap: 30,
                        top: 40,
                        textStyle: {
                            fontSize: this.isAndroid ? (fontSize / 2) : fontSize,
                            color: '#515e6d'
                        }
                    },
                    grid: {
                        top: 100,
                        right: 5
                    },
                    xAxis: [
                        {
                            type: 'category',
                            position: 'bottom',
                            data: this.xAxisData,
                            boundaryGap: false,
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
                                show: false
                            },
                            splitLine: {
                                show: true
                            }
                        }
                    ],
                    series: [
                        {
                            name: this.name1,
                            type: 'line',
                            symbol: 'circle',
                            symbolSize: 1,
                            smooth: true,
                            lineStyle: { normal: { color: '#d25138' } },
                            data: this.data1
                        },
                        {
                            name: this.name2,
                            type: 'line',
                            symbol: 'circle',
                            symbolSize: 1,
                            smooth: true,
                            lineStyle: { normal: { color: '#437ba8' } },
                            data: this.data2

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
