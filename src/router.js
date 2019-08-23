import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import SubCategory from "./views/SubCategory.vue";
import SingleProduct from "./views/SingleProduct.vue";
import EditProduct from "./views/EditProduct.vue";
import PostAd from "./views/PostAd.vue";
import GetStarted from "./views/GetStarted.vue";
import ProductList from "./views/VendorProducts.vue";
import AddProducts from "./views/AddProducts.vue";
import VendorProfile from "./views/VendorProfile.vue";
import Terms from "./views/Terms.vue";

Vue.use(Router);

export default new Router({
  //mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/terms",
      name: "terms",
      component: Terms
    },
    {
      path: "/subcategory/:id",
      name: "subcategory",
      component: SubCategory
    },
    {
      path: "/single/:id",
      name: "single",
      component: SingleProduct
    },
    {
      path: "/edit/:id",
      name: "edit",
      component: EditProduct
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
    },
    {
      path: "/addproducts",
      name: "addproducts",
      component: AddProducts
    },
    {
      path: "/vendorprofile",
      name: "vendorprofile",
      component: VendorProfile
    },
    {
      path: "/productlist",
      name: "productlist",
      component: ProductList
    }
  ]
});
