<script setup>
const route = useRoute()
const slug = route.params.slug

// Use the exact method from the documentation
const { data: article } = await useAsyncData(`blog-${slug}`, () => {
    return queryCollection('blog').path(`/blog/${slug}`).first()
})

console.log('Article:', article.value)
</script>

<template>
    <div class="min-h-screen">
        <template v-if="article">
            <!-- Hero Section -->
            <div class="">
                <h1 class="text-3xl font-bold tracking-tight sm:text-4xl">
                    {{ article.title }}
                </h1>
                <time class="mt-6 block text-lg leading-8">
                    {{
                        new Date(article.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                        })
                    }}
                </time>
            </div>

            <!-- Article Content -->
            <div class="mx-auto max-w-7xl px-6 lg:px-8">
                <div class="mx-auto">
                    <div class="mt-16">
                        <div class="prose prose-lg prose-blue mx-auto">
                            <img
                                v-if="article.image"
                                :src="`/images/${article.image}`"
                                class="rounded-lg shadow-md w-full mb-8"
                                :alt="`Cover image for ${article.title}`"
                            />
                            <ContentRenderer :value="article" />
                        </div>

                        <!-- Back Link -->
                        <div class="mt-16 border-t border-gray-100 pt-8">
                            <NuxtLink
                                to="/blog"
                                class="text-sm font-medium flex items-center gap-x-1"
                            >
                                <Icon
                                    name="heroicons:arrow-left"
                                    class="w-4 h-4"
                                />
                                Back to all posts
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </template>

        <!-- Not Found State -->
        <div
            v-else
            class="min-h-[50vh] flex items-center justify-center px-6 py-24 sm:py-32 lg:px-8"
        >
            <div class="text-center">
                <p class="text-base font-semibold text-blue-600">404</p>
                <h1
                    class="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
                >
                    Post not found
                </h1>
                <p class="mt-6 text-base leading-7 text-gray-600">
                    Sorry, we couldn't find the blog post you're looking for.
                </p>
                <div class="mt-10">
                    <NuxtLink
                        to="/blog"
                        class="text-sm font-semibold leading-6 text-blue-600 hover:text-blue-800"
                    >
                        Back to blog <span aria-hidden="true">→</span>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>
