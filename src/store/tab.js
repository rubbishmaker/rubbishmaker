export default {
  state: {
    isCollapse: false,
    isLogin: false
  },
  mutations: {
    clooapseMenu(state) {
      state.isCollapse = !state.isCollapse
    },
    LoginState(state) {
      state.isLogin = !state.isLogin
    }
  }
}