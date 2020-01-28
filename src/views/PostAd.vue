<template>
  <v-app>
    <v-container grid-list-md class="post">
      <div class="title text-xs-center">Create New Ad</div>
      <v-form class="my-5">
        <v-layout row wrap>
          <v-flex xs12>
            <h3>Ad Details</h3>
          </v-flex>
          <v-flex xs12 md6>
            <v-autocomplete box :items="categories" v-model="selectedCategory"
              @input="fetchSubCategories"
             label="Choose Category"></v-autocomplete>
          </v-flex>
          <v-flex xs12 md6>
            <v-autocomplete box :items="subCategories" label="Choose sub category"
            :disabled="selectedCategory < 1 "
            v-model="selectedSubCategory"></v-autocomplete>
          </v-flex>
          <v-flex xs12 md6>
            <v-text-field box label="Title" v-model="title"></v-text-field>
          </v-flex>
          <v-flex xs12 md6>
            <v-textarea box label="Description" v-model="description"></v-textarea>
          </v-flex>
          <v-flex xs12 md6>
            <v-text-field box label="Colour" v-model="colour"></v-text-field>
          </v-flex>
          <v-flex xs12 md6>
            <v-text-field box label="Type" v-model="type"></v-text-field>
          </v-flex>
          <v-flex xs12 md6>
            <v-text-field box label="Price" v-model="price"
            v-mask="['########']"
            @keydown.native.space.prevent
            ></v-text-field>
          </v-flex>
          <v-flex xsxs12 md66>
            <v-checkbox label="Negotiable" v-model="isNegotiable"></v-checkbox>
          </v-flex>
          <v-flex xs12>
            <v-divider></v-divider>
          </v-flex>
          <v-flex xs12 mt-4>
            <h3>Add Photos</h3>
          </v-flex>
          <v-flex xs6 md2 class="photo first">
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
          <v-flex xs6 md2 class="photo">
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
          <v-flex xs6 md2 class="photo">
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
          <v-flex xs6 md2 class="photo">
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
          <v-flex xs6 md2 class="photo">
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
          <v-flex xs6 md2 class="photo">
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
            <v-text-field box label="Business / Personal Name" v-model="businessName"></v-text-field>
          </v-flex>
          <v-flex sm6 xs12 v-if="notLoggedIn">
            <v-text-field box label="Email Address" v-model="e_Mail"
            :rules="emailRules"
            ></v-text-field>
          </v-flex>
          <v-flex sm6 xs12>
            <v-autocomplete box :items="states" label="State"
            v-model="state"
            :error-messages="errors.collect('state')"
            @input="fetchLGAs"
            data-vv-name="state"
            data-vv-as="State"
            ></v-autocomplete>
          </v-flex>
          <v-flex sm6 xs12>
            <v-autocomplete box :items="lgas" label="LGA"
            v-model="lga"
            :error-messages="errors.collect('lga')"
            v-validate="'required'"
            :disabled="state < 1 "
            data-vv-name="lga"
            data-vv-as="LGA"
            ></v-autocomplete>
          </v-flex>
          <v-flex sm6 xs12>
            <v-text-field box label="Street Info" v-model="sellerAddress"
            
            ></v-text-field>
          </v-flex>
          <v-flex sm6 xs12>
            <v-text-field box label="Phone Number" v-model="phoneNumber"
            v-mask="['0### ### ####', '0# ### ####']"
            @keydown.native.space.prevent
            ></v-text-field>
          </v-flex>
        </v-layout>
        <v-layout row wrap justify-center>
          <v-flex xs12 v-if="updateErrorExist">
            <p class="errorClass">{{updateErrorText}}</p>
          </v-flex>
          <v-flex xs4 class="more" my-4>
            <v-btn class="submit" @click="postNewAd('postad')" :disabled="processingData" color="btncolor">{{postAdButtonText}}</v-btn>
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
  </v-app>
</template>
<script>
import { mapState, mapGetters, mapActions } from "vuex";
import imageCompression from "browser-image-compression";
import { NO_IMAGE_BASE64_STRING } from '../constants/settings';
export default {
  data() {
    return {
      pic1Url: "",
      pic2Url: "",
      pic3Url: "",
      pic4Url: "",
      pic5Url: "",
      pic6Url: "",
      e_Mail: this.$session.get("userEmail") || "",
      notLoggedIn: true,
      emailRules:[],
      updateErrorExist: false,
      otherAdImagesArray: [],
      image_1: NO_IMAGE_BASE64_STRING,
      image_2: NO_IMAGE_BASE64_STRING,
      image_3: NO_IMAGE_BASE64_STRING,
      image_4: NO_IMAGE_BASE64_STRING,
      image_5: NO_IMAGE_BASE64_STRING,
      image_6: NO_IMAGE_BASE64_STRING,
      lga: "",
      state: "",
      fields_not_filled: true,
      actionDialog: false,
      processingData: false,
      postAdButtonText: "Post Ad",
      selectedCategory: null,
      selectedSubCategory: null,
      title: null,
      description: null,
      gender: "N/A",
      type: null,
      colour: null,
      price: null,
      phoneNumber: null,
      contactName: null,
      updateErrorText: "",
      isNegotiable: false,
      merchantID: null,
      sellerAddress: null,
      businessName: null,
      actionMsg: null
    };
  },
  watch: {
    e_Mail: function (mail) { // e_Mail is the exact name used in v-model
        if (mail !== '') {
            this.emailRules = [ v => (v.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) || 'Invalid Email address']
        } else if (mail === '') {
            this.emailRules = []
        }
    },
    fields_not_filled: function() {
      if(pic1Url == '' || contactName == null || phoneNumber == null || price == null || title == null || description == null || sellerAddress == null || businessName == null || selectedCategory == null || selectedSubCategory == null) {
        return false
      }
    }
  },
  created() {
    this.$store.dispatch("getStates");
    this.$store.dispatch("getCategories");
  },
  computed: {
    ...mapState(["states", "lgas"]),
    ...mapState(["categories", "subCategories"]),
    ...mapGetters({ states: "stateLists", lgas: "lgaLists" }),
    ...mapGetters({
      categories: "categoryLists",
      subCategoryLists: "subCategoryLists"
    })
  },
  mounted() {
    if(this.$session.get("userEmail")) {
      this.notLoggedIn = false;
    }
    this.fetchSubCategories(this.selectedCategory);
    
  },
  methods: {
    postNewAd(scope) {
      this.processingData = true;
      let that = this;
      if(this.pic1Url == '' || this.phoneNumber == null || this.price == null || this.title == null || this.description == null || this.sellerAddress == null || this.businessName == null || this.selectedCategory == null || this.selectedSubCategory == null ) {
        this.updateErrorExist = true;
        this.processingData = false;
        this.updateErrorText = "Please fill all fields and upload at least one image of your product";
      } else {
        this.updateErrorExist = false;
        const reformedState = this.state.split("-");
        const stateToPost = reformedState[0];
        const reformedCategory = this.selectedCategory.split("-");
        const categoryToPost = reformedCategory[0];
        let isNegotiableNum = 0;
        if (this.isNegotiable === true) {
          isNegotiableNum = 1;
        }
        let imagesToPost = [
            this.image_2,
            this.image_3,
            this.image_4,
            this.image_5,
            this.image_6
          ];
          let trimmedImageList = [];
        for(let i = 0; i < imagesToPost.length; i++) {
          if(imagesToPost[i] !== NO_IMAGE_BASE64_STRING ) {
            trimmedImageList.push[imagesToPost[i]];
          }
        }
        const newPostData = {
          category_id: parseInt(categoryToPost),
          sub_category: this.selectedSubCategory,
          title: this.title,
          description: this.description,
          gender: this.gender,
          type: this.type,
          colour: this.colour,
          price: this.price,
          phone: this.phoneNumber,
          contact_name: this.businessName,
          region: parseInt(stateToPost),
          place: this.lga,
          isnogiatiable: isNegotiableNum,
          merchant_id: this.e_Mail,
          seller_address: this.sellerAddress,
          main_image: this.image_1,
          other_image: trimmedImageList,
          business_name: this.businessName
        };
        
        this.$validator.validateAll(scope).then(result => {
          
          if (result) {
            this.processingData = true;
            this.postAdButtonText = "Processing...";
            this.$store
              .dispatch("postad/postFreeAd", newPostData)
              .then(result => {
                if (result.status === 200) {
                  if (result.data.error) {
                    this.postAdButtonText = "Post Ad";
                    this.processingData = false;
                  } else {
                    this.postAdButtonText = "Post Ad";
                    this.processingData = false;
                    this.actionMsg = result.data.message;
                    this.actionDialog = true;
                    that.title = null;
                    that.description = null;
                    that.gender = null;
                    that.type = null;
                    that.colour = null;
                    that.price = null;
                    that.phoneNumber = null;
                    that.businessName = null;
                    that.isNegotiable = false;
                    that.sellerAddress = null;
                    that.selectedCategory = null;
                    that.selectedSubCategory = null;
                    that.businessName = null;
                    that.state = "";
                    that.lga = "";
                    that.postAdButtonText = "Post Ad";
                    that.processingData = false;
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
      }
      
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
              __this.image_1 = __this.pic1Url;
            } else if (event.target.id === "image2") {
              __this.pic2Url = fileReader.result;
              __this.image_2 = __this.pic2Url;
            } else if (event.target.id === "image3") {
              __this.pic3Url = fileReader.result;
              __this.image_3 = __this.pic3Url;
            } else if (event.target.id === "image4") {
              __this.pic4Url = fileReader.result;
              __this.image_4 = __this.pic4Url;
            } else if (event.target.id === "image5") {
              __this.pic5Url = fileReader.result;
              __this.image_5 = __this.pic5Url;
            } else if (event.target.id === "image6") {
              __this.pic6Url = fileReader.result;
              __this.image_6 = __this.pic6Url;
            }
          });
          fileReader.readAsDataURL(compressedFile);
        })
        .catch(function() {});
    },
    fetchStates() {
      this.getStates();
    },
    fetchLGAs(event) {
      let state = event;
      this.getLGAs({ state });
    },
    fetchCategories() {
      this.getCategories();
    },
    fetchSubCategories(event) {
      let state = event;
      this.getSubcategories({ state });
    },
    ...mapActions(["getStates", "getLGAs"]),
    ...mapActions(["getCategories", "getSubcategories"])
  }
};
</script>
<style lang="scss" scoped>
.title {
  font-size: 50px !important;
  font-weight: 200;
  text-align: center;
}

.errorClass {
    color: red;
    font-family: 'Times New Roman', Times, serif;
    font-style: italic;
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
