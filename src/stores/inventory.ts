import { defineStore } from 'pinia'
export const useInventoryStore = defineStore('inventory', {
    state: () => ({
        items: [
            { imagePath: 'images/item1.svg', count: 4 },
            { imagePath: 'images/item2.svg', count: 2 },
            { imagePath: 'images/item3.svg', count: 5 }
        ],
    }),
    getters: {

    },
    actions: {
        decrement(id: number) {
            this.items[id].count--;
        }
    },
})
