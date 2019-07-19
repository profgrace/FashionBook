import api from "../../api";

// posted ads information
const actions = {
  // view ads detail
  async postedAdInformation({ rootState }, { bearerToken, status }) {
    const postedAdInfoResponse = await api.postedAdInfo(
      rootState.$appConfig,
      { bearerToken, status }
    );
    return postedAdInfoResponse;
  },

  //Queue for all products
  async allProductList({ rootState }, { bearerToken, status, limit }) {
    const allProductListResponse = await api.postedProductList(
      rootState.$appConfig,
      { bearerToken, status, limit }
    );
    return allProductListResponse;
  }
};

export default {
  namespaced: true,
  actions
};
