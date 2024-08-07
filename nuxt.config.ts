// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  modules: ["nuxt-chatgpt", "@nuxt/ui"],
  chatgpt: {
    apiKey: process.env.OPENAI_API_KEY
  },
})