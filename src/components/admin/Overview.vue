<template>
  <div class="page">
    Admin Panel
    <button @click="doLogout">Logout</button>
  </div>
</template>

<script>
export default {
  name: "overview",
  inject: ["doLogout"]
};
</script>

<style>
</style>