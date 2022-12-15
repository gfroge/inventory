<template>
  <main>
    <div class="container">
      <aside-panel></aside-panel>
      <bottom-bar></bottom-bar>
    </div>
  </main>
</template>

<script setup lang="ts">
import AsidePanel from "./components/AsidePanel.vue"
import BottomBar from "./components/BottomBar.vue"
</script>

<style lang="scss" scoped>
main {
  background-color: $PRIMARY-DARK;
  min-height: 100vh;
  padding-top: 60px;
}
</style>

