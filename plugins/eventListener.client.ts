export default defineNuxtPlugin((nuxtApp) => {
  if (import.meta.server) return;

  let eventListenerCount = 0;
  let firstListenerTime: number;
  let lastListenerTime: number;
  let beforeMountTime: number;
  let mountedTime: number;

  // Override addEventListener to track registrations
  const originalAddEventListener = EventTarget.prototype.addEventListener;
  EventTarget.prototype.addEventListener = function (type, listener, options) {
    eventListenerCount++;
    const currentTime = performance.now();

    // This log impacts the measurement and should only be used for debugging
    // console.log(`🎧 ${type} listener added to:`, this)

    if (!firstListenerTime) {
      firstListenerTime = currentTime;
    }

    lastListenerTime = currentTime;

    return originalAddEventListener.call(this, type, listener, options);
  };

  nuxtApp.hooks.hook("app:beforeMount", () => {
    beforeMountTime = performance.now();
    console.log("⚡ Before mount hook called");
  });

  nuxtApp.hooks.hook("app:mounted", () => {
    mountedTime = performance.now();
    const hydrationDuration = beforeMountTime ? mountedTime - beforeMountTime : 0;
    console.log(`💦 Hydration phase took: ${hydrationDuration.toFixed(2)}ms`);
  });

  nuxtApp.hooks.hook("app:suspense:resolve", () => {
    const duration = lastListenerTime - firstListenerTime;
    console.log(`📊 Total: ${eventListenerCount} listeners registered over ${duration}ms`);

    // Restore original method
    EventTarget.prototype.addEventListener = originalAddEventListener;
  });
});
