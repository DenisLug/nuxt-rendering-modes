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
    "/": { prerender: false },
    "/ssr": { prerender: false },
    "/lazy-hydrated-ssr": { prerender: false },
    "/hydration-issue-ssr": { prerender: false },
    "/spa": { ssr: false },
    "/ssg": { prerender: true },
    "/islands/islands": { prerender: false },
    "/islands/math-ssr": { prerender: false },
    "/islands/math-csr": { ssr: false, prerender: false },
    "/islands/math-no-island-ssr": { prerender: false },
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
          content: "Demonstration of different rendering modes in Nuxt 3: SSR, SPA, SSG, and Islands",
        },
      ],
    },
  },
});
