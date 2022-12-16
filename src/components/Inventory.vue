<template>
    <div class="inventory">
        <div class="inventory__panel" v-for="(panel, i) in 25" @drop="onDrop($event, i)" @dragover.prevent
            @dragenter.prevent>
            <InventoryItem v-if="findItem(i)" :id="i" @dragstart="onDargStart($event, i)" draggable="true">
            </InventoryItem>
        </div>
    </div>
</template>

<script setup lang="ts">
// @ts-ignore
import { useInventoryStore } from '@/stores/inventory'
import InventoryItem from "./InventoryUI/InventoryItem.vue"

const store = useInventoryStore();

const inventoryItems = store.items
const findItem = (id: number) => {
    for (let i = 0; i < inventoryItems.length; i++) {
        if (inventoryItems[i].position === id) return true;
    }
    return false
}

const onDargStart = (event: DragEvent, itemId: number) => {
    if (event.dataTransfer) {
        event.dataTransfer.dropEffect = 'move';
        event.dataTransfer.effectAllowed = 'move';
        event.dataTransfer.setData('itemId', itemId.toString())
    }
}

const onDrop = (event: DragEvent, panelId: number) => {

    if (event.dataTransfer?.getData('itemId')) {
        const itemId = parseInt(event.dataTransfer.getData('itemId'));
        // @ts-ignore
        const filteredItems = inventoryItems.filter(item => {
            return item.position === panelId
        })


        if (filteredItems.length === 0) {
            for (let i = 0; i < inventoryItems.length; i++) {
                if (inventoryItems[i].position == itemId) {
                    inventoryItems[i].position = panelId;
                }
            }
        }

    }
}

</script>

<style scoped lang="scss">
.inventory {
    border-radius: 12px;
    overflow: hidden;
    @extend %border;
    background-color: $PRIMARY-BORDER;
    display: grid;
    gap: 1px;
    ;
    grid-template-columns: repeat(5, 104px);
    grid-template-rows: repeat(5, 100px);

    &__panel {
        background-color: $SECONDARY-DARK;
        display: inline-grid;
    }
}
</style>