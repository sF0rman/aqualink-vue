<template>
  <div class="page">
    <div v-if="product">
      <div class="banner">
        <img v-if="product.banner" :src="product.banner" alt="">
      </div>
      <div class="wrapper">
        <h1>{{ product.title }}</h1>
        <p>{{ product.description }}</p>
      </div>
    </div>
    <div v-else class="wrapper">Loading...</div>
  </div>
</template>

<script>
import axios from "axios";
import api from "@/api";
export default {
  name: "product-details",
  data() {
    return {
      lang: "en",
      product: null,
    };
  },
  inject: ["norsk"],
  props: {
    url: String,
  },
  watch: {
    norsk() {
      this.getProductData();
    },
  },
  methods: {
    getProductData() {
      axios
        .get(`${api.url}/products/${this.url}`, {
          params: {
            _locale: localStorage.getItem("language") ?? "en",
          },
        })
        .then((res) => (this.product = res.data))
        .catch(api.handleError());
    },
  },
  mounted() {
    this.getProductData();
  },
};
</script>

<style>
</style>