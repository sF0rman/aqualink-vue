<template>
  <div class="dropdown">
    <router-link class="navitem" :to="link" v-on:click="close">
      <i v-if="icon" :class="icon" /> {{ title }}
      <i class="fas fa-caret-down" />
    </router-link>
    <div class="list">
      <div class="listitem" v-for="item in items" :key="item.name">
        <router-link :to="item.url" :key="item.name" v-on:click="close">
          {{ item.title }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "dropdown-list",
  props: {
    title: String,
    icon: String,
    link: String,
    items: Array,
    close: Function,
  },
};
</script>

<style>
.dropdown .span {
  position: relative;
  display: inherit;
  justify-content: inherit;
  align-items: inherit;
}
.dropdown > .navitem {
  display: inherit;
  justify-content: inherit;
  align-items: inherit;
}
.list {
  background: var(--dark);
  color: var(--light);
  display: none;
  position: absolute;
  white-space: nowrap;
  overflow: hidden;
  z-index: 2;
  border-radius: 0 1em 1em 1em;
  margin-left: 1em;
  margin-top: -10px;
  padding: 1em 0em;
}
.dropdown:hover .list {
  display: block;
}
.listitem {
  width: 100%;
}
.listitem > a {
  display: block;
  width: 100%;
  color: inherit;
  padding: 0.9rem 1.4rem;
  border-bottom: none;
}
.listitem:hover {
  background-color: var(--primary);
  cursor: pointer;
}

@media screen and (max-width: 850px) {
  .dropdown {
    position: relative;
    display: block;
    width: 100%;
  }
  .list {
    max-height: 70vh;
    overflow-y: auto;
    display: block;
    position: relative;
    width: 100%;
    border-radius: 0;
    border: none;
    margin: 0;
  }
  .listitem > a {
    padding: 1.2em 1.5em;
  }
}
</style>