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
					<span class="text" :class="{active:navId === item.id}" v-for="(item) in NavListData" :key="item.id" @click="changeNavId(item.id)">{{item.name}}</span>
				</div>
			</div>
			<div class="content">
				<div class="scollContent" v-if="navListObj">
          <img class="cateImg" :src="navListObj.imgUrl" alt="">
					<div class="proList">
						<div class='proItem' v-for="(item) in navListObj.subCateList" :key="item.id">
              <img class="img" :src="item.wapBannerUrl" alt="">
							<span class="text">{{item.name}}</span>
						</div>
					</div>			
				</div>
			</div>
		</div>
  </div>
</template>

<script>
import {reqNavListData} from "@/api"
export default {
  name:"Classify",
  components: {},
  props: {},
  data() {
    return {
      NavListData:[],
      navId:0
    };
  },
  mounted() {
    this.getNavListData()
  },
  methods: {
    async getNavListData(){
      const result = await reqNavListData()
      this.NavListData = result
      this.navId = result[0].id
    },
    changeNavId(navId){
      this.navId = navId
    }
  },
  computed: {
    navListObj(){
      return this.NavListData.find(item=>item.id === this.navId)
    }
  },
};
</script>

<style lang="stylus" scoped>
  .categoryContainer
    background #fff
    height 100%
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
