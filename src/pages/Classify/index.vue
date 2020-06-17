<template>
  <div class="categoryContainer">
    <div class="searchHeader">
      <div class="search">
        <i class="iconfont icon-search"></i>
				<span>搜索商品</span>
			</div>
    </div>
    <div class="contentContainer">
			<div class="Nav">
				<div class="scollNav">
					<span class="text active">618专区</span>
					<span class="text">618专区</span>
					<span class="text">618专区</span>
					<span class="text">618专区</span>
					<span class="text">618专区</span>
					<span class="text">618专区</span>
					<span class="text">618专区</span>
					<span class="text">618专区</span>
				</div>
			</div>
			<div class="content">
				<div class="scollContent">
          <img class="cateImg" src="https://yanxuan.nosdn.127.net/e34ad71ea15d28af6710055dabb33dbf.jpg?quality=75&type=webp&imageView&thumbnail=0x196" alt="">
					<div class="proList">
						<div class='proItem'>
              <img class="img" src="https://yanxuan.nosdn.127.net/ddf44708f576246755479a7261932b3b.png?quality=75&type=webp&imageView&thumbnail=144x144" alt="">
							<span class="text">人气好物</span>
						</div>
            <div class='proItem'>
              <img class="img" src="https://yanxuan.nosdn.127.net/ddf44708f576246755479a7261932b3b.png?quality=75&type=webp&imageView&thumbnail=144x144" alt="">
							<span class="text">人气好物</span>
						</div>
            <div class='proItem'>
              <img class="img" src="https://yanxuan.nosdn.127.net/ddf44708f576246755479a7261932b3b.png?quality=75&type=webp&imageView&thumbnail=144x144" alt="">
							<span class="text">人气好物</span>
						</div>
            <div class='proItem'>
              <img class="img" src="https://yanxuan.nosdn.127.net/ddf44708f576246755479a7261932b3b.png?quality=75&type=webp&imageView&thumbnail=144x144" alt="">
							<span class="text">人气好物</span>
						</div>
            <div class='proItem'>
              <img class="img" src="https://yanxuan.nosdn.127.net/ddf44708f576246755479a7261932b3b.png?quality=75&type=webp&imageView&thumbnail=144x144" alt="">
							<span class="text">人气好物</span>
						</div>
            <div class='proItem'>
              <img class="img" src="https://yanxuan.nosdn.127.net/ddf44708f576246755479a7261932b3b.png?quality=75&type=webp&imageView&thumbnail=144x144" alt="">
							<span class="text">人气好物</span>
						</div>
            <div class='proItem'>
              <img class="img" src="https://yanxuan.nosdn.127.net/ddf44708f576246755479a7261932b3b.png?quality=75&type=webp&imageView&thumbnail=144x144" alt="">
							<span class="text">人气好物</span>
						</div>
					</div>
					
				</div>
			</div>
		</div>
  </div>
</template>

<script>
export default {
  name:"",
  components: {},
  props: {},
  data() {
    return {

    };
  },
};
</script>

<style lang="stylus" scoped>
  .categoryContainer
    background #fff
    height calc(100% - 97px)
    .searchHeader
      height 75px
      .search
        font-size 28px
        width 690px
        background #EDEDED
        height 58px
        line-height 58px
        border-radius 10px
        margin 15px auto
        text-align center
        i 
          font-size 28px
    .contentContainer
      height calc(100% - 76px -97px)
      display flex
      box-sizing border-box
      border-top 2px solid #eee
      .Nav
        width 162px
        font-size 26px
        text-align center
        box-sizing border-box
        border-right 2px solid #eee
        .scollNav
          display flex
          flex-direction column
          .text
            position relative
            height 50px
            margin-top 40px
            color #666
            font-size 28px
            &.active
              color #B4282D
              &::after
                content:''
                height 100%
                width 6px
                background #B4282D
                position absolute
                top:-15%
                left 0
      .content
        width 528px
        padding 30px 30px 21px 
        height 100%
        .scollContent
          display flex
          flex-direction column
          height 100%
          .cateImg
            width 520px
            height 19upx
            margin 0 auto
            flex-shrink 0
          .proList
            display flex
            flex-wrap wrap
            flex-shrink 0
            margin-top 20px
            .proItem
              width 33%
              padding 10px
              box-sizing border-box
              display flex 
              align-items center
              flex-direction column
              .img
                width 144px
                height 144px
              .text
                font-size 24px
                text-align center
</style>
