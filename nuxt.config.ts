import {resolve} from 'path'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/content', 
    '@pinia/nuxt',
    '@vee-validate/nuxt',
  ],
  ssr: false,
  alias: {
    // "@": resolve(__dirname,"/")
    assets: "/<rootDir>/assets"
  },
  css: [
    '~/assets/main.scss'
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
