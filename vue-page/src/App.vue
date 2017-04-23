<template>
  <div id="app" style="top: 0; bottom: 0;">
    <main-page></main-page>
  </div>
</template>

<script>
  import MainPage from './components/MainPage.vue'
  import Vue from 'vue'

  Vue.component(MainPage.name, MainPage)

  export default {
    name: 'app'
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
