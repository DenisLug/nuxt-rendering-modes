<template>
  <div class="markdown-output">
    <div v-html="renderedHtml"></div>
  </div>
</template>

<script setup lang="ts">
import MarkdownIt from "markdown-it";

interface Props {
  message?: string;
}

const props = withDefaults(defineProps<Props>(), {
  message: "",
});

const md = new MarkdownIt();

const renderedHtml = computed(() => {
  if (!props.message) {
    return '<p class="markdown-placeholder">Start typing markdown in the textarea above…</p>';
  }
  return md.render(props.message);
});
</script>

