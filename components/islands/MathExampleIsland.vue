<template>
  <div class="equations-section">
    <div class="equation-card">
      <h4>Quadratic Formula</h4>
      <div class="equation-display" v-html="renderedEquation"></div>

      <p class="equation-description">The solution to the quadratic equation ax² + bx + c = 0</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { mathjax } from "mathjax-full/js/mathjax.js";
import { TeX } from "mathjax-full/js/input/tex.js";
import { SVG } from "mathjax-full/js/output/svg.js";
import { liteAdaptor } from "mathjax-full/js/adaptors/liteAdaptor.js";
import { RegisterHTMLHandler } from "mathjax-full/js/handlers/html.js";
import { AllPackages } from "mathjax-full/js/input/tex/AllPackages.js";

interface Props {
  title?: string;
  equation?: string;
}

const props = withDefaults(defineProps<Props>(), {
  title: "Math Example",
  equation: "x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}",
});

const emit = defineEmits<{
  (e: "update:equation", value: string): void;
}>();

// Initialize MathJax for server-side rendering
const adaptor = liteAdaptor();
RegisterHTMLHandler(adaptor);

const tex = new TeX({ packages: AllPackages });
const svg = new SVG({ fontCache: "none" });
const html = mathjax.document("", { InputJax: tex, OutputJax: svg });

// Function to render a single equation
const renderEquation = (equation: string): string => {
  try {
    const node = html.convert(equation, { display: true });
    return adaptor.outerHTML(node);
  } catch (error) {
    console.error("Error rendering equation:", equation, error);
    return `<span style="color: #dc2626;">Error rendering equation</span>`;
  }
};

const renderedEquation = computed(() => renderEquation(props.equation));
</script>
