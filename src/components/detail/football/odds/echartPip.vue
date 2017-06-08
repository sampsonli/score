<template>

    <div></div>
</template>
<script>
    import echarts from 'echarts/lib/echarts'
    import 'echarts/lib/chart/pie'
    export default {
        props: {
            data: {
                type: Array,
                required: true
            }
        },
        mounted () {
            try {
                this.echart = echarts.init(this.$el)

                let option = {
                    tooltip: {
                        trigger: 'item'
                    },
                    series: [
                        {
                            type: 'pie',
                            radius: ['99%', '88%'],
                            avoidLabelOverlap: false,
                            label: {
                                normal: {
                                    show: false,
                                    position: 'center'
                                }
                            },
                            color: ['#d3553d', '#36a171', '#437ba8'],
                            labelLine: {
                                normal: {
                                    show: false
                                }
                            },
                            silent: true,
                            data: this.data
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
