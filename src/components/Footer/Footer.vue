<template>
  <footer class="footer border-1px">
    <!-- :class="{'on':$route.path==='/home'}" 跳转首页高亮显示  -->
    <div class="item" :class="{'on':$route.path==='/home'}" @click="goto('/home')">
      <span class="item_icon">
        <i class="iconfont icon-menu-home-normal"></i>
      </span>
      <span class="text">首页</span>
    </div>


    <div class="item" :class="{'on':$route.path==='/fenlei'}" @click="goto('/fenlei')">
      <span class="item_icon">
        <i class="iconfont icon-classify"></i>
      </span>
      <span class="text">分类</span>
    </div>

    <div class="item" :class="{'on':$route.path==='/shiwu'}" @click="goto('/shiwu')">
      <span class="item_icon">
        <i class="iconfont icon-knowledge"></i>
      </span>
      <span class="text">识物</span>
    </div>

    <div class="item" :class="{'on':$route.path==='/shopping'}" @click="goto('/shopping')">
      <span class="item_icon">
        <i class="iconfont icon-dinglanyoucegouwuche21"></i>
      </span>
      <span class="text">购物车</span>
    </div>

    <div class="item" :class="{'on':$route.path==='/person'}" @click="goto('/person')">
      <span class="item_icon">
        <i class="iconfont icon-jingjirenjinglikehuxianxingcopy"></i>
      </span>
      <span class="text">个人</span>
    </div>

  </footer>
</template>

<script>
export default {
  methods:{
    // 上面的点击跳转 
    goto (path) {
      if (this.$router.path !==path){
        this.$router.replace(path)
      }
    }
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .footer
    top-border-1px(#e4e4e4)
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    background-color #fff
    width 100%
    height 50px
    display flex
    .item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      margin 5px
      color #999999 
      &.on
        color #DD1A21
      span
        font-size 12px
        margin-top 2px
        margin-bottom 2px
        .iconfont
          font-size 22px
</style>
