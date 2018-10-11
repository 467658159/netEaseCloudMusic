/**
 * Created by Administrator on 2018/9/6.
 */
export default {
	// 获取歌曲详情
	GET_SONG_DETAILS(state, payload) {
		state.songDetails = payload;
	},
	//音乐地址
	GET_SONG_URL(state, payload) {
		state.musicUrl = payload;
	},
	//设置歌曲小窗口是否显示
	MINI_MUSIC_IS_SHOW(state, payload) {
		state.isShow = payload;
	},
	//设置歌曲播放状态
	SET_SONG_STATUS(state, payload) {
		state.playStatus = payload;
	},
}