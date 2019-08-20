<template>
  <footer class="white text-xs-center pa-4">
    <p class="mb-0">Copyright © 2019 Fashion Book. All Rights Reserved. <a href="javascript:void(0)" @click="logoutUser">{{logoutText}}</a></p>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      logoutText: ""
    };
  },

  methods: {
    logoutUser() {
      this.$session.destroy();
      window.location.assign(this.$appHome);
    }
  },

  mounted() {
    console.log(this.$appHome);
    if(this.$session.get("userEmail")) {
      this.logoutText = "Logout"
    }
  }
}
</script>

<style lang="scss" scoped>

  a {
    text-decoration: none;
    color: darkcyan
  }

  a:hover {
    color:cadetblue
  }
</style>