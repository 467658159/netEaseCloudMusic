<template>
  <div class="recommend">
    <div class="swiperBox">
      <swiper loop auto :aspect-ratio="336/730" height="1.68rem" class="recommendSwiper" dots-position="center">
        <swiper-item v-for="(item, i) in bannerList" :key="i">
          <img width="100%" height="100%" :src="item.picUrl">
        </swiper-item>
      </swiper>
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
    .mx_flex_mid;
    .recommendSwiper{
      .mx_wh(3.6rem, 1.68rem);
      .mx_bdrs(.05rem);
    }
  }
  

</style>
