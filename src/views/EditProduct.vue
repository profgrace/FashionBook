<template>
  <v-container grid-list-md class="post">
    <v-form class="my-3">
      <h2>Edit Product Details</h2>
      <v-layout row wrap>
        <v-flex xs12 v-if="updateErrorExist">
          <p class="errorClass">{{updateErrorText}}</p>
        </v-flex>
        <v-flex xs12>
          <v-text-field v-model="title" box label="Title" required></v-text-field>
        </v-flex>
        <v-flex xs12>
          <v-text-field v-model="colour" box label="Colour" required></v-text-field>
        </v-flex>
        <v-flex xs12>
          <v-text-field v-model="type" box label="Type" required></v-text-field>
        </v-flex>
        <v-flex xs12>
          <v-text-field :value="seller_address" v-model="seller_address" box label="Street Info" required></v-text-field>
        </v-flex>
        <v-flex xs12>
          <v-text-field v-model="business_name" box label="Business Name" required></v-text-field>
        </v-flex>
        <v-flex xs12>
          <v-text-field v-model="description" box label="Description" required></v-text-field>
        </v-flex>
        <v-flex xs12>
          <v-text-field v-model="price" box label="Price" v-mask="['########']" required></v-text-field>
        </v-flex>
        <v-flex xs12>
          <v-text-field v-model="contact" box label="Contact" required></v-text-field>
        </v-flex>
        <v-flex xs12>
          <v-text-field box label="Phone Number" v-model="phone"
            v-mask="['0### ### ####', '0# ### ####']"
            @keydown.native.space.prevent required
            ></v-text-field>
        </v-flex>
        <v-flex md6 xs12>
          
          <v-btn  :disabled="processingData || title == null || colour == null || type == null || seller_address == null || business_name == null || description == null || price == null || phone == null || contact == null" class="submit" color="btncolor" @click="update">{{updateButtonText}}</v-btn>
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
      postDetailID: this.$route.params.id,
      actionMsg: "",
      updateErrorText: "",
      currentLimit: 3,
      currentStatus: 1,
      updateErrorExist: false,
      actionDialog: false,
      processingData: false,
      updateButtonText: "Save Details",
      singleProductDetails: null,
        product_id: null,
        title : null,
        colour: null,
        type: null,
        seller_address: null,
        business_name: null,
        description: null,
        price: null,
        phone: null,
        contact: null,
        region: null,
        place: null
    };
  },
  mounted() {
    if(!this.$session.get("currentToken")) {
      this.$router.push({ path: "/" });
    } else {
      this.getSingleProductDetail(this.postDetailID, this.currentLimit, this.currentStatus);
    }
  },
  methods: {
    getSingleProductDetail(adID) {
      this.processingList = true;
      this.moreText = "Loading...";
      const that = this;
      this.$store
        .dispatch("singleproduct/getSingleProductDetail", {
          bearerToken: this.$session.get("currentToken"),
          adID: adID
        })
        .then(result => {
          that.singleProductDetails = result.data.data[0];
            that.title = that.singleProductDetails.title;
            that.colour = that.singleProductDetails.colour;
            that.type = that.singleProductDetails.type;
            that.seller_address = that.singleProductDetails.seller_address;
            that.business_name = that.singleProductDetails.business_name;
            that.description = that.singleProductDetails.description;
            that.price = that.singleProductDetails.price;
            that.phone = that.singleProductDetails.phone;
            that.contact = that.singleProductDetails.contact
        });
    },
    update: function(scope) {
      this.updateErrorExist = false;
        this.processingData = true;
        this.updateButtonText = "Processing...";
        let that = this;
        const updateData = {
            "product_id": this.postDetailID,
            "title" : this.title,
            "colour":this.colour,
            "type":this.type,
            "seller_address": this.seller_address,
            "business_name": this.business_name,
            "description": this.description,
            "price": this.price,
            "phone": this.phone,
            "contact": this.contact,
            "region": 25,
            "place": 510
        };
        this.$validator.validateAll(scope).then(result => {
          if (result) {
            this.$store.dispatch("products/updateProductInfo",
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
