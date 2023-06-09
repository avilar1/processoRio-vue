import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'
import router from './router'
import { key, store } from './store'
import axios from 'axios'

// import './assets/main.css'

const app = createApp(App)


app
.use(router)
.use(store, key)
app.mount('#app')
