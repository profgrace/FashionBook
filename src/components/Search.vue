<template>
    <v-layout row wrap class="search">
        <v-flex sm10 xs9>
            <v-text-field box
            label="Search now"
            v-model="searchTerm"
            placeholder="| What would you like to buy?"
            ></v-text-field>
        </v-flex>
        <v-flex sm2 xs3 pa-0>
            <v-btn color="btncolor" :disabled="processingList" @click="getSearchResult()">{{searchText}}</v-btn>
        </v-flex>
        <v-flex sm12 xs3 pa-0 v-if="searchResultNotOut">
            <div class="padding-15">
                There is no result for your search term {{searchTerm}}
            </div>
        </v-flex>
        <v-flex sm12 v-if="searchResultExist">
            <v-layout row wrap mt-5>
                <v-flex xs12>
                <span class="title mb-3">Search Result</span>
                </v-flex>
                <v-flex sm6 xs12 mb-4 v-for="(item,i) in allProducts" :key="i">
                <v-card flat tile class="collection">
                    <v-layout row wrap class="pictures">
                    <v-flex xs9 class="main-pic">
                        <router-link :to="'/subcategory/' + item.product_sub_id" >
                        <img :src="item.main_image" alt="Product Image">
                        </router-link>
                    </v-flex>
                    <v-flex xs3 class="other-pics">
                        <div class="text-xs-center" >
                        <img :src="item.main_image" :alt="item.title">
                        </div>
                    </v-flex>
                    </v-layout>
                    <v-layout row wrap class="details">
                    <v-flex xs9 class="pa-3">
                        <router-link :to="'/subcategory/' + item.product_sub_id">
                        <h4 class="mb-2">{{item.title}}</h4>
                        </router-link>
                        <p>{{item.description}}</p>
                    </v-flex>
                    <v-flex xs3 class="pt-3 pl-2">
                        <div class="mb-4">{{item.total_item}}</div>
                        <router-link :to="'/subcategory/' + item.product_sub_id" class="link">Check them out</router-link>
                    </v-flex>
                    </v-layout>
                </v-card>
                </v-flex>
                
                <v-dialog v-model="actionDialog" persistent width="500">
                    <v-card>
                    <v-card-title>
                        <span class="headline">{{dialogText}}</span>
                    </v-card-title>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="primary" outline @click="actionDialog = false">Okay</v-btn>
                    </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-layout>
        </v-flex>
        <v-flex xs12 text-xs-center mt-3 v-if="searchResultExist">
            <vue-paginate-al :totalPage="last_page" @btnClick="goToFunction"></vue-paginate-al>
        </v-flex>
    </v-layout>
    
    
</template>

<script>
export default {
  data() {
    return {
      searchText: "Search",
      searchResultExist: false,
      processingList: false,
      searchTerm: "",
      next_page: 1,
      last_page: null,
      actionDialog: false,
      dialogText: "",
      initialLimit: 2,
      allProducts: null,
      currentLimit: 2,
      searchResultNotOut: false,
      bearerTokenFromSession: this.$session.get("currentToken")
    };
  },

  methods: {
    goToFunction: function(n) {
        console.log(n);
        this.getSearchResult(n);
    },
    getSearchResult(page) {
        
      this.processingList = true;
      this.searchResultExist = false;
      this.searchResultNotOut = false;
      this.searchText = "Processing...";
      this.allProducts = null;
      if(this.searchTerm === "") {
          //this.dialogText = "No search term entered";
          //this.actionDialog = true;
          this.searchText = "Search";
          this.processingList = false;
      } else {
            const that = this;
            this.$store
            .dispatch("products/resultList", {
                bearerToken: this.bearerTokenFromSession,
                title: this.searchTerm,
                page: this.page
            })
            .then(result => {
            that.allProducts = result.data.data.data;
            that.last_page = result.data.data.last_page;
            that.next_page = result.data.data.next_page;
            that.processingList = false;
            that.searchText = "Search";
            if(that.allProducts.length !== 0) {
                that.searchResultExist = true;
                
            } else {
                
                that.searchResultExist = false;
                that.searchResultNotOut = true;
            }
            that.seachTerm = "";
        });
      }
      
    }
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

.padding-15 {
    padding: 15px;
}
.submit-btn {
  border-radius: unset;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.1) !important;
  font-weight: 500;
  width: 150px;
}
</style>
