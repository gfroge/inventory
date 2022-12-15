<template>
    <div class="inventory">
        <div class="inventory__panel" v-for="(panel,i) in 25">
            <InventoryItem :id="i"></InventoryItem>
        </div>
    </div>
</template>

<script setup lang="ts">
import InventoryItem from "./InventoryUI/InventoryItem.vue"
</script>

<style scoped lang="scss">
.inventory {
    border-radius: 12px;
    overflow: hidden;
    @extend %border;
    background-color: $PRIMARY-BORDER;
    display: grid;
    gap: 1px;;
    grid-template-columns: repeat(5,105px);
    grid-template-rows: repeat(5,100px);
    &__panel {
        background-color: $SECONDARY-DARK;
        display: inline-grid;
    }
}
</style>