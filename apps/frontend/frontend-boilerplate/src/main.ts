import './assets/main.css'
import '@repo/ui/styles.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
<<<<<<< HEAD
import vueQueryPlugin from './plugins/vueQuery'
=======

>>>>>>> d04ade7 (Add frontend boilerplate in monorepo)
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
<<<<<<< HEAD
app.use(vueQueryPlugin);
=======
>>>>>>> d04ade7 (Add frontend boilerplate in monorepo)

app.mount('#app')
