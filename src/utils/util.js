/**
 * Created by Administrator on 2018/9/12.
 */
export default {
  //观察页面动画
	watchPageAnimate (to, from, that) {
      //如果to索引大于from索引,判断为前进状态,反之则为后退状态
    if(to.meta.index > from.meta.index){
      //设置动画名称
      that.swichPageAnimate = 'slide-left';
    }else{
      that.swichPageAnimate = 'slide-right';
    }
	},
  //页面内跳转页面
  skipPageFn(index, that, paths) {
    for (let i=0; i<paths.length; i++) {
      if (index === i) {
        that.$router.push({
          name: paths[i]
        })
      }
    }
  }

}
