<template>
  <v-app>
    <tool-bar></tool-bar>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import ToolBar from "./components/ToolBar.vue";
export default {
  name: "App",
  components: {
    ToolBar
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
