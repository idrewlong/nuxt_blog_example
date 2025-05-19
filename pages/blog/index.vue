<script setup>
// Use the exact method from the documentation - all() instead of find()
const { data: blog } = await useAsyncData('blog', () =>
    queryCollection('blog').order('date', 'DESC').all()
)

useSeoMeta({
    title: 'Blog',
    description: 'Read our latest articles and updates',
    ogTitle: 'Blog',
    ogDescription: 'Read our latest articles and updates',
    // ogImage: 'https://via.placeholder.com/150',
    // ogUrl: 'https://yourdomain.com/blog',
    twitterTitle: 'Blog',
    twitterDescription: 'Read our latest articles and updates',
    twitterImage: 'https://via.placeholder.com/150',
    twitterCard: 'summary',
})
</script>

<template>
    <div class="min-h-screen">
        <!-- Hero Section -->
        <div class="">
            <h1 class="text-2xl font-semibold mb-10">Blog</h1>
        </div>

        <!-- Blog Posts Grid -->
        <div class="mx-auto max-w-7xl px-6 lg:px-8 py-16">
            <div class="mx-auto max-w-2xl lg:max-w-none">
                <div
                    class="grid grid-cols-1 gap-x-8 gap-y-12 lg:grid-cols-3 sm:grid-cols-2"
                >
                    <template v-if="blog && blog.length > 0">
                        <article
                            v-for="item in blog"
                            :key="item._path"
                            class="flex flex-col bg-white rounded-2xl p-6 ring-1 ring-inset ring-gray-200 hover:ring-gray-300 transition-all duration-200"
                        >
                            <time class="text-sm leading-6 text-gray-500">
                                {{
                                    new Date(
                                        item.date + 'T12:00:00'
                                    ).toLocaleDateString('en-US', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric',
                                        timeZone: 'America/Chicago',
                                    })
                                }}
                            </time>
                            <h2
                                class="mt-4 text-xl font-semibold leading-6 text-gray-900 group-hover:text-gray-600"
                            >
                                {{ item.title }}
                            </h2>
                            <p
                                class="mt-4 text-sm leading-6 text-gray-600 flex-grow"
                            >
                                {{ item.description }}
                            </p>
                            <div class="mt-6 flex items-center gap-x-2">
                                <NuxtLink
                                    :to="item.path"
                                    class="flex items-center gap-x-1 text-sm font-medium"
                                >
                                    Read post
                                    <Icon
                                        name="heroicons:arrow-right"
                                        class="w-4 h-4"
                                    />
                                </NuxtLink>
                            </div>
                        </article>
                    </template>
                    <div v-else class="col-span-full">
                        <div class="text-center py-12">
                            <h3
                                class="mt-2 text-lg font-semibold text-gray-900"
                            >
                                No posts found
                            </h3>
                            <p class="mt-1 text-gray-500">
                                Get started by creating your first blog post.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
