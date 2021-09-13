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
      locale: computed(() => this.lang),
      selectLanguage: this.selectLanguage,
    };
  },
  methods: {
    selectLanguage(value) {
      this.lang = value;
      api.setLocale(value);
      this.getProducts();
    },
    async getProducts() {
      this.products = await api.get('products');
    },
  },
  mounted() {
    this.getProducts();
  },
};
</script>

<style>
.landing {
  box-sizing: border-box;
  width: 100%;
  min-height: calc(100vh - var(--navHeight));
  background-attachment: fixed;
  background-size: cover;
  background-position: 50%;
  background-image: url("~@/assets/landing.png");
  padding-top: 3em;
}
.banner {
  width: 100vw;
  height: 33vh;
  min-height: 200px;
  background-color: var(--primary);
  background-image: url("~@/assets/landing.png");
  background-size: cover;
  background-position: 50%;
  margin: 0 0 2em;
}
.banner > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
