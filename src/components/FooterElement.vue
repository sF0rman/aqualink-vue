<template>
  <footer>
    <div class="wrapper">
      <div class="logo">
        <img src="../assets/logo.png" />
      </div>
      <div class="admin">
        <router-link to="/admin"><button>Control Panel</button></router-link>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "footerelement",
};
</script>

<style>
@media screen and (max-width: 850px) {
  .admin {
    display: none;
  }
}
</style>