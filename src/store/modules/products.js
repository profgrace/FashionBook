import api from "../../api";

// posted ads information
const actions = {
  // view ads detail
  async postedAdInformation({ rootState }, { bearerToken, status }) {
    const postedAdInfoResponse = await api.postedAdInfo(
      rootState.$appConfigLocal,
      { bearerToken, status }
    );
    return postedAdInfoResponse;
  }
};

export default {
  namespaced: true,
  actions
};
