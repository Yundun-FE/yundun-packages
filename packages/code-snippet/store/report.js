import Fetch from '@/api/fetch'

const state = {
  id: '',
  info: {}
}

const mutations = {
  SET_ID: (state, id) => {
    state.id = id
  },

  SET_INFO: (state, data) => {
    state.info = data
  }
}

const actions = {
  async fetchInfo({ commit, state }) {
    const data = await Fetch.get('', { id: state.id })
    commit('SET_INFO', data)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
