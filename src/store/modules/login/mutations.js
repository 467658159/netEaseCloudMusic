/**
 * Created by Administrator on 2018/9/6.
 */
export default {
	//获取登录方式
	GET_LOGINTYPE(state, payload){
		state.loginType = payload
	},
	//获取登录装填
	GET_LOGIN_STATUS(state, payload){
		state.loginStatus = payload
	}
}