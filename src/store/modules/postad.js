import api from "../../api";

// post new ad service
const actions = {
  async postFreeAd({ rootState }, { bearerToken, entryID }) {
    const postFreeAdResponse = await api.postNewAd(rootState.$appConfig, {
      bearerToken,
      entryID
    });
    return postFreeAdResponse;
  },

  // get list of posted ads
  async getListOfProducts({ rootState }, { bearerToken, status, limit }) {
    const postedProductListResponse = await api.postedProductList(
      rootState.$appConfig,
      { bearerToken, status, limit }
    );
    return postedProductListResponse;
  }
};

export default {
  namespaced: true,
  actions
};
