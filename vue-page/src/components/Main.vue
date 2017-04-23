<template>
  <div>
    <v-ons-page>
      <v-ons-tabbar :visible="true"
                    :index="activeIndex"
                    @update="activeIndex = $event">

        <v-ons-tab v-for="(tab, i) in tabs"
                   :icon="tabs[i].icon"></v-ons-tab>

        <template slot="pages">
          <home></home>
          <msg></msg>
          <favorite></favorite>
        </template>
      </v-ons-tabbar>
    </v-ons-page>
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
    name: 'main',
    data () {
      return {
        tabs: [{
          label: 'Home',
          icon: 'md-home'
        }, {
          label: 'news',
          icon: 'md-email'
        }, {
          label: 'setting',
          icon: 'md-favorite'
        }],
        activeIndex: 0
      }
    },
    props: [],
    methods: {},
    computed: {},
    created: function () {

    }
  }
</script>

<style>

</style>
