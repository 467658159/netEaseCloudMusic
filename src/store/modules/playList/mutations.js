/**
 * Created by Administrator on 2018/9/6.
 */
export default {
	GET_PLAYLIST_ID (payload) {
		state.playListId = payload;
	},
	//获取歌曲列表
	GET_SONGS_LIST (payload) {
		state.songsList = payload;
	}
}