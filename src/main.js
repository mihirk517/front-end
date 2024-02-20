import 'bootstrap/dist/css/bootstrap.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './inteceptor/axios'
import 'bootstrap/dist/js/bootstrap.bundle'

const app = createApp(App)

app.use(router)

app.mount('#app')
