<template>
  <div class="recommend">
    <!-- 轮播图 -->
    <div class="swiperBox">
      <swiper  loop auto :aspect-ratio="336/730" height="1.68rem"  width="100%" class="recommendSwiper" dots-position="center">
        <swiper-item v-for="(item, i) in bannerList" :key="i">
          <img width="100%" height="100%" v-lazy="item.picUrl">
        </swiper-item>
      </swiper>
    </div>
    <!-- 分类 -->
    <div class="category">
      <ul>
        <li><span><i class="iconfont icon-FM"></i></span><p>私人FM</p></li>
        <li><span><i class="iconfont icon-tuijian"></i></span><p>每日推荐</p></li>
        <li><span><i class="iconfont icon-gedan"></i></span><p>歌单</p></li>
        <li><span><i class="iconfont icon-paihangbang"></i></span><p>排行榜</p></li>
      </ul>
    </div>
  </div>
</template>
<script>
  import { mapState } from 'vuex'
  import { Swiper, SwiperItem } from 'vux'

  export default {
    name: 'recommend',
    components: {
      Swiper,
      SwiperItem
    },
    data () {
        return {

        }
    },
    created () {
      this.$store.dispatch('initRecommend');
    },
    watch: {
      $route (to, from) {
        // console.log(to, from)
      }
    },
    computed: {
      ...mapState({
        bannerList: state => state.recommend.bannerList,
      })
    }
  }
</script>
<style scoped lang="less">
  @import '../../../../assets/style/mixin.less';
  .swiperBox{
    .recommendSwiper{
      margin: 0rem .075rem;
      .mx_bdrs(.05rem);
    }
  }
  .category{
    ul {
      .mx_wh(3.75rem, 1.2rem);
      .mx_flex_mid;
      flex-direction: row;
      justify-content: space-around;
      border-bottom: .01rem solid #efefef;
      li{
        text-align: center;
        span{
          display: block;
          .mx_wh(.55rem, .55rem);
          .mx_flex_mid;
          background-color: #ce3d3a;
          .mx_bdrs(50%);
          box-shadow: 0px 0px 4px #d66664;
          i.iconfont{
            .mx_fc(.3rem, #fff);
          }
        }
        p{
          margin-top: .05rem;
        }
      }
    }

  }

</style>
