<template>
  <div class="counter">
    <div class="counter-display">
      <span class="counter-value">{{ count }}</span>
      <span class="counter-label">clicks</span>
    </div>
    <div class="counter-controls">
      <button @click="decrement" class="btn btn-secondary">-</button>
      <button @click="reset" class="btn">Reset</button>
      <button @click="increment" class="btn btn-secondary">+</button>
    </div>
    <p class="counter-note">This component is interactive and works the same across all rendering modes!</p>
  </div>
</template>

<script setup lang="ts">
const count = ref<number>(0);

const increment = (): void => {
  count.value++;
};
const decrement = (): void => {
  count.value--;
};
const reset = (): void => {
  count.value = 0;
};
</script>
