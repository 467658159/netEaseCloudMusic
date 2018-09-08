<template>
  <div class="container">
  <swiper loop auto :aspect-ratio="336/750">
    <swiper-item v-for="(item, i) in bannerList" :key="i">
      <img width="100%" height="100%" :src="item.picUrl">
    </swiper-item>
  </swiper>
  </div>

</template>

<script>
  import { Swiper, SwiperItem } from 'vux'
  import { mapState } from 'vuex'

  export default {
      name: 'Recommend',
      components:{
        Swiper,
        SwiperItem
      },
      data () {
          return {

          }
      },
      created () {
        this.$store.dispatch('initLoginStatus');
        this.$store.dispatch('initRecommend');
      },
      computed: {
        ...mapState({
          bannerList: state => state.recommend.bannerList
        })
      }
  }
</script>

<style scoped>

</style>
