<template>
  <main>
    <div class="container">
      <AsidePanel class="aside"/>
      <Inventory class="inventory"/>
      <BottomBar class="snackbar"/>
    </div>
  </main>
</template>

<script setup lang="ts">
import AsidePanel from "./components/AsidePanel.vue"
import BottomBar from "./components/BottomBar.vue"
import Inventory from "./components/Inventory.vue"
</script>

<style lang="scss" scoped>
main {
  background-color: $PRIMARY-DARK;
  min-height: 100vh;
  padding-top: 60px;
}
.container{
  display: grid;
  gap:24px;
  grid-template-areas:
    "aside inventory"
    "snackbar snackbar";
  grid-template-columns: 236px 552px;
}
.aside{
  grid-area: aside;
}
.inventory {
  grid-area: inventory;
}
.snackbar {
  grid-area: snackbar;
}

</style>

