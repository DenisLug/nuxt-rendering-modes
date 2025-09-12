<template>
  <div>
    <div class="hero">
      <h1>🚀 Nuxt Rendering Modes Demo</h1>
      <p class="hero-subtitle">Explore the differences between SSR, SPA, SSG, and Nuxt Islands</p>
    </div>

    <div class="grid">
      <div class="card">
        <div class="card-header">
          <span class="badge ssr">SSR</span>
          <h3>Server-Side Rendering</h3>
        </div>
        <p>Pages are rendered on the server for each request. Great for SEO and initial page load performance.</p>
        <div class="features">
          <span class="feature">✅ SEO Friendly</span>
          <span class="feature">✅ Fast First Paint</span>
          <span class="feature">⚡ Dynamic Content</span>
        </div>
        <NuxtLink to="/ssr" class="btn">View SSR Demo</NuxtLink>
      </div>

      <div class="card">
        <div class="card-header">
          <span class="badge spa">SPA</span>
          <h3>Single Page Application</h3>
        </div>
        <p>App runs entirely in the browser after initial load. Smooth navigation but slower first load.</p>
        <div class="features">
          <span class="feature">⚡ Fast Navigation</span>
          <span class="feature">🔄 Rich Interactions</span>
          <span class="feature">⚠️ SEO Challenges</span>
        </div>
        <NuxtLink to="/spa" class="btn">View SPA Demo</NuxtLink>
      </div>

      <div class="card">
        <div class="card-header">
          <span class="badge ssg">SSG</span>
          <h3>Static Site Generation</h3>
        </div>
        <p>Pages are pre-built at build time. Best performance and SEO for static content.</p>
        <div class="features">
          <span class="feature">🚀 Ultra Fast</span>
          <span class="feature">✅ Perfect SEO</span>
          <span class="feature">💰 Low Cost Hosting</span>
        </div>
        <NuxtLink to="/ssg" class="btn">View SSG Demo</NuxtLink>
      </div>

      <div class="card">
        <div class="card-header">
          <span class="badge island">Islands</span>
          <h3>Nuxt Islands</h3>
        </div>
        <p>Selective hydration for components. Combine static content with interactive islands.</p>
        <div class="features">
          <span class="feature">⚡ Selective Hydration</span>
          <span class="feature">🏝️ Component Isolation</span>
          <span class="feature">📈 Performance Boost</span>
        </div>
        <NuxtLink to="/islands/islands" class="btn">View Islands Demo</NuxtLink>
      </div>
    </div>
  </div>
</template>
