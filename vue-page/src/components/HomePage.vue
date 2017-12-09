<template>
  <v-app>
    <v-navigation-drawer
      clipped
      fixed
      v-model="drawerOpen"
      app>
      <v-list dense>
        <!--duoduo-->
        <v-list-tile to="duoduo" >
          <v-list-tile-action>
            <v-icon>pets</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="larger-menu">Duo 🐶</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <!--little-->
        <v-list-tile to="little">
          <v-list-tile-action>
            <v-icon>alarm</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="larger-menu">Little 🐷</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <!--giant-->
        <v-list-tile to="giant">
          <v-list-tile-action>
            <v-icon>favorite</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="larger-menu">Giant 🐹</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <!--music clock-->
        <v-divider></v-divider>
        <v-list-tile to="music-clock">
          <v-list-tile-action>
            <v-icon>music_note</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="larger-menu">Music Clock</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to="music-list">
          <v-list-tile-action>
            <v-icon>queue_music</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="larger-menu">List</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to="music-setting">
          <v-list-tile-action>
            <v-icon>settings</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="larger-menu">Clock Setting</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

      </v-list>
    </v-navigation-drawer>

    <v-toolbar
      color="blue darken-3"
      dark
      app
      clipped-left
      fixed>
      <v-toolbar-title style="width: 300px"
                       class="ml-0 pl-3 toolbar-title">
        <v-toolbar-side-icon @click.stop="onMenuClick()"></v-toolbar-side-icon>
        <span>💃💃💃 🏃🏃🏃</span>
      </v-toolbar-title>
      <div class="d-flex align-center" style="margin-left: auto">
        <v-btn icon>
          <v-icon>apps</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>notifications</v-icon>
        </v-btn>
      </div>
    </v-toolbar>

    <v-content>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </v-content>
  </v-app>
</template>

<script>
  import Vue from 'vue'
  import DuoDuo from './duoduo/DuoDuo.vue'
  import Little from './little/Little.vue'
  import Giant from './giant/Giant.vue'
  import VListGroup from 'vuetify/es5/components/VList/VListGroup'

  Vue.component(DuoDuo.name, DuoDuo)
  Vue.component(Little.name, Little)
  Vue.component(Giant.name, Giant)

  export default{
    components: {VListGroup},
    name: 'home-page',
    data () {
      return {
        bottomNav: 'home',
        drawerOpen: false,
        store: this.store
      }
    },
    props: [],
    methods: {
      onChangeBottomNav (changeTo) {
        this.$router.push(changeTo)
        this.bottomNav = changeTo
      },
      onMenuClick () {
        this.drawerOpen = !this.drawerOpen
      }
    },
    computed: {},
    created: function () {
    }
  }
</script>

<style lang="less">
  .toolbar-title {
    text-align: left;
    padding-left: -16px;
  }

  .larger-menu{
    font-size: 15px;
  }
</style>
