import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
export const useInventoryStore = defineStore('counter', {
    state: () => ({
        items: [
            {imagePath: 'images/item1.svg',count:4},
            {imagePath: 'images/item2.svg',count:2},
            {imagePath: 'images/item3.svg',count:5}
        ]
    }),
    getters: {

    },
    actions: {

    },
})
