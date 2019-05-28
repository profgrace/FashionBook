import api from "../../api";

const state = {
  user: {
    token: ""
  }
};

const getters = {
  getDetails(newState) {
    return newState.user;
  }
};

const mutations = {
  updateDetails: (newstate, user) => {
    state.user = user;
    window.sessionStorage.setItem("UserDetails", JSON.stringify(user));
  }
};

const actions = {
  async login({ commit, rootState }, payload) {
    const userLoginResponse = await api.loginUser(
      rootState.$appConfig,
      payload
    );
    if (userLoginResponse.status === 200) {
      commit("updateDetails", userLoginResponse.data);
    }
    return userLoginResponse;
  },
  async registerMerchant({ rootState }, payload) {
    const registerMerchantResponse = await api.registerFashBookMerchant(
      rootState.$appConfig,
      payload
    );
    return registerMerchantResponse;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
