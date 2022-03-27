<template>
  <nav class="nav">
    <h1 class="text-logo">
      <NuxtLink to="/">Itallo.</NuxtLink>
    </h1>

    <ul class="menu">
      <li class="text-md"><NuxtLink to="/projects">Projetos.</NuxtLink></li>
      <li class="text-md"><NuxtLink to="/blog">Blog</NuxtLink></li>
      <li class="text-md"><NuxtLink to="/about">Eu.</NuxtLink></li>
    </ul>
  </nav>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "TheHeader",
});
</script>

<style scoped>
.nav,
.menu {
  display: flex;
  flex-direction: row;
}

.nav {
  justify-content: space-between;
  padding-top: 1rem;
}

.menu {
  gap: 5rem;
}
</style>
