<template>
  <div id="app">
    <drawer
      :show.sync="drawerVisibility"
      :drawer-style="{'background-color':'#eee', width: '3rem', position: 'fixed'}">
      <div slot="drawer" class="drawerContent">
        <router-link to="/account" style="display:block;width:100%;">账号</router-link>
      </div>
      <div class="headerBackground"></div>
      <transition :name="swichPageAnimate">
        <router-view/>
      </transition>
    </drawer>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import { Drawer } from 'vux'
  import util from './utils/util'

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
      util.watchPageAnimate(to, from, this);
    }
  },
  computed: {
    ...mapState({
      drawerVisibility: state => state.home.drawerVisibility,
    }),
//    drawer显示
    drawerVisibility: {
      get () {
          return this.$store.state.home.drawerVisibility
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
  @import './assets/style/mixin';
  @import './assets/style/pageAnimate';
  #app {
    width: 100%;
    height:100%;
    font-size: .12rem;
  }
  .headerBackground{
    .mx_wh(100%, 4rem);
    background-color: #ce3d3a;
    .mx_postl(0rem, 0rem);
    z-index: -1;
  }
  .drawerContent{
    overflow-y: scroll;
  }

</style>
