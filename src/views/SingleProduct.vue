<template>
  <v-container grid-list-xs class="single">
    <Search></Search>
    <v-layout row wrap mt-5 class="meta">
      <v-flex md6 xs12 class="pagetitle">
        <div class="title">{{adTitle}}</div>
        <span>
          <v-icon>location_on</v-icon>{{adLocation}}
        </span>
        <span>
          <v-icon>access_time</v-icon>{{adPostDate}}
        </span>
      </v-flex>
      <v-flex md6 xs12 class="like">
        <span>
          <v-icon @click="handleLike()" color="primary" v-if="!liked">favorite_border</v-icon>
          <v-icon @click="handleLike()" color="primary" v-if="liked">favorite</v-icon>
        </span>
        <span>
          <b>{{productLikes}} person</b> already like this
        </span>
      </v-flex>
    </v-layout>
    <v-layout row wrap mb-5 class="content">
      <v-flex md8 xs12>
        <div class="product-details">
          <v-layout row wrap class="images">
            <v-flex md2 xs3 class="thumbnails">
              <div
                v-for="(image, index) in singleProductDetails.other_images"
                :key="image.img_id"
                :class="['thumbnail-image', (activeImage == index) ? 'active' : '']"
                @click="activateImage(index)"
              >
                <img :src="image.path">
              </div>
            </v-flex>
            <v-flex md10 xs9>
              <v-carousel
                prev-icon="chevron_left"
                next-icon="chevron_right"
                light
                class="slider"
                hide-controls
                hide-delimiters
              >
                
                <v-carousel-item v-for="(item, i) in singleProductDetails.other_images" :key = "i" >
                    <v-img contain :src="item.path"></v-img>
                  </v-carousel-item>
              </v-carousel>
            </v-flex>
          </v-layout>
          <v-layout row wrap class="dets">
            <v-flex xs12 class="product-about mobile">
              <div class="price mb-4">
                <span>Price: N {{adPrice}}</span>
              </div>
              <div class="store">By {{business_name}}</div>
              <span>{{verified}}</span>
              <div class="last-seen">Last seen: {{updated_at}}</div>
              <div class="phone mt-3">
                <span v-if="!phoneShow">080 xxx</span>
                <span class="show" @click="phoneShow = true" v-if="!phoneShow">Show Phone</span>
                <span v-if="phoneShow">{{businessPhone}}</span>
              </div>
              <div class="talk">
                <v-btn color="success" @click="makeCall()">
                  <img src="../assets/icons/whatsapp.png" alt> Talk to Seller
                </v-btn>
                <h4></h4>
              </div>
            </v-flex>
            <v-flex xs12 mt-5>
              <div class="title">Ad Details</div>
              <p>
                Product Name:
                <b>{{productName}}</b>
              </p>
              <p>
                Category:
                <b>{{productCategory}}</b>
              </p>
              <p>
                Seller Email:
                <b>{{sellerEmail}} </b>
              </p>
              <p>
                Seller Address:
                <b>{{sellerAddress}} </b>
              </p>
              <p>
                Description:
                <b>{{productDescription}} </b>
              </p>
              <p>
                Colour:
                <b>{{productColor}} </b>
              </p>
              <p>
                Type:
                <b>{{productType}} </b>
              </p>
            </v-flex>
            
          </v-layout>
        </div>
        <PostAd class="mt-5"></PostAd>
        <v-layout row wrap class="subcategory collections related">
          <v-flex xs12>
            <span class="title mb-3">Similar Adverts</span>
          </v-flex>
          <v-layout row wrap mb-4 class="product" v-for="(product,i) in similarAdDetails" :key="i">
            <v-flex md3 xs12 pa-3 class="images">
              <template>
                <v-carousel
                  prev-icon="chevron_left"
                  next-icon="chevron_right"
                  hide-delimiters
                  light
                  class="slider"
                  hide-controls
                >
                  
                  <v-carousel-item v-for="(item, i) in product.other_images" :key="i" >
                    <v-img contain :src="item.path"></v-img>
                  </v-carousel-item>
                </v-carousel>
              </template>
              <span>
                {{product.other_images.length}}
                <v-icon>photo_camera</v-icon>
              </span>
            </v-flex>
            <v-flex md9 xs12 class="details">
              <v-layout row wrap>
                <v-flex md8 xs12 class="main-details pa-4">
                  <span class="title">{{product.title}}</span>
                  <p>{{product.description}}</p>
                  <span class="color">
                    <b>Color:</b> {{product.colour}}
                  </span>
                  <span class="location">
                    <v-icon>location_on</v-icon>{{product.place}}, {{product.region}}
                  </span>
                </v-flex>
                <v-flex md4 xs12 class="extra-details px-4">
                  <span>
                    <v-icon color="primary">favorite_border</v-icon>
                  </span>
                  <span class="price">{{product.price}}</span>
                  <div class="store">By {{product.business_name}}</div>
                </v-flex>
              </v-layout>
            </v-flex>
          </v-layout>
          
          <v-layout row wrap>
            <v-flex xs12 class="more text-xs-center my-5">
              <v-btn color="btncolor" :disabled="processingList || similarAdDetails.length < 1" @click="loadMore()" class="submit-btn">{{moreText}}</v-btn>
            </v-flex>
          </v-layout>
        </v-layout>
      </v-flex>
      <v-flex xs12 md4>
        <v-layout row wrap ml-4>
          <v-flex xs12 class="product-about">
            <div class="price mb-4">
              <span>N {{adPrice}}</span>
            </div>
            <div class="store">By BeautySupplies</div>
            <span>{{verified}}</span>
            <div class="last-seen">Last seen {{updated_at}}</div>
            <div class="phone mt-3">
              <span v-if="!phoneShow">080 xxx</span>
              <span class="show" @click="phoneShow = true" v-if="!phoneShow">Show Phone</span>
              <span v-if="phoneShow">{{businessPhone}}</span>
            </div>
            <div class="talk">
              <v-btn color="success" @click="makeCall()">
                <img src="../assets/icons/whatsapp.png" alt> Talk to Seller
              </v-btn>
            </div>
          </v-flex>
          <v-flex xs12 class="social-feed mt-5">
            <img src="../assets/icons/instagram.svg" alt>
            <span>Our Instagram Page Feed</span>
          </v-flex>
          <v-flex xs12 class="social-feed mt-5">
            <img src="../assets/icons/facebook.svg" alt>
            <span>Our Facebook Page Feed</span>
          </v-flex>
          <v-flex xs12 class="ads">
            <v-layout row wrap>
              <v-flex xs12 ad>Ad 1</v-flex>
              <v-flex xs12 ad>Ad 2</v-flex>
              <v-flex xs12 ad>Ad 3</v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Search from "../components/Search.vue";
import PostAd from "../components/CallToAction.vue";
export default {
  data() {
    return {
      processingList: false,
      sellerEmail: "N/A",
      sellerAddress: "N/A",
      productDescription: "N/A",
      moreText: "More",
      phoneShow: false,
      currentStatus: 1,
      productType: "N/A",
      verified: "",
      initialLimit: 3,
      currentLimit: 3,
      productLikes: 1,
      postDetailID: this.$route.params.id,
      liked: false,
      sortBy: ["Newest", "Oldest"],
      sort: "",
      activeImage: 0,
      adTitle: "",
      adLocation: "",
      adPostDate: "",
      deliveryFee: "N/A",
      adPrice: null,
      business_name: "",
      businessPhone: "",
      productName: "",
      productCategory: "N/A",
      productColor: "",
      productLeather: "N/A",
      productQuantity: "N/A",
      productWeight: "N/A",
      deliveryLocation: "N/A",
      singleProductDetails: [],
      updated_at: "",
      similarAdDetails: [],
      deviceID: navigator.platform,
      deviceAgent: navigator.userAgent,
      like: 1
    };
  },
  mounted() {
    this.getSingleProductDetail(this.postDetailID, this.currentLimit, this.currentStatus);
    this.getProductLikes();
  },
  methods: {
    makeCall() {
      window.location.assign("tel://" + this.businessPhone);
    },
    handleLike() {
      const that = this;
      const likeData = {
        "product_id": this.postDetailID,
        "device_user_agent": this.deviceAgent,
        "device_id": this.deviceID,
        "like": this.like
      }
     
      this.$store.dispatch("products/likeProduct",
        {
          bearerToken: this.$session.get("currentToken"),
          payload: likeData
        }
      )
      .then(result => {
          if(result.data.data === 1) {
            that.like = 0;
            that.liked = true;
          } else {
            that.like = 1;
            that.liked = false;
          }
          that.getProductLikes();
        });
    },
    getProductLikes() {
      const that = this;
      this.$store
        .dispatch("products/getProductLikes", {
          bearerToken: this.$session.get("currentToken"),
          param: this.postDetailID
        })
        .then(result => {
          that.productLikes = result.data.data;
          
        });
    },
    showMerchantPhone() {
      alert("Works!");
    },
    loadMore() {
      this.currentLimit = this.currentLimit + this.initialLimit;
      this.getSingleProductDetail(this.postDetailID, this.currentLimit, this.currentStatus);
    },
    nextImage() {
      var active = this.activeImage + 1;
      if (active >= this.products.length) {
        active = 0;
      }
      this.activateImage(active);
    },
    // Go backwards on the products array
    // or go at the last image
    prevImage() {
      var active = this.activeImage - 1;
      if (active < 0) {
        active = this.products.length - 1;
      }
      this.activateImage(active);
    },
    activateImage(imageIndex) {
      this.activeImage = imageIndex;
    },
    getSingleProductDetail(adID, status, limit) {
      this.processingList = true;
      this.moreText = "Loading...";
      const that = this;
      this.$store
        .dispatch("singleproduct/getSingleProductDetail", {
          bearerToken: this.bearerTokenFromSession,
          adID: adID,
          status: status,
          limit: limit
        })
        .then(result => {
          that.singleProductDetails = result.data.data[0];
          that.similarAdDetails = result.data.data[0].similar_ads;
          that.processingList = false;
          that.moreText = "More";
          that.adTitle = that.singleProductDetails.title;
          that.adLocation = that.singleProductDetails.region;
          that.adPostDate = that.singleProductDetails.created_at;
          that.adPrice = that.singleProductDetails.price;
          that.business_name = that.singleProductDetails.business_name;
          that.productName = that.singleProductDetails.title,
          that.productColor = that.singleProductDetails.colour;
          that.productLeather = that.singleProductDetails.band_material;
          that.deliveryLocation = that.singleProductDetails.target_area;
          that.businessPhone = that.singleProductDetails.phone;
          that.updated_at = that.singleProductDetails.updated_at;
          that.productDescription = that.singleProductDetails.description;
          that.sellerEmail = that.singleProductDetails.merchant_id;
          that.sellerAddress = that.singleProductDetails.seller_address;
          that.productType = that.singleProductDetails.type;
        });
    }
  },
  computed: {
    currentImage() {
      return this.singleProductDetails[this.activeImage].src;
    }
  },
  components: {
    Search,
    PostAd
  }
};
</script>
<style lang="scss" scoped>
</style>
