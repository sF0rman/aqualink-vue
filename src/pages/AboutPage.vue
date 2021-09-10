<template>
  <div class="page">
    <div class="wrapper">
      <h1>{{ norsk ? "Om " : "About " }}Aqualink</h1>
      <p v-html="render(text)"></p>
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
      axios
        .get(`${api.url}/about`, {
          params: {
            _locale: localStorage.getItem("language") ?? "en",
          },
        })
        .then((res) => (this.text = res.data.text))
        .catch(api.handleError());
    },
  },
  mounted() {
    this.getData();
  },
};
</script>

<style>
</style>