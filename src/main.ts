import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import router from '@/router'
import store from '@/store'

import App from '@/App.vue'
import '@/assets/tailwind.scss'
import '@/assets/scss/main.scss'

const app = createApp(App)

app.use(store)
app.use(router)
app.use(ElementPlus)
app.mount('#app')
