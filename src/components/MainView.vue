<template>
  <v-app>
    <toolbar></toolbar>

    <v-content class="main-content">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </v-content>
  </v-app>
</template>

<script>
import Toolbar from './Toolbar'

export default {
  components: { Toolbar },
  data() {
    return {}
  },
  props: [],
  methods: {},
  computed: {},
  created: function() {}
}
</script>

<style lang="less">
@import './index.less';

.toolbar-title {
  text-align: left;
  padding-left: -16px;
}

.larger-menu {
  font-size: 15px;
}

.main-content {
  margin-top: 48px;
}
</style>
