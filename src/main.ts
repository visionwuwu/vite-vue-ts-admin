import { createApp } from 'vue'
import App from './App.vue'
import router from 'router/index'
import store from 'store/index'
import ElementPlus from 'plugins/element-plus'

const app = createApp(App)

app.config.globalProperties.$ELEMENT = { size: 'small', zIndex: 3000 }

app.use(router).use(store).use(ElementPlus).mount('#app')
