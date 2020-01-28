<template>
  <v-carousel
    prev-icon="chevron_left"
    next-icon="chevron_right"
    hide-delimiters
    light
    class="slider"
  >
    <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src"></v-carousel-item>
  </v-carousel>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          src: require("../assets/slider/slider1.png")
        },
        {
          src: require("../assets/slider/slider3.jpg")
        },
        {
          src: require("../assets/slider/slider_a.jpg")
        },
        {
          src: require("../assets/slider/slider_b.jpg")
        },
        {
          src: require("../assets/slider/slider_c.jpg")
        }
      ]
    };
  }
};
</script>
