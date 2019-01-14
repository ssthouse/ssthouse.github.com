import Vue from 'vue'
import Router from 'vue-router'

const Me = () => import('../components/me/Me.vue')
const Blog = () => import('../components/blog/Blog.vue')
const Code = () => import('../components/code/Code.vue')

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
