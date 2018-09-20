/**
 * Created by Administrator on 2018/9/6.
 */
import getData from '../../../api/getData';

export default {
	//获取歌曲详情
	async getSongDetails({commit}) {
		let res = await getData('queryPersonalFM');
		console.log(res.data)
		commit('GET_SONG_DETAILS', res.data);
	}
}