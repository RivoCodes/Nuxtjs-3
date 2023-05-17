<template>
    <figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
  <img class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" :src="image" alt="" width="384" height="512">
  <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockquote>
      <p class="text-lg font-medium">
        {{ about }}
      </p>
    </blockquote>
    <figcaption class="font-medium">
      <div class="text-sky-500 dark:text-sky-400">
        {{nama}}
      </div>
      <div class="text-slate-700 dark:text-slate-500">
        {{ job }}
      </div>
    </figcaption>
  </div>
</figure>
</template>

<script setup>
const props = defineProps({
    image : {
      type: String,
      required: true,
    },
    about : {
      type: String
    },
    nama : {
      type: String},
    job : {
      type: String,
    },
    deskripsi : {
      type: String
    }

});
</script>