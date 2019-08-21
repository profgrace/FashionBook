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

  // Edit merchant info
  editMerchantInfo(baseURL, payload, param) {
    return axios.put(`${baseURL}v1/update/${param}`, payload);
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

  // get vendor profile info
  vendorInfo(baseURL, { bearerToken, email }) {
    return axios.get(`${baseURL}v1/product/merchant_profile/${email}`, {
      headers: { Authorization: bearerToken }
    });
  },

  // get vendor ads
  vendorProducts(baseURL, { bearerToken, email }) {
    return axios.get(`${baseURL}v1/product/merchant/${email}`, {
      headers: { Authorization: bearerToken }
    });
  },

  // get product likes
  productLikes(baseURL, { bearerToken, param }) {
    return axios.get(`${baseURL}v1/merchant/like_product/${param}`, {
      headers: { Authorization: bearerToken }
    });
  },

  //update vendor profile
  vendorProfileUpdate(baseURL, { bearerToken, param, payload }) {
    return axios.put(`${baseURL}v1/product/update/${param}`, payload, {
      headers: { Authorization: bearerToken }
    });
  },

  //update product detail
  editProduct(baseURL, { bearerToken, param, payload }) {
    return axios.put(`${baseURL}v1/product/merchant/update_ads/${param}`, payload, {
      headers: { Authorization: bearerToken }
    });
  },

  //like product
  likeAd(baseURL, { bearerToken, payload }) {
    return axios.post(`${baseURL}v1/customer/like_product`, payload, {
      headers: { Authorization: bearerToken }
    });
  },

  //update vendor password
  vendorPasswordChange(baseURL, { bearerToken, param, payload }) {
    return axios.post(`${baseURL}v1/product/changePassword/${param}`, payload, {
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
  },

  // get search results
  searchProduct(baseURL, { bearerToken, title, page }) {
    return axios.get(
      `${baseURL}v1/product/search?title=${title}&page=${page}`,
      {
        headers: { Authorization: bearerToken }
      }
    );
  },

  // get ad details
  singleProductDetails(baseURL, { bearerToken, adID, status, limit }) {
    return axios.get(
      `${baseURL}v1/product/view-ads-detail/${adID}?status=${status}&limit=${limit}`,
      {
        headers: { Authorization: bearerToken }
      }
    );
  },

  // subcategory list of products
  subCategoryListOfProducts(baseURL, { bearerToken, status, limit, id, sort }) {
    return axios.get(
      `${baseURL}v1/product/ads-similar-item-list/${id}?status=${status}&limit=${limit}&sort=${sort}`,
      {
        headers: { Authorization: bearerToken }
      }
    );
  }
};
