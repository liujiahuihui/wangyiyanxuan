import Vue from 'vue'
import VueRouter from 'vue-router';
import routes from './router.js';
Vue.use(VueRouter)
// 配置路由
 const router =  new VueRouter({
  mode:'history',
  routes
})

export default router