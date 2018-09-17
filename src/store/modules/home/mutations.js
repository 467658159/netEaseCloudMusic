/**
 * Created by Administrator on 2018/9/6.
 */
export default {
  //侧边栏显示
  DRAWER_SHOW(state){
    state.drawerVisibility = !state.drawerVisibility
  },
  //获取用户详情
  GET_USER_DETAIL(state, payload){
  	state.userDetail = payload
  }
}
