<template>
  <main>
    <div class="container">
      <aside-panel></aside-panel>
    </div>
  </main>
</template>

<script setup lang="ts">
import AsidePanel from "./components/AsidePanel.vue"
</script>

<style lang="scss" scoped>
main {
  background-color: $PRIMARY-DARK;
  min-height: 100vh;
}
</style>

