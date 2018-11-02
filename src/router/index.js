import Vue from 'vue'
import Router from 'vue-router'
import DuoDuo from '../components/duoduo/DuoDuo.vue'
import Little from '../components/little/Little.vue'
import Giant from '../components/giant/Giant.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/duoduo'
    },
    {
      path: '/duoduo',
      name: 'duoduo',
      component: DuoDuo
    },
    {
      path: '/little',
      name: 'little',
      component: Little
    },
    {
      path: '/giant',
      name: 'giant',
      component: Giant
    }
  ]
})
