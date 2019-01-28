import Vue from "vue";
import Router from "vue-router";
import PostAd from "./views/PostAd.vue";

Vue.use(Router);

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/postad",
      name: "postad",
      component: PostAd
    }
  ]
});
