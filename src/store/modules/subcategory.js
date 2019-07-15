import api from "../../api";

// posted ads information
const actions = {
  //Queue for similar products under a sub-category
  async similarSubCategoryItems({ rootState }, { bearerToken, status, limit, id, sort }) {
    const similarSubCategoryItemsResponse = await api.subCategoryListOfProducts(
      rootState.$appConfig,
      { bearerToken, status, limit, id, sort }
    );
    return similarSubCategoryItemsResponse;
  }
};

export default {
  namespaced: true,
  actions
};
