/**
 * Created by Administrator on 2018/9/6.
 */
import getData from '../../../api/getData'

export default {
	async initLoginStatus({dispatch}){
		dispatch('getLoginStatus');
	},
	async getLoginStatus({commit}){
		let res = await getData('queryStatus');
		console.log(res)
		commit('GET_LOGIN_STATUS', res.data)
	}
}