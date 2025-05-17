<template>
    <div class="min-h-screen">
        <Header />
        <main class="">
            <slot />
        </main>
    </div>
</template>

<script setup>
useSeoMeta({
    titleTemplate: '%s - MyBlog',
})
</script>
