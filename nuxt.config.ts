// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
    // future: {
    //     compatibilityVersion: 4,
    // },
    devtools: { enabled: true },

    modules: [
        '@nuxt/fonts',
        '@nuxt/content',
        '@nuxt/image',
        '@nuxt/icon',
        '@nuxtjs/color-mode',
    ],
    colorMode: {
        classSuffix: '',
        preference: 'system',
        fallback: 'light',
        dataValue: 'theme',
        storageKey: 'nuxt-color-mode',
    },
    css: ['~/assets/css/main.css'],
    vite: {
        plugins: [tailwindcss()],
    },
})
