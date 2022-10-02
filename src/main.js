import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

// import './assets/main.css'

const app = createApp(App)
// Vue.use(BootstrapVue)
// Vue.use(IconsPlugin)
app.use(router)

app.mount('#app')
