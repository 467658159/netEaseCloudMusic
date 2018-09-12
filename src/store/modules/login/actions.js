/**
 * Created by Administrator on 2018/9/6.
 */
import getData from '../../../api/getData'

export default {
  //初始化actions
	async initLoginStatus({dispatch}){

	},

  //登录
  async loginIn(context, paload){
	  let loginType = context.state.loginType;
	  let res;
	  let params = {
	    password: paload.password
    };

    if (loginType === 'emailLogin') {
      params.email = paload.emailLogin;
      res = await getData('queryEmailLogin', params);
    } else {
      params.phone = paload.phoneLogin;
      res = await getData('queryPhoneLogin', params);
    }
    console.log(res.data);
    context.commit('GET_LOGIN_VALUE', res.data);
  }
}
