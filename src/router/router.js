 // 引入五个路由组件
import Home from '../pages/Home/Home.vue';
import Fenlei from '../pages/Fenlei/Fenlei.vue';
import Shiwu from '../pages/Shiwu/Shiwu.vue';
import Shopping from '../pages/Shopping/Shopping.vue';
import Person from '../pages/Person/Person.vue';

// 配置路由,path后小写，component后大写
export default [
  {
    path: '/home',
    component: Home
  },
  {
    path: '/fenlei',
    component: Fenlei
  },
  {
    path: '/shiwu',
    component: Shiwu
  },
  {
    path: '/shopping',
    component: Shopping
  },
  {
    path: '/person',
    component: Person
  },
  {
    path: '/',
    redirect: '/home'
  }
]