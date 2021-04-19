import { createStore } from 'vuex'

const store = createStore({
  state: {
    count: 0
  },
  getters: {
    double: (state) => {
      return state.count * 2
    }
  },
  mutations: {
    increment: (state, payload) => {
      state.count = payload
    }
  },
  actions: {
    incrementAction: ({ commit }) => {
      commit('increment')
    }
  }
})

export default store
