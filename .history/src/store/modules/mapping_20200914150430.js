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
    try {
      let jsondetails = JSON.stringify(details)
      console.log(jsondetails)

      const response = await axios.post(
        'https://binocule.azurewebsites.net/signup',
        jsondetails
      )
      console.log(response)
      commit('creatingAccount', response)
    } catch (err) {
      console.log(err)
    }
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
