// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// Webpack CSS import
import 'onsenui/css/onsenui.css'
import 'onsenui/css/onsen-css-components.css'

// JS import
import 'onsenui'
import VueOnsen from 'vue-onsenui'

Vue.use(VueOnsen)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
})
