<template>
  <v-app>
    <v-container grid-list-md class="post">
      <div class="title text-xs-center">Create New Ad</div>
      <v-form class="my-5">
        <v-layout row wrap>
          <v-flex xs12>
            <h3>Ad Details</h3>
          </v-flex>
          <v-flex xs6>
            <v-autocomplete box :items="categories" v-model="selectedCategory" label="Choose Category"></v-autocomplete>
          </v-flex>
          <v-flex xs6>
            <v-autocomplete box :items="subcategories" v-model="selectedSubCategory" label="Choose Subcategory"></v-autocomplete>
          </v-flex>
          <v-flex xs12>
            <v-text-field box label="Title" v-model="title"></v-text-field>
          </v-flex>
          <v-flex xs12>
            <v-textarea box label="Description" v-model="description"></v-textarea>
          </v-flex>
          <v-flex xs6>
            <v-text-field box label="Price" v-model="price"></v-text-field>
          </v-flex>
          <v-flex xs6>
            <v-checkbox label="Negotiable" v-model="isNegotiable" ></v-checkbox>
          </v-flex>
          <v-flex xs12>
            <v-divider></v-divider>
          </v-flex>
          <v-flex xs12 mt-4>
            <h3>Add Photos</h3>
          </v-flex>
          <v-flex xs2 class="photo first">
            <v-btn v-if="pic1Url == ''" @click="takePic1">
              <v-icon>photo_camera</v-icon>
            </v-btn>
            <input
              type="file"
              style="display:none"
              ref="productPic1"
              accept="image/*"
              @change="handleCompress"
              id="image1"
            >
            <div class="taken">
              <img class="picture" :src="pic1Url">
              <div v-if="pic1Url !== ''" class="retake">
                <v-icon @click="retake" id="retakeimage1">refresh</v-icon>
              </div>
            </div>
          </v-flex>
          <v-flex xs2 class="photo">
            <v-btn v-if="pic2Url == ''" @click="takePic2">
              <v-icon>photo_camera</v-icon>
            </v-btn>
            <input
              type="file"
              style="display:none"
              ref="productPic2"
              accept="image/*"
              @change="handleCompress"
              id="image2"
            >
            <div class="taken">
              <img class="picture" :src="pic2Url">
              <div v-if="pic2Url !== ''" class="retake">
                <v-icon @click="retake" id="retakeimage2">refresh</v-icon>
              </div>
            </div>
          </v-flex>
          <v-flex xs2 class="photo">
            <v-btn v-if="pic3Url == ''" @click="takePic3">
              <v-icon>photo_camera</v-icon>
            </v-btn>
            <input
              type="file"
              style="display:none"
              ref="productPic3"
              accept="image/*"
              @change="handleCompress"
              id="image3"
            >
            <div class="taken">
              <img class="picture" :src="pic3Url">
              <div v-if="pic3Url !== ''" class="retake">
                <v-icon @click="retake" id="retakeimage3">refresh</v-icon>
              </div>
            </div>
          </v-flex>
          <v-flex xs2 class="photo">
            <v-btn v-if="pic4Url == ''" @click="takePic4">
              <v-icon>photo_camera</v-icon>
            </v-btn>
            <input
              type="file"
              style="display:none"
              ref="productPic4"
              accept="image/*"
              @change="handleCompress"
              id="image4"
            >
            <div class="taken">
              <img class="picture" :src="pic4Url">
              <div v-if="pic4Url !== ''" class="retake">
                <v-icon @click="retake" id="retakeimage4">refresh</v-icon>
              </div>
            </div>
          </v-flex>
          <v-flex xs2 class="photo">
            <v-btn v-if="pic5Url == ''" @click="takePic5">
              <v-icon>photo_camera</v-icon>
            </v-btn>
            <input
              type="file"
              style="display:none"
              ref="productPic5"
              accept="image/*"
              @change="handleCompress"
              id="image5"
            >
            <div class="taken">
              <img class="picture" :src="pic5Url">
              <div v-if="pic5Url !== ''" class="retake">
                <v-icon @click="retake" id="retakeimage5">refresh</v-icon>
              </div>
            </div>
          </v-flex>
          <v-flex xs2 class="photo">
            <v-btn v-if="pic6Url == ''" @click="takePic6">
              <v-icon>photo_camera</v-icon>
            </v-btn>
            <input
              type="file"
              style="display:none"
              ref="productPic6"
              accept="image/*"
              @change="handleCompress"
              id="image6"
            >
            <div class="taken">
              <img class="picture" :src="pic6Url">
              <div v-if="pic6Url !== ''" class="retake">
                <v-icon @click="retake" id="retakeimage6">refresh</v-icon>
              </div>
            </div>
          </v-flex>
          <v-flex xs12>
            <p>*** First picture - is the title picture. You can change the order of photos: just grab your photos and drag</p>
          </v-flex>
          <v-flex xs12>
            <v-divider></v-divider>
          </v-flex>
          <v-flex xs12 mt-4>
            <h3>Contact Info</h3>
          </v-flex>
          <v-flex sm6 xs12>
            <v-text-field box label="Business / Personal Name" v-model="contactName"></v-text-field>
          </v-flex>
          <v-flex sm6 xs12>
            <v-text-field box label="Phone Number" v-model="phoneNumber"></v-text-field>
          </v-flex>
          <v-flex sm6 xs12>
            <v-autocomplete box :items="states" label="State" v-model="state"></v-autocomplete>
          </v-flex>
          <v-flex sm6 xs12>
            <v-autocomplete box :items="lgas" label="LGA" v-model="lga"></v-autocomplete>
          </v-flex>
        </v-layout>
        <v-layout row wrap justify-center>
          <v-flex xs4 class="more" my-4>
            <v-btn class="submit" :disabled="processingData" @click="postNewAd()" color="btncolor">{{signUpText}}</v-btn>
          </v-flex>
        </v-layout>
      </v-form>
    </v-container>
  </v-app>
</template>
<script>
import imageCompression from "browser-image-compression";
export default {
  data() {
    return {
      pic1Url: "",
      pic2Url: "",
      pic3Url: "",
      pic4Url: "",
      pic5Url: "",
      pic6Url: "",
      categories: ["Fashion", "Health"],
      subcategories: ["Fashion", "Health"],
      states: ["Lagos", "Ibadan"],
      lgas: ["Kosofe"],
      processingData: true,
      signUpText: "Post Ad"
    };
  },
  methods: {
    postNewAd() {

        let that = this;
        const loginData = {
        	category_id: this.selectedCategory.id,
        	sub_category: this.selectedSubCategory.id,
        	title: this.title,
        	description: this.description,
        	gender: "N/A",
        	type: "N/A",
        	colour: "N/A",
        	price: this.price,
        	phone: this.phoneNumber,
        	contact_name: this.contactName,
        	region: this.state,
        	place: this.lga,
        	isnogiatiable: this.isNegotiable,
        	merchant_id: this.merchantID,
        	seller_address: this.sellerAddress,
        	main_image: this.mainImage
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
                    this.signUpText = "Post Ad";
                    this.processingData = false;
                  } else {
                    this.signUpText = "Post Ad";
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
    takePic1() {
      this.$refs.productPic1.click();
    },
    takePic2() {
      this.$refs.productPic2.click();
    },
    takePic3() {
      this.$refs.productPic3.click();
    },
    takePic4() {
      this.$refs.productPic4.click();
    },
    takePic5() {
      this.$refs.productPic5.click();
    },
    takePic6() {
      this.$refs.productPic6.click();
    },
    retake(event) {
      if (event.target.id === "retakeimage1") {
        this.pic1Url = "";
      } else if (event.target.id === "retakeimage2") {
        this.pic2Url = "";
      } else if (event.target.id === "retakeimage3") {
        this.pic3Url = "";
      } else if (event.target.id === "retakeimage4") {
        this.pic4Url = "";
      } else if (event.target.id === "retakeimage5") {
        this.pic5Url = "";
      } else if (event.target.id === "retakeimage6") {
        this.pic6Url = "";
      }
    },
    handleCompress(event) {
      let imageFile = event.target.files[0];
      let maxSizeMB = 0.1;
      let maxWidthOrHeight = 600;
      let __this = this;
      imageCompression(imageFile, maxSizeMB, maxWidthOrHeight)
        .then(function(compressedFile) {
          const fileReader = new FileReader();
          fileReader.addEventListener("load", () => {
            if (event.target.id === "image1") {
              __this.pic1Url = fileReader.result;
            } else if (event.target.id === "image2") {
              __this.pic2Url = fileReader.result;
            } else if (event.target.id === "image3") {
              __this.pic3Url = fileReader.result;
            } else if (event.target.id === "image4") {
              __this.pic4Url = fileReader.result;
            } else if (event.target.id === "image5") {
              __this.pic5Url = fileReader.result;
            } else if (event.target.id === "image6") {
              __this.pic6Url = fileReader.result;
            }
          });
          fileReader.readAsDataURL(compressedFile);
        })
        .catch(function() {});
    }
  }
};
</script>
<style lang="scss" scoped>
.title {
  font-size: 50px !important;
  font-weight: 200;
  text-align: center;
}
form {
  background-color: white;
  border: 1px solid #adadad;
  border-radius: 10px;
  margin-top: 50px;
  padding: 50px;
  .subtitle {
    border-bottom: 1px solid #707070;
    display: inline-block;
    font-size: 20px;
    font-weight: 400;
    margin-bottom: 30px;
    padding-bottom: 3px;
  }
}
</style>
