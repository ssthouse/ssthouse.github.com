<template>
  <v-app>
    <toolbar></toolbar>

    <v-navigation-drawer clipped fixed v-model="drawerOpen" app>
      <v-list dense>
        <!--duoduo-->
        <v-list-tile to="duoduo">
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
      </v-list>
    </v-navigation-drawer>

    <v-content>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </v-content>
  </v-app>
</template>

<script>
import DuoDuo from './duoduo/DuoDuo.vue'
import Little from './little/Little.vue'
import Giant from './giant/Giant.vue'
import Toolbar from './Toolbar.vue'

export default {
  components: { DuoDuo, Little, Giant, Toolbar },
  name: 'home-page',
  data() {
    return {
      bottomNav: 'home',
      drawerOpen: false,
      store: this.store
    }
  },
  props: [],
  methods: {
    onChangeBottomNav(changeTo) {
      this.$router.push(changeTo)
      this.bottomNav = changeTo
    },
    onMenuClick() {
      this.drawerOpen = !this.drawerOpen
    }
  },
  computed: {},
  created: function() {}
}
</script>

<style lang="less">
.toolbar-title {
  text-align: left;
  padding-left: -16px;
}

.larger-menu {
  font-size: 15px;
}
</style>
