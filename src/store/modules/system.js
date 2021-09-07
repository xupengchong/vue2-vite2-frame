const state = {
  opercode: null,
  token: 123
}

const getters = {
  opercode: (state) => state.opercode
}

const mutations = {
  SET_OPERCODE: (state, opercode) => {
    state.opercode = opercode
  },
  SET_TOKEN: (state, token) => {
    state.token = token
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations
}
