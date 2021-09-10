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
export default {
  components: { Navigation, FooterEl },
  name: "App",
  data() {
    return {
      products: [
        { name: "Plow Anchor Series", link: "/plow-anchor" },
        { name: "Seine Net Weight", link: "/seine-net-weight" },
        { name: "Thimble with Pearklink", link: "/thimble-with-pearlink" },
        { name: "Polyurethane Thimbles", link: "/polyurethane-thimbles" },
        { name: "Pearlink", link: "/pearlink" },
        { name: "Mooring Shackles", link: "/mooring-shackles" },
        { name: "Strap/Roundsling", link: "/strap-roundsling" },
      ],
      lang: localStorage.getItem("languange") ?? "en",
    };
  },
  provide() {
    return {
      products: this.products,
      norsk: computed(() => this.lang === "no"),
      selectLanguage: this.selectLanguage,
    };
  },
  methods: {
    selectLanguage(value) {
      this.lang = value;
      window.localStorage.setItem("language", this.lang);
    },
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
  padding-top: 2em;
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
