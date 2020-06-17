<template>
  <div class="buyContainer">
    <div class="top">
      <i class="iconfont icon-home"></i>
      <div>值得买</div>
      <i class="iconfont icon-search"></i>
      <i class="iconfont icon-cart-Empty"></i>
    </div>
    <div class="">

    </div>
  </div>
</template>

<script>
export default {
  name:"Buy",
  data() {
    return {

    };
  },
};
</script>

<style lang="stylus" scoped>
  .buyContainer
    height 100%
    .top
      display flex
      padding 0 12px
      height 50px
      line-height 50px
      justify-content space-between
      i 
        font-size 40px
      
</style>
