<template>
  <div id="root">
    <router-view></router-view>
    <div class="tabBar">
      <div class="nav">
        <router-link to="/home" class="navItem">
          <i class="iconfont icon-home"></i>
          <span class="title">首页</span>
        </router-link>
        <router-link to="/classify" class="navItem">
          <i class="iconfont icon-all"></i>
          <span class="title">分类</span>
        </router-link>
        <router-link to="/buy" class="navItem">
          <i class="iconfont icon-credit-level"></i>
          <span class="title">值得买</span>
        </router-link>
        <router-link to="/cart" class="navItem">
          <i class="iconfont icon-cart-Empty"></i>
          <span class="title">购物车</span>
        </router-link>
        <router-link to="/personal" class="navItem">
          <i class="iconfont icon-bussiness-man"></i>
          <span class="title">个人中心</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  
}
</script>

<style lang="stylus" scoped>
  #root
    margin-bottom 97px
    width 100%
    background #eee
    height 100%
    .tabBar
      position fixed
      bottom 0
      width 100%
      height 97px 
      border-top 1px solid #d9d9d9
      background #fff
      .nav
        display flex
        justify-content space-around
        padding-top  15px
        .navItem
          display flex
          flex-direction column
          align-items center
          text-decoration: none
          i
            font-size 50px
            line-height 40px
          .title
            font-size 20px
          &.active
            color #BB2C08
</style>
