<template>
  <div class="container">
  <swiper loop auto :aspect-ratio="336/730" height="1.68rem">
    <swiper-item v-for="(item, i) in bannerList" :key="i">
      <img width="100%" height="100%" :src="item.picUrl">
    </swiper-item>
  </swiper>
  <router-link to="/account" style="display:block;width:100%;">账号账号账号账号账号账号账号账号账号账号账号账号账号账号账号账号账号账号账号账号账号账号账号账号账号账号账号账号账号账号</router-link>
  </div>

</template>

<script>
  import { Swiper, SwiperItem } from 'vux'
  import { mapState } from 'vuex'
  import util from '../../utils/util'

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
        let loginValue = null;
        //获取cookie信息
        if (util.getCookie('loginValue')) {
          loginValue = JSON.parse(util.getCookie('loginValue'));
        }

        //如果没有登录信息跳转到登录界面
        if (!loginValue) {
          this.$router.replace('/login')
        } else {
          this.$store.dispatch('initRecommend');
        }

      },
      computed: {
        ...mapState({
          bannerList: state => state.recommend.bannerList
        })
      },
      methods:{

      }
  }
</script>

<style scoped>

</style>
