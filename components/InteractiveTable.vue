<template>
  <div class="interactive-table">
    <h3>📊 Interactive Data Table ({{ rows }}x{{ columns }} = {{ totalCells }} cells)</h3>
    <p>Clicks: {{ cellClicks }} | Sorted by: {{ sortColumn || "None" }} {{ sortOrder }}</p>

    <div class="table-controls">
      <button @click="addRow" class="btn">Add Row</button>
      <button @click="addColumn" class="btn">Add Column</button>
      <button @click="randomizeData" class="btn">Randomize</button>
      <button @click="resetTable" class="btn reset-btn">Reset</button>
    </div>

    <div class="table-wrapper">
      <table class="data-table">
        <thead>
          <tr>
            <th
              v-for="col in columns"
              :key="col"
              @click="sortBy(col)"
              @mouseenter="hoveredColumn = col"
              @mouseleave="hoveredColumn = null"
              :class="{
                sorted: sortColumn === col,
                hovered: hoveredColumn === col,
              }"
              class="sortable-header"
            >
              Column {{ col }}
              <span v-if="sortColumn === col">{{ sortOrder === "asc" ? "↑" : "↓" }}</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in rows" :key="row">
            <td
              v-for="col in columns"
              :key="`${row}-${col}`"
              @click="handleCellClick(row, col)"
              @dblclick="handleCellDoubleClick(row, col)"
              @mouseenter="handleCellHover(row, col)"
              @mouseleave="handleCellLeave"
              @contextmenu.prevent="handleCellRightClick(row, col)"
              :class="{
                selected: selectedCells.has(`${row}-${col}`),
                hovered: hoveredCell === `${row}-${col}`,
                edited: editedCells.has(`${row}-${col}`),
              }"
              class="interactive-cell"
              :title="`Row ${row}, Col ${col} - Value: ${getCellValue(row, col)}`"
            >
              <input
                v-if="editingCell === `${row}-${col}`"
                v-model="tableData[`${row}-${col}`]"
                @blur="stopEditing"
                @keyup.enter="stopEditing"
                @keyup.escape="cancelEditing"
                class="cell-input"
                ref="cellInputs"
              />
              <span v-else>{{ getCellValue(row, col) }}</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
const rows = ref(15);
const columns = ref(8);
const cellClicks = ref(0);
const sortColumn = ref<number | null>(null);
const sortOrder = ref<"asc" | "desc">("asc");
const hoveredColumn = ref<number | null>(null);
const hoveredCell = ref<string | null>(null);
const selectedCells = ref(new Set<string>());
const editedCells = ref(new Set<string>());
const editingCell = ref<string | null>(null);
const tableData = ref<Record<string, string>>({});

const totalCells = computed(() => rows.value * columns.value);

// Initialize table data
const initializeTable = () => {
  tableData.value = {};
  for (let r = 1; r <= rows.value; r++) {
    for (let c = 1; c <= columns.value; c++) {
      tableData.value[`${r}-${c}`] = `R${r}C${c}`;
    }
  }
};

initializeTable();

const getCellValue = (row: number, col: number) => {
  return tableData.value[`${row}-${col}`] || `R${row}C${col}`;
};

const handleCellClick = (row: number, col: number) => {
  cellClicks.value++;
  const cellKey = `${row}-${col}`;

  if (selectedCells.value.has(cellKey)) {
    selectedCells.value.delete(cellKey);
  } else {
    selectedCells.value.add(cellKey);
  }
};

const handleCellDoubleClick = (row: number, col: number) => {
  const cellKey = `${row}-${col}`;
  editingCell.value = cellKey;
  editedCells.value.add(cellKey);

  nextTick(() => {
    const input = document.querySelector(".cell-input") as HTMLInputElement;
    input?.focus();
  });
};

const handleCellHover = (row: number, col: number) => {
  hoveredCell.value = `${row}-${col}`;
};

const handleCellLeave = () => {
  hoveredCell.value = null;
};

const handleCellRightClick = (row: number, col: number) => {
  const cellKey = `${row}-${col}`;
  tableData.value[cellKey] = `🎯 R${row}C${col}`;
  editedCells.value.add(cellKey);
};

const stopEditing = () => {
  editingCell.value = null;
};

const cancelEditing = () => {
  if (editingCell.value) {
    const [row, col] = editingCell.value.split("-").map(Number);
    tableData.value[editingCell.value] = `R${row}C${col}`;
    editingCell.value = null;
  }
};

const sortBy = (column: number) => {
  if (sortColumn.value === column) {
    sortOrder.value = sortOrder.value === "asc" ? "desc" : "asc";
  } else {
    sortColumn.value = column;
    sortOrder.value = "asc";
  }

  // Simple sort simulation (just for interaction, not actual sorting)
  cellClicks.value++;
};

const addRow = () => {
  rows.value++;
  for (let c = 1; c <= columns.value; c++) {
    tableData.value[`${rows.value}-${c}`] = `R${rows.value}C${c}`;
  }
};

const addColumn = () => {
  columns.value++;
  for (let r = 1; r <= rows.value; r++) {
    tableData.value[`${r}-${columns.value}`] = `R${r}C${columns.value}`;
  }
};

const randomizeData = () => {
  for (let r = 1; r <= rows.value; r++) {
    for (let c = 1; c <= columns.value; c++) {
      tableData.value[`${r}-${c}`] = Math.floor(Math.random() * 1000).toString();
    }
  }
  editedCells.value.clear();
};

const resetTable = () => {
  selectedCells.value.clear();
  editedCells.value.clear();
  editingCell.value = null;
  sortColumn.value = null;
  cellClicks.value = 0;
  initializeTable();
};
</script>
