/// <reference path="../support/drunk.d.ts" />
declare var echarts;
drunk.Binding.register('echart-big-trade', {
    xAxisData: [],
    fontSize: 22,
    isAndroid: false,
    isInit: false,
    update(val: any) {
        if (!val) {
            return;
        }
        try {
            let u = navigator.userAgent;
            this.isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1;
            if (this.isAndroid && !this.isInit) {
                this.element.style.height = this.element.offsetHeight * 1.2 + 'px';
                this.fontSize = this.fontSize / 2;
                this.isInit = true;
            }
        } catch (e) {

        }

        if (this.echart) {
            return;
        }
        this.echart = echarts.init(this.element);

        for (var i = 0, j = val.data1.length; i < j; i++) {
            this.xAxisData.push(i + 1);
        }

        var option = {
            title: {
                textStyle: {
                    fontSize: this.fontSize,
                    color: '#242c35',
                    fontWeight: 'normal'
                },
                text: '胜平负交易量趋势'
            },
            tooltip: {
                show: false,
                trigger: 'axis',
                textStyle: {
                    fontSize: this.fontSize
                }
            },

            grid: {
                left: 100,
                top: 80,
                right: 5
            },
            legend: {
                data: [val.name1, val.name2, val.name3],
                itemGap: 30,
                right: 0,
                top: 0,
                textStyle: {
                    fontSize: this.fontSize,
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
                            fontSize: this.fontSize,
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
                    name: val.startTime.substring(5, 16),
                    nameLocation: 'start',
                    type: 'value',
                    position: 'left',
                    splitNumber: 5,
                    axisTick: {
                        show: false
                    },
                    axisLine: {
                        show: false,

                    },
                    splitLine: {
                        show: true
                    },
                    nameTextStyle: {
                        fontSize: this.fontSize,
                        color: '#aab5bd'
                    },
                    axisLabel: {
                        formatter: '{value}万',
                        textStyle: {
                            fontSize: this.fontSize,
                            color: '#515e6d'
                        }
                    }
                },
                {
                    name: val.endTime.substring(5, 16),
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
                        fontSize: this.fontSize,
                        color: '#aab5bd'
                    },
                    axisLabel: {
                        show: false
                    }
                }
            ],
            series: [
                {
                    name: val.name1,
                    type: 'line',
                    symbol: 'none',
                    smooth: true,
                    lineStyle: { normal: { color: '#d3553d' } },
                    data: val.data1
                },
                {
                    name: val.name3,
                    type: 'line',
                    symbol: 'none',
                    smooth: true,
                    lineStyle: { normal: { color: '#36a171' } },
                    data: val.data2
                },
                {
                    name: val.name2,
                    type: 'line',
                    symbol: 'none',
                    smooth: true,
                    lineStyle: { normal: { color: '#437ba8' } },
                    data: val.data3
                }
            ]
        };
        if (this.isAndroid) {
            option.grid['left'] = 55;
        }
        this.echart.setOption(option);

    },
    release() {
        if (this.echart && this.echart.dispose) {
            this.echart.dispose();
        }
    }

})