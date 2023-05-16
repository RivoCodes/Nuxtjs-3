<template>
    <div class="container px-8 my-20">
        <div class="border rounded-lg shadow-lg p-8 float- m-20">
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est expedita illum voluptatum esse ipsa modi veritatis, nam molestias omnis quis nemo blanditiis suscipit illo ipsum, dolorum quidem? Commodi, voluptate porro! Voluptates iusto doloribus ut molestias. Quos, corrupti aliquid quas obcaecati dolore eveniet nobis repellat ea quisquam quae repellendus consequuntur libero.</p>
        </div>
      </div>
      <figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
      <div class="grid gap-4 grid-cols-2">
        <div class="border rounded-lg shadow-lg p-4 float- m-10">
            <img class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" :src="image" alt=""/>
            <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
                <p class="font-medium text-3 my-4 ">
                    {{deskripsi}}
                </p>
            </div>
          <figcaption class="font-medium">
            <div class="text-sky-400 dark:text-sky-400">
                {{nama}}
            </div>
            <div class="text-slate-700 dark:text-slate-500">
                {{job}}
            </div>
            <NuxtLink class="text-blue-400 hover:text-blue-700" to="#">{{blog}}</NuxtLink>
        </figcaption>
        </div>
        <div class="border rounded-lg shadow-lg p-4 float- m-10">
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est expedita illum voluptatum esse ipsa modi veritatis, nam molestias omnis quis nemo blanditiis suscipit illo ipsum, dolorum quidem? Commodi, voluptate porro! Voluptates iusto doloribus ut molestias. Quos, corrupti aliquid quas obcaecati dolore eveniet nobis repellat ea quisquam quae repellendus consequuntur libero.</p>
        </div>
        <div class="border rounded-lg shadow-lg p-4 float- m-10">
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est expedita illum voluptatum esse ipsa modi veritatis, nam molestias omnis quis nemo blanditiis suscipit illo ipsum, dolorum quidem? Commodi, voluptate porro! Voluptates iusto doloribus ut molestias. Quos, corrupti aliquid quas obcaecati dolore eveniet nobis repellat ea quisquam quae repellendus consequuntur libero.</p>
        </div>
        <div class="border rounded-lg shadow-lg p-4 float- m-10">
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est expedita illum voluptatum esse ipsa modi veritatis, nam molestias omnis quis nemo blanditiis suscipit illo ipsum, dolorum quidem? Commodi, voluptate porro! Voluptates iusto doloribus ut molestias. Quos, corrupti aliquid quas obcaecati dolore eveniet nobis repellat ea quisquam quae repellendus consequuntur libero.</p>
        </div>
      </div>
    </figure>
</template>

<script setup>
const props = defineProps({
    image : {
      type: String,
      required: true,
    },
    blog : {
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