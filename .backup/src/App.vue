<template>
  <main-view style="height: 100%;"></main-view>
</template>

<script>
import MainView from './components/MainView.vue'

export default {
  name: 'app',
  components: { MainView },
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
