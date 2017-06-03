<template>
    <div id="crazybetframe" style="overflow: hidden; height: 2000px;">
        <iframe id="_crazybet_frame" style="padding: 0;margin: 0;height: 0;width: 100%;border: 0"></iframe>
    </div>
</template>
<script>
    export default {
        mounted () {
            let detailTop = document.querySelector('.detailTop')
            let navigator = document.querySelector('.navigator')
            let crazybetframe = document.querySelector('#_crazybet_frame')
            crazybetframe.style.height = (innerHeight - detailTop.offsetHeight - navigator.offsetHeight) + 'px'
            crazybetframe.src = `http://crazybet.choopaoo.com/500bf/crazy/index.html#/h5/home/${this.$route.params.fid}`
        },
        methods: {
            raf: (cb) => window.requestAnimationFrame ? requestAnimationFrame(cb) : setTimeout(() => cb(), 16.7)

        }
    }

</script>
