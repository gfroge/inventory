import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useInventoryStore = defineStore('inventory', () => {
    const items = ref([
        { imagePath: 'images/item1.svg', count: 4, position: 5 },
        { imagePath: 'images/item2.svg', count: 2, position: 1 },
        { imagePath: 'images/item3.svg', count: 5, position: 2 }
    ])



    function decrement(id: number) {
        items.value[id].count--;
    }

    return { items, decrement }
})

export const useMenuStore = defineStore('menu', {
    state: () => (
        {
            isOpened: false,
            imagePath: ''
        }
    ),
    actions: {
        open(path: string) {
            this.isOpened = true
            this.imagePath = path
            console.log(this.isOpened);

        },
        close() {
            this.isOpened = false
        }
    },

})

