import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

import modules from './modules'

const store = new Vuex.Store({
  modules
})

export default store
