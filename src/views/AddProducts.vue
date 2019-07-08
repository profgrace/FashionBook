<template>
  <v-container grid-list-md class="post">
    <h2>Add Product</h2>
    <v-form class="my-5">
      <v-layout row wrap>
        <v-flex xs12 md6>
          <v-autocomplete box :items="categories" label="Choose Category"></v-autocomplete>
        </v-flex>
        <v-flex xs12 md6>
          <v-autocomplete box :items="subcategories" label="Choose Subcategory"></v-autocomplete>
        </v-flex>
        <v-flex xs12>
          <v-text-field box label="Title"></v-text-field>
        </v-flex>
        <v-flex xs12>
          <v-textarea box label="Description"></v-textarea>
        </v-flex>
        <v-flex xs12 md6>
          <v-text-field box label="Price"></v-text-field>
        </v-flex>
        <v-flex xs12 md6>
          <v-checkbox label="Negotiable"></v-checkbox>
        </v-flex>
        <v-flex xs12>
          <v-divider></v-divider>
        </v-flex>
        <v-flex xs12 mt-4>
          <h3>Upload Photos</h3>
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
          <p>*** First picture - is the title picture.</p>
        </v-flex>
      </v-layout>
      <v-layout row wrap justify-center>
        <v-flex md4 xs6 class="more" my-4>
          <v-btn class="submit" color="btncolor">Save Product</v-btn>
        </v-flex>
      </v-layout>
    </v-form>
  </v-container>
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
      lgas: ["Kosofe"]
    };
  },
  methods: {
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
h2 {
  font-size: 30px;
  font-weight: 400;
}
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
  @media (max-width: 420px) {
    margin-top: 20px !important;
    padding: 30px 20px;
  }
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
