<template>
  <div>
    <div class="page-header">
      <span class="badge ssr">Slow SSR</span>
      <h1>Hydration Performance Demo</h1>
      <p>This page demonstrates slow hydration with many interactive elements</p>
    </div>

    <div class="card">
      <h2>🔘 Component 1: Many Buttons</h2>
      <ManyButtons />
    </div>

    <div class="card">
      <h2>📋 Component 2: Complex Form</h2>
      <LazyComplexForm hydrate-on-visible />
    </div>

    <div class="card">
      <h2>📊 Component 3: Interactive Table</h2>
      <LazyInteractiveTable hydrate-on-visible />
    </div>

    <div class="card">
      <h2>🎧 Component 4: Event Listeners</h2>
      <LazyManyListeners hydrate-on-visible />
    </div>
  </div>
</template>

<script setup lang="ts"></script>
