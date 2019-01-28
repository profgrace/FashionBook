<template>
  <v-toolbar app color="white">
    <v-toolbar-title class="primary--text logo">
      <router-link to="/">FashionBook</router-link>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn flat class="flat-button" to="/getstarted">
        <span>Hey there,</span>
        <i class="ml-1">get started</i>
      </v-btn>
      <v-btn color="secondary" class="secondary-button" to="postad">Post New Ad</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>
<style lang="scss" scoped>
.logo {
  font-family: "Nanum Brush Script", cursive;
  font-size: 40px;
  font-weight: 600;
  a {
    text-decoration: unset;
  }
}
.flat-button {
  font-size: 23px;
  text-transform: unset;
  span {
    font-family: "Nanum Brush Script", cursive;
  }
  i {
    color: black;
    font-size: 16px;
    font-weight: 600;
    text-decoration: underline;
  }
}
</style>
