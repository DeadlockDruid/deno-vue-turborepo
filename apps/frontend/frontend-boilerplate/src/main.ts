import './assets/main.css'
import '@repo/ui/styles.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import vueQueryPlugin from './plugins/vueQuery'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vueQueryPlugin);

app.mount('#app')
