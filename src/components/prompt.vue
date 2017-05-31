<!--<template>
    <div class="ui-empty" style="padding: 1.54rem 0;">
        <img class="w240" src="http://tccache.500.com/mobile/widget/empty/images/12.png">
        <div class="ui-empty-gfont">暂无数据</div>
    </div>
</template>-->

<template>
    <div class="l-full l-box-center">
        <div class="txtcenter">
            <img :src="imageUrl"  :class="{w136: type == 'loading', w240: type != 'loading'}"/>
            <div class="ui-empty-dfont">{{tip0}}</div>
            <div class="ui-empty-gfont">{{tip1}}</div>
            <button v-if="btnText" class="ui-empty-btn"  v-tap="{methods: clickbtn}">{{btnText}}</button>
        </div>
    </div>
</template>
<script>
    const _baseUrl = 'http://tccache.500.com/mobile/widget/empty/images/'
const typeMap = {
        'network-error': {
            img: '18.png'
        },
        'loading': {
            img: 'load.gif',
            tip0: '正在加载中...'
        },
        'normal': {
            img: '07.png'
        },
        'no-match-fball': {img: '08.png'},
        'no-match-bball': {img: '09.png'},
        'star': {img: '10.png'},
        'no-data': {img: '12.png', tip0: '暂无数据'}
    }
export default {
        props: {
            type: {
                type: String,
                required: false,
                default: 'loading',
                validator (type) {
                    return typeMap[type]
                }
            },
            tip0: {
                type: String
            },
            tip1: {
                type: String
            },
            btnText: {
                type: String
            }
        },
        data () {
            return {imageUrl: null, message: undefined}
        },
        methods: {
            clickbtn () {
                this.$emit('btnclick')
            }
        },
        mounted () {
            this.imageUrl = _baseUrl + typeMap[this.type].img
        }
    }

</script>
<style scoped>
    .txtcenter {
        text-align: center
    }

    .l-box-center{display:-webkit-box; -webkit-box-align: center; -webkit-box-pack: center;display:flex;justify-content: center;align-items: center;  }


    img {
        margin-bottom: 0.6rem;
    }

    .w240 {
        width: 3.2rem;
    }

    .w170 {
        width: 2.266667rem;
    }

    .w136 {
        width: 1.813333rem;
    }

    .w126 {
        width: 1.68rem;
    }

    .ui-empty-gfont {
        font-size: 0.4rem;
        color: #b3b3b3;
        padding: 0 0.5rem;
    }

    .ui-empty-dfont {
        font-size: 0.453333rem;
        color: #333;
        height: 0.893333rem;
        line-height: 0.893333rem;
    }
    .ui-empty-btn {
        font-size: 0.426667rem;
        color: #333;
        height: 1.12rem;
        border: 1px solid #c3c3c3;
        border-radius: 0.106667rem;
        background: #fff;
        width: 4.666667rem;
        margin-top: .8rem;
    }
</style>
