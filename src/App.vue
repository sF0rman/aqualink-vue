<template>
  <div id="shell">
    <Navigation />
    <!-- Router Outlet -->
    <router-view />
  </div>
  <FooterEl />
</template>

<script>
import { computed } from "@vue/reactivity";
import FooterEl from "./components/FooterElement.vue";
import Navigation from "./components/Navigation.vue";
import api from "@/api";
import axios from "axios";
export default {
  components: { Navigation, FooterEl },
  name: "App",
  data() {
    return {
      products: [],
      lang: localStorage.getItem("languange") ?? "en",
    };
  },
  provide() {
    return {
      products: computed(() => this.products),
      norsk: computed(() => this.lang === "nb"),
      selectLanguage: this.selectLanguage,
    };
  },
  methods: {
    selectLanguage(value) {
      this.lang = value;
      window.localStorage.setItem("language", this.lang);
      this.getProducts();
    },
    getProducts() {
      axios
        .get(`${api.url}/products`, {
          params: {
            _locale: this.lang,
          },
        })
        .then((res) => (this.products = res.data))
        .catch(api.handleError());
    },
  },
  mounted() {
    this.getProducts();
  },
};
</script>

<style>
#shell {
  padding-top: var(--navHeight);
  min-height: calc(100vh - var(--footerHeight));
}
#shell:last-child {
  margin-bottom: 2em;
}
.page {
  padding-top: 3rem;
  overflow: hidden;
}
.landing {
  box-sizing: border-box;
  width: 100%;
  min-height: calc(100vh - var(--navHeight));
  background-attachment: fixed;
  background-size: cover;
  background-position: 50%;
  background-image: url("~@/assets/landing.png");
}
</style>
