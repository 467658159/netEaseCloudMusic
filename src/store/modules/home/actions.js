/**
 * Created by Administrator on 2018/9/6.
 */
import getData from '../../../api/getData'

export default {
  // 初始化home
  async initHome({dispatch}){
  	dispatch('getUserDetail');
  },
  // 获取用户详情
  async getUserDetail(context){

  	let userId = {
  		uid: context.rootState.login.loginValue.account.id
  	}
  	let res = await getData('queryUserDetail', userId);
  	console.log(res.data)
  	context.commit('GET_USER_DETAIL', res.data)
  }
}
