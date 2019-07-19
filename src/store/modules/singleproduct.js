import api from "../../api";

// posted ads information
const actions = {
  //Queue for similar products under a sub-category
  async getSingleProductDetail({ rootState }, { bearerToken, adID, status, limit }) {
    const singleProductDetailsResponse = await api.singleProductDetails(
      rootState.$appConfig,
      { bearerToken, adID, status, limit }
    );
    return singleProductDetailsResponse;
  }
};

export default {
  namespaced: true,
  actions
};
