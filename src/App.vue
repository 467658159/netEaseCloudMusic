<template>
  <div id="app">
    <transition :name="swichPageAnimate">
      <router-view/>
    </transition>
  </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
        swichPageAnimate:''
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
  }

}
</script>

<style lang="less">
  @import '~vux/src/styles/reset.less';
  @import '~vux/src/styles/1px.less';
  #app {
    width: 100%;
    height:100%;
    font-size: .12rem;
  }
  //页面切换动画
  .slide-right-enter-active,
  .slide-right-leave-active,
  .slide-left-enter-active,
  .slide-left-leave-active {
    will-change: transform;
    transition: all 400ms;
    position: absolute;
  }
  .slide-right-enter {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
  .slide-right-leave-active {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
  .slide-left-enter {
    opacity: 0;
    transform: translate3d(100%, 0%, 0);
  }
  .slide-left-leave-active {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
</style>
