<template>
  <div>
    <div class="page-header">
      <span class="badge island">No Islands</span>
      <h1>Nuxt Islands Demo</h1>
      <p>Selective hydration with server components</p>
    </div>

    <div class="card">
      <h2>🏝️ Server Component Island</h2>
      <p>This component demonstrates server rendering with MathJax integration:</p>

      <!-- MathJax island demonstration -->
      <MathExampleNoIsland />
    </div>
  </div>
</template>

<script setup lang="ts"></script>
