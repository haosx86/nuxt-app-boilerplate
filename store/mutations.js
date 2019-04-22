import Vue from 'vue'

const mutations = {
  setUsersList(state, data) {
    Vue.set(state, 'usersList', data)
  },
}

export default mutations
