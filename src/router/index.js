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
      redirect: '/blog'
    },
    {
      path: '/blog',
      name: 'blog',
      component: DuoDuo
    },
    {
      path: '/code',
      name: 'code',
      component: Little
    },
    {
      path: '/me',
      name: 'me',
      component: Giant
    }
  ]
})
