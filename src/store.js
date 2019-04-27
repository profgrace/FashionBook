import Vue from "vue";
import Vuex from "vuex";
import VueAxios from "vue-axios";
import axios from "axios";
import user from "./store/modules/user";
import postad from "./store/modules/postad";
import products from "./store/modules/products";

Vue.use(Vuex);
Vue.use(VueAxios, axios);

export default new Vuex.Store({
  modules: {
    user,
    postad,
    products
  },

  state: {
    $appConfig: process.env.VUE_APP_BASE_URI,
    $noCredentials: {
      withCredentials: false
    }
  }
});
