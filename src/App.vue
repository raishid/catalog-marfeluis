<script setup lang="ts">
import NavBarVue from "./components/NavBar.vue";
</script>

<template>
  <NavBarVue />
  <div class="w-full h-full flex flex-col justify-between">
    <RouterView />
  </div>
</template>
