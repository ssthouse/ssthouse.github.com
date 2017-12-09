// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import App from './App'
import router from './router'
// Webpack CSS import
// import 'muse-ui/dist/muse-ui.css'
// import 'muse-ui/dist/theme-light.css' // 使用 carbon 主题
import('../node_modules/vuetify/dist/vuetify.min.css')

// JS import
import Vue from 'vue'
import MuseUI from 'muse-ui'
import Vuetify from 'vuetify'

Vue.use(Vuetify)
Vue.use(MuseUI)
Vue.config.productionTip = false

import store from './store/index'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App}
})
