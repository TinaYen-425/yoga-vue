import { createApp } from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'bootstrap'
import Loading from 'vue3-loading-overlay'
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css'
import { currency,date } from '@/methods/filters'

import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(router)
app.use(VueAxios, axios)
app.component('Loading', Loading)
app.config.globalProperties.$filters = { currency,date  }
app.mount('#app')
