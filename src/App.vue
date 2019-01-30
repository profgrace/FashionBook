<template>
  <v-app>
    <tool-bar></tool-bar>
    <v-content>
      <router-view></router-view>
    </v-content>
    <Footer/>
  </v-app>
</template>

<script>
import ToolBar from "./components/ToolBar.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "App",
  components: {
    ToolBar,
    Footer
  },
  data() {
    return {
      //
    };
  }
};
</script>
<style lang="scss">
@import "App.scss";
</style>
