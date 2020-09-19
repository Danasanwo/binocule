/* eslint-disable */
import axios from 'axios'

const state = {
  current: [],
}

const actions = {
  async changePage({ commit }, current) {
    const response = current
    console.log(response)
    commit('setChanging', response)
  },
  async signingUp({ commit }, details) {
    let header = {
      'Content-Type': 'application/json',
      Accept: '*/*',
      Connection: 'keep-alive',
      'Accept-Encoding': 'gzip, deflate, br',
      'Access-Control-Allow-Origin': '*',
    }
    const response = await axios.post(
      'https://binocule.azurewebsites.net/signup',
      details,
      {
        headers: {
          'Content-Type': 'application/json',
          'Accept-Encoding': 'gzip, deflate, br',
          'Access-Control-Allow-Origin': '*',
        },
      }
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
