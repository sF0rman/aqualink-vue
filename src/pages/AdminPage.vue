<template>
  <div>
    <overview v-if="user" />
    <login v-else />
  </div>
</template>

<script>
import api from "../api";
import Overview from "../components/admin/Overview.vue";
import Login from "../components/Login.vue";
export default {
  name: "admin",
  components: { Login, Overview },
  data() {
    return {
      loading: false,
      user: null,
    };
  },
  provide: {
    async doLogin(email, password) {
      this.loading = true;
      const user = await api.login({ identifier: email, password });
      if (user.jwt) {
        this.user = user;
        localStorage.setItem("jwt", user.jwt);
      }
      this.loading = false;
    },

    doLogout() {
      this.loading = true;
      this.user = null;
      localStorage.removeItem("jwt");
      this.loading = false;
    },
  },
  async mounted() {
    this.loading = true;
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      const user = await api.me();
      if (user) {
        this.user = user;
      } else {
        localStorage.removeItem("jwt");
        this.user = null;
      }
    }
    this.loading = false;
  },
  updated() {
    console.log('updated', this.user);
  }
};
</script>

<style>
</style>