import { createApp } from 'vue'
import router from './router'
import App from './App.vue'

const app = createApp(App)
app.config.unwrapInjectedRef = true
app.use(router).mount('#app')