import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// 路由是指根据url的不同，展示不同的内容。use(router),使用插件
createApp(App).use(router).mount('#app')
