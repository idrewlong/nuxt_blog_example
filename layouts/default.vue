<template>
    <div class="min-h-screen">
        <Header />

        <main
            class="container flex flex-col mx-auto max-w-6xl px-4 mb-10 pt-24"
        >
            <slot />
        </main>
    </div>
</template>

<script setup>
useSeoMeta({
    titleTemplate: '%s - MyBlog',
})
const colorMode = useColorMode()
</script>

<style></style>
