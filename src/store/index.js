import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    mockAccount: undefined,
    isLoggedIn: false,
    favoritePage: null
  },
  mutations: {
    setAccount(state, account) {
      state.mockAccount = account;
    },
    setLogin(state, status) {
      state.isLoggedIn = status;
    },
    revokeLogin(state) {
      state.isLoggedIn = false;
    },
    setFavorite(state, favorite) {
      state.favoritePage = favorite;
    }
  },
  actions: {},
  getters: {},
  modules: {}
});
