import Vue from 'vue'
import Vuex from 'vuex'
// import tab from './tab'
Vue.use(Vuex)
const mutations = {
  clooapseMenu(state) {
    state.isCollapse = !state.isCollapse
  },
  LoginState(state) {
    state.isLogin = !state.isLogin
  }
}
const state = {
  isCollapse: false,
  isLogin: false
}
export default new Vuex.Store({
  mutations,
  state
})
