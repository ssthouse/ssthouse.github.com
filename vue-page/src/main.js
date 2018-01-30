// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import App from './App'
import router from './router'
import('../node_modules/vuetify/dist/vuetify.min.css')

import('../node_modules/medium-editor/dist/css/medium-editor.css')
import('../node_modules/medium-editor/dist/css/themes/default.css')
// UI framework
import Vue from 'vue'
import MuseUI from 'muse-ui'
import Vuetify from 'vuetify'

Vue.use(Vuetify)
Vue.use(MuseUI)

// Eventbus
import Eventbus from './components/utils/EventBus'
Vue.use(Eventbus)

// Storage
import Storage from './store/storage'
Vue.use(Storage)

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
