<template>
  <main-view style="height: 100%;"></main-view>
</template>

<script>
import MainView from './components/MainView.vue'
import * as cloud from './components/cloud/cloud'

export default {
  name: 'app',
  components: { MainView },
  created: function() {
    // 初始化leancloud
    cloud.init()
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
</style>
