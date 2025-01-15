import {createApp} from 'vue'
import {createPinia} from 'pinia'
import App from './App.vue'
import "./assets/css/index.less"
import 'emoji-picker-element';
import registerIcon from "@/global/register-icon";
import router from "@/router";
import useMessageStore from "@/stores/message/message";

const app = createApp(App)
app.use(createPinia())
registerIcon(app)
app.use(router)

app.mount('#app')
