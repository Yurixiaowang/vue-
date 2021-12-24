import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    detailInfo: {}
  },
  mutations: {
    setDetailInfo(state, payload) {
      state.detailInfo = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
