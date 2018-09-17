<template>
  <div id="app">
    <drawer
      :show.sync="drawerVisibility"
      :drawer-style="{'background-color':'#eee', width: '3.1rem', position: 'fixed'}">
      <div slot="drawer" class="drawerContent">
        <div class="cover">
          <div class="personalInfo">
            <div class="avatar">
              <!-- <img :src="userDetail.profile.avatarUrl" alt=""> -->
            </div>
            <div class="nickname">
              {{userDetail.profile.nickname}}
            </div>
          </div>
        </div>
        <router-link to="/account" style="display:block;width:100%;">账号</router-link>
      </div>
      <transition :name="switchPageAnimate">
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
      switchPageAnimate: '',
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
      userDetail: state => state.home.userDetail
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

  .drawerContent{
    overflow-y: scroll;
  }

</style>
