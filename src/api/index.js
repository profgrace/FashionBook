/**
 * backend service apis
 */
import axios from "axios";

export default {
  // Login
  loginUser(baseURL, payload) {
    return axios.post(`${baseURL}v1/login`, payload);
  },

  // Register User
  registerFashBookMerchant(baseURL, payload) {
    return axios.post(`${baseURL}v1/register`, payload);
  },

  //post new ad
  postNewAd(baseURL, payload) {
    return axios.post(`${baseURL}v1/product/free-post`, payload);
  },

  // get product info
  postedAdInfo(baseURL, { bearerToken, entryID }) {
    return axios.get(`${baseURL}v1/product/view-ads-detail/${entryID}`, {
      headers: { Authorization: bearerToken }
    });
  },

  // get list of products
  postedProductList(baseURL, { bearerToken, status, limit }) {
    return axios.get(
      `${baseURL}v1/product/all-ads?status=${status}&limit=${limit}`,
      {
        headers: { Authorization: bearerToken }
      }
    );
  }
};
