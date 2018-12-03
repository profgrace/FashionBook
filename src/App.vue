<template>
  <v-app>
    <v-toolbar class="white" app>
      <v-toolbar-title class="logo primary--text">
        <span>FashionBook</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-icon>menu</v-icon>
    </v-toolbar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      //
    };
  }
};
</script>
<style lang="scss">
@import "./scss/style.scss";
</style>
