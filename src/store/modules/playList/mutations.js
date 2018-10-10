/**
 * Created by Administrator on 2018/9/6.
 */
export default {
	//获取歌曲列表ID
	GET_PLAYLIST_ID(state, payload) {
		state.playListId = payload.playListId;
	},
	//获取歌曲列表
	GET_SONGS_LIST(state, payload) {
		state.songsListInfo = payload;
	}
}