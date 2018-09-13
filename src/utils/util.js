/**
 * Created by Administrator on 2018/9/12.
 */
export default {
  //观察页面动画
	watchPageAnimate () {
		console.log('watchPageAnimate')
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
  test () {
    console.log('test')
  }
}
