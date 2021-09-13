<template>
  <div class="page">
    <div class="banner">
      <img v-if="data && data.banner" :src="data.banner.url" alt="" />
    </div>
    <div class="wrapper">
      <h1>{{ locale === 'nb' ? "Om " : "About " }}Aqualink</h1>
      <p v-if="!loading && data.text" v-html="render(data.text)"></p>
      <p v-else>Loading...</p>
    </div>
  </div>
</template>

<script>
import api from "@/api";
import marked from "marked";
export default {
  data() {
    return {
      data: {},
      loading: false,
    };
  },
  inject: ["locale"],
  watch: {
    locale(val) {
      this.getData();
    },
  },
  methods: {
    render(x) {
      return marked(x);
    },
    async getData() {
      this.loading = true;
      this.data = await api.get('about');
      this.loading = false;
    },
  },
  mounted() {
    this.getData();
  },
};
</script>

<style>
</style>