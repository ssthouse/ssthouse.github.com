<template>
  <div style="height: 100%; overflow-y: hidden;">
    <mu-row style="margin-bottom: 56px;">
      <keep-alive style="margin-top: 0;">
        <router-view></router-view>
      </keep-alive>
    </mu-row>

    <mu-row style="height: 56px;"
            class="bottom-bar">
      <mu-bottom-nav :value="bottomNav"
                     shift
                     @change="onChangeBottomNav">
        <mu-bottom-nav-item value="home"
                            title="Home"
                            icon="home"></mu-bottom-nav-item>
        <mu-bottom-nav-item value="msg"
                            title="msg"
                            icon="alarm"></mu-bottom-nav-item>
        <mu-bottom-nav-item value="favorite"
                            title="favorite"
                            icon="favorite"></mu-bottom-nav-item>
      </mu-bottom-nav>
    </mu-row>
  </div>
</template>

<script>
  import Vue from 'vue'
  import Home from './home/Home.vue'
  import Msg from './msg/Msg.vue'
  import Favorite from './favorite/Favorite.vue'

  Vue.component(Home.name, Home)
  Vue.component(Msg.name, Msg)
  Vue.component(Favorite.name, Favorite)

  export default{
    name: 'main-page',
    data () {
      return {
        bottomNav: 'home'
      }
    },
    props: [],
    methods: {
      onChangeBottomNav (changeTo) {
        this.$router.push(changeTo)
        this.bottomNav = changeTo
      }
    },
    computed: {},
    created: function () {

    }
  }
</script>

<style>
  html,
  body,
  .app-viewport {
    height: 100%;
    overflow: hidden;
  }

  .app-viewport {
    display: flex;
    flex-flow: column;
  }

  .bottom-bar {
    position: fixed;
    width: 100%;
    bottom: 0;
    z-index: 50;
  }
</style>
