import Vue from 'vue'
import Vuex from 'vuex'
import mapping from './modules/mapping'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    mapping,
  },
})
