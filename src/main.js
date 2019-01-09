import Vue from 'vue'
// console.log(Vue);
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

let v = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// console.log(v);