/**
 * Created by Administrator on 2018/9/6.
 */
export default {
	//获取登录方式
	GET_LOGINTYPE(state, payload){
		state.loginType = payload;
	},
  //获取登录返回值
  GET_LOGIN_VALUE(state, payload){
	  state.loginValue = payload;
  }
}
