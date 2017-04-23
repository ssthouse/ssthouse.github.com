<template>
  <div>
    <keep-alive style="margin-top: 0;">
      <router-view></router-view>
    </keep-alive>

    <div class="bottom-bar">
      <md-bottom-bar>
        <md-bottom-bar-item md-icon="home"
                            @click.native="onClickBottomBtn('home')">Home
        </md-bottom-bar-item>
        <md-bottom-bar-item md-icon="alarm"
                            @click.native="onClickBottomBtn('msg')">Msg
        </md-bottom-bar-item>
        <md-bottom-bar-item md-icon="favorite"
                            @click.native="onClickBottomBtn('favorite')">Favorite
        </md-bottom-bar-item>
      </md-bottom-bar>
    </div>
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
      return {}
    },
    props: [],
    methods: {
      onClickBottomBtn (btnName) {
        this.$router.push(btnName)
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
