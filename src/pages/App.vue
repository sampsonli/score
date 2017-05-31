<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>
<script>
    export default {
        mounted () {
            this.$store.dispatch('initWebsocket')
        }
    }
</script>
<style>
    .l-box-center{display:-webkit-box; -webkit-box-align: center; -webkit-box-pack: center;display:flex;justify-content: center;align-items: center;  -webkit-box-orient: vertical;flex-flow: column;}
    .l-box-vertical-center{display: -webkit-box;-webkit-box-align: center;display: flex;align-items: center;-webkit-box-orient: horizontal; flex-flow: row;}
    .l-box-vertical-center-justify{display: -webkit-box;-webkit-box-orient: horizontal; flex-flow: row; -webkit-box-align: center;-webkit-box-pack: justify;display: flex;align-items: center;justify-content: space-between;}
    .l-box-vertical-center-begin{display: -webkit-box;-webkit-box-orient: horizontal; flex-flow: row; -webkit-box-align: center;-webkit-box-pack: start;display: flex;align-items: center;justify-content: flex-start;}
    .l-box-vertical-center-end{display: -webkit-box;-webkit-box-orient: horizontal; flex-flow: row; -webkit-box-align: center;-webkit-box-pack: end;display: flex;align-items: center;justify-content: flex-end;}
    .l-box-horizontal-center{display: -webkit-box;-webkit-box-pack: center;display: flex;justify-content: center;-webkit-box-orient: horizontal; flex-flow: row;}
    .l-flex-column{ display:-webkit-box; -webkit-box-orient: vertical; display:flex; flex-flow: column;height: 100% }
    .l-flex-row{ display:-webkit-box; -webkit-box-orient: horizontal; display:flex; flex-flow: row; width: 100%}
    .l-flex-1{ -webkit-box-flex: 1; flex:1;overflow: hidden}
    .l-scroll-y{overflow: auto;-webkit-overflow-scrolling:touch;}
    .l-full{ position: absolute; top:0; left:0; right:0; bottom:0 }
    .l-relative{ position:relative;}

    a{color:#fff}
    #app {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        overflow: hidden;
    }
</style>
