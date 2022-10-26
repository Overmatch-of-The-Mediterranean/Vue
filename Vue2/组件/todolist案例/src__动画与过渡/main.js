import Vue from 'vue'
import App from './App.vue'
import './assets/base.css'
Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    beforeCreate() {
        Vue.prototype.$bus = this
    }
}).$mount('#app')

console.log(Vue.prototype);
