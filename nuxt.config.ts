export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",

  devtools: {
    enabled: false,

    timeline: {
      enabled: false,
    },
  },

  ssr: true,

  experimental: {
    componentIslands: {
      selectiveClient: true,
    },
  },

  routeRules: {
    "/": { },
    "/ssr": { },
    "/csr": { ssr: false },
    "/lazy-hydrated-ssr": { },
    "/hydration-issue-ssr": { },
    "/ssg": { prerender: true },
    "/islands/islands": { },
    "/islands/math-ssr": { },
    "/islands/math-csr": { ssr: false, },
    "/islands/math-no-island-ssr": { },
  },

  css: ["~/assets/styles/global.scss"],

  app: {
    head: {
      title: "Nuxt Rendering Modes Demo",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content: "Demonstration of different rendering modes in Nuxt 3: SSR, CSR, SSG, and Islands",
        },
      ],
    },
  },
});
