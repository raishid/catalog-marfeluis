<template>
  <div class="flex flex-col h-full w-full m-4 overflow-y-scroll">
    <section
      class="w-1/2 p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800 mt-20"
    >
      <h2
        class="text-lg font-semibold text-gray-700 capitalize dark:text-white"
      >
        Account settings
      </h2>

      <form @submit.prevent="handleSubmit">
        <div class="grid grid-cols-1 gap-6 mt-4">
          <div>
            <label class="text-gray-700 dark:text-gray-200" for="title"
              >Title</label
            >
            <input
              type="text"
              placeholder="Title Picture"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              v-model="title"
            />
          </div>
          <div>
            <label class="block text-sm font-medium dark:text-gray-200">
              Image
            </label>
            <div
              class="mt-1 flex justify-center items-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md cursor-pointer"
              @click="handleFileUpload"
            >
              <div class="space-y-1 text-center">
                <svg
                  class="mx-auto h-12 w-12 dark:text-gray-200"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 48 48"
                  aria-hidden="true"
                >
                  <path
                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <div class="text-sm text-gray-600 text-center">
                  <label
                    for="file-upload"
                    class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                  >
                    <span class="">Upload a file</span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      class="sr-only"
                      ref="inputImage"
                      @change="handleChangeFileUpload"
                      accept="image/*"
                    />
                  </label>
                </div>
                <p class="text-xs dark:text-gray-200">
                  PNG, JPG, GIF up to 10MB
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="flex justify-end mt-6">
          <button
            class="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
          >
            Save
          </button>
        </div>
      </form>
    </section>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";

const title = ref("");
const image = ref<HTMLCollection | null>(null);
const inputImage = ref<HTMLInputElement | null>(null);

const handleFileUpload = () => {
  inputImage.value?.click();
};

const handleChangeFileUpload = (e: Event) => {
  image.value = (e.target as HTMLInputElement).files[0];
};

const handleSubmit = async () => {
  const formData = new FormData();
  formData.append("title", title.value);
  formData.append("image", image.value as Blob);

  const response = await fetch("http://localhost:3000/api/catalog", {
    method: "POST",
    body: formData,
  }); /*  */

  const data = await response.json();
  if(data.status) {
    title.value = "";
    image.value = null;
    inputImage.value = null;
  }
};
</script>
