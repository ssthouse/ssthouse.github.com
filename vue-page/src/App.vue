<template>
  <div id="app"
       class="phone-viewport"
       style="top: 0; bottom: 0; margin-top: 0;">
    <main-page style="height: 100%;"></main-page>
  </div>
</template>

<script>
  import MainPage from './components/MainPage.vue'
  import Vue from 'vue'
  import * as fastnote from './components/cloud/fastnote'

  Vue.component(MainPage.name, MainPage)

  export default {
    name: 'app',
    created: function () {
      fastnote.init()
      fastnote.testSaveObj()
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
