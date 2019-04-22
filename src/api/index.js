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
  }
};
