import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useInventoryStore = defineStore('inventory', () => {
    const items = ref([
        { imagePath: 'images/item1.svg', count: 4, position: 5 },
        { imagePath: 'images/item2.svg', count: 2, position: 1 },
        { imagePath: 'images/item3.svg', count: 5, position: 2 }
    ])

    function removeItem(position: number, countToDel: number) {
        console.log('remove',position,countToDel);
        
        items.value.forEach((item) => {   
            if (item.position === position) {
                item.count -= countToDel
            }
        })
    }

    return { items, removeItem }
})

export const useMenuStore = defineStore('menu', {
    state: () => (
        {
            isOpened: false,
            imagePath: '',
            position: 0
        }
    ),
    actions: {
        open(path: string, position: number) {
            this.isOpened = true
            this.imagePath = path
            this.position = position
            return this.position;
        },
        close() {
            this.isOpened = false
        }
    },

})

