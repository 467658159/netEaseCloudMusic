/**
 * Created by Administrator on 2018/9/6.
 */
export default {
	// 获取歌曲详情
	GET_SONG_DETAILS(state, payload) {
		state.songDetails = payload;
	},
	PLAY_SONG(state, payload) {
		state.musicUrl = payload;
	}
}