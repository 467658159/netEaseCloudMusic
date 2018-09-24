/**
 * Created by Administrator on 2018/9/6.
 */
import getData from '../../../api/getData';

export default {
	// 获取歌曲地址
	async playSong(context) {

		let id = { id: context.state.songDetails.id }
		let res = await getData('queryMusicUrl', id);
		console.log(res.data.data[0]);
		context.commit('PLAY_SONG', res.data.data[0].url)
	},
	//获取私人FM歌曲详情
	async getFMSongDetails({commit}) {
		let res = await getData('queryPersonalFM');
		console.log(res.data);
		let songDetails = null;
		if (res.data.code == 200) {
			songDetails = {
						id: res.data.data[0].id,
						name: res.data.data[0].name,
						picUrl: res.data.data[0].album.picUrl
					}
		}
		
		commit('GET_SONG_DETAILS', songDetails);
	},
	//获取歌曲列表进入的歌曲详情
	async getListSongDetails() {

	}
}