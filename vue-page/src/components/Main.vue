<template>
  <div>
    <v-ons-page>
      <v-ons-tabbar :visible="true"
                    :index="activeIndex"
                    @update="activeIndex = $event">

        <v-ons-tab v-for="(tab, i) in tabs"
                   :label="tabs[i].label"></v-ons-tab>

        <template slot="pages">
          <home></home>
          <home></home>
          <home></home>
        </template>
      </v-ons-tabbar>
    </v-ons-page>
  </div>
</template>

<script>
  import Home from './home/Home.vue'
  import Vue from 'vue'

  Vue.component(Home.name, Home)

  export default{
    name: 'main',
    data () {
      return {
        tabs: [{
          label: 'Home'
        }, {
          label: 'news'
        }, {
          label: 'setting'
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
