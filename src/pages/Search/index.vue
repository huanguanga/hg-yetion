<template>
  <div class="searchContainer">
    <div  class="header">
      <div class="search">

         <van-form 
          class="searchForm" 
          @submit="onSubmit"
          label-align="center"
        >
          <van-cell-group style="line-height: 60px;">
            <van-field 
              class="searchInput"
              size='large'
              v-model="value"
              placeholder="请输入用户名" 
              left-icon="search"
            >
              <van-button  slot="button" type="primary" size="small">取消</van-button>
            </van-field>
          </van-cell-group>
        </van-form>
      </div>

      <div class="hot">

      </div>
    </div>
  </div>
</template>

<script>
import { Form,Field, Button } from 'vant';
export default {
  name:"Search",
  components: {
    'van-form':Form,
    'van-field':Field,
    'van-button':Button,
  },
  props: {},
  data() {
    return {
      username:''
    };
  },
  methods: {
     onSubmit(values) {
      console.log('submit', values);
    },
  },
};
</script>

<style lang="stylus" scoped>
  .searchContainer
    height 100vh
    background #eee
    .header
      background #fff
      .search
        height 77px
        border-bottom  1px solid #eee
        padding 0 30px
        .searchInput
          font-size 30px
          width 100%
          margin-top 15px
          background #eee
</style>
