<template>
    <div class="flex flex-col items-center justify-center min-h-screen">
        <h1>Inside Blog</h1>
        <p>{{ route.params.id }}</p>
    </div>
</template>

<script setup>
const route = useRoute()
</script>
