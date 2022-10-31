<script lang="ts" setup>
import { ref } from "vue";
const numberWs = ref("584141084637");
</script>
<template>
  <div class="fixed z-50 right-0 bottom-0">
    <a
      :href="`https://api.whatsapp.com/send?phone=${numberWs}`"
      target="_blank"
    >
      <img
        src="/img/icon-whatsapp.gif"
        class="object-fill h-20 w-20 bg-transparent"
      />
    </a>
  </div>
</template>
