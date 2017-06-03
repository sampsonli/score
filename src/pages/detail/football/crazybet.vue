<template>
    <div id="crazybetframe" style="overflow: hidden; height: 0;">
        <iframe id="_crazybet_frame" style="padding: 0;margin: 0;height: 100%;width: 100%;border: 0" src="http://crazybet.choopaoo.com/500bf/crazy/index.html#/h5/home/648289"></iframe>
    </div>
</template>
<script>
    export default {
        mounted () {
            let wrapper = document.querySelector('._scroll_container')
            let navigator = document.querySelector('.navigator')
            let crazybetframe = document.querySelector('#crazybetframe')
            crazybetframe.style.height = (wrapper.offsetHeight - navigator.offsetHeight) + 'px'
        }
    }

</script>
