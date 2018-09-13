/**
 * Created by Administrator on 2018/9/6.
 */
export default {
  //侧边栏显示
  DRAWER_SHOW(state){
    state.drawerVisibility = !state.drawerVisibility
  },
  //获取banner
  GET_BANNERS (state, payload){
    state.bannerList = payload
  },

}
