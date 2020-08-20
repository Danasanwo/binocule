/* eslint-disable */
// import axios from 'axios'

const state = {
  backFalse: [],
  current: [],
}

const actions = {
  async changePage({ commit }, current) {
    const response = current
    // console.log(response)
    commit('setChanging', response)
  },
}

const mutations = {
  setChanging: function(state, current) {
    state.current = current
  },
}

const getters = {
  allBack: (state) => state.backFalse,
  allCurrent: (state) => state.current,
}

export default {
  state,
  getters,
  actions,
  mutations,
}
