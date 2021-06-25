import { createStore } from 'vuex'

export default createStore({
  state: {
    page: 'Registrar visitar',
    progress: 0,
    user: {}
  },
  mutations: {
    setPage(state, payload) {
      state.page = payload.page
      state.progress = payload.progress
    },
    setUser(state, payload) {
      state.user = {
        payload
      }
    },
  },
  actions: {
    setPageAction({ commit }, payload) {
      commit('setPage', payload)
    },
  },
  modules: {
  },
  getters: {
    page(state) {
      return state.page
    },
    progress(state) {
      return state.progress
    }
  }
})
