<template>
  <v-app>
    <HomeSlider/>
    <v-container grid-list-xs pt-0>
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

export default {
  components: {
    HomeSlider,
    Search,
    Ad,
    Latest,
    CTA
  }
};
</script>
