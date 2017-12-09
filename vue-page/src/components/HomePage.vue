<template>
  <v-app>
    <v-navigation-drawer
      clipped
      fixed
      v-model="drawerOpen"
      app>
      <v-list dense>
        <v-list-tile to="duoduo">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Settings</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to="little">
          <v-list-tile-action>
            <v-icon>alarm</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Dashboard</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to="giant">
          <v-list-tile-action>
            <v-icon>favorite</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Settings</v-list-tile-title>
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
      <v-toolbar-title :style="this.$vuetify.breakpoint.smAndUp ? 'width: 300px; min-width: 250px' : 'min-width: 72px'"
                       class="ml-0 pl-3 toolbar-title">
        <v-toolbar-side-icon @click.stop="onMenuClick()"></v-toolbar-side-icon>
        <span class="hidden-xs-only">Google Contacts</span>
      </v-toolbar-title>
      <v-text-field
        light
        solo
        prepend-icon="search"
        placeholder="Search"
        style="max-width: 500px; min-width: 128px"
      ></v-text-field>
      <div class="d-flex align-center" style="margin-left: auto">
        <v-btn icon>
          <v-icon>apps</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>notifications</v-icon>
        </v-btn>
        <v-btn icon large>
          <v-avatar size="32px" tile>
            <img
              src="https://vuetifyjs.com/static/doc-images/logo.svg"
              alt="Vuetify"
            >
          </v-avatar>
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

  Vue.component(DuoDuo.name, DuoDuo)
  Vue.component(Little.name, Little)
  Vue.component(Giant.name, Giant)

  export default{
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
  .toolbar-title{
    text-align: left;
    padding-left: -16px;
  }
</style>
