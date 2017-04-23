import Vue from 'vue'
import Router from 'vue-router'
import Main from '../components/Main.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: Main.name,
      component: Main
    }
  ]
})
