<template>
    <div @click="openMenu" @mousedown="addDragClass" @mouseup="removeDragClass" ref="invItem" @dragend="removeDragClass"
        class="inventory-item">
        <div class="inventory-item__image">
            <img :src="inventoryItem.imagePath" alt="item">
        </div>
        <div class="inventory-item__number">
            {{ inventoryItem.count }}
        </div>
    </div>
</template>

<script setup lang="ts">
// @ts-ignore
import { useInventoryStore, useMenuStore } from '@/stores/inventory'
import { ref } from 'vue'

const invItem = ref();

const props = defineProps({
    id: { type: Number, default: null }
})

const store = useInventoryStore();
const inventoryItems = store.items;
let inventoryItem: any;

for (let i = 0; i < inventoryItems.length; i++) {
    if (inventoryItems[i].position === props.id)
        inventoryItem = inventoryItems[i]
}

const addDragClass = () => {
    invItem.value?.classList.add('drag')
}
const removeDragClass = () => {
    invItem.value?.classList.remove('drag')
}

const menuStore = useMenuStore();
const { open } = menuStore;
const openMenu = () => {
    open(inventoryItem.imagePath, inventoryItem.position)
}
</script>

<style scoped lang="scss">
.inventory-item {
    width: 100%;
    height: 100%;
    // min-width: 105px;
    // min-height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    transition: all 0.2s ease 0s;

    cursor: pointer;

    &:hover {
        background-color: #2F2F2F;
    }

    &__image {
        width: 54px;
        height: 54px;

        img {
            max-width: 100%;
            pointer-events: none;
        }
    }

    &__number {
        position: absolute;
        bottom: 0;
        right: 0;
        background-color: $SECONDARY-DARK;
        width: 16px;
        height: 16px;
        border-top: 1px solid $PRIMARY-BORDER;
        border-left: 1px solid $PRIMARY-BORDER;
        border-radius: 6px 0 0 0;
        display: flex;
        align-items: center;
        justify-content: center;

        font-family: 'Inter', sans-serif;
        font-weight: 500;
        font-size: 10px;
        color: rgba($color: #ffffff, $alpha: 0.4);
    }

    &.drag {
        border-radius: 24px;
        border: 1px solid $PRIMARY-BORDER;
    }
}
</style>