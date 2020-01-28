import Vue from "vue";
import Vuex from "vuex";
import VueAxios from "vue-axios";
import axios from "axios";
import VueSession from "vue-session";
import user from "./store/modules/user";
import postad from "./store/modules/postad";
import products from "./store/modules/products";
import subcategory from "./store/modules/subcategory";
import singleproduct from "./store/modules/singleproduct";

Vue.use(VueSession);
Vue.use(Vuex);
Vue.use(VueAxios, axios);

export default new Vuex.Store({
  modules: {
    user,
    postad,
    products,
    subcategory,
    singleproduct
  },

  state: {
    $appConfig: process.env.VUE_APP_BASE_URI,
    states: [],
    lgas: [],
    categories: [],
    subCategories: []
  },
  actions: {
    getStates({ commit }) {
      let states = [];
      axios
        .get(this.state.$appConfig + "v1/state")
        .then(response => response.data.data)
        .then(response => {
          for (let i = 0; i < response.length; i++) {
            states.push({
              text: response[i].states,
              value: response[i].id + "-" + response[i].states
            });
          }
        });
      commit("SET_STATES", states);
    },
    getLGAs({ commit }, { state }) {
      let lgas = [];
      let stateParts = state.split("-");
      let stateNumber = stateParts[0];
      axios
        .get(this.state.$appConfig + "v1/state/" + stateNumber)
        .then(response => response.data.data)
        .then(response => {
          for (let i = 0; i < response.length; i++) {
            lgas.push({
              text: response[i].lga_name,
              value: response[i].lga_id,
              stateid: response[i].state_id
            });
          }
        });
      commit("SET_LGAS", lgas);
    },
    getCategories({ commit }) {
      let categories = [];
      axios
        .get(this.state.$appConfig + "v1/product/category")
        .then(response => response.data.data)
        .then(response => {
          for (let i = 0; i < response.length; i++) {
            categories.push({
              text: response[i].category_name,
              value: response[i].id + "-" + response[i].category_name
            });
          }
        });
      commit("SET_CATEGORIES", categories);
    },
    getSubcategories({ commit }, { state }) {
      let subCategories = [];

      let categoryParts = state.split("-");
      let categoryNumber = categoryParts[0];
      axios
        .get(this.state.$appConfig + "v1/product/category/" + categoryNumber)
        .then(response => response.data.data)
        .then(response => {
          for (let i = 0; i < response.length; i++) {
            subCategories.push({
              text: response[i].product_cat_name,
              value: response[i].product_sub_category,
              categoryID: response[i].product_cat_id
            });
          }
        });
      commit("SET_SUBCATEGORIES", subCategories);
    }
  },

  mutations: {
    SET_STATES(state, states) {
      state.states = states;
    },
    SET_LGAS(state, lgas) {
      state.lgas = lgas;
    },
    SET_CATEGORIES(state, categories) {
      state.categories = categories;
    },
    SET_SUBCATEGORIES(state, subCategories) {
      state.subCategories = subCategories;
    }
  },
  getters: {
    stateLists(state) {
      return state.states;
    },
    lgaLists(state) {
      return state.lgas;
    },
    categoryLists(state) {
      return state.categories;
    },
    subCategoryLists(state) {
      return state.subCategories;
    }
  }
});
