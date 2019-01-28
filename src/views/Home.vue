<template>
  <v-app>
    <HomeSlider/>
    <v-container grid-list-xs>
      <Search/>
      <Ad/>
      <Latest/>
      <CTA/>
    </v-container>
    <Footer/>
  </v-app>
</template>

<script>
import HomeSlider from "../components/HomeSlider";
import Search from "../components/Search";
import Ad from "../components/Ad";
import Latest from "../components/LatestCollections";
import CTA from "../components/CallToAction";
import Footer from "../components/Footer";

export default {
  components: {
    HomeSlider,
    Search,
    Ad,
    Latest,
    CTA,
    Footer
  }
};
</script>
