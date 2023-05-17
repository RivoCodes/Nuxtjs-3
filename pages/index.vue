<template>
    <div class="font-serif italic">
      <link
        href="https://cdn.jsdelivr.net/npm/tailwindcss@2.1.2/dist/tailwind.min.css"
        rel="stylesheet"
      />
      <NuxtLayout :name="header"></NuxtLayout>
      <header />
      <div>
            <h1 class="text-center bg-yellow-400 hover:bg-yellow-600 text-4xl">Welcome To Cooking Blogs</h1>
      </div>
      <card 
      title="How to Make A Delicious Chess Burger"
      image="/img/rivo.jpeg"
      deskripsi="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est expedita illum voluptatum esse ipsa modi veritatis, nam molestias omnis quis nemo blanditiis suscipit illo ipsum, dolorum quidem? Commodi, voluptate porro! Voluptates iusto doloribus ut molestias. Quos, corrupti aliquid quas obcaecati dolore eveniet nobis repellat ea quisquam quae repellendus consequuntur libero."
      nama="Rivo Yajnatantra Izzulhaq"
      job="Chef, Indonesia"
      blog="Read more ..."
      >
      </card>
      </div>
  </template>


<script setup>
  const header = 'header';
  // const content = 'content';
  const footer = 'footer';
</script>

  <!-- <script>
  export default(await import('vue')).defineComponent({
    
      "routes": [{
        "path" : "/blog/:id",
        "component" : "pages/blog/[id].vue"
      }]
  })
</script> -->