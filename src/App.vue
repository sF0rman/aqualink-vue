<template>
  <div id="shell">
    <navigation />
    <!-- Router Outlet -->
    <router-view />
  </div>
</template>

<script>
import Navigation from "./components/Navigation.vue";
export default {
  components: { Navigation },
  name: "App",
};
</script>

<style>
#shell {
  margin-top: var(--navHeight);
}
.page {
  padding-top: 2em;
}
.landing {
  width: 100%;
  min-height: 100vh;
  background-attachment: fixed;
  background-size: cover;
  background-position: 50%;
  background-image: url("~@/assets/landing.png");
}
</style>
