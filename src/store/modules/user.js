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

  // edit merchant info service
  async updateVendorProfile(
    { rootState },
    { bearerToken, param, payload }
  ) {
    const updateVendorProfileResponse = await api.vendorProfileUpdate(
      rootState.$appConfig,
      { bearerToken, param, payload }
    );
    return updateVendorProfileResponse;
  },

  // edit merchant password
  async updateVendorPassword(
    { rootState },
    { bearerToken, param, payload }
  ) {
    const updateVendorPasswordResponse = await api.vendorPasswordChange(
      rootState.$appConfig,
      { bearerToken, param, payload }
    );
    return updateVendorPasswordResponse;
  },

  //get merchant profile
  async getMerchantInfo({ rootState }, { bearerToken, email }) {
    const getMerchantInfoResponse = await api.vendorInfo(
      rootState.$appConfig,
      { bearerToken, email }
    );
    return getMerchantInfoResponse;
  },

  //get merchant posted ads
  async getMerchantAds({ rootState }, { bearerToken, email }) {
    const getMerchantAdsResponse = await api.vendorProducts(
      rootState.$appConfig,
      { bearerToken, email }
    );
    return getMerchantAdsResponse;
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
