<template>
  <div v-if="slogan.title || slogan.text" class="slogan">
    <div v-if="loading">Loading..</div>
    <div v-if="!loading">
      <h1>{{ slogan.title }}</h1>
      <p>
        {{ slogan.text }}
      </p>
      <router-link to="/products"><button>Produkter</button></router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import api from "@/api";
export default {
  name: "slogan",
  data() {
    return {
      slogan: {},
      loading: false,
    };
  },
  inject: ["locale"],
  methods: {
    async getSlogan() {
      this.loading = true;
      this.slogan = await api.get('slogan');
      this.loading = false;
    },
  },
  watch: {
    locale() {
      this.getSlogan();
    }
  },
  mounted() {
    this.getSlogan();
  },
};
</script>

<style scoped>
.slogan {
  border-radius: 0.7em;
  border-left: solid 0.7em var(--secondary);
  padding-left: 1em;
  width: 50%;
}
button {
  background-color: var(--secondary);
  color: var(--light);
}
button:hover {
  background-color: var(--secondary-dark);
}

@media screen and (max-width: 650px) {
  .slogan {
    width: 100%;
  }
}
</style>