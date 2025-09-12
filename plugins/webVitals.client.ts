import { onFCP, type Metric } from "web-vitals";

export default defineNuxtPlugin(() => {
  onFCP((metric: Metric) => {
    console.log("FCP:", metric.value, metric);
  });
});
