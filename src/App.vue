<template>
  <div id="shell">
    <Navigation />
    <!-- Router Outlet -->
    <router-view />
  </div>
  <FooterEl />
</template>

<script>
import FooterEl from "./components/FooterElement.vue";
import Navigation from "./components/Navigation.vue";
export default {
  components: { Navigation, FooterEl },
  name: "App",
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
