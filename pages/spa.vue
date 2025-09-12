<template>
  <div>
    <div class="page-header">
      <span class="badge spa">SPA</span>
      <h1>Single Page Application Demo</h1>
      <p>This page runs entirely in the browser</p>
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

<script setup lang="ts"></script>
