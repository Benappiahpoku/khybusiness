<!--
  KhyLogo.vue
  - Khy branded logo component with "K" shape
  - Mobile-first design optimized for Ghana's network conditions
  - Clean, minimal design with solid border
  - Supports white/dark color variants for different backgrounds
-->

<template>
  <div class="khy-logo">
    <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" class="w-10 h-10"
      :class="{ 'text-gray-800': !white, 'text-white': white }">
      <!-- Solid circular border -->
      <circle cx="24" cy="24" r="22" fill="none" stroke="currentColor" stroke-width="4" />

      <!-- "K" shape for Khy -->
      <g stroke="currentColor" stroke-width="6" stroke-linecap="round">
        <!-- Vertical left line of the "K" -->
        <line x1="16" y1="16" x2="16" y2="32" />

        <!-- Upper diagonal of the "K" -->
        <line x1="16" y1="24" x2="32" y2="16" />

        <!-- Lower diagonal of the "K" -->
        <line x1="16" y1="24" x2="32" y2="32" />
      </g>
    </svg>
  </div>
</template>

<script setup lang="ts">
// ===== Props & Configuration =====
/**
 * Props for KhyLogo
 * @param white - boolean (optional): Use white color for dark backgrounds
 */
defineProps<{
  white?: boolean
}>()
</script>

<style scoped>
/* ===== Logo Container Styling ===== */
.khy-logo {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

/* Mobile-first responsive adjustments */
@media (max-width: 640px) {
  .khy-logo svg {
    width: 2rem;
    /* 32px on mobile */
    height: 2rem;
    /* 32px on mobile */
  }
}
</style>