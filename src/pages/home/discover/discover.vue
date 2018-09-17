<template>
	<div class="discoverMusic">
    <tab
      :line-width="2"
      custom-bar-width=".4rem"
      bar-active-color="#fff"
      default-color="#ddd"
      active-color='#fff'
      class="discoverTabNaver" >
      <tab-item @on-item-click="skipPage" :selected="tabIndex == 0">推荐</tab-item>
      <tab-item @on-item-click="skipPage" :selected="tabIndex == 1">朋友</tab-item>
      <tab-item @on-item-click="skipPage" :selected="tabIndex == 2">电台</tab-item>
    </tab>
    <transition :name="switchPageAnimate">
      <router-view/>
    </transition>

	</div>
</template>
<script>
  import { Tab, TabItem } from 'vux'
  import util from '../../../utils/util'
	export default {
		name: 'discover',
		components: {
      Tab,
      TabItem
		},
		data () {
			return {
        tabIndex: 0,
        switchPageAnimate: '',
			}
		},
		created () {
      this.skipPage(this.tabIndex);
		},
    watch: {//使用watch 监听$router的变化
      $route (to, from) {
        //防止页面回跳
        if (to.name == 'discover') {
          this.$router.push({name: from.name})
        }
        //页面切换动画
        util.watchPageAnimate(to, from, this);
      }
    },
		computed: {

		},
    methods: {
      //跳转页面
      skipPage(index) {
        this.tabIndex == index
        //跳转的子页面的路由
        let routerArr = ['recommend', 'friends', 'broadcast'];
        util.skipPageFn(index, this, routerArr);
      }

    }
	}
</script>
<style scoped lang="less">
  @import '../../../assets/style/mixin.less';
  .discoverTabNaver{
    .mx_wh(100%, .1rem);
    .vux-tab-item {
      background: #ce3d3a;
    }
  }
</style>
