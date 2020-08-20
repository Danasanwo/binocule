/* eslint-disable */
// import axios from 'axios'

const state = {
  employees: [],
}

const actions = {
  async validity({ commit }, valid) {
    const response = valid
    console.log(response)
    // commit('setEmployees', response.data)
  },
}

const mutations = {
  setEmployees: function(state, employees) {
    state.employees = employees
  },
}

const getters = {
  allEmployees: (state) => state.employees,
}

export default {
  state,
  getters,
  actions,
  mutations,
}
