<template>
  <div class="container">
  <x-header class="header">
    <span>overwrite-left</span>
    <x-icon slot="overwrite-left" type="navicon" size="35" style="fill:#fff;position:relative;left:-3px;top:-2px;" @click="$store.commit('DRAWER_SHOW')"></x-icon>
    <div slot="overwrite-title" class="recommendTitle">
      <i class="iconfont  icon-yinle" @click="skipPage" :selected="tabIndex == 0"></i>
      <i class="iconfont  icon-wangyiyunyinle" @click="skipPage" :selected="tabIndex == 1"></i>
      <i class="iconfont  icon-zanting" @click="skipPage" :selected="tabIndex == 2"></i>
      <transition>
        <router-link></router-link>
      </transition>
    </div>
    <x-icon slot="right" type="ios-search-strong" size="30" style="fill:#fff;position:relative;left:-3px;" @click="$router.push('/search')"></x-icon>
  </x-header>
  <swiper loop auto :aspect-ratio="336/730" height="1.68rem">
    <swiper-item v-for="(item, i) in bannerList" :key="i">
      <img width="100%" height="100%" :src="item.picUrl">
    </swiper-item>
  </swiper>
  <router-link to="/account" style="display:block;width:100%;">账号账号账号账号账号账号账号账号账号账号账号账号账号账号账号账号账号账号账号账号账号账号账号</router-link>
  </div>

</template>

<script>
  import { mapState } from 'vuex'
  import { Swiper, SwiperItem, cookie, XHeader } from 'vux'

  export default {
      name: 'Recommend',
      components:{
        Swiper,
        SwiperItem,
        XHeader
      },
      data () {
          return {
            tabIndex: 1
          }
      },
      created () {
        let loginValue = null;
        //获取cookie信息
        if (cookie.get('loginValue')) {
          loginValue = JSON.parse(cookie.get('loginValue'));
        }
        console.log(loginValue);

        //如果没有登录信息跳转到登录界面
        if (!loginValue) {
          this.$router.replace('/login')
        } else {
          this.$store.dispatch('initRecommend');
        }

      },
      computed: {
        ...mapState({
          bannerList: state => state.recommend.bannerList,
          drawerVisibility: state => state.recommend.drawerVisibility
        }),
      },
      methods:{
        skipPage () {

        }
      }
  }
</script>

<style scoped lang="less">
  @import '../../assets/style/mixin.less';
  .header{
    .mx_wh(100%, .6rem);
    .mx_flex_mid;

  }
  .recommendTitle{
    display: flex;
    .mx_wh(2rem, 100%);
    .mx_flex_content;
    .mx_flex_mid;
    justify-content: space-around;
    i.iconfont{
      .mx_fc(.24rem, #fff);
    }
  }
</style>
