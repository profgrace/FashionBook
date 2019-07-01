<template>
  <v-layout row wrap mt-5>
    <v-flex xs12>
      <span class="title mb-3">Latest Collections</span>
    </v-flex>
    <v-flex sm6 xs12 mb-4 v-for="(item,i) in allProducts" :key="i">
      <v-card flat tile class="collection">
        <v-layout row wrap class="pictures">
          <v-flex xs9 class="main-pic">
            <router-link to="/subcategory">
              <img :src="item.type" alt="Product Image">
            </router-link>
          </v-flex>
          <v-flex xs3 class="other-pics">
            <div class="text-xs-center" v-for="(smallitem,i) in item.main_image" :key="i">
              <img :src="smallitem.main_image" alt="Other Product Pictures">
            </div>
          </v-flex>
        </v-layout>
        <v-layout row wrap class="details">
          <v-flex xs9 class="pa-3">
            <router-link to="/subcategory">
              <h4 class="mb-2">{{item.title}}</h4>
            </router-link>
            <p>{{item.description}}</p>
          </v-flex>
          <v-flex xs3 class="pt-3 pl-2">
            <div class="mb-4">{{item.total_item}}</div>
            <router-link to="/subcategory" class="link">Check them out</router-link>
          </v-flex>
        </v-layout>
      </v-card>
    </v-flex>
    <v-flex xs12 text-xs-center mt-3>
      <v-btn color="btncolor" :disabled="processingList" @click="loadMore()" class="submit-btn">{{moreText}}</v-btn>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  data() {
    return {
      moreText: "More",
      processingList: false,
      initialLimit: 2,
      allProducts: [],
      currentLimit: 2,
      bearerTokenFromSession: this.$session.get("currentToken"),
      products: [
        {
          mainPic: require("../assets/products/prod1.jpg"),
          others: [
            {
              src: require("../assets/products/prod2.jpg")
            },
            {
              src: require("../assets/products/prod3.jpg")
            },
            {
              src: require("../assets/products/prod1.jpg")
            }
          ],
          title: "Designer Bags",
          description:
            "Some text about these designer bags just to tell some more...Some text about these designer bags just to tell some more... Some text about these designer bags just to tell some more... Some text about these designer bags just to tell some more..."
        },
        {
          mainPic: require("../assets/products/prod4.jpg"),
          others: [
            {
              src: require("../assets/products/prod5.jpg")
            },
            {
              src: require("../assets/products/prod6.jpg")
            },
            {
              src: require("../assets/products/prod7.jpg")
            }
          ],
          title: "Shoes",
          description:
            "Some text about these shoes just to tell some more...Some text about these shoes just to tell some more... Some text about these shoes just to tell some more... Some text about these shoes just to tell some more..."
        },
        {
          mainPic: require("../assets/products/prod8.jpg"),
          others: [
            {
              src: require("../assets/products/prod9.jpg")
            },
            {
              src: require("../assets/products/prod10.jpg")
            },
            {
              src: require("../assets/products/prod11.jpg")
            }
          ],
          title: "Official Wears",
          description:
            "Some text about these Official Wears just to tell some more...Some text about these Official Wears just to tell some more... Some text about these Official Wears just to tell some more... Some text about these Official Wears just to tell some more..."
        }
      ]
    };
  },

  methods: {
    loadMore() {
      this.currentLimit = this.currentLimit + this.initialLimit;
      this.getAllProducts(1, this.currentLimit);
    },
    getAllProducts(status, limit) {
      this.processingList = true;
      this.moreText = "Loading...";
      const that = this;
      this.$store
        .dispatch("products/allProductList", {
          bearerToken: this.bearerTokenFromSession,
          status: status,
          limit: limit
        })
        .then(result => {
          that.allProducts = result.data.data;
          that.processingList = false;
          that.moreText = "More";
        });
    }
  },
  mounted() {
    this.getAllProducts(1, this.currentLimit);
  }
};
</script>
<style lang="scss">
.title {
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.8);
  display: inline-block;
  font-size: 20px !important;
  font-weight: 500;
  padding-bottom: 5px;
  width: 100%;
}
.collection {
  border: 1px solid rgba(0, 0, 0, 0.1) !important;
}
.pictures {
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  .main-pic {
    border-right: 1px solid rgba(0, 0, 0, 0.1);
    padding: 30px !important;
    img {
      max-width: 100%;
    }
  }
  .other-pics {
    & > div {
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      img {
        padding: 5px 0;
        max-height: 90px;
      }
      &:last-of-type {
        border-bottom: unset;
      }
    }
  }
}
.details {
  h4 {
    border-bottom: 1px solid;
    display: inline-block;
    font-size: 16px;
    font-weight: 400;
  }
  p {
    font-size: 12px;
  }
  .link {
    font-size: 10px;
    font-weight: 600;
  }
}
.submit-btn {
  border-radius: unset;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.1) !important;
  font-weight: 500;
  width: 150px;
}
</style>
