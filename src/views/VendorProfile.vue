<template>
  <v-container grid-list-md class="post">
    <h2>Profile Details</h2>
    <v-form class="my-3">
      <v-layout row wrap>
        <v-flex xs12>
          <v-text-field v-model="businessName" box label="Business Name"></v-text-field>
        </v-flex>
        <v-flex xs12>
          <v-text-field v-model="firstName" box label="First Name"></v-text-field>
        </v-flex>
        <v-flex xs12>
          <v-text-field v-model="lastName" box label="Last Name"></v-text-field>
        </v-flex>
        <v-flex xs12>
          <v-text-field box label="Email Address"></v-text-field>
        </v-flex>
        <v-flex xs12>
          <v-text-field box label="Store Address"></v-text-field>
        </v-flex>
        <v-flex md6 xs12>
          <v-btn class="submit" color="btncolor">Save Personal Details</v-btn>
        </v-flex>
        <v-flex xs12 mt-5>
          <v-divider></v-divider>
        </v-flex>
        <v-flex xs12>
          <h4 class="subtitle">Change Password</h4>
        </v-flex>
        <v-flex xs12>
          <v-text-field type="password" box label="Current Password"></v-text-field>
        </v-flex>
        <v-flex xs12>
          <v-text-field type="password" box label="New Password"></v-text-field>
        </v-flex>
        <v-flex xs12>
          <v-text-field type="password" box label="Confirm Password"></v-text-field>
        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <v-flex md6 xs12>
          <v-btn class="submit" color="btncolor">Save Password</v-btn>
        </v-flex>
      </v-layout>
    </v-form>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      businessName: "",
      firstName: "",
      lastName: ""
    };
  }
};
</script>
<style lang="scss" scoped>
h2 {
  font-size: 30px;
  font-weight: 400;
}
.title {
  font-size: 50px !important;
  font-weight: 200;
  text-align: center;
}
.post {
  width: 600px;
  @media (max-width: 420px) {
    max-width: 100%;
  }
}
form {
  background-color: white;
  border: 1px solid #adadad;
  border-radius: 10px;
  margin: 0 auto;
  padding: 50px;
  @media (max-width: 420px) {
    margin-top: 20px !important;
    padding: 30px 20px;
  }
  .subtitle {
    font-size: 14px;
    font-weight: 700;
  }
}
</style>
