<template>
  <div id="nav">
    <div class="wrapper">
      <div class="menu">
        <img src="../assets/logo.png" />
        <div class="navlinks" :class="drawerOpen ? 'open' : ''">
          <button class="mobile drawer" v-on:click="toggleDrawer">-</button>
          <router-link class="navitem" to="/">
            <i class="fas fa-home" /> Home
          </router-link>
          <router-link class="navitem" to="/products">
            <i class="fas fa-dharmachakra" /> Products
          </router-link>
          <router-link class="navitem" to="/about">
            <i class="fas fa-briefcase" /> About
          </router-link>
          <router-link class="navitem" to="/contact">
            <i class="fas fa-envelope" /> Contact
          </router-link>
        </div>
      </div>
      <div class="lang" :class="drawerOpen ? 'open' : ''">EN | NO</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navigation",
  data() {
    return { drawerOpen: false };
  },
  methods: {
    toggleDrawer() {
      this.drawerOpen = !this.drawerOpen;
    },
  },
};
</script>

<style>
#nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  height: var(--navHeight);
  background-color: var(--light);
  border-bottom: 1px solid black;
}
.menu {
  display: flex;
  align-items: stretch;
}
.navlinks {
  display: flex;
  margin-left: 2em;
}
.navitem,
.lang {
  padding: 0 1em;
  line-height: var(--navHeight);
  color: var(--dark);
}
.lang {
  padding: 0;
}
.navitem:hover {
  color: var(--primary);
  background-color: var(--light);
  border-bottom: solid 1px var(--secondary);
}
.menu > img {
  height: 90%;
}

.router-link-active {
  background-color: var(--primary-light);
  border-bottom: solid 1px var(--secondary);
}

.mobile {
  display: none;
}

@media screen and (max-width: 800px) {
  .mobile {
    top: 1em;
  }
  .drawer {
    display: block;
    position: absolute;
    left: -50px;
  }
  .navlinks {
    transition: 0.2s;
    background-color: var(--light);
    flex-direction: column;
    position: fixed;
    top: 0;
    bottom: 0;
    right: -85%;
    width: 85%;
    border-bottom: none;
    border-left: solid 1px var(--dark);
  }
  .navlinks.open {
    right: 0;
  }
  .navitem:hover {
      border: none;
  }
  .router-link-active {
    border-bottom: none;
    border-left: solid 1px var(--secondary);
  }
  .lang {
      transition: .2s;
      position: fixed;
      bottom: 1em;
      right: -5em;
  }
  .lang.open {
      right: 1em;
  }
}
</style>