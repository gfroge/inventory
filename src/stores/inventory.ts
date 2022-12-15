import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export const useInventoryStore = defineStore('inventory', () => {
    const items = ref([
        { imagePath: 'images/item1.svg', count: 4 },
        { imagePath: 'images/item2.svg', count: 2 },
        { imagePath: 'images/item3.svg', count: 5 }
    ])
    


    function decrement(id: number) {
        items.value[id].count--;
    }

    return {items,decrement}
})
