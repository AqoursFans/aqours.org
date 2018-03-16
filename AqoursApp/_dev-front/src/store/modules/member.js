import member from '../../api/member'

/* initial state */
const state = {
  all: [],
  detail: false,
  edit: false
}

/* getters */
const getters = {
  allMember: state => state.all,
  isDetail: state => state.detail,
  isEdit: state => state.edit
}

/* actions */
const actions = {
  getAllMember ({ commit }) {
    member.getMember(member => {
      commit('setMember', member)
    })
  },
  toggleDetail ({ commit, state }, status) {
    commit('setDetail', status)
  },
  toggleEdit ({ commit, state }, status) {
    commit('setEdit', status)
  }
}

/* mutations */
const mutations = {
  setMember (state, member) {
    state.all = member
  },
  setDetail (state, status) {
    state.detail = status
  },
  setEdit (state, status) {
    state.edit = status
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
