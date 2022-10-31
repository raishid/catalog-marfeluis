<template>
  <!-- Sidebar -->
  <aside
    class="h-full w-16 flex flex-col space-y-10 items-center justify-center relative bg-gray-800 text-white"
  >
    <!-- Profile -->
    <div
      class="h-12 w-12 flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white hover:duration-300 hover:ease-linear focus:bg-white"
    >
      <router-link :to="{ name: 'home' }">
        <i class="fa-solid fa-house"></i>
      </router-link>
    </div>
  </aside>
</template>
<script lang="ts" setup></script>
