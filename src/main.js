// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import App from './App'
import router from './router'
// import VueI18n from 'vue-i18n'
import Vue from 'vue'
import Storage from './store/storage'
import Eventbus from './components/utils/EventBus'
import store from './store/index'
import Vuetify from 'vuetify/lib'
import 'vuetify/dist/vuetify.min.css'
import i18n from './i18n/index'

Vue.config.productionTip = false

Vue.use(Vuetify)
Vue.use(Eventbus)
Vue.use(Storage)

/* eslint-disable no-new */
new Vue({
  i18n,
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
