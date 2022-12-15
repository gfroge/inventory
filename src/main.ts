import { createApp,watch } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

const pinia = createPinia()
const app = createApp(App)

if(localStorage.getItem("userState")) {
    // @ts-ignore
    pinia.state.value = JSON.parse(localStorage.getItem("userState"))
}
watch(pinia.state,(state)=>{
    localStorage.setItem("userState",JSON.stringify(state))
}, {deep:true})

app.use(pinia)
app.mount('#app')
