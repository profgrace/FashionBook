<template>
  <v-container grid-list-xs>
    <div class="getstarted post">
      <v-tabs fixed-tabs>
        <v-tab>Register</v-tab>
        <v-tab>Login</v-tab>
        <v-tab-item>
          <v-container grid-list-xs>
            <v-form>
              <v-layout row wrap>
                <v-flex xs12>
                  <v-text-field box label="Email Address"></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field box label="Password"></v-text-field>
                </v-flex>
                <v-flex xs6>
                  <v-text-field box label="First name"></v-text-field>
                </v-flex>
                <v-flex xs6>
                  <v-text-field box label="Last name (optional)"></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field box label="Phone (digits only)"></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-checkbox>
                    <template
                      slot="label"
                    >By Registering, you agree that you’ve read and accepted our User Agreement, you’re at least 18 years old, and you consent to our Privacy Notice and receiving marketing communications from us.</template>
                  </v-checkbox>
                </v-flex>
              </v-layout>
              <v-layout row wrap justify-center>
                <v-flex xs12 class="more" my-4>
                  <v-btn class="submit" color="btncolor">Sign Up</v-btn>
                </v-flex>
              </v-layout>
            </v-form>
          </v-container>
        </v-tab-item>
        <v-tab-item>
          <v-container grid-list-xs>
            <v-form @submit.prevent="login('login')" v-if="!forgot">
              <v-layout row wrap>
                <v-flex xs12>
                  <v-text-field box label="Email Address"></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field box label="Password"></v-text-field>
                </v-flex>
                <v-flex xs12 class="forgot">
                  <a @click="forgot = true">Forgot Password?</a>
                </v-flex>
              </v-layout>
              <v-layout row wrap justify-center>
                <v-flex xs12 class="more" my-4>
                  <v-btn class="submit" color="btncolor">Log in</v-btn>
                </v-flex>
              </v-layout>
            </v-form>
            <v-form v-if="forgot" @submit.prevent="sendLink('forgot')" data-vv-scope="forgot">
              <v-layout row wrap>
                <p>Account Recovery</p>
                <v-flex xs12>
                  <v-text-field
                    outline
                    label="Email Address"
                    type="text"
                    v-model="emailAddress"
                    required
                  ></v-text-field>
                  <span class="forgot">
                    <a @click="forgot = false">I remember my password now</a>
                  </span>
                </v-flex>
                <v-flex xs12 mt-4>
                  <v-btn type="submit" color="btncolor submit">Send Reset Link</v-btn>
                </v-flex>
              </v-layout>
            </v-form>
          </v-container>
        </v-tab-item>
      </v-tabs>
    </div>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      forgot: false,
      email: "",
      password: "",
      emailAddress: ""
    };
  }
};
</script>
<style lang="scss">
.forgot {
  a {
    text-decoration: underline;
  }
}
</style>
