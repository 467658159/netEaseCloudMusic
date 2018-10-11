/**
 * Created by Administrator on 2018/9/6.
 */
import getData from '../../../api/getData';

export default {
	// 获取歌曲地址
	async getSongUrl(context, payload) {
		let id = { id: payload.songId };
		let res = await getData('queryMusicUrl', id);
		console.log('歌曲地址', res.data);
		context.commit('GET_SONG_URL', res.data.data[0].url);
		// context.commit('SET_SONG_STATUS', true);
		
	},
	//获取歌曲详情
	async getSongDetail(context, payload) {
		let ids = { ids: payload.songId };
		let res = await getData('querySongDetail', ids);
		console.log('歌曲详情', res.data);
		let songDetails = null;
		if (res.data.songs.length) {
			songDetails = {
				name: res.data.songs[0].name,
				picUrl: res.data.songs[0].al.picUrl
			}
		}
		context.commit('GET_SONG_DETAILS', songDetails);
	},
	
}