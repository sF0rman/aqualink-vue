<template>
  <div id="nav">
    <div class="wrapper">
      <div class="menu">
        <router-link to="/" class="no-highlight"
          ><img src="../assets/logo.png"
        /></router-link>
        <div class="navlinks" :class="drawerOpen ? 'open' : ''">
          <button
            class="mobile drawer"
            :class="drawerOpen ? 'open' : ''"
            v-on:click="toggleDrawer"
          >
            <i :class="drawerOpen ? 'fas fa-times' : 'fas fa-bars'" />
          </button>
          <router-link class="navitem" to="/" v-on:click="close">
            <i class="fas fa-home" /> Home
          </router-link>
          <dropdown-list
            title="Products"
            link="/products"
            :items="this.items"
            :close="this.close"
            icon="fas fa-dharmachakra"
          />
          <router-link class="navitem" to="/about" v-on:click="close">
            <i class="fas fa-briefcase" /> About
          </router-link>
          <router-link class="navitem" to="/contact" v-on:click="close">
            <i class="fas fa-envelope" /> Contact
          </router-link>
        </div>
      </div>
      <div class="lang" :class="drawerOpen ? 'open' : ''">EN | NO</div>
    </div>
  </div>
</template>

<script>
import DropdownList from "./Items/DropdownList.vue";
export default {
  components: { DropdownList },
  name: "Navigation",
  data() {
    return {
      drawerOpen: false,
      items: [
        { name: "Plow Anchor Series", link: "/plow-anchor" },
        { name: "Seine Net Weight", link: "/seine-net-weight" },
        { name: "Thimble with Pearklink", link: "/thimble-with-pearlink" },
        { name: "Polyurethane Thimbles", link: "/polyurethane-thimbles" },
        { name: "Pearlink", link: "/pearlink" },
        { name: "Mooring Shackles", link: "/mooring-shackles" },
        { name: "Strap/Roundsling", link: "/strap-roundsling" },
      ],
    };
  },
  methods: {
    toggleDrawer() {
      this.drawerOpen = !this.drawerOpen;
    },
    close() {
      this.drawerOpen = false;
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
.menu > a > img {
  height: 90%;
}

.router-link-active {
  background-color: var(--primary-light);
  border-bottom: solid 1px var(--secondary);
}
.no-highlight {
  background: none;
  border-left: none !important;
}
.mobile {
  display: none;
}

@media screen and (max-width: 850px) {
  .drawer {
    display: block;
    position: absolute;
    left: -52px;
    font-size: 1.1rem;
    top: .8rem;
  }
  .drawer.open {
    background-color: red;
    border-radius: 0 1em 0 1em;
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
    transition: 0.2s;
    position: fixed;
    bottom: 1em;
    right: -5em;
  }
  .lang.open {
    right: 1em;
  }
}
</style>