<template>

  <v-container grid-list-xs>
    <div class="getstarted post">
      <v-tabs fixed-tabs>
        <v-tab>Register</v-tab>
        <v-tab>Login</v-tab>
        <v-tab-item>
          <v-container grid-list-xs>
            <v-form
            class="form"
            @submit.prevent="register('register')"
            data-vv-scope="register"
            v-show="!forgot"
            >
              <v-layout row wrap>
                <v-flex xs12>
                  <v-text-field box label="Email Address"
                  type="text"
                  v-model="regEmail"
                  :error-messages="errors.collect('register.regEmail')"
                  v-validate="'required'"
                  data-vv-name="register.regEmail"
                  data-vv-as="RegEmail"
                  @keydown.native.space.prevent
                  required
                  ></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field box label="Password"
                  type="password"
                  v-model="regPassword"
                  :error-messages="errors.collect('register.regPassword')"
                  v-validate="'required'"
                  data-vv-name="register.regPassword"
                  data-vv-as="RegPassword"
                  @keydown.native.space.prevent
                  required
                  ></v-text-field>
                </v-flex>
                <v-flex xs6>
                  <v-text-field box label="First name"
                  type="text"
                  v-model="regFirstName"
                  :error-messages="errors.collect('register.regFirstName')"
                  v-validate="'required'"
                  data-vv-name="register.regFirstName"
                  data-vv-as="FirstName"
                  @keydown.native.space.prevent
                  required
                  ></v-text-field>
                </v-flex>
                <v-flex xs6>
                  <v-text-field box label="Last name (optional)"
                  type="text"
                  v-model="regLastName"
                  :error-messages="errors.collect('register.regLastName')"
                  v-validate="'required'"
                  data-vv-name="register.regLastName"
                  data-vv-as="LastName"
                  @keydown.native.space.prevent
                  required
                  ></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field box label="Phone (digits only)"
                  type="text"
                  v-model="regPhoneNumber"
                  :error-messages="errors.collect('register.regPhoneNumber')"
                  v-validate="'required'"
                  data-vv-name="register.regPhoneNumber"
                  data-vv-as="PhoneNumber"
                  @keydown.native.space.prevent
                  required
                  ></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-checkbox @click="checkAgreement">
                    <template
                      slot="label"
                    >By Registering, you agree that you’ve read and accepted our User Agreement, you’re at least 18 years old, and you consent to our Privacy Notice and receiving marketing communications from us.</template>
                  </v-checkbox>
                </v-flex>
              </v-layout>
              <v-layout row wrap justify-center>
                <v-flex xs12 class="more" my-4>
                  <v-btn :disabled="processingData" type="submit" class="submit" color="btncolor">{{ signUpText }}</v-btn>
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
                  <v-text-field
                  box
                  label="Email Address"
                  type="text"
                  v-model="email"
                  :error-messages="errors.collect('login.email')"
                  v-validate="'required'"
                  data-vv-name="login.email"
                  data-vv-as="Email"
                  @keydown.native.space.prevent
                  required
                  ></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field
                  box
                  label="Password"
                  type="password"
                  v-model="password"
                  :error-messages="errors.collect('login.password')"
                  v-validate="'required'"
                  data-vv-name="login.password"
                  data-vv-as="Password"
                  @keydown.native.space.prevent
                  v-on:keyup.enter="login"
                  required
                  ></v-text-field>
                </v-flex>
                <v-flex xs12 class="forgot">
                  <a @click="forgot = true">Forgot Password?</a>
                </v-flex>
              </v-layout>
              <v-layout row wrap justify-center>
                <v-flex xs12 class="more" my-4>
                  <v-btn type="submit" class="submit" color="btncolor" :disabled="processingData">{{ loginText }}</v-btn>
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
      agreeToTerms: false,
      email: "",
      password: "",
      url: this.$appConfig,
      processingData: false,
      validate: [],
      regEmail: "",
      regFirstName: "",
      regLastName: "",
      regPhoneNumber: "",
      regPassword: "",
      loginText: "Login",
      signUpText: "Sign Up",
    };
  },
  methods: {
    checkAgreement() {
      this.agreeToTerms = true;
    },
    login(scope) {
      let that = this;
      const loginData = {
        email: this.email,
        password: this.password
      };

      this.$validator.validateAll(scope).then(result => {
        if (result) {
          this.processingData = true;
          this.loginText = "Processing...";
          this.$store
            .dispatch("user/login", loginData)
            .then(result => {
              if (result.status === 200) {
                if (result.data.error) {
                  /* UI to show data is precessing will be here */
                  this.processingData = false;
                  this.loginText = "Login";
                } else {
                  that.currentToken = result.data.token;
                  that.$session.set("currentToken", that.currentToken);
                  that.$router.push({ path: "/" }); // to be changed later
                  this.processingData = false;
                  this.loginText = "Login";
                }
              } // else part to be included here later when some things are clearer
            })
            .catch(error => {
              if (error.status > 299) {
                that.processingData = false;
              }
            });
        }
      });
    },
    register(scope) {
      let that = this;
      const loginData = {
      	name: this.regFirstName + " " + this.regLastName,
      	email: this.regEmail,
      	password: this.regPassword,
      	password_confirmation: this.regPassword,
      	role: this.PhoneNumber
      };

      this.$validator.validateAll(scope).then(result => {
        if (result) {
          this.processingData = true;
          this.signUpText = "Processing..."
          this.$store
            .dispatch("user/registerMerchant", loginData)
            .then(result => {
              if (result.status === 200) {
                if (result.data.error) {
                  /* UI to show data is precessing will be here */
                  this.signUpText = "Sign Up";
                  this.processingData = false;
                } else {
                  this.signUpText = "Sign Up";
                  that.$router.push({ path: "/" }); // to be changed later
                  this.processingData = false;
                }
              } // else part to be included here later when some things are clearer
            })
            .catch(error => {
              if (error.status > 299) {
                that.processingData = false;
              }
            });
        }
      });
    },
    sendLink(scope) {
      this.$validator.validateAll(scope).then(result => {
        if (result) {
          this.processingData = true;
        }
      });
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
</style>
