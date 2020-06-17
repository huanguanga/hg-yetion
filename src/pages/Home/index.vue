<template>
  <div class="indexContainer">
    <!-- 头部 -->
    <div class="header-wrap">
      <div class="header">
        <a href="/" class="logo">
          <img src="../../static/image/logo.png">
        </a>
        <div class="search">
          <i class="iconfont icon-search"></i>
          <span class="text">搜索商品, 共33483款好物</span>
        </div>
        <div class="login">登陆</div>
      </div>
      <div class="nav">
        <div class="navItem active">推荐</div>
        <div class="navItem">居家生活</div>
        <div class="navItem">居家生活</div>
        <div class="navItem">居家生活</div>
        <div class="navItem more">↓</div>
      </div>
    </div>
    <!-- 轮播图 -->
    <div class="swiper">
      <div v-swiper:mySwiper="swiperOption">
        <div class="swiper-wrapper">
          <div class="swiper-slide" :key="banner.id" v-for="banner in swiperList">
            <img :src="banner.imgUrl">
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </div>
    <!-- 小标签 -->
    <div class="servicePolicyList">
      <div class="servicePolicyItem">
        <img src="https://yanxuan.nosdn.127.net/a03dd909803b9ac032eba58b7253a2f6.png">
        <span>网易自营品牌</span>
      </div>
      <div class="servicePolicyItem">
        <img src="https://yanxuan.nosdn.127.net/2d0402ffcd52b3ec3b07422681c42a89.png">
        <span>30天无忧退货</span>
      </div>
      <div class="servicePolicyItem">
        <img src="https://yanxuan.nosdn.127.net/eb61ee48e8942dbd1784c9ee75ebe955.png">
        <span>48小时快速退款</span>
      </div>
    </div>
    <!-- 内容区域 -->
    <div class="content-wrap">
      <!-- 内容区导航 -->
      <div class="kingKongNav">
        <div class="kingKongItem">
          <img src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png" alt="">
          <span>新品首发</span>
        </div>
        <div class="kingKongItem">
          <img src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png" alt="">
          <span>新品首发</span>
        </div>
        <div class="kingKongItem">
          <img src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png" alt="">
          <span>新品首发</span>
        </div>
        <div class="kingKongItem">
          <img src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png" alt="">
          <span>新品首发</span>
        </div>
        <div class="kingKongItem">
          <img src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png" alt="">
          <span>新品首发</span>
        </div>
        <div class="kingKongItem">
          <img src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png" alt="">
          <span>新品首发</span>
        </div>
        <div class="kingKongItem">
          <img src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png" alt="">
          <span>新品首发</span>
        </div>
        <div class="kingKongItem">
          <img src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png" alt="">
          <span>新品首发</span>
        </div>
        <div class="kingKongItem">
          <img src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png" alt="">
          <span>新品首发</span>
        </div>
        <div class="kingKongItem">
          <img src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png" alt="">
          <span>新品首发</span>
        </div>
      </div>
      <!-- 热销榜 -->
      <div class="allRanking">
        <div class="title">类目热销榜</div>
        <div class="content">
          <div class="line1">
            <div class="item1">
              <span>热销榜</span>
              <img src="https://yanxuan-item.nosdn.127.net/da0321f5813855f287c274e1d8a7cf9f.png?quality=75&type=webp&imageView&thumbnail=200x200" alt="">
            </div>
            <div class="item1" :style="{'margin-right':'0'}">
              <span>热销榜</span>
              <img src="https://yanxuan-item.nosdn.127.net/da0321f5813855f287c274e1d8a7cf9f.png?quality=75&type=webp&imageView&thumbnail=200x200" alt="">
            </div>
          </div>
          <div class="line2">
            <div class="item2">
              <span>居家生活榜</span>
              <img src="https://yanxuan-item.nosdn.127.net/644a27b8e168b8fe8e43ccaad934b24e.png?quality=75&type=webp&imageView&thumbnail=200x200" alt="">
            </div>
            <div class="item2">
              <span>居家生活榜</span>
              <img src="https://yanxuan-item.nosdn.127.net/644a27b8e168b8fe8e43ccaad934b24e.png?quality=75&type=webp&imageView&thumbnail=200x200" alt="">
            </div>
            <div class="item2">
              <span>居家生活榜</span>
              <img src="https://yanxuan-item.nosdn.127.net/644a27b8e168b8fe8e43ccaad934b24e.png?quality=75&type=webp&imageView&thumbnail=200x200" alt="">
            </div>
            <div class="item2">
              <span>居家生活榜</span>
              <img src="https://yanxuan-item.nosdn.127.net/644a27b8e168b8fe8e43ccaad934b24e.png?quality=75&type=webp&imageView&thumbnail=200x200" alt="">
            </div>
            <div class="item2">
              <span>居家生活榜</span>
              <img src="https://yanxuan-item.nosdn.127.net/644a27b8e168b8fe8e43ccaad934b24e.png?quality=75&type=webp&imageView&thumbnail=200x200" alt="">
            </div>
            <div class="item2">
              <span>居家生活榜</span>
              <img src="https://yanxuan-item.nosdn.127.net/644a27b8e168b8fe8e43ccaad934b24e.png?quality=75&type=webp&imageView&thumbnail=200x200" alt="">
            </div>
            <div class="item2">
              <span>居家生活榜</span>
              <img src="https://yanxuan-item.nosdn.127.net/644a27b8e168b8fe8e43ccaad934b24e.png?quality=75&type=webp&imageView&thumbnail=200x200" alt="">
            </div>
            <div class="item2">
              <span>居家生活榜</span>
              <img src="https://yanxuan-item.nosdn.127.net/644a27b8e168b8fe8e43ccaad934b24e.png?quality=75&type=webp&imageView&thumbnail=200x200" alt="">
            </div>
          </div>
        </div>
      </div>
      <!-- 限时购物 -->
      <div class="flashSale">
        <div class="title">
          <span>限时购</span>
          <span>更多></span>
        </div>
        <div class="content">
          <div class="flashSaleItem">
            <img src="https://yanxuan-item.nosdn.127.net/279a516ca9574f7205e337072dd6e3bd.png?quality=75&type=webp&imageView&thumbnail=216x216" alt="">
            <div>
              <span class="currentPrice">￥259</span>
              <span class="originalPrice">￥300</span>
            </div>
          </div>
          <div class="flashSaleItem">
            <img src="https://yanxuan-item.nosdn.127.net/279a516ca9574f7205e337072dd6e3bd.png?quality=75&type=webp&imageView&thumbnail=216x216" alt="">
            <div>
              <span class="currentPrice">￥259</span>
              <span class="originalPrice">￥300</span>
            </div>
          </div>
          <div class="flashSaleItem">
            <img src="https://yanxuan-item.nosdn.127.net/279a516ca9574f7205e337072dd6e3bd.png?quality=75&type=webp&imageView&thumbnail=216x216" alt="">
            <div>
              <span class="currentPrice">￥259</span>
              <span class="originalPrice">￥300</span>
            </div>
          </div>
          <div class="flashSaleItem">
            <img src="https://yanxuan-item.nosdn.127.net/279a516ca9574f7205e337072dd6e3bd.png?quality=75&type=webp&imageView&thumbnail=216x216" alt="">
            <div>
              <span class="currentPrice">￥259</span>
              <span class="originalPrice">￥300</span>
            </div>
          </div>
          <div class="flashSaleItem">
            <img src="https://yanxuan-item.nosdn.127.net/279a516ca9574f7205e337072dd6e3bd.png?quality=75&type=webp&imageView&thumbnail=216x216" alt="">
            <div>
              <span class="currentPrice">￥259</span>
              <span class="originalPrice">￥300</span>
            </div>
          </div>
          <div class="flashSaleItem">
            <img src="https://yanxuan-item.nosdn.127.net/279a516ca9574f7205e337072dd6e3bd.png?quality=75&type=webp&imageView&thumbnail=216x216" alt="">
            <div>
              <span class="currentPrice">￥259</span>
              <span class="originalPrice">￥300</span>
            </div>
          </div>
        </div>
      </div>
      <!-- 新品首发 -->
      <div class="newShop">
        <div class="title">
          <span>新品首发</span>
          <span>更多></span>
        </div>
        <div class="content">
          <div class="newShopItem">
            <img src="https://yanxuan-item.nosdn.127.net/8e617ab715bc9025b142482758421350.png?type=webp&imageView&quality=65&thumbnail=330x330" alt="">
            <span class="name">体积缩小约30%，氮化镓PD快充充电器</span>
            <span class="price">￥200</span>
            <span class="tagWraper">不可用券/红包</span>
          </div>
          <div class="newShopItem">
            <img src="https://yanxuan-item.nosdn.127.net/8e617ab715bc9025b142482758421350.png?type=webp&imageView&quality=65&thumbnail=330x330" alt="">
            <span class="name">体积缩小约30%，氮化镓PD快充充电器</span>
            <span class="price">￥200</span>
            <span class="tagWraper">不可用券/红包</span>
          </div>
          <div class="newShopItem">
            <img src="https://yanxuan-item.nosdn.127.net/8e617ab715bc9025b142482758421350.png?type=webp&imageView&quality=65&thumbnail=330x330" alt="">
            <span class="name">体积缩小约30%，氮化镓PD快充充电器</span>
            <span class="price">￥200</span>
            <span class="tagWraper">不可用券/红包</span>
          </div>
          <div class="newShopItem">
            <img src="https://yanxuan-item.nosdn.127.net/8e617ab715bc9025b142482758421350.png?type=webp&imageView&quality=65&thumbnail=330x330" alt="">
            <span class="name">体积缩小约30%，氮化镓PD快充充电器</span>
            <span class="price">￥200</span>
            <span class="tagWraper">不可用券/红包</span>
          </div>
          <div class="newShopItem">
            <img src="https://yanxuan-item.nosdn.127.net/8e617ab715bc9025b142482758421350.png?type=webp&imageView&quality=65&thumbnail=330x330" alt="">
            <span class="name">体积缩小约30%，氮化镓PD快充充电器</span>
            <span class="price">￥200</span>
            <span class="tagWraper">不可用券/红包</span>
          </div>
          <div class="newShopItem">
            <img src="https://yanxuan-item.nosdn.127.net/8e617ab715bc9025b142482758421350.png?type=webp&imageView&quality=65&thumbnail=330x330" alt="">
            <span class="name">体积缩小约30%，氮化镓PD快充充电器</span>
            <span class="price">￥200</span>
            <span class="tagWraper">不可用券/红包</span>
          </div>
        </div>
      </div>
    </div>
    <!-- 底部 -->
    <div class="footer">
      <div class="content">
        <div class="bd">
          <a href="#" class="btn btn1">下载APP</a>
          <a href="#" class="btn">电脑版</a>
        </div>
        <div class="copyright">
          <p>网易公司版权所有 © 1997-</p>
          <p>食品经营许可证：JY13301080111719</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:"Home",
  data() {
    return {
      swiperOption:{
        // 参数选项,显示小点
        pagination:{
          el:'.swiper-pagination'
        },
        //循环
        loop:true,
        //每张播放时长3秒，自动播放
        autoplay:{
          delay:1000,
          disableOnInteraction:false
        },
        //滑动速度
        speed:1000,
        // delay:1000
      },
      swiperList:[
        {
            id:'001',
            imgUrl:"https://yanxuan.nosdn.127.net/9fc95f708136dec4090a3709c2ea4956.jpg?type=webp&imageView&quality=75&thumbnail=750x0"
        },
        {
            id:'002',
            imgUrl:"https://yanxuan.nosdn.127.net/c8f6ea8569234c98d5f33c757b3b7960.jpg?type=webp&imageView&quality=75&thumbnail=750x0"
        },
        {
            id:'003',
            imgUrl:"https://yanxuan.nosdn.127.net/312792df0b7970f73676111c731a7721.jpg?type=webp&imageView&quality=75&thumbnail=750x0"
        }
      ]
    };
  }
};
</script>

<style lang="stylus" scoped>
  .indexContainer
    background #fff
    .header-wrap
      .header
        display flex  
        margin 16px 30px
        align-items center
        .logo
          display block
          margin-right 20px
          img
            display block
            width 138px
            height 40px
        .search
          width 442px
          height 56px
          background #ededed
          border-radius 8px
          text-align center
          line-height 56px  
          .iconfont
            font-size 28px
            margin-right 10px 
          .text
            font-size 28px
        .login
          width 72px
          height 38px
          border 1px solid #DD1A21
          color #DD1A21
          line-height 38px
          text-align center
          margin-left 16px
          border-radius 8px
          font-size 24px
      .nav
        display flex
        height 60px
        padding-left 15px
        .navItem
          font-size 28px
          line-height 60px
          margin-left 20px
          padding 0 16px
          box-sizing border-box
          &.active
            color #BB2C08
            border-bottom 4px solid #BB2C08
    .swiper
      .swiper-slide
        height 296px
        img
          width 100%
          height 100%
    .servicePolicyList
      display flex
      justify-content space-around
      align-items center
      height 72px
      img 
        width 32px
        height 32px
        vertical-align middle
      span 
        vertical-align middle
        margin-left 8px
    .content-wrap
      padding-bottom 20px
      background #ededed
      .kingKongNav
        display flex
        flex-wrap wrap
        height 372px
        background #fff
        .kingKongItem
          display flex
          flex-direction column
          align-items center
          width 110px
          margin 10px 20px
          img 
            width 110px
            height 110px
          span 
            margin-top 10px
            font-size 24px
      .allRanking
        padding 0 30px
        background #fff
        margin-top 20px
        .title
          height 100px
          line-height 100px
          font-size 32px
        .content
          display flex
          flex-direction column
          .line1
            display flex
            margin-bottom 10px
            .item1
              display flex
              width 340px
              height 200px
              margin-right 10px
              justify-content space-around
              align-items center
              background rgb(249, 243, 228)
              span  
                margin-left 30px
                font-size 28px
                &:after
                  position relative
                  top 10px
                  content ''
                  display block
                  width 50px
                  height 4px
                  background black
          .line2
            display flex
            flex-wrap wrap
            justify-content space-between
            .item2
              display flex
              flex-direction column
              align-items center
              width 165px
              height 180px
              background rgb(245, 245, 245);
              justify-content space-around
              margin-bottom 10px
              img
                width 120px
                height 120px
      .flashSale
        padding 0 30px
        background #fff
        margin-top 20px
        .title
          display flex
          justify-content space-between
          height 100px
          font-size 32px
          line-height 100px
        .content
          display flex
          flex-wrap wrap
          justify-content space-between
          .flashSaleItem
            display flex
            flex-direction column
            width 216px
            margin-bottom 30px
            img 
              width 216px
              height 216px
              background rgb(245, 245, 245);
            .currentPrice
              color red
              font-size 28px
            .originalPrice
              text-decoration line-through
              margin-left 20px
      .newShop
        background #fff
        margin-top 20px
        padding 0 30px
        .title
          display flex
          justify-content space-between
          height 100px
          font-size 32px
          line-height 100px
        .content
          display flex
          flex-wrap wrap
          justify-content space-between
          .newShopItem
            width 216px
            display flex
            flex-direction column
            margin-bottom 13px
            img 
              width 216px
              height 216px
              background rgb(245, 245, 245);
            .name            
              display -webkit-box
              -webkit-box-orient vertical
              -webkit-line-clamp 2
              overflow: hidden
              font-size 22px
            .price
              color rgb(221, 26, 33);
              font-size 28px
              margin-top 5px
              flex-shrink 0
            .tagWraper
              border 1px solid rgb(221, 26, 33);
              border-radius 15px
              font-size 18px
              line-height 28px
              height 28px
              text-align center
              margin-top 5px
    .footer
      height 244px
      border 1px solid rgba(0, 0, 0, 0.15)
      background #414141
      .content
        margin 54px 20px 28px
        height 162px
        .bd
          display flex
          justify-content center
          margin-bottom 36px
          .btn
            display block
            color #fff
            width 170px
            height 60px
            border 1px solid rgb(153, 153, 153);
            line-height 60px
            text-align center
            &.btn1
              margin-right 50px
        .copyright
          color rgb(153, 153, 153);
          p
            text-align center
</style>  
