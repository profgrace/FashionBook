import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import PostAd from "./views/PostAd.vue";
import GetStarted from "./views/GetStarted.vue";

Vue.use(Router);

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/postad",
      name: "postad",
      component: PostAd
    },
    {
      path: "/getstarted",
      name: "getstarted",
      component: GetStarted
    }
  ]
});
