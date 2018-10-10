/**
 * Created by Administrator on 2018/8/22.
 */
import getData from '../api/getData'

export default {
	//签到
	async signIn({commit}) {
		let params = {type: 0};
		let res = await getData('querySignIn', params);
		console.log(res.data);
		let isSignIn = res.data.code == 200?false:true
		commit('SIGN_IN', isSignIn);
	},

	//获取私人FM歌曲详情
	async getFMSongDetails({commit}) {
		let res = await getData('queryPersonalFM');
		let FMDetail = { id: 0 };
		if (res.data.code == 200) {
			FMDetail.id = res.data.data[0].id
		}
		commit('GET_FM_DETAIL', FMDetail);
	},
}