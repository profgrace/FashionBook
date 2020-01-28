<template>

  <v-container grid-list-xs>
    <div class="getstarted post">
      <v-container grid-list-xs>
        <v-form
        @submit.prevent="registerMerchant('register')"
        data-vv-scope="register"
        v-if="register">
          <v-layout row wrap>
            <v-flex xs12>
              <h3>Sign up</h3>
            </v-flex>
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
            <v-flex md6 xs12>
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
            <v-flex md6 xs12>
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
              <v-text-field  box label="Phone (digits only)"
                type="text"
                v-model="regPhoneNumber"
                :error-messages="errors.collect('register.regPhoneNumber')"
                v-validate="'required'"
                data-vv-name="register.regPhoneNumber"
                data-vv-as="PhoneNumber"
                v-mask="['0### ### ####', '0# ### ####']"
                @keydown.native.space.prevent
                required
              ></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-checkbox v-model="agreeToTerms" >
                <template
                  slot="label"
                >By Registering, you agree that you’ve read and accepted our User Agreement, you’re at least 18 years old, and you consent to our Privacy Notice and receiving marketing communications from us.</template>
              </v-checkbox>
            </v-flex>
          </v-layout>
          <v-layout row wrap justify-center>
            <v-flex xs12 v-if="updateErrorExist">
              <p class="errorClass">{{updateErrorText}}</p>
            </v-flex>
            <v-flex xs12 class="more" my-4>
              <v-btn type="submit" :disabled="processingData || agreeToTerms == false || regEmail == '' || regFirstName == '' || regLastName == '' || regPhoneNumber == '' || regPassword == ''" class="submit" color="btncolor">{{ signUpText }}</v-btn>
            </v-flex>
            <v-flex xs12 class="text-xs-center">
              <v-btn flat @click="swapForm" class="text-none swapBtn">Already have an account? Log in</v-btn>
            </v-flex>
          </v-layout>
        </v-form>
        <v-form v-if="login" @submit.prevent="loginMerchant('login')">
          <v-layout row wrap>
            <v-flex xs12>
              <h3>Login here</h3>
            </v-flex>
            <v-flex xs12>
              <v-text-field box label="Email Address"
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
              <v-text-field box label="Password"
                type="password"
                v-model="password"
                :error-messages="errors.collect('login.password')"
                v-validate="'required'"
                data-vv-name="login.password"
                data-vv-as="Password"
                @keydown.native.space.prevent
                v-on:keyup.enter="loginMerchant"
                required
              ></v-text-field>
            </v-flex>
            <v-flex xs12 class="forgot">
              <a @click="forgot = true">Forgot Password?</a>
            </v-flex>
          </v-layout>
          <v-layout row wrap justify-center>
            <v-flex xs12 v-if="updateErrorExist">
              <p class="errorClass">{{updateErrorText}}</p>
            </v-flex>
            <v-flex xs12 class="more" my-4>
              <v-btn type="submit" class="submit" color="btncolor" :disabled="processingLogin || email == '' || password == ''">{{ loginText }}</v-btn>
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
        <v-dialog v-model="actionDialog" persistent width="500">
          <v-card>
            <v-card-title>
              <span class="headline">Congratulations! You're now a Fashion Book Merchant</span>
            </v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" outline @click="navigate">Proceed</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-container>
    </div>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      updateErrorExist: false,
      updateErrorText: "",
      actionDialog: false,
      forgot: false,
      agreeToTerms: false,
      email: "",
      password: "",
      emailAddress: "",
      login: false,
      register: true,
      processingData: false,
      processingLogin: false,
      validate: [],
      regEmail: "",
      regFirstName: "",
      regLastName: "",
      regPhoneNumber: "",
      regPassword: "",
      loginText: "Login",
      signUpText: "Sign Up"
    };
  },
  mounted() {
    if(this.$session.get("currentToken")) {
      this.$router.push({ path: "/vendorprofile" });
    }
  },
  methods: {
    gotoTerms() {
      this.$router.push({ path: "/terms" });
    },
    swapForm() {
      this.login = true;
      this.register = false;
    },
    swapFormRegister() {
      this.register = true;
      this.login = false;
    },
    navigate() {
      this.actionDialog = false;
      this.swapForm();
    },
    loginMerchant(scope) {
      let that = this;
      const loginData = {
        email: this.email,
        password: this.password
      };
      this.$validator.validateAll(scope).then(result => {
        if (result) {
          this.processingLogin = true;
          this.loginText = "Processing...";
          
          this.$store
            .dispatch("user/login", loginData)
            .then(result => {
              console.log("result: " + result);
              if (result.status === 200) {
                if (result.data.error) {
                  /* UI to show data is precessing will be here */
                  this.processingLogin = false;
                  this.loginText = "Login";
                } else {
                  that.currentToken = "Bearer " + result.data.token;
                  that.$session.set("currentToken", that.currentToken);
                  that.$session.set("userEmail", that.email);
                  window.location.assign(that.$appHome + "#/vendorprofile");
                  //that.$router.push({ path: "/vendorprofile" }); // to be changed later
                  that.processingLogin = false;
                  that.loginText = "Login";
                }
              } else {
                
                if(result.data.error === "invalid_credentials") {
                  /* UI to show data is precessing will be here */
                  this.processingLogin = false;
                  this.loginText = "Login";
                }

              } // else part to be included here later when some things are clearer
            })
            .catch(error => {
              this.updateErrorExist = true;
              this.updateErrorText = "Unable to login, Please check your password or username";
              this.processingLogin = false;
              this.loginText = "Login";
            });
            
            
        }
      });
    },
    registerMerchant(scope) {
      this.updateErrorExist = false;
      const loginData = {
        name: this.regFirstName + " " + this.regLastName,
        email: this.regEmail,
        firstname: this.regFirstName,
        lastname: this.regLastName,
        phoneNumber: this.regPhoneNumber,
        password: this.regPassword,
        password_confirmation: this.regPassword,
        role: "merchant"
      };
      this.$validator.validateAll(scope).then(result => {
        if (result) {
          this.processingData = true;
          this.signUpText = "Processing...";
          let that = this;
          this.$store
            .dispatch("user/registerMerchant", loginData)
            .then(result => {
              if (result.status === 201) {
                  that.regEmail = null;
                  that.regFirstName = null;
                  that.regLastName = null;
                  that.regPhoneNumber = null;
                  that.regPassword = null;
                  that.signUpText = "Sign Up";
                  that.processingData = false;
                  
                  that.actionDialog = true;
                  //that.$router.push({ path: "/" }); // to be changed later
              } else if (result.status === 400) {
                that.signUpText = "Sign Up";
                that.processingData = false;
              }
            })
            .catch(error => {
              this.updateErrorExist = true;
              this.updateErrorText = "Unable to complete registration... Email or phone may already exist in our database. Please try again";
              this.processingData = false;
              this.signUpText = "Sign Up";
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
.post form .swapBtn {
  font-weight: 700 !important;
  text-decoration: underline;
}

.termLink {
  color: aquamarine;
  cursor: pointer;
}

.errorClass {
    color: red;
    font-family: 'Times New Roman', Times, serif;
    font-style: italic;
    text-align: center;
  }


</style>
