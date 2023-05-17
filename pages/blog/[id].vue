<template>
    <single
    image="/img/rivo.jpeg"
    about="Lorem ipsum dolor sit amet consectetur adipisicing elit. Est expedita illum voluptatum esse ipsa modi veritatis, nam molestias omnis quis nemo blanditiis suscipit illo ipsum, dolorum quidem? Commodi, voluptate porro! Voluptates iusto doloribus ut molestias. Quos, corrupti aliquid quas obcaecati dolore eveniet nobis repellat ea quisquam quae repellendus consequuntur libero."
    nama="Rivo Yajnatantra izzulhaq"
    job="Chef, Indonesia"
    >
    </single>

    <div class="border rounded-lg shadow-lg p-4 float- m-10">
        <h1 class="italic font-bold">ingredients</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est expedita illum voluptatum esse ipsa modi veritatis, nam molestias omnis quis nemo blanditiis suscipit illo ipsum, dolorum quidem? Commodi, voluptate porro! Voluptates iusto doloribus ut molestias. Quos, corrupti aliquid quas obcaecati dolore eveniet nobis repellat ea quisquam quae repellendus consequuntur libero.</p>
    </div>
    <div class="border rounded-lg shadow-lg p-4 float- m-10">
        <h1 class="italic font-bold">How To Cook</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est expedita illum voluptatum esse ipsa modi veritatis, nam molestias omnis quis nemo blanditiis suscipit illo ipsum, dolorum quidem? Commodi, voluptate porro! Voluptates iusto doloribus ut molestias. Quos, corrupti aliquid quas obcaecati dolore eveniet nobis repellat ea quisquam quae repellendus consequuntur libero.</p>
    </div>

</template>

<script setup>
const {id} = useRoute().params
definePageMeta({
    layout:'header'
})
</script>