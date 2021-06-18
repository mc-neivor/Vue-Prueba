import { createStore } from 'vuex'

export default createStore({
  state: {
    msg: 'Vuex desde Cero asd',
    nombre: "Joaquín",
    apellido: "Cardozo",
    amigos: ['Ana', 'Juan'],
    amigo: {},
  },
  mutations: {
    addAmigo(state) {
      state.amigos = [state.amigo, ...state.amigos]
    },
  },
  actions: {
    addAmigoAction({ commit }) {
      commit('addAmigo')
    }
  },
  modules: {
  },
  getters: {
    mensaje(state) {
      return state.msg
    },
    nombreCompleto(state) {
      return `${state.nombre} ${state.apellido}`
    }
  }
})
