<template>
  <div class="complex-form">
    <h3>📋 Complex Interactive Form ({{ inputCount }} inputs)</h3>
    <p>Form validity: {{ isFormValid ? "✅ Valid" : "❌ Invalid" }} | Changes: {{ changeCount }}</p>

    <div class="form-grid">
      <div v-for="i in inputCount" :key="i" class="form-group">
        <label :for="`input-${i}`">Field {{ i }}:</label>
        <input
          :id="`input-${i}`"
          v-model="formData[`field${i}`]"
          @input="handleInput(i)"
          @focus="handleFocus(i)"
          @blur="handleBlur"
          @keyup="handleKeyup(i)"
          :class="{
            focused: focusedField === i,
            valid: isFieldValid(i),
            invalid: !isFieldValid(i) && formData[`field${i}`],
          }"
          :placeholder="`Enter value for field ${i}`"
          type="text"
          class="form-input"
        />
        <span v-if="fieldErrors[i]" class="error">{{ fieldErrors[i] }}</span>
      </div>
    </div>

    <div class="checkboxes">
      <label v-for="i in 20" :key="i" class="checkbox-label">
        <input v-model="checkboxes[i]" @change="handleCheckboxChange(i)" type="checkbox" />
        Option {{ i }}
      </label>
    </div>

    <div class="form-actions">
      <button @click="validateForm" :disabled="!canSubmit" class="btn validate-btn">
        Validate ({{ validFields }}/{{ inputCount }})
      </button>
      <button @click="addMoreFields" class="btn add-fields-btn">Add 5 Fields</button>
      <button @click="clearForm" class="btn clear-btn">Clear All</button>
    </div>
  </div>
</template>

<script setup lang="ts">
const inputCount = ref(25);
const changeCount = ref(0);
const focusedField = ref(0);
const formData = ref<Record<string, string>>({});
const checkboxes = ref<Record<number, boolean>>({});
const fieldErrors = ref<Record<number, string>>({});

// Initialize form data
for (let i = 1; i <= inputCount.value; i++) {
  formData.value[`field${i}`] = "";
  checkboxes.value[i] = false;
}

const isFieldValid = (fieldId: number) => {
  const value = formData.value[`field${fieldId}`];
  return value && value.length >= 3;
};

const validFields = computed(() => {
  let count = 0;
  for (let i = 1; i <= inputCount.value; i++) {
    if (isFieldValid(i)) count++;
  }
  return count;
});

const isFormValid = computed(() => validFields.value === inputCount.value);
const canSubmit = computed(() => validFields.value > inputCount.value / 2);

const handleInput = (fieldId: number) => {
  changeCount.value++;
  const value = formData.value[`field${fieldId}`];

  if (value && value.length < 3) {
    fieldErrors.value[fieldId] = "Minimum 3 characters";
  } else {
    delete fieldErrors.value[fieldId];
  }
};

const handleFocus = (fieldId: number) => {
  focusedField.value = fieldId;
};

const handleBlur = () => {
  focusedField.value = 0;
};

const handleKeyup = (fieldId: number) => {
  // Simulate complex validation on keyup
  const value = formData.value[`field${fieldId}`];
  if (value && value.includes("invalid")) {
    fieldErrors.value[fieldId] = 'Cannot contain "invalid"';
  }
};

const handleCheckboxChange = (checkboxId: number) => {
  changeCount.value++;
};

const validateForm = () => {
  for (let i = 1; i <= inputCount.value; i++) {
    handleInput(i);
  }
};

const addMoreFields = () => {
  const oldCount = inputCount.value;
  inputCount.value += 5;

  for (let i = oldCount + 1; i <= inputCount.value; i++) {
    formData.value[`field${i}`] = "";
  }
};

const clearForm = () => {
  for (let i = 1; i <= inputCount.value; i++) {
    formData.value[`field${i}`] = "";
    checkboxes.value[i] = false;
    delete fieldErrors.value[i];
  }
  changeCount.value = 0;
};
</script>
