import member from '../../api/member'

/* initial state */
const state = {
  all: []
}

/* getters */
const getters = {
  allMember: state => state.all
}

/* actions */
const actions = {
  getAllMember ({ commit }) {
    member.getMember(member => {
      commit('setMember', member)
    })
  }
}

/* mutations */
const mutations = {
  setMember (state, member) {
    state.all = member
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
