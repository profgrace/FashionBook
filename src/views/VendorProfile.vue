<template>
  <v-container grid-list-md class="post">
    <v-layout row wrap v-if="toggle == 0">
      <v-flex xs12 mt-5>
              <div class="title">Profile Detail</div><br><br>
              <p>
                Business Name:
                <b>{{businessName}}</b>
              </p>
              <p>
                Email:
                <b>{{businessEmail}}</b>
              </p>
              <p>
                Phone:
                <b>{{businessPhone}}</b>
              </p>
              <p>
                Role:
                <b>{{businessRole}}</b>
              </p>
              <p>
                Date Registered:
                <b>{{businessRegDate}} </b>
              </p>
              <p class="edit-profile"><a href="javascript:void(0)" @click="switchView()">{{viewText}}</a> | <a href="javascript:void(0)" @click="productList()">Products</a></p>
              
            </v-flex>
    </v-layout>
    
    <v-form class="my-3" v-if="toggle == 1">
      <p class="edit-profile"><a href="javascript:void(0)" @click="switchView()">{{viewText}}</a> </p>
      <h2>Edit Profile Details</h2>
      
      <v-layout row wrap>
        <v-flex xs12 v-if="updateErrorExist">
          <p class="errorClass">{{updateErrorText}}</p>
        </v-flex>
        <v-flex xs12>
          <v-text-field v-model="firstName" box label="First Name" required></v-text-field>
        </v-flex>
        <v-flex xs12>
          <v-text-field v-model="lastName" box label="Last Name" required></v-text-field>
        </v-flex>
        <v-flex xs12>
          <v-text-field box label="Phone Number" v-model="phoneNumber"
            v-mask="['0### ### ####', '0# ### ####']"
            @keydown.native.space.prevent required
            ></v-text-field>
        </v-flex>
        <v-flex md6 xs12>
          <v-btn :disabled="processingData" class="submit" color="btncolor" @click="update">{{updateButtonText}}</v-btn>
        </v-flex>
        <v-flex xs12 mt-5>
          <v-divider></v-divider>
        </v-flex>
        <v-flex xs12>
          <h4 class="subtitle">Change Password</h4>
        </v-flex>
        <v-flex xs12 v-if="errorExist">
          <p class="errorClass">{{errorText}}</p>
        </v-flex>
        <v-flex xs12>
          <v-text-field type="password" v-model="oldPassword" box label="Current Password"></v-text-field>
        </v-flex>
        <v-flex xs12>
          <v-text-field type="password" v-model="newPassword" box label="New Password"></v-text-field>
        </v-flex>
        <v-flex xs12>
          <v-text-field type="password" v-model="confirmPassword" box label="Confirm Password"></v-text-field>
        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <v-flex md6 xs12>
          <v-btn class="submit" :disabled="processingData" color="btncolor" @click="updatePassword">{{changePasswordBtnText}}</v-btn>
          
        </v-flex>
      </v-layout>
    </v-form>
    <v-dialog v-model="actionDialog" persistent width="500">
        <v-card>
          <v-card-title>
            <span class="headline">{{actionMsg}}</span>
          </v-card-title>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" outline @click="actionDialog = false">Okay</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      viewText: "Edit Profile",
      businessName: "",
      businessPhone: "",
      businessRegDate: "",
      businessEmail: "",
      businessRole: "",
      phoneNumber: "",
      firstName: "",
      lastName: "",
      actionMsg: "",
      errorText: "",
      errorExist: false,
      updateErrorText: "",
      updateErrorExist: false,
      actionDialog: false,
      processingData: false,
      updateButtonText: "Save Details",
      changePasswordBtnText: "Update Password",
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
      toggle: 0
    };
  },
  mounted() {
    if(!this.$session.get("currentToken")) {
      this.$router.push({ path: "/" });
    } else {
      this.getMerchantInfo();
    }
  },
  methods: {
    switchView() {
      if(this.viewText == "Edit Profile") {
        this.toggle = 1;
        this.viewText = "View Profile";
      } else {
        this.toggle = 0;
        this.viewText = "Edit Profile";
      }
    },
    productList() {
      this.$router.push({ path: "/productlist" });
    },
    update: function(scope) {
      if(this.firstName === "" || this.lastName === "" || this.phoneNumber == "") {
        this.updateErrorText = "please fill all fields";
        this.updateErrorExist = true;
      } else {
        this.updateErrorExist = false;
        this.processingData = true;
        this.updateButtonText = "Processing...";
        let that = this;
        const updateData = {
          "firstname": this.firstName,
          "lastname": this.lastName,
          "phoneNumber": this.phoneNumber
        };
        this.$validator.validateAll(scope).then(result => {
          if (result) {
            this.$store.dispatch("user/updateVendorProfile",
            {
              bearerToken: this.$session.get("currentToken"),
              param: this.$session.get("userEmail"),
              payload: updateData
            }
          )
          .then(result => {
            if(result.status == 200) {
              if (result.data.success == true) {
                that.updateButtonText = "Save Details";
                that.processingData = false;
                that.actionMsg = result.data.message;
                that.actionDialog = true;
              } else {
                that.updateButtonText = "Save Details";
                that.processingData = false;
                that.actionMsg = result.data.message;
                that.actionDialog = true;
              }
            } else {
              that.actionMsg = "Error processing request";
                that.actionDialog = true;
            }
              
            });
          }
        });
      }
      
    },
    getMerchantInfo() {
      const that = this;
      this.$store
        .dispatch("user/getMerchantInfo", {
          bearerToken: this.$session.get("currentToken"),
          email: this.$session.get("userEmail")
        })
        .then(result => {
          that.businessName = result.data.data.name;
          that.businessPhone = result.data.data.phone,
          that.businessEmail = result.data.data.email;
          that.businessRole = result.data.data.role;
          that.businessRegDate = result.data.data.created_at;
        });
    },
    updatePassword: function(scope) {
      if(this.newPassword === "" || this.oldPassword === "") {
        this.errorText = "please fill all fields";
        this.errorExist = true;
      } else if(this.newPassword !== this.confirmPassword) {
        this.errorText = "Password mismatch!";
        this.errorExist = true;
      } else {
        this.errorExist = false;
        this.processingData = true;
        this.changePasswordBtnText = "Processing...";
        let that = this;
        const updateData = {
          "oldPassword": this.oldPassword,
          "newPassword": this.newPassword
        };
        this.$validator.validateAll(scope).then(result => {
          if (result) {
            this.$store.dispatch("user/updateVendorPassword",
            {
              bearerToken: this.$session.get("currentToken"),
              param: this.$session.get("userEmail"),
              payload: updateData
            },
          )
          .then(result => {
            if (result.data.success == true) {
                that.changePasswordBtnText = "Update Password";
                that.processingData = false;
                that.actionMsg = result.data.message;
                that.actionDialog = true;
              } else {
                that.changePasswordBtnText = "Update Password";
                that.processingData = false;
                that.actionMsg = result.data.message;
                that.actionDialog = true;
              }
              
            });
          }
        });
      } 
      
    }
  },
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
  .errorClass {
    color: red;
    font-family: 'Times New Roman', Times, serif;
    font-style: italic;
    text-align: center;
  }

  .edit-profile a {
    text-decoration: none;
    color: darkcyan;
    float: right;
  }

  .edit-profile a:hover {
    color:cadetblue
  }
}
</style>
