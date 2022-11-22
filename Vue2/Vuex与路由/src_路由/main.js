import Vue from 'vue'
import App from './App.vue'
// import './assets/base.css'
import './assets/bootstrap.css'
import VueRouter from 'vue-router'
import router from './router/index'
Vue.config.productionTip = false
Vue.use(VueRouter)

new Vue({
    render: h => h(App),
    router
}).$mount('#app')

