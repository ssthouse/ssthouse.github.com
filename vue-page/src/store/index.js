import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,
    username: 'hahaha'
  },
  mutations: {
    increase (state) {
      state.count++
    }
  }
})

export default store
