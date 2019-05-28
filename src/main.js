import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vuetify from "vuetify";
import "./registerServiceWorker";

Vue.config.productionTip = false;

Vue.use(Vuetify, {
  theme: {
    primary: "#D30069",
    secondary: "#035E6A",
    btncolor: "#DAC416",
    darkgrey: "#333333"
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
