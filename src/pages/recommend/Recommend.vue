<template>
  <div class="container">
  <x-header class="header">
    <span>overwrite-left</span>
    <x-icon slot="overwrite-left" type="navicon" size="35" style="fill:#fff;position:relative;left:-3px;top:-2px;" @click="$store.commit('DRAWER_SHOW')"></x-icon>
    <div slot="overwrite-title" class="recommendTitle">
      <i class="iconfont  icon-yinle" @click="skipPage(0)" :class="{recoActive: tabIndex == 0}"></i>
      <i class="iconfont  icon-wangyiyunyinle" @click="skipPage(1)" :class="{recoActive: tabIndex == 1}"></i>
      <i class="iconfont  icon-zanting" @click="skipPage(2)" :class="{recoActive: tabIndex == 2}"></i>
    </div>
    <x-icon slot="right" type="ios-search-strong" size="30" style="fill:#fff;position:relative;left:-3px;" @click="$router.push('/search')"></x-icon>
  </x-header>
  <transition :name="swichPageAnimate">
    <router-view/>
  </transition>
  </div>

</template>

<script>
  import { mapState } from 'vuex'
  import { cookie, XHeader } from 'vux'

  export default {
      name: 'recommend',
      components:{
        XHeader
      },
      data () {
          return {
            tabIndex: 1,
            swichPageAnimate: '',
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
          this.skipPage(this.tabIndex)
        }

      },
      watch: {//使用watch 监听$router的变化
        $route(to, from) {
          //如果to索引大于from索引,判断为前进状态,反之则为后退状态
          if(to.meta.index > from.meta.index){
            //设置动画名称
            this.swichPageAnimate = 'slide-left';
          }else{
            this.swichPageAnimate = 'slide-right';
          }
        }
      },
      computed: {
        ...mapState({
          drawerVisibility: state => state.recommend.drawerVisibility
        }),
      },
      methods:{
        skipPage (index) {
          if (index == 0) {
            this.$router.push({
              name: 'myMusic'
            })
          } else if (index == 1) {
            this.$router.push({
              name: 'discoverMusic'
            })
          } else if (index == 2) {
            this.$router.push({
              name: 'videoMusic'
            })
          }
          this.tabIndex = index
        }
      }
  }
</script>

<style scoped lang="less">
  @import '../../assets/style/mixin.less';
  @import '../../assets/style/pageAnimate';
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
      .mx_fc(.24rem, #962a28);
    }
    i.recoActive{
      color: #fff;
    }
  }
</style>
