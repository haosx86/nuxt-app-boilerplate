import axios from '~/plugins/axios'

const actions = {
  async nuxtServerInit({ commit, dispatch }) {
    commit('updateUsersList', await dispatch('getUsersList'))
  },
  async getUsersList() {
    // TODO: try catch
    return (await axios.get('/api/users/')).data
  },
  async triggerAnimation() {
    // TODO: implement nav animation
  }
}

export default actions
