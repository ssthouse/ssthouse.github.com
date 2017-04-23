import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home/Home.vue'
import Msg from '../components/msg/Msg.vue'
import Favorite from '../components/favorite/Favorite.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    }, {
      path: '/home',
      name: 'home',
      component: Home
    }, {
      path: '/msg',
      name: 'msg',
      component: Msg
    }, {
      path: '/favorite',
      name: 'favorite',
      component: Favorite
    }
  ]
})
