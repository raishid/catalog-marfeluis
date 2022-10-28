<script lang="ts" setup>
import { ProgressiveImage } from "vue-progressive-image";
import { ref } from "vue";

const images = ref([
  "https://i.ibb.co/86cryYW/6acf4924-d50e-4c8e-836d-9d308ff6c967.jpg",
  "https://i.ibb.co/86cryYW/6acf4924-d50e-4c8e-836d-9d308ff6c967.jpg",
  "https://i.ibb.co/86cryYW/6acf4924-d50e-4c8e-836d-9d308ff6c967.jpg",
  "https://i.ibb.co/86cryYW/6acf4924-d50e-4c8e-836d-9d308ff6c967.jpg",
]);
</script>
<template>
  <div class="flex flex-col h-full w-full m-4 overflow-y-scroll">
    <div class="bg-gray-100 px-12 rounded py-8 w-full animate__animated animate__fadeIn animate__delay-1s">
      <h4 class="font-bold text-lg animate__animated animate__fadeInUpBig animate__delay-1s">Nuestro Modelos</h4>
    </div>
    <div
      class="flex flex-wrap items-start justify-start rounded-tl grid-flow-col auto-cols-max gap-4 my-10 "
    >
      <div
        class="w-96 h-60 rounded-lg flex-shrink-0 flex-grow bg-gray-400"
        v-for="(img, index) in images"
        :key="index"
      >
        <ProgressiveImage lazy-placeholder :src="img" delay="2000"/>
      </div>
    </div>
  </div>
</template>
