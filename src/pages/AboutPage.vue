<template>
  <div class="page">
    <div class="wrapper">
      <h1>{{ norsk ? "Om " : "About " }}Aqualink</h1>
      <p v-if="!loading" v-html="render(text)"></p>
      <p v-else>Loading...</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import api from "@/api";
import marked from "marked";
export default {
  data() {
    return {
      text: "",
      loading: false
    };
  },
  inject: ["norsk"],
  watch: {
    norsk() {
      this.getData();
    },
  },
  methods: {
    render(x) {
      return marked(x);
    },
    getData() {
      this.loading = true;
      axios
        .get(`${api.url}/about`, {
          params: {
            _locale: localStorage.getItem("language") ?? "en",
          },
        })
        .then((res) => (this.text = res.data.text))
        .catch(api.handleError())
        .finally(() => this.loading = false);
    },
  },
  mounted() {
    this.getData();
  },
};
</script>

<style>
</style>