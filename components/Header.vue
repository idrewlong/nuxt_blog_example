<template>
    <header class="fixed top-0 left-0 right-0 z-50">
        <nav
            class="mx-auto p-4 bg-slate-900/80 backdrop-blur-lg"
            aria-label="Main navigation"
        >
            <!-- Content wrapper -->
            <div
                class="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between"
            >
                <!-- Mobile header -->
                <div class="flex items-center justify-between md:hidden">
                    <NuxtLink
                        to="/"
                        class="flex items-center"
                        aria-label="Go to homepage"
                    >
                        <span class="text-xl font-bold text-white">MyBlog</span>
                    </NuxtLink>

                    <div class="flex items-center gap-4">
                        <!-- Color mode switcher -->
                        <button
                            @click="toggleColorMode"
                            class="text-white hover:text-white/80 focus:outline-none rounded p-2"
                            :aria-label="'Switch to ' + nextColorMode + ' mode'"
                        >
                            <Icon
                                v-if="colorMode.value === 'dark'"
                                name="ph:sun-bold"
                                class="w-6 h-6"
                                aria-hidden="true"
                            />
                            <Icon
                                v-else
                                name="ph:moon-bold"
                                class="w-6 h-6"
                                aria-hidden="true"
                            />
                        </button>

                        <!-- Menu button -->
                        <button
                            id="menu-button"
                            type="button"
                            class="text-white hover:text-white/80 focus:outline-none rounded md:hidden"
                            :aria-expanded="showMenu"
                            aria-controls="main-navigation"
                            @click="toggleNavbar"
                        >
                            <span class="sr-only">Toggle menu</span>
                            <Icon
                                v-if="!showMenu"
                                name="ph:list-bold"
                                class="w-8 h-8"
                                aria-hidden="true"
                            />
                            <Icon
                                v-else
                                name="ph:x-bold"
                                class="w-8 h-8"
                                aria-hidden="true"
                            />
                        </button>
                    </div>
                </div>

                <!-- Desktop header -->
                <div
                    class="hidden md:flex md:items-center md:justify-between md:w-full"
                >
                    <NuxtLink
                        to="/"
                        class="flex items-center mr-8"
                        aria-label="Go to homepage"
                    >
                        <span class="text-2xl font-bold text-white"
                            >MyBlog</span
                        >
                    </NuxtLink>

                    <div class="flex items-center gap-8">
                        <div class="flex items-center gap-8 uppercase">
                            <NuxtLink
                                v-for="link in navigationLinks"
                                :key="link.to"
                                :to="link.to"
                                class="relative text-white/80 hover:text-white transition-colors duration-300 group py-2"
                                :class="{
                                    'text-white': $route.path === link.to,
                                }"
                            >
                                {{ link.label }}
                                <span
                                    class="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"
                                    :class="{
                                        'w-full': $route.path === link.to,
                                    }"
                                ></span>
                            </NuxtLink>
                        </div>

                        <!-- Color mode switcher -->
                        <button
                            @click="toggleColorMode"
                            class="text-white hover:text-white/80 focus:outline-none rounded p-2"
                            :aria-label="'Switch to ' + nextColorMode + ' mode'"
                        >
                            <Icon
                                v-if="colorMode.value === 'dark'"
                                name="ph:sun-bold"
                                class="w-6 h-6"
                                aria-hidden="true"
                            />
                            <Icon
                                v-else
                                name="ph:moon-bold"
                                class="w-6 h-6"
                                aria-hidden="true"
                            />
                        </button>
                    </div>
                </div>
            </div>
        </nav>

        <!-- Side Drawer Mobile Menu -->
        <Transition
            enter-active-class="transition-transform duration-300 ease-out"
            leave-active-class="transition-transform duration-200 ease-in"
            enter-from-class="-translate-x-full"
            enter-to-class="translate-x-0"
            leave-from-class="translate-x-0"
            leave-to-class="-translate-x-full"
        >
            <div
                v-show="showMenu"
                class="fixed inset-y-0 left-0 w-3/4 max-w-xs bg-slate-900/95 backdrop-blur-sm p-6 z-[101] shadow-2xl flex flex-col space-y-6 md:hidden focus:outline-none"
                role="dialog"
                aria-modal="true"
                id="main-navigation"
            >
                <div class="flex items-center justify-between mb-8">
                    <NuxtLink
                        to="/"
                        class="flex items-center"
                        aria-label="Go to homepage"
                        @click="closeNavbar"
                    >
                        <span class="text-xl font-bold text-white">MyBlog</span>
                    </NuxtLink>
                    <button
                        type="button"
                        class="text-white/90 hover:text-white focus:outline-none rounded"
                        @click="closeNavbar"
                        aria-label="Close menu"
                    >
                        <Icon
                            name="ph:x-bold"
                            class="w-8 h-8"
                            aria-hidden="true"
                        />
                    </button>
                </div>
                <nav class="flex flex-col" aria-label="Mobile navigation">
                    <NuxtLink
                        v-for="link in navigationLinks"
                        :key="link.to"
                        :to="link.to"
                        class="text-white/80 hover:text-white transition-colors duration-300 py-3 text-lg"
                        @click="closeNavbar"
                    >
                        {{ link.label }}
                    </NuxtLink>
                </nav>
            </div>
        </Transition>

        <!-- Backdrop -->
        <Transition
            enter-active-class="transition-opacity duration-200"
            leave-active-class="transition-opacity duration-200"
        >
            <div
                v-show="showMenu"
                class="fixed inset-0 bg-slate-900/50 z-[100] md:hidden"
                @click="closeNavbar"
                aria-hidden="true"
            ></div>
        </Transition>
    </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed, watch } from 'vue'

const showMenu = ref(false)
const colorMode = useColorMode()

const nextColorMode = computed(() =>
    colorMode.value === 'dark' ? 'light' : 'dark'
)

const toggleColorMode = () => {
    colorMode.preference = nextColorMode.value
}

// Watch for color mode changes
// watch(
//     () => colorMode.value,
//     (newValue) => {
//         console.log('Color mode changed to:', newValue)
//         console.log('Color mode preference:', colorMode.preference)
//     },
//     { immediate: true }
// )

const navigationLinks = [
    { to: '/about', label: 'About' },
    { to: '/blog', label: 'Blog' },
    { to: '/projects', label: 'Projects' },
    // { to: '/contact', label: 'Contact' },
]

const toggleNavbar = (event) => {
    event.stopPropagation()
    showMenu.value = !showMenu.value
}

const closeNavbar = () => {
    showMenu.value = false
}

// Handle clicks outside the menu
const handleOutsideClick = (event) => {
    const nav = document.querySelector('#main-navigation')
    const menuButton = document.querySelector('#menu-button')
    if (
        showMenu.value &&
        nav &&
        !nav.contains(event.target) &&
        !menuButton?.contains(event.target)
    ) {
        closeNavbar()
    }
}

// Close menu on escape key
const handleEscKey = (event) => {
    if (event.key === 'Escape' && showMenu.value) {
        closeNavbar()
    }
}

onMounted(() => {
    document.addEventListener('click', handleOutsideClick)
    document.addEventListener('keydown', handleEscKey)
})

onUnmounted(() => {
    document.removeEventListener('click', handleOutsideClick)
    document.removeEventListener('keydown', handleEscKey)
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s;
}
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
.fade-enter-to,
.fade-leave-from {
    opacity: 1;
}
</style>
