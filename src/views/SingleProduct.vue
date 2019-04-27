<template>
  <v-container grid-list-xs class="single">
    <Search></Search>
    <v-layout row wrap mt-5 class="meta">
      <v-flex md6 xs12 class="pagetitle">
        <div class="title">Ladies Tote Bag</div>
        <span>
          <v-icon>location_on</v-icon>At Ikeja GRA, Lagos.
        </span>
        <span>
          <v-icon>access_time</v-icon>Posted May 23, 2018
        </span>
      </v-flex>
      <v-flex md6 xs12 class="like">
        <span>
          <v-icon color="primary">favorite_border</v-icon>
        </span>
        <span>
          <b>34 people</b> already like this
        </span>
      </v-flex>
    </v-layout>
    <v-layout row wrap mb-5 class="content">
      <v-flex md8 xs12>
        <div class="product-details">
          <v-layout row wrap class="images">
            <v-flex md2 xs3 class="thumbnails">
              <div
                v-for="(image, index) in  products"
                :key="image.id"
                :class="['thumbnail-image', (activeImage == index) ? 'active' : '']"
                @click="activateImage(index)"
              >
                <img :src="image.thumb">
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
                <v-carousel-item :src="currentImage"></v-carousel-item>
              </v-carousel>
            </v-flex>
          </v-layout>
          <v-layout row wrap class="dets">
            <v-flex xs12 class="product-about mobile">
              <div class="price mb-4">
                <span>Price: N 8,000</span>
              </div>
              <div class="store">By BeautySupplies</div>
              <span>Verified</span>
              <div class="last-seen">Last seen 2 hours ago</div>
              <div class="phone mt-3">
                080
                <span>xxx</span>
                <span class="show">Show Phone</span>
              </div>
              <div class="talk">
                <v-btn color="success">
                  <img src="../assets/icons/whatsapp.png" alt> Talk to Seller
                </v-btn>
              </div>
            </v-flex>
            <v-flex xs12 mt-5>
              <div class="title">Ad Details</div>
              <p>
                Product Name:
                <b>Special Ladies Tote Bag</b>
              </p>
              <p>
                Category:
                <b>Shoulder Bags</b>
              </p>
              <p>
                Color:
                <b>Nude</b>
              </p>
              <p>
                Material:
                <b>Leather</b>
              </p>
              <p>
                Quantity:
                <b>5 units</b>
              </p>
              <p>
                Weight:
                <b>0.4 (kg)</b>
              </p>
            </v-flex>
            <v-flex xs12 mt-4>
              <div class="title">Delivery</div>
              <p>
                Location:
                <b>Within Lagos</b>
              </p>
              <p>
                Fee:
                <b>750 naira</b>
              </p>
            </v-flex>
          </v-layout>
        </div>
        <PostAd class="mt-5"></PostAd>
        <v-layout row wrap class="subcategory collections related">
          <v-flex xs12>
            <span class="title mb-3">Similar Adverts</span>
          </v-flex>
          <v-layout row wrap mb-4 class="product">
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
                  <v-carousel-item v-for="(product,i) in products" :key="i" :src="product.src"></v-carousel-item>
                </v-carousel>
              </template>
              <span>
                {{products.length}}
                <v-icon>photo_camera</v-icon>
              </span>
            </v-flex>
            <v-flex md9 xs12 class="details">
              <v-layout row wrap>
                <v-flex md8 xs12 class="main-details pa-4">
                  <span class="title">Ladies' Tote bag</span>
                  <p>Some text about this designer bag just to tell some more. Some text about this designer bag just to tell some more…</p>
                  <span class="color">
                    <b>Color:</b> Burnt Red
                  </span>
                  <span class="location">
                    <v-icon>location_on</v-icon>Lagos, Nigeria
                  </span>
                </v-flex>
                <v-flex md4 xs12 class="extra-details px-4">
                  <span>
                    <v-icon color="primary">favorite_border</v-icon>
                  </span>
                  <span class="price">N 8,000.00</span>
                  <div class="store">By BeautySupplies</div>
                </v-flex>
              </v-layout>
            </v-flex>
          </v-layout>
          <v-layout row wrap mb-4 class="product">
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
                  <v-carousel-item v-for="(product,i) in products" :key="i" :src="product.src"></v-carousel-item>
                </v-carousel>
              </template>
              <span>
                {{products.length}}
                <v-icon>photo_camera</v-icon>
              </span>
            </v-flex>
            <v-flex md9 xs12 class="details">
              <v-layout row wrap>
                <v-flex md8 xs12 class="main-details pa-4">
                  <span class="title">Ladies' Tote bag</span>
                  <p>Some text about this designer bag just to tell some more. Some text about this designer bag just to tell some more…</p>
                  <span class="color">
                    <b>Color:</b> Burnt Red
                  </span>
                  <span class="location">
                    <v-icon>location_on</v-icon>Lagos, Nigeria
                  </span>
                </v-flex>
                <v-flex md4 xs12 class="extra-details px-4">
                  <span>
                    <v-icon color="primary">favorite_border</v-icon>
                  </span>
                  <span class="price">N 8,000.00</span>
                  <div class="store">By BeautySupplies</div>
                </v-flex>
              </v-layout>
            </v-flex>
          </v-layout>
          <v-layout row wrap mb-4 class="product">
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
                  <v-carousel-item v-for="(product,i) in products" :key="i" :src="product.src"></v-carousel-item>
                </v-carousel>
              </template>
              <span>
                {{products.length}}
                <v-icon>photo_camera</v-icon>
              </span>
            </v-flex>
            <v-flex md9 xs12 class="details">
              <v-layout row wrap>
                <v-flex md8 xs12 class="main-details pa-4">
                  <span class="title">Ladies' Tote bag</span>
                  <p>Some text about this designer bag just to tell some more. Some text about this designer bag just to tell some more…</p>
                  <span class="color">
                    <b>Color:</b> Burnt Red
                  </span>
                  <span class="location">
                    <v-icon>location_on</v-icon>Lagos, Nigeria
                  </span>
                </v-flex>
                <v-flex md4 xs12 class="extra-details px-4">
                  <span>
                    <v-icon color="primary">favorite_border</v-icon>
                  </span>
                  <span class="price">N 8,000.00</span>
                  <div class="store">By BeautySupplies</div>
                </v-flex>
              </v-layout>
            </v-flex>
          </v-layout>
          <v-layout row wrap>
            <v-flex xs12 class="more text-xs-center my-5">
              <v-btn color="btncolor">More</v-btn>
            </v-flex>
          </v-layout>
        </v-layout>
      </v-flex>
      <v-flex xs12 md4>
        <v-layout row wrap ml-4>
          <v-flex xs12 class="product-about">
            <div class="price mb-4">
              <span>N 8,000</span>
            </div>
            <div class="store">By BeautySupplies</div>
            <span>Verified</span>
            <div class="last-seen">Last seen 2 hours ago</div>
            <div class="phone mt-3">
              080
              <span>xxx</span>
              <span class="show">Show Phone</span>
            </div>
            <div class="talk">
              <v-btn color="success">
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
      sortBy: ["Newest", "Oldest"],
      sort: "",
      activeImage: 0,
      products: [
        {
          id: "1",
          src: require("../assets/products/pic1.jpg"),
          thumb: require("../assets/products/pic1.jpg")
        },
        {
          id: "2",
          src: require("../assets/products/pic2.jpg"),
          thumb: require("../assets/products/pic2.jpg")
        },
        {
          id: "3",
          src: require("../assets/products/pic3.jpg"),
          thumb: require("../assets/products/pic3.jpg")
        }
      ],
      products2: [
        {
          src: require("../assets/products/pic13.jpg")
        },
        {
          src: require("../assets/products/pic14.jpg")
        },
        {
          src: require("../assets/products/pic15.jpg")
        },
        {
          src: require("../assets/products/pic16.jpg")
        }
      ],
      products3: [
        {
          src: require("../assets/products/pic17.jpg")
        },
        {
          src: require("../assets/products/pic18.jpg")
        },
        {
          src: require("../assets/products/pic19.jpg")
        },
        {
          src: require("../assets/products/pic20.jpg")
        }
      ]
    };
  },
  methods: {
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
    }
  },
  computed: {
    currentImage() {
      return this.products[this.activeImage].src;
    }
  },
  components: {
    Search,
    PostAd
  }
};
</script>
