<template>
  <div class="recommend">
    <swiper loop auto :aspect-ratio="336/730" height="1.68rem">
      <swiper-item v-for="(item, i) in bannerList" :key="i">
        <img width="100%" height="100%" :src="item.picUrl">
      </swiper-item>
    </swiper>
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
    computed: {
      ...mapState({
        bannerList: state => state.recommend.bannerList,
      })
    }
  }
</script>
<style scoped lang="less">

</style>
