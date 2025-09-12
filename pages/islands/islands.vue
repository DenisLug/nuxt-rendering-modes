<template>
  <div>
    <div class="page-header">
      <span class="badge ssr">Slow Islands</span>
      <h1>Hydration Performance Demo</h1>
      <p>This page demonstrates slow hydration with many interactive elements</p>
    </div>

    <div class="card">
      <h2>🔘 Component 1: Many Buttons</h2>
      <NuxtIsland name="ManyButtonsIsland" :props="{ buttonClicks }" />
    </div>

    <div class="card">
      <h2>📋 Component 2: Complex Form</h2>
      <NuxtIsland name="ComplexFormIsland" />
    </div>

    <div class="card">
      <h2>📊 Component 3: Interactive Table</h2>
      <NuxtIsland name="InteractiveTableIsland" />
    </div>

    <div class="card">
      <h2>🎧 Component 4: Event Listeners</h2>
      <NuxtIsland name="ManyListenersIsland" />
    </div>
  </div>
</template>

<script setup lang="ts">
const buttonClicks = ref<Record<number, number>>({});
</script>
