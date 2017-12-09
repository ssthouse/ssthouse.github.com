<template>
  <div style="height: 100vh; overflow-y: hidden;">

    <!--上面的顶栏-->
    <mu-appbar
      title="For you 🐳"
      style="text-align: left; font-style: oblique; font-size: larger;">
      <mu-icon-button icon="menu" slot="left"
                      @click="onMenuClick">
      </mu-icon-button>
    </mu-appbar>

    <!--中间的内容-->
    <mu-row style="position: absolute; top: 56px; bottom: 56px; width: 100%">
      <!--侧边栏-->
      <mu-col desktop="20" class="drawer-bar">
        <mu-drawer :open="drawerOpen" @close="onMenuClick" class="drawer-container">
          <mu-list>
            <mu-list-item title="Hi my bao" to="duoduo">
              <mu-icon value="chat_bubble" slot="left"/>
            </mu-list-item>
            <mu-list-item title="Menu Item 2" to="little">

            </mu-list-item>
            <mu-list-item title="Menu Item 3" to="giant">

            </mu-list-item>
          </mu-list>
        </mu-drawer>
      </mu-col>

      <mu-col desktop="80">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </mu-col>
    </mu-row>

    <!--下面的底栏-->
    <mu-row style="height: 56px;"
            class="bottom-bar">
      <mu-bottom-nav :value="bottomNav"
                     shift
                     @change="onChangeBottomNav">
        <mu-bottom-nav-item value="duoduo"
                            title="Hi bao"
                            icon="home"></mu-bottom-nav-item>
        <mu-bottom-nav-item value="little"
                            title="Little"
                            icon="alarm"></mu-bottom-nav-item>
        <mu-bottom-nav-item value="giant"
                            title="Giant"
                            icon="favorite"></mu-bottom-nav-item>
      </mu-bottom-nav>
    </mu-row>
  </div>
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
    name: 'main-page',
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

  .drawer-container {
    margin-top: 56px;
  }

  .drawer-bar {
    display: block;
  }
</style>
