import Vue from "vue";
import Vuetify from "vuetify";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";

Vue.config.productionTip = false;

Vue.use(Vuetify, {
  theme: {
    primary: "#D30069",
    secondary: "#077786",
    btnColor: "#DAC416",
    offWhite: "#fcfffa"
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
