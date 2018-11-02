import Vue from 'vue'
import Router from 'vue-router'
import Me from '../components/me/Me.vue'
import Blog from '../components/blog/Blog.vue'
import Code from '../components/code/Code.vue'

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
      component: Blog
    },
    {
      path: '/code',
      name: 'code',
      component: Code
    },
    {
      path: '/me',
      name: 'me',
      component: Me
    }
  ]
})
