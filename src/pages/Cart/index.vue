<template>
<div class="cartContainer">
  <div class="title">购物车</div>
  <div class="header">
    <span>30天无忧退货</span>
      <span>48小时快速退货</span>
    <span>满99元免邮费</span>
  </div>
  <div class="contentContainer">
    <!-- <image class="cartImg" src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-d6193bd6e4.png?imageView&type=webp" mode=""></image> -->
    <img class="cartImg" src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-d6193bd6e4.png?imageView&type=webp" alt="">
      <button>登录</button>
    <!-- <div class="addMore">去添加点什么吧</div> -->
  </div>
</div>
  
</template>

<script>
export default {
  name:"Cart",
  data() {
    return {

    };
  },
};
</script>

<style lang="stylus" scoped>
  .cartImg
    display block
    width 248px
    height 248px
    margin 300px auto 50px
	.cartContainer
		position relative
		height 100%
		background #f4f4f4
		.title
      background #fff
      font-size 36px
      line-height 80px
      padding-left 30px
		.header
			display flex
			background #eee
			span
				width 33.333%
				height 80px
				line-height 80px
				text-align center
				font-size 26px
		.contentContainer
      display flex
      flex-direction column
      align-items center
      margin auto
			button
				width 480px
				height 92px
				background #DD1A21
				color #fff
				font-size 32px
				line-height 92px
</style>
