/**
 * Created by Administrator on 2018/9/6.
 */
export default {
	//获取歌曲ID
	GET_SONG_ID(state, payload) {
		state.songId = payload.songId
	},
	// 获取歌曲详情
	GET_SONG_DETAILS(state, payload) {
		state.songDetails = payload;
	},
	//音乐地址
	PLAY_SONG(state, payload) {
		state.musicUrl = payload;
	}
}