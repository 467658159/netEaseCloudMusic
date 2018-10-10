/**
 * Created by Administrator on 2018/8/22.
 */
export default {
	//签到
	SIGN_IN(state, payload) {
		state.signIn = payload;
	},
	//获取FM详情
	GET_FM_DETAIL(state, payload) {
		state.FMDetail = payload;
	}
}