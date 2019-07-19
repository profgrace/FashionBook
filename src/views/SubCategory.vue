<template>
  <v-container grid-list-xs class="sub single">
    <Search></Search>
    <v-layout row wrap mt-5>
      <v-flex xs12 text-xs-center class="pagetitle">
        <div class="title">Designer Bag - 100 ads</div>
        <p>Some text about the designer bag just to tell a little bit.</p>
      </v-flex>
    </v-layout>
    <v-layout row wrap class="sort">
      <v-spacer></v-spacer>
      <v-flex md2 xs6 d-flex>
        <v-select solo :items="sortBy" v-model="sort" label="Sort By"></v-select>
      </v-flex>
    </v-layout>
    <v-layout row wrap mt-4>
      <v-flex md2 pa-2 class="ads">
        <v-layout row wrap>
          <v-flex xs12 ad>Ad 1</v-flex>
          <v-flex xs12 ad>Ad 2</v-flex>
          <v-flex xs12 ad>Ad 3</v-flex>
        </v-layout>
      </v-flex>
      <v-flex pa-2 md10 xs12 class="subcategory">
        <v-layout row wrap mb-4 class="product" v-for="(single, i) in allSingleProducts.ads" :key="i">
          <v-flex md3 xs12 pa-3 class="images">
            <router-link to="/single">
              <template>
                <v-carousel
                  prev-icon="chevron_left"
                  next-icon="chevron_right"
                  hide-delimiters
                  light
                  class="slider"
                  hide-controls
                >
                  <v-carousel-item v-for="(product,i) in single.other_images" :key="i" :src="single.other_images || defaultSlideImages"></v-carousel-item>
                </v-carousel>
              </template>
              <span>
                {{single.length}}
                <v-icon>photo_camera</v-icon>
              </span>
            </router-link>
          </v-flex>
          <v-flex md9 xs12 class="details">
            <v-layout row wrap>
              <v-flex md8 xs12 class="main-details pa-4">
                <span class="title">
                  <router-link :to="'/single/' + single.fid">{{single.title}}</router-link>
                </span>
                <p>{{single.description}}</p>
                <span class="color">
                  <b>Color:</b>
                  {{single.colour}}
                </span>
                <span class="location">
                  <v-icon>location_on</v-icon>
                  {{single.region}}
                </span>
              </v-flex>
              <v-flex md4 xs12 class="extra-details px-4 like">
                <span>
                  <v-icon @click="single.liked = true" color="primary" v-if="!single.liked">favorite_border</v-icon>
                  <v-icon @click="single.liked = false" color="primary" v-if="single.liked">favorite</v-icon>
                </span>
                <span class="price">{{single.price}}</span>
                <div class="store">By {{single.business_name}}</div>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
    <CTA></CTA>
    <v-layout row wrap class="collections related my-5">
      <v-flex xs12>
        <span class="title mb-3">Related Adverts</span>
      </v-flex>
      <v-flex sm4 xs12 class="mb-4 pa-2" v-for="(product,i) in allSingleProducts.similar_ads" :key="i">
        <a href="/">
          <v-layout row wrap class="collection">
            <v-flex xs12 class="pictures borderBtm">
              <v-layout row wrap>
                <v-flex xs9 pa-3 class="borderRight">
                  <img :src="product.main_image" alt>
                </v-flex>
                <v-flex xs3>
                  <v-layout row wrap class="others">
                    <v-flex xs12 v-for="(other,i) in product.other_images" :key="i">
                      <img :src="other" alt>
                    </v-flex>
                  </v-layout>
                </v-flex>
              </v-layout>
            </v-flex>
            <v-flex xs12 class="details">
              <v-layout row wrap>
                <v-flex xs9 class="text pa-3">
                  <span class="details-title">{{product.title}}</span>
                  <p>{{product.description}}</p>
                </v-flex>
                <v-flex xs3 class="link py-5 pa-2">
                  <span>{{product.length}} items</span>
                </v-flex>
              </v-layout>
            </v-flex>
          </v-layout>
        </a>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Search from "../components/Search.vue";
import CTA from "../components/CallToAction.vue";
export default {
  data() {
    return {
      sortBy: ["Newest", "Oldest"],
      sort: "asc",
      subCatID: this.$route.params.id,
      allRelated: [],
      defaultSlideImages: [
        require("../assets/products/pic13.jpg"),
        require("../assets/products/pic14.jpg"),
        require("../assets/products/pic15.jpg"),
        require("../assets/products/pic16.jpg")
      ],
      bearerTokenFromSession: this.$session.get("currentToken"),
      allSingleProducts: [],
      singleProducts: [
        {
          products: [
            require("../assets/products/pic13.jpg"),
            require("../assets/products/pic14.jpg"),
            require("../assets/products/pic15.jpg"),
            require("../assets/products/pic16.jpg")
          ],
          title: "Ladies' Tote bag",
          description:
            "Some text about this designer bag just to tell some more. Some text about this designer bag just to tell some more…",
          color: "Burnt Red",
          location: "Lagos, Nigeria",
          price: "N 8,000.00",
          storeName: "BeautySupplies",
          liked: false
        },
        {
          products: [
            require("../assets/products/pic1.jpg"),
            require("../assets/products/pic2.jpg"),
            require("../assets/products/pic3.jpg")
          ],
          title: "Brown Bag",
          description:
            "Some text about this designer bag just to tell some more. Some text about this designer bag just to tell some more…",
          color: "Green",
          location: "Lagos, Nigeria",
          price: "N 10,000.00",
          storeName: "DebbieStores",
          liked: false
        },
        {
          products: [
            require("../assets/products/pic19.jpg"),
            require("../assets/products/pic3.jpg"),
            require("../assets/products/pic2.jpg")
          ],
          title: "Casual Bag",
          description:
            "Some text about this designer bag just to tell some more. Some text about this designer bag just to tell some more…",
          color: "Green",
          location: "Lagos, Nigeria",
          price: "N 5,000.00",
          storeName: "DebbieStores",
          liked: false
        },
        {
          products: [
            require("../assets/products/pic20.jpg"),
            require("../assets/products/pic1.jpg"),
            require("../assets/products/pic2.jpg")
          ],
          title: "Brown Bag",
          description:
            "Some text about this designer bag just to tell some more. Some text about this designer bag just to tell some more…",
          color: "Green",
          location: "Lagos, Nigeria",
          price: "N 10,000.00",
          storeName: "DebbieStores",
          liked: false
        }
      ],
      related: [
        {
          mainPic: require("../assets/products/pic1.jpg"),
          others: [
            require("../assets/products/pic2.jpg"),
            require("../assets/products/pic3.jpg"),
            require("../assets/products/pic1.jpg")
          ],
          title: "Designer Bags",
          description:
            "Some text about this designer bag just to tell some more. Some text about this designer bag"
        },
        {
          mainPic: require("../assets/products/pic4.jpg"),
          others: [
            require("../assets/products/pic5.jpg"),
            require("../assets/products/pic6.jpg"),
            require("../assets/products/pic7.jpg")
          ],
          title: "Shoes",
          description:
            "Some text about this shoes just to tell some more. Some text about this designer bag"
        },
        {
          mainPic: require("../assets/products/pic8.jpg"),
          others: [
            require("../assets/products/pic9.jpg"),
            require("../assets/products/pic10.jpg"),
            require("../assets/products/pic11.jpg")
          ],
          title: "Official Wears",
          description:
            "Some text about this official wears just to tell some more. Some text about this designer bag"
        }
      ]
    };
  },
  components: {
    Search,
    CTA
  },

  methods: {
    getSubCategoryProducts(status, limit, id, sort) {
      this.processingList = true;
      this.moreText = "Loading...";
      const that = this;
      this.$store
        .dispatch("subcategory/similarSubCategoryItems", {
          bearerToken: this.bearerTokenFromSession,
          status: status,
          limit: limit,
          id: id,
          sort: sort
        })
        .then(result => {
          that.allSingleProducts = result.data.data;
          that.allRelated = result.data.data.similar_ads;

        });
    }
  },
  mounted() {
    this.getSubCategoryProducts(1, 3, this.subCatID, this.sort);
  }
};
</script>
