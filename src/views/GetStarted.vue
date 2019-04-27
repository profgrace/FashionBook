<template>

  <v-container grid-list-xs>
    <div class="getstarted post">
      <v-container grid-list-xs>
        <v-form v-if="register">
          <v-layout row wrap>
            <v-flex xs12>
              <h3>Sign up</h3>
            </v-flex>
            <v-flex xs12>
              <v-text-field box label="Email Address"></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field box label="Password"></v-text-field>
            </v-flex>
            <v-flex md6 xs12>
              <v-text-field box label="First name"></v-text-field>
            </v-flex>
            <v-flex md6 xs12>
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
            <v-flex xs12 class="text-xs-center">
              <v-btn flat @click="swapForm" class="text-none swapBtn">Already have an account? Log in</v-btn>
            </v-flex>
          </v-layout>
        </v-form>
        <v-form v-if="login" @submit.prevent="login('login')">
          <v-layout row wrap>
            <v-flex xs12>
              <h3>Login here</h3>
            </v-flex>
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
            <v-flex xs12 class="text-xs-center">
              <v-btn flat @click="swapFormRegister" class="text-none swapBtn">Don't have an account yet? Sign up</v-btn>
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
    </div>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      forgot: false,
      agreeToTerms: false,
      email: "",
      password: "",
      emailAddress: "",
      login: false,
      register: true
    };
  },
  methods: {
    swapForm() {
      this.login = true;
      this.register = false;
    },
    swapFormRegister() {
      this.register = true;
      this.login = false;
    }
  }
};
</script>
<style lang="scss">
.forgot {
  a {
    text-decoration: underline;
  }
}
.post form .swapBtn {
  font-weight: 700 !important;
  text-decoration: underline;
}
</style>
