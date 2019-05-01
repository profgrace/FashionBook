import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vuetify from "vuetify";
import VueTheMask from "vue-the-mask";
import "./registerServiceWorker";
import VeeValidate from "vee-validate";
import axios from "axios";
import VueAxios from "vue-axios";
import VueSession from "vue-session";
import IdleVue from "idle-vue";
// import Toastr
import VueToastr from "vue-toastr";

// Register plugin
Vue.use(VueToastr, {
  defaultPosition: "toast-top-center",
  defaultType: "success",
  defaultTimeout: 5000
});

const eventsHub = new Vue();
Vue.use(IdleVue, {
  eventEmitter: eventsHub,
  idleTime: 1800000
});

Vue.use(VueSession);

Vue.use(VueAxios, axios);

Vue.config.productionTip = false;

Vue.use(VeeValidate);
Vue.use(VueTheMask);
Vue.use(Vuetify, {
  theme: {
    primary: "#D30069",
    secondary: "#035E6A",
    btncolor: "#DAC416"
  }
});

Vue.prototype.$axios = axios;

// All configurations as strings

Vue.prototype.$appConfig = process.env.VUE_APP_BASE_URI;
Vue.prototype.$authConfig = {
  withCredentials: false
};

Vue.prototype.$sessionData = JSON.parse(
  sessionStorage.getItem("vue-session-key")
);

new Vue({
  router,
  store,
  render: h => h(App),
  onIdle() {
    this.$session.destroy();
    window.sessionStorage.clear();
    this.$router.push("/");
  }
}).$mount("#app");
