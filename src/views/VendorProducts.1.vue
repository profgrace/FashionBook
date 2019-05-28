<template>
  <v-content class="mt-4">
    <v-container grid-list-md>
      <v-layout row wrap class="title">
        <v-flex xs6>
          <h4 class="primary--text">Product Lists</h4>
        </v-flex>
        <v-flex xs6 text-xs-right mb-2>
          <v-btn
            to="/vendor/addproducts"
            color="secondary"
            class="button px-4 abs text-none"
          >Add a Product</v-btn>
        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <v-flex xs3 mb-3 v-for="product in products" :key="product.id">
          <v-card class="unique-card">
            <img :src="product.img">
            <v-card-title primary-title class="pb-0 card-title pt-3">
              <h4 class="mb-0">
                <a>{{product.title}}</a>
              </h4>
            </v-card-title>
            <v-card-text class="card-text pt-2">
              <p class="mb-0">{{product.description}}</p>
            </v-card-text>

            <v-card-actions class="px-3 pt-0 pb-4 card-actions">
              <v-layout row wrap>
                <v-flex xs6 class="primary--text">
                  <h5 class="primary--text">Price: {{product.price}} per KG</h5>
                </v-flex>
                <v-flex xs6>
                  <h5 class="text-xs-right primary--text">
                    <b>{{product.quantity}} KG available</b>
                  </h5>
                </v-flex>
              </v-layout>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>
<script>
export default {
  data() {
    return {
      products: [
        {
          id: 132243434,
          img: require("../assets/products/pic1.jpg"),
          title: "Ladies Tote Bag",
          description:
            "Lorem Ipsum description will go here and the rest will be cut off",
          quantity: "20",
          price: "N 1, 000"
        },
        {
          id: 122243434,
          img: require("../assets/products/pic1.jpg"),
          title: "Ladies Tote Bag",
          description:
            "Lorem Ipsum description will go here and the rest will be cut off",
          quantity: "20",
          price: "N 1, 000"
        },
        {
          id: 132543434,
          img: require("../assets/products/pic1.jpg"),
          title: "Ladies Tote Bag",
          description:
            "Lorem Ipsum description will go here and the rest will be cut off",
          quantity: "20",
          price: "N 1, 000"
        },
        {
          id: 132843434,
          img: require("../assets/products/pic1.jpg"),
          title: "Ladies Tote Bag",
          description:
            "Lorem Ipsum description will go here and the rest will be cut off",
          quantity: "20",
          price: "N 1, 000"
        },
        {
          id: 172243434,
          img: require("../assets/products/pic1.jpg"),
          title: "Ladies Tote Bag",
          description:
            "Lorem Ipsum description will go here and the rest will be cut off",
          quantity: "20",
          price: "N 1, 000"
        },
        {
          id: 132245434,
          img: require("../assets/products/pic1.jpg"),
          title: "Ladies Tote Bag",
          description:
            "Lorem Ipsum description will go here and the rest will be cut off",
          quantity: "20",
          price: "N 1, 000"
        },
        {
          id: 132243439,
          img: require("../assets/products/pic1.jpg"),
          title: "Ladies Tote Bag",
          description:
            "Lorem Ipsum description will go here and the rest will be cut off",
          quantity: "20",
          price: "N 1, 000"
        }
      ]
    };
  }
};
</script>
