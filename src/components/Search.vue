<template>
  <v-form>
    <v-text-field
      box
      hide-details
      background-color="white"
      label="What would you like to buy?"
      append-icon="search"
      @click:append="doSomething()"
      color="primary"
    ></v-text-field>
  </v-form>
</template>
<script>
export default {
  methods: {
    doSomething() {}
  }
};
</script>
