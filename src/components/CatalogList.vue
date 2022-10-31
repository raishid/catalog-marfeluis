<script lang="ts" setup>
import { ProgressiveImage } from "vue-progressive-image";
import { onMounted, ref } from "vue";
import type { Image } from "@/interfaces/images";

const images = ref<Image[]>([]);

const handleImages = async () => {
  const res = await fetch("http://localhost:3000/api/catalog");
  const data = await res.json();
  images.value = data;
};

onMounted(() => {
  handleImages();
});
</script>
<template>
  <div class="flex flex-col h-full w-full m-4 overflow-y-scroll">
    <div
      class="bg-gray-100 px-12 rounded py-8 w-full animate__animated animate__fadeIn animate__delay-1s"
    >
      <h4
        class="font-bold text-lg animate__animated animate__fadeInUpBig animate__delay-1s"
      >
        Nuestro Modelos
      </h4>
    </div>
    <div
      class="flex flex-wrap items-start justify-start rounded-tl grid-flow-col auto-cols-max gap-4 my-10"
    >
      <div
        class="w-60 h-96 rounded-lg flex-shrink-0 flex-grow bg-gray-400"
        v-for="(img, index) in images"
        :key="index"
      >
        <ProgressiveImage
          lazy-placeholder
          :src="img.url"
          delay="2000"
          class="object-cover w-60 h-96"
        />
      </div>
    </div>
  </div>
</template>
