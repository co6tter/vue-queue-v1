<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <header>
    <HelloWorld msg="You did it!" />

    <nav>
      <ul>
        <li>
          <RouterLink to="/">Home</RouterLink>
        </li>
        <li>
          <RouterLink to="/about">About</RouterLink>
        </li>
      </ul>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped>
nav {
  ul {
    display: flex;
    justify-content: center;
    gap: 1rem;
    list-style: none;
    padding: 0;
  }
}
</style>
