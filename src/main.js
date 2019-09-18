import Vue from 'vue'
import App from './App.vue'

// 引入路由并注册
import router from './router';
Vue.config.productionTip = false

/* eslint-disable */
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
