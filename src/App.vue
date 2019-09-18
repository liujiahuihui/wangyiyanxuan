<template>
  <div>
    <router-view></router-view>
    <Footer/>
  </div>
</template>
<script>
// 引入底部导航footer组件
import Footer from './components/Footer/Footer.vue'
export default {
  // 注册组件
  components: {
    Footer
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
