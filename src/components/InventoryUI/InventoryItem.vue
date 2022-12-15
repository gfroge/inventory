<template>
    <div v-if="inventoryItem && inventoryItem.count >0" @click="decrement(props.id)" class="inventory-item">
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
import { useInventoryStore } from '@/stores/inventory'
import { storeToRefs } from 'pinia'

const props = defineProps({
    id: { type: Number, default: null }
})


const store = useInventoryStore();
const { decrement } = store
// const {items} = store;

// @ts-ignore
let inventoryItem = store.items[props.id]



</script>

<style scoped lang="scss">
.inventory-item {
    width: 100%;
    height: 100%;
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
            user-drag: none;
            -webkit-user-drag: none;
            user-select: none;
            -moz-user-select: none;
            -webkit-user-select: none;
            -ms-user-select: none;
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
}
</style>