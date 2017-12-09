<template>
  <div id="app"
       class="phone-viewport"
       style="top: 0; bottom: 0; margin-top: 0;">
    <home-page style="height: 100%;"></home-page>
  </div>
</template>

<script>
  import MainPage from './components/MainPage.vue'
  import HomePage from './components/HomePage.vue'
  import Vue from 'vue'
  import * as cloud from './components/cloud/cloud'

  Vue.component(MainPage.name, MainPage)
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
