/* eslint-disable */
import axios from 'axios'

const state = {
  current: [],
  categ: [],
}

const actions = {
  async changePage({ commit }, current) {
    const response = await current
    console.log(response)
    commit('setChanging', response)
  },

  async fetchCateg({ commit }, option) {
    const response = await option
    console.log(response)
    commit('setCateg', response)
  },

  async signingUp({ commit }, details) {
    try {
      let jsondetails = JSON.stringify(details)
      console.log(jsondetails)

      const headers = {
        'Content-type': 'application/json',
        Accept: '*/*',
      }

      const response = await axios.post(
        'https://binocule.azurewebsites.net/signup',
        details,
        { headers }
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
  setCateg: function(state, categ) {
    state.categ = categ
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
