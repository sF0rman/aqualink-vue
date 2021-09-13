<template>
  <div class="page">
    <div class="banner">
      <img v-if="product && product.cover" :src="api.url + product.cover" alt="" />
    </div>
    <div v-if="product" class="wrapper">
      <h1>{{ product.title }}</h1>
      <p v-html="render(product.description)"></p>
    </div>
    <div v-if="loading" class="wrapper">Loading...</div>
  </div>
</template>

<script>
import api from "@/api";
import marked from "marked";
export default {
  name: "product-details",
  data() {
    return {
      product: null,
      loading: false,
    };
  },
  inject: ["locale"],
  props: {
    url: String,
  },
  watch: {
    locale() {
      this.getProductData();
    },
    url() {
      this.getProductData();
    },
  },
  methods: {
    async getProductData() {
      this.loading = true;
      this.product = await api.get(`products/${this.url}`);
      this.loading = false;
    },
    render(x) {
      return marked(x);
    },
  },
  mounted() {
    this.getProductData();
  },
};
</script>

<style>
</style>