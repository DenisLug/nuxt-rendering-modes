<template>
  <div>
    <div class="page-header">
      <span class="badge ssr">SSR</span>
      <h1>Server-Side Rendering Demo (Hydration Issue)</h1>
      <p>This page is rendered on the server for each request</p>
    </div>

    <div class="card">
      <h2>🚨 Hydration Issue Demo</h2>
      <p>Environment: {{ environment }}</p>
    </div>

    <div class="card">
      <h2>🔘 Component 1: Many Buttons</h2>
      <ManyButtons />
    </div>

    <div class="card">
      <h2>📋 Component 2: Complex Form</h2>
      <ComplexForm />
    </div>

    <div class="card">
      <h2>📊 Component 3: Interactive Table</h2>
      <InteractiveTable />
    </div>

    <div class="card">
      <h2>🎧 Component 4: Event Listeners</h2>
      <ManyListeners />
    </div>
  </div>
</template>

<script setup lang="ts">
const environment = import.meta.client ? 'CLIENT' : 'SERVER';
</script>
