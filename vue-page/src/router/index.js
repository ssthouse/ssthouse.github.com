import Vue from 'vue'
import Router from 'vue-router'
import DuoDuo from '../components/duoduo/DuoDuo.vue'
import Little from '../components/little/Little.vue'
import Giant from '../components/giant/Giant.vue'
import MusicClock from '../components/music-clock/MusicClock.vue'
import MusicList from '../components/music-clock/MusicList.vue'
import MusicSetting from '../components/music-clock/MusicSetting.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/duoduo'
    }, {
      path: '/duoduo',
      name: 'duoduo',
      component: DuoDuo
    }, {
      path: '/little',
      name: 'little',
      component: Little
    }, {
      path: '/giant',
      name: 'giant',
      component: Giant
    }, {
      path: '/music-clock',
      name: 'musicClock',
      component: MusicClock
    }, {
      path: '/music-list',
      name: 'musicList',
      component: MusicList
    }, {
      path: '/music-setting',
      name: 'musicSetting',
      component: MusicSetting
    }
  ]
})
