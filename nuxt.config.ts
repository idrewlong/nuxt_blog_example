// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
    // future: {
    //     compatibilityVersion: 4,
    // },
    devtools: { enabled: true },
    app: {
        pageTransition: { name: 'fade', mode: 'out-in' },
    },

    modules: [
        '@nuxt/fonts',
        '@nuxt/content',
        '@nuxt/image',
        '@nuxt/icon',
        '@nuxtjs/color-mode',
        '@nuxtjs/seo',
    ],
    // content: {
    //     highlight: {
    //         theme: {
    //             default: 'min-light',
    //             dark: 'min-dark',
    //         },
    //     },
    // },
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
    site: {
        url: 'https://nuxtseo.com',
        name: 'My Blog',
    },

    schemaOrg: {
        identity: 'Person',
    },

    seo: {
        meta: {
            description:
                'This is a demo of Nuxt SEO showcasing all of the modules.',
        },
    },
    nitro: {
        prerender: {
            routes: ['/sitemap.xml'],
        },
    },
})
