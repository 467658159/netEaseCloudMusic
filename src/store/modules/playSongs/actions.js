/**
 * Created by Administrator on 2018/9/6.
 */
import getData from '../../../api/getData';

export default {
	// 获取歌曲地址
	async playSong(context) {
		let id = { id: context.state.songId };
		let res = await getData('queryMusicUrl', id);
		console.log('歌曲地址', res.data);
		context.commit('PLAY_SONG', res.data.data[0].url)
	},
	//获取歌曲详情
	async getSontDetail(context) {
		let ids = { ids: context.state.songId };
		let res = await getData('querySongDetail', ids);
		console.log('歌曲详情', res.data.songs);
		let songDetails = null;
		if (res.data.code == 200) {
			songDetails = {
				name: res.data.songs[0].name,
				picUrl: res.data.songs[0].al.picUrl
			}
		}
		context.commit('GET_SONG_DETAILS', songDetails);
	},
	
}