/* eslint-disable */
// import axios from 'axios'

const state = {
  backFalse: [],
}

const actions = {
  async validity({ commit }, valid) {
    const response = valid
    // console.log(response)
    commit('setValidity', response)
  },
  async changePage({ commit }, current) {
    const response = current
    // console.log(response)
    commit('setChanging', response)
  },
}

const mutations = {
  setValidity: function(state, backFalse) {
    state.backFalse = backFalse
  },
}

const getters = {
  allBack: (state) => state.backFalse,
}

export default {
  state,
  getters,
  actions,
  mutations,
}
