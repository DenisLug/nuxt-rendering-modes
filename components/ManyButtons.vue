<template>
  <div class="many-buttons">
    <h3>🔘 Many Interactive Buttons ({{ buttonCount }} buttons)</h3>
    <p>Clicks: {{ totalClicks }} | Last clicked: {{ lastClicked }}</p>
    <div class="buttons-grid">
      <button
        v-for="i in buttonCount"
        :key="i"
        @click="handleClick(i)"
        @mouseenter="handleHover(i)"
        @mouseleave="handleLeave(i)"
        :class="{ active: hoveredButton === i, clicked: clickedButtons.has(i) }"
        class="interactive-btn"
      >
        Button {{ i }} ({{ buttonClicks[i] || 0 }})
      </button>
    </div>
    <div class="controls">
      <button @click="resetClicks" class="btn reset-btn">Reset All</button>
      <button @click="buttonCount += 10" class="btn add-btn">Add 10 More</button>
    </div>
  </div>
</template>

<script setup lang="ts">
const buttonCount = ref(50);
const totalClicks = ref(0);
const lastClicked = ref(0);
const hoveredButton = ref(0);
const clickedButtons = ref(new Set<number>());
const buttonClicks = ref<Record<number, number>>({});

const handleClick = (buttonId: number) => {
  totalClicks.value++;
  lastClicked.value = buttonId;
  clickedButtons.value.add(buttonId);
  buttonClicks.value[buttonId] = (buttonClicks.value[buttonId] || 0) + 1;
};

const handleHover = (buttonId: number) => {
  hoveredButton.value = buttonId;
};

const handleLeave = () => {
  hoveredButton.value = 0;
};

const resetClicks = () => {
  totalClicks.value = 0;
  lastClicked.value = 0;
  clickedButtons.value.clear();
  buttonClicks.value = {};
};
</script>
