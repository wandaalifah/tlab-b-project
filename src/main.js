import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import './style.css'
import './axios'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const app = createApp(App);
const pinia = createPinia()

app.use(pinia);
app.use(router);
pinia.use(piniaPluginPersistedstate)

app.mount('#app');
