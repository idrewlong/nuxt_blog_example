<template>
    <ul
        :class="[
            level === 0
                ? 'space-y-2'
                : 'space-y-1 pl-4 border-l border-blue-200 dark:border-slate-700 ml-2',
        ]"
    >
        <li v-for="link in links" :key="link.id">
            <NuxtLink
                :to="{ path: route.path, hash: `#${link.id}` }"
                :class="[
                    'block transition-colors',
                    level === 0
                        ? 'py-1 px-2 rounded-lg font-medium'
                        : 'py-0.5 px-2 rounded',
                    isActive(link.id)
                        ? 'text-blue-600 dark:text-blue-400 font-bold bg-blue-50 dark:bg-slate-700'
                        : 'text-gray-900 dark:text-gray-100',
                    'hover:text-blue-700 dark:hover:text-blue-300',
                ]"
                :aria-current="isActive(link.id) ? 'true' : undefined"
            >
                {{ link.text }}
            </NuxtLink>
            <TocLinks
                v-if="link.children && link.children.length"
                :links="link.children"
                :level="level + 1"
            />
        </li>
    </ul>
</template>

<script setup>
const route = useRoute()
const props = defineProps({
    links: Array,
    level: {
        type: Number,
        default: 0,
    },
})

function isActive(id) {
    if (typeof window === 'undefined') return false
    return window.location.hash === `#${id}`
}
</script>
