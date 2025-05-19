<template>
    <div>
        <div
            v-if="pending"
            class="flex justify-center items-center min-h-[200px]"
        >
            <div
                class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"
            ></div>
        </div>

        <div
            v-else-if="error"
            class="bg-red-500/10 border border-red-500/20 rounded-lg p-6 text-center"
        >
            <p class="text-red-400">
                Failed to load projects. Please try again later.
            </p>
        </div>

        <div
            v-else
            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
            <div
                v-for="repo in sortedRepos"
                :key="repo.id"
                class="bg-slate-800 rounded-lg overflow-hidden shadow-lg"
            >
                <div class="p-6">
                    <h2 class="text-xl font-bold mb-2 text-white">
                        {{ repo.name }}
                    </h2>
                    <p class="text-gray-300 mb-4">{{ repo.description }}</p>
                    <div class="flex flex-wrap gap-2 mb-4">
                        <span
                            v-if="repo.language"
                            class="px-3 py-1 bg-slate-700 rounded-full text-sm text-white"
                        >
                            {{ repo.language }}
                        </span>
                        <span
                            class="px-3 py-1 bg-slate-700 rounded-full text-sm text-white"
                        >
                            ⭐ {{ repo.stargazers_count }}
                        </span>
                    </div>
                    <a
                        :href="repo.html_url"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors duration-300"
                    >
                        View Repository
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const {
    data: repos,
    error,
    pending,
} = await useFetch('https://api.github.com/users/octocat/repos')

const sortedRepos = computed(() => {
    if (!repos.value) return []
    return repos.value
        .filter((repo) => repo.description)
        .sort((a, b) => b.stargazers_count - a.stargazers_count)
})
</script>
