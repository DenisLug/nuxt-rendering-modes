<template>
  <header class="header">
    <div class="header-content">
      <h1 class="logo">
        <a href="/">🚀 Nuxt Render Modes Demo</a>
      </h1>
      <nav class="nav">
        <a href="/" class="nav-link" :class="{ active: isActive('/') }">Home</a>
        <a href="/ssr" class="nav-link" :class="{ active: isActive('/ssr') }">SSR</a>
        <a href="/csr" class="nav-link" :class="{ active: isActive('/csr') }">CSR</a>
        <a href="/lazy-hydrated-ssr" class="nav-link" :class="{ active: isActive('/lazy-hydrated-ssr') }"
          >Lazy Hydrated SSR</a
        >
<!--        <a href="/hydration-issue-ssr" class="nav-link" :class="{ active: isActive('/hydration-issue-ssr') }"
          >Hydration Issue SSR</a
        >-->
        <a href="/ssg" class="nav-link" :class="{ active: isActive('/ssg') }">SSG</a>
        <a href="/islands/islands" class="nav-link" :class="{ active: isActive('/islands/islands') }">Islands Demo</a>
        <a href="/islands/math-ssr" class="nav-link" :class="{ active: isActive('/islands/math-ssr') }"
          >Math Islands SSR</a
        >
        <a href="/islands/math-csr" class="nav-link" :class="{ active: isActive('/islands/math-csr') }"
          >Math Islands CSR</a
        >
        <a href="/islands/markdown" class="nav-link" :class="{ active: isActive('/islands/markdown') }"
          >Markdown Islands</a
        >
<!--        <a
          href="/islands/math-no-island-ssr"
          class="nav-link"
          :class="{ active: isActive('/islands/math-no-island-ssr') }"
          >Math No Islands</a
        >-->
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
const route = useRoute();

// Function to check if a link is active
const isActive = (path: string) => {
  if (path === "/") {
    return route.path === "/";
  }
  return route.path.startsWith(path);
};
</script>
