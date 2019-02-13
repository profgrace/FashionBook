/**
 * backend service apis
 */
import axios from "axios";

export default {
  // User Login
  loginUser(baseURL, payload) {
    return axios.post(`${baseURL}v1/login`, payload, {
      headers: { "Content-Type": "application/json" },
      withCredentials: false
    });
  },

  // Register User
  registerFashBookMerchant(baseURL, payload) {
    return axios.post(`${baseURL}v1/register`, payload, {
      headers: { "Content-Type": "application/json" },
      withCredentials: false
    });
  }
};
