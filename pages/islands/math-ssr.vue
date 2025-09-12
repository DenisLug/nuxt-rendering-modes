<template>
  <div>
    <div class="page-header">
      <span class="badge island">Islands SSR</span>
      <h1>Nuxt Islands Demo</h1>
      <p>Selective hydration with server components</p>
    </div>

    <div class="card">
      <h2>🏝️ Server Component Island</h2>
      <p>This component demonstrates server rendering with MathJax integration:</p>

      <!-- MathJax island demonstration -->
      <NuxtIsland name="MathExampleIsland" :props="{ equation }" />
      <div class="equation-input">
        <label>Edit equation:</label>
        <input v-model="equation" type="text" placeholder="Enter LaTeX equation" class="equation-text-input" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const equation = ref("x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}");
</script>
