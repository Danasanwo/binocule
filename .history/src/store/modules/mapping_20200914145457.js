/* eslint-disable */
import axios from 'axios'

const state = {
  current: [],
}

const actions = {
  async changePage({ commit }, current) {
    const response = await current
    console.log(response)
    commit('setChanging', response)
  },

  async signingUp({ commit }, details) {
    let jsondetail = JSON.stringify(details)
    console.log(jsondetail)
    const response = await axios.post(
      'https://binocule.azurewebsites.net/signup',
      jsondetail
    )
    console.log(response)
    commit('creatingAccount', response)
  },
}

const mutations = {
  setChanging: function(state, current) {
    state.current = current
  },
}

const getters = {
  allCurrent: (state) => state.current,
}

export default {
  state,
  getters,
  actions,
  mutations,
}
