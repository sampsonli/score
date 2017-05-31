<template>
    <div class="l-full _scroll_container">
        <slot name="navigator"></slot>
        <div class="_scroll_content">
            <slot>

            </slot>
        </div>
    </div>

</template>

<script>
    import {Scroller} from 'scroller'

    export default {
        data () {
            return {
                container: null,
                content: null,
                navigator: null,
                headPartHeight: 0,
                width: 0,
                containerHeight: 0,
                contentHeight: 0,
                scrollerObj: null
            }
        },
        mounted () {
            this.initConfig()
        },
        methods: {
            raf: (cb) => window.requestAnimationFrame ? requestAnimationFrame(cb) : setTimeout(() => cb(), 16.7),
            cancelRaf: (ref) => window.requestAnimationFrame ? cancelAnimationFrame(ref) : clearTimeout(ref),
            update () {
                this.raf(() => {
                    this.contentHeight = this.content.offsetHeight
                    this.scrollerObj.setDimensions(this.width, this.containerHeight, this.width, this.contentHeight)
                })
            },
            initConfig () {
                this.container = this.$el
                this.content = this.$el.querySelector('._scroll_content')
                this.navigator = this.$el.querySelector('.navigator.hide')
                this.navigator.style.position = 'absolute'
//                this.navigator.style.zIndex = 'auto'
                this.navigator.style.top = '0'
                this.navigator.style.left = '0'
                this.navigator.style.right = '0'
                this.width = this.container.offsetWidth
                this.headPartHeight = this.$el.querySelector('._header').offsetHeight
                this.head = this.$el.querySelector('._header')
                this.containerHeight = this.container.offsetHeight
                this.contentHeight = this.content.offsetHeight
                let status = 0
                const transform = typeof document.body.style.transform !== 'undefined' ? 'transform' : 'webkitTransform'
                const transformOrigin = typeof document.body.style.transform !== 'undefined' ? 'transformOrigin' : 'webkitTransformOrigin'
                this.head.style[transformOrigin] = '50% 100.5%'
                this.scrollerObj = new Scroller((left, top, zoom) => {
                    this.content.style[transform] = 'translate3d(' + (-left) + 'px,' + (-top) + 'px,0) scale(' + zoom + ')'
                    if (top < 0) {
                        this.head.style[transform] = 'scale(' + (1 - (top / (this.headPartHeight))) + ')'
                    } else {
                        this.head.style[transform] = 'scale(1)'
                    }
                    if (top > this.headPartHeight) {
                        if (!status) {
                            status = 1
                            this.navigator.style[transform] = 'translate3d(0, 0, 0) scale(1)'
                            this.$emit('switch', status)
                        }
                    } else {
                        if (status) {
                            status = 0
                            this.$emit('switch', status)
                        }
                        this.navigator.style[transform] = 'translate3d(0,' + (-top + this.headPartHeight) + 'px,0) scale(1)'
                    }
                }, {
                    bouncing: false,
                    scrollingX: false,
                    scrollingY: true
                })
                this.scrollerObj.setDimensions(this.width, this.containerHeight, this.width, this.contentHeight)
                function findA (ele) {
                    if (!ele) {
                        return null
                    } else if (ele.tagName === 'A') {
                        return ele
                    } else if (ele.tagName === 'BODY') {
                        return null
                    } else return findA(ele.parentNode)
                }
                this.container.addEventListener('touchstart', (e) => {
                    // Don't react if initial down happens on a form element
                    if (e.touches[0] && e.touches[0].target && e.touches[0].target.tagName.match(/input|textarea|select/i)) {
                        return
                    }
                    let a = findA(e.touches[0].target)
                    if (a && a.getAttribute('href')) {
                        return
                    }
                    this.scrollerObj.doTouchStart(e.touches, e.timeStamp)
                    e.preventDefault()
                }, false)

                this.container.addEventListener('touchmove', (e) => {
                    this.scrollerObj.doTouchMove(e.touches, e.timeStamp, e.scale)
                }, false)

                this.container.addEventListener('touchend', (e) => {
                    this.scrollerObj.doTouchEnd(e.timeStamp)
                }, false)

                this.container.addEventListener('touchcancel', (e) => {
                    this.scrollerObj.doTouchEnd(e.timeStamp)
                }, false)
                this.navigator.style.display = 'block'
            }
        }
    }
</script>
