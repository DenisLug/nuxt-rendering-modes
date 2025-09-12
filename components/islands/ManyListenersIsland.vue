<template>
  <div class="many-listeners">
    <h3>🎧 Event Listeners Challenge ({{ listenerCount }} elements)</h3>
    <p>Total Events: {{ eventCount }} | Last: {{ lastEvent }}</p>

    <div class="listeners-grid">
      <div
        v-for="i in listenerCount"
        :key="i"
        @click="logEvent(`click-${i}`, $event)"
        @dblclick="logEvent(`dblclick-${i}`, $event)"
        @mousedown="logEvent(`mousedown-${i}`, $event)"
        @mouseup="logEvent(`mouseup-${i}`, $event)"
        @mouseenter="logEvent(`mouseenter-${i}`, $event)"
        @mouseleave="logEvent(`mouseleave-${i}`, $event)"
        @mousemove="logEvent(`mousemove-${i}`, $event)"
        @touchstart="logEvent(`touchstart-${i}`, $event)"
        @touchend="logEvent(`touchend-${i}`, $event)"
        @contextmenu.prevent="logEvent(`rightclick-${i}`, $event)"
        @keydown="logEvent(`keydown-${i}`, $event)"
        @keyup="logEvent(`keyup-${i}`, $event)"
        @focus="logEvent(`focus-${i}`, $event)"
        @blur="logEvent(`blur-${i}`, $event)"
        :tabindex="i"
        :class="{
          active: activeElements.has(i),
          hovered: hoveredElement === i,
        }"
        class="listener-element"
      >
        <span class="element-id">{{ i }}</span>
        <div class="element-content">
          <input
            v-model="elementValues[i]"
            @input="logEvent(`input-${i}`, $event)"
            @change="logEvent(`change-${i}`, $event)"
            @paste="logEvent(`paste-${i}`, $event)"
            @cut="logEvent(`cut-${i}`, $event)"
            @copy="logEvent(`copy-${i}`, $event)"
            :placeholder="`Input ${i}`"
            class="element-input"
          />
          <select
            v-model="elementSelections[i]"
            @change="logEvent(`select-change-${i}`, $event)"
            @focus="logEvent(`select-focus-${i}`, $event)"
            class="element-select"
          >
            <option value="">Select...</option>
            <option :value="`option-${j}`" v-for="j in 5" :key="j">Option {{ j }}</option>
          </select>
        </div>
        <div class="event-counter">{{ elementEvents[i] || 0 }}</div>
      </div>
    </div>

    <div class="controls">
      <button @click="addMoreElements" class="btn">Add 10 Elements</button>
      <button @click="resetEvents" class="btn reset-btn">Reset Events</button>
      <button @click="simulateActivity" class="btn activity-btn">Simulate Activity</button>
    </div>

    <div class="event-log">
      <h4>Recent Events (last 10):</h4>
      <ul>
        <li v-for="event in recentEvents.slice(-10)" :key="event.id">{{ event.type }} at {{ event.timestamp }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
interface EventLog {
  id: number;
  type: string;
  timestamp: string;
}

const listenerCount = ref(30);
const eventCount = ref(0);
const lastEvent = ref("");
const hoveredElement = ref(0);
const activeElements = ref(new Set<number>());
const elementValues = ref<Record<number, string>>({});
const elementSelections = ref<Record<number, string>>({});
const elementEvents = ref<Record<number, number>>({});
const recentEvents = ref<EventLog[]>([]);

let eventIdCounter = 0;

// Initialize element data
for (let i = 1; i <= listenerCount.value; i++) {
  elementValues.value[i] = "";
  elementSelections.value[i] = "";
  elementEvents.value[i] = 0;
}

const logEvent = (eventType: string, event: Event) => {
  eventCount.value++;
  lastEvent.value = eventType;

  const elementId = parseInt(eventType.split("-")[1]);
  elementEvents.value[elementId] = (elementEvents.value[elementId] || 0) + 1;

  // Track active/hovered states
  if (eventType.includes("mouseenter")) {
    hoveredElement.value = elementId;
  } else if (eventType.includes("mouseleave")) {
    hoveredElement.value = 0;
  } else if (eventType.includes("mousedown") || eventType.includes("focus")) {
    activeElements.value.add(elementId);
  } else if (eventType.includes("mouseup") || eventType.includes("blur")) {
    activeElements.value.delete(elementId);
  }

  // Add to recent events log
  recentEvents.value.push({
    id: eventIdCounter++,
    type: eventType,
    timestamp: new Date().toLocaleTimeString(),
  });

  // Keep only last 50 events in memory
  if (recentEvents.value.length > 50) {
    recentEvents.value = recentEvents.value.slice(-50);
  }
};

const addMoreElements = () => {
  const oldCount = listenerCount.value;
  listenerCount.value += 10;

  for (let i = oldCount + 1; i <= listenerCount.value; i++) {
    elementValues.value[i] = "";
    elementSelections.value[i] = "";
    elementEvents.value[i] = 0;
  }
};

const resetEvents = () => {
  eventCount.value = 0;
  lastEvent.value = "";
  recentEvents.value = [];
  activeElements.value.clear();

  for (let i = 1; i <= listenerCount.value; i++) {
    elementEvents.value[i] = 0;
  }
};

const simulateActivity = () => {
  // Simulate random events to show activity
  for (let i = 0; i < 20; i++) {
    setTimeout(() => {
      const randomElement = Math.floor(Math.random() * listenerCount.value) + 1;
      const randomEventType = ["click", "hover", "focus"][Math.floor(Math.random() * 3)];
      logEvent(`simulated-${randomEventType}-${randomElement}`, new Event("synthetic"));
    }, i * 100);
  }
};
</script>
