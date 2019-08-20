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

  // get product likes
  async getProductLikes({ rootState }, { bearerToken, param }) {
    const productLikesResponse = await api.productLikes(
      rootState.$appConfig,
      { bearerToken, param }
    );
    return productLikesResponse;
  },

    // edit product info service
    async updateProductInfo(
      { rootState },
      { bearerToken, param, payload }
    ) {
      const updateProductInfoResponse = await api.editProduct(
        rootState.$appConfig,
        { bearerToken, param, payload }
      );
      return updateProductInfoResponse;
    },

    // like product
    async likeProduct(
      { rootState },
      { bearerToken, payload }
    ) {
      const updateProductInfoResponse = await api.likeAd(
        rootState.$appConfig,
        { bearerToken, payload }
      );
      return updateProductInfoResponse;
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
