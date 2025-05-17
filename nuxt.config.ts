// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
    // future: {
    //     compatibilityVersion: 4,
    // },
    devtools: { enabled: true },
    modules: ['@nuxt/fonts', '@nuxt/content', '@nuxt/image'],
    css: ['~/assets/css/main.css'],
    vite: {
        plugins: [tailwindcss()],
    },
})
