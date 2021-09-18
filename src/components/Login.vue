<template>
  <div class="page">
    <div class="login-form">
      <img src="@/assets/logo.png" />
      <input type="email" name="" id="email" v-model="form.email" placeholder="email" />
      <input type="password" name="" id="password" v-model="form.pass" placeholder="password" />
      <button @click="doLogin(form.email, form.pass)">Login</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
      return {
          form: {
              email: '',
              pass: ''
          }
      }
  },
  inject: ["doLogin"]
};
</script>

<style scoped>
.page {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -60%);
  gap: .1em;
  padding: 1em;
  max-width: 500px;
  display: flex;
  flex-direction: column;
}
p {
    color: var(--primary-light);
    margin: .4em 1em;
}
.login-form {
  position: relative;
  gap: 1em;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  padding: 2em;
  border-radius: 1em 0 1em 0;
  box-shadow: 0 0 0.5em var(--secondary);
}
</style>