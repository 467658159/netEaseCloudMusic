<template>
  <div id="app">
    <drawer
      :show.sync="drawerVisibility"
      :drawer-style="{'background-color':'#eee', width: '3rem', position: 'fixed'}">
      <div slot="drawer" class="drawerContent">
        <router-link to="/account" style="display:block;width:100%;">账号</router-link>
      </div>

      <transition :name="swichPageAnimate">
        <router-view/>
      </transition>
    </drawer>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import { Drawer } from 'vux'

export default {
  name: 'App',
  components: {
    Drawer
  },
  data () {
    return {
      swichPageAnimate: '',
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
      drawerVisibility: state => state.recommend.drawerVisibility,
    }),
    drawerVisibility: {
      get () {
          return this.$store.state.recommend.drawerVisibility
      },
      set () {
          this.$store.commit('DRAWER_SHOW')
      }
    }
  }

}
</script>

<style lang="less">
  @import '~vux/src/styles/reset.less';
  @import '~vux/src/styles/1px.less';
  @import './assets/style/common';
  @import './assets/style/pageAnimate';
  #app {
    width: 100%;
    height:100%;
    font-size: .12rem;
  }
  .drawerContent{
    overflow-y: scroll;
  }
  
</style>
