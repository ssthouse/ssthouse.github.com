<template>
  <home-page style="height: 100%;"></home-page>
</template>

<script>
  import HomePage from './components/HomePage.vue'
  import Vue from 'vue'
  import * as cloud from './components/cloud/cloud'

  Vue.component(HomePage.name, HomePage)

  export default {
    name: 'app',
    created: function () {
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
