import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import "./assets/css/index.less"
import registerIcon from "@/global/register-icon";


const app = createApp(App)

app.use(createPinia())
app.use(router)
registerIcon(app)
app.mount('#app')
