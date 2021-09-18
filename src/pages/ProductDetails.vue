<template>
  <div class="page">
    <div class="banner">
      <img
        v-if="product && product.cover"
        :src="apiUrl + product.cover.url"
        alt=""
      />
    </div>
    <div v-if="product" class="wrapper">
      <h1>{{ product.title }}</h1>
      <p v-html="render(product.description)"></p>
      <div v-if="product.tables.length" class="card">
        <Table
          :header="product.tables[0].header"
          :data="product.tables[0].data"
          :title="product.tables[0].title"
          :footnote="product.tables[0].footnote"
        />
      </div>
    </div>
    <div v-if="loading" class="wrapper">Loading...</div>
  </div>
</template>

<script>
import api from "@/api";
import marked from "marked";
import Table from "../components/items/Table.vue";
export default {
  name: "product-details",
  data() {
    return {
      product: null,
      loading: false,
    };
  },
  components: { Table },
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
  }
};
</script>

<style>
.banner {
  object-fit: cover;
}
</style>