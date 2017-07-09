import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,
    username: 'hahaha',
    isCony: false
  },
  mutations: {
    increase (state) {
      state.count++
    },
    setUser (state, isCony) {
      state.isCony = isCony
    }
  }
})

export default store
