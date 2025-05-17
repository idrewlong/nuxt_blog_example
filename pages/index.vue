<template>
    <div class="flex flex-col items-center justify-center min-h-screen">
        <h1>Hello World</h1>
    </div>
</template>

<script setup>
useSeoMeta({
    title: 'Home',
    description: 'This is the home page',
    ogTitle: 'Home',
    ogDescription: 'This is the home page',
    ogImage: 'https://via.placeholder.com/150',
    ogUrl: 'https://www.google.com',
    twitterTitle: 'Home',
    twitterDescription: 'This is the home page',
    twitterImage: '[twitter:image]',
    twitterCard: 'summary',
})
</script>
