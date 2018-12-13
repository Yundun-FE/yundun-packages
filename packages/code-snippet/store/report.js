const state = {
  utime: ''
}

const mutations = {
  SET_UTIME(state) {
    state.utime = Date.now()
  }
}

const actions = {
}

export default {
  state,
  mutations,
  actions
}
