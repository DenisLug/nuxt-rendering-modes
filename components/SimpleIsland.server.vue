<template>
  <div class="simple-island">
    <div class="server-section">
      <h3>🏝️ Server-Rendered Island</h3>
      <p class="server-note">✅ This content is rendered on the server and included in the initial HTML</p>
    </div>

    <div class="client-section">
      <h3>⚡ Client-Hydrated Component</h3>
      <CounterComponent nuxt-client />
      <p class="client-note">🔄 The counter above is hydrated on the client while the rest stays static</p>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title?: string;
}
</script>
