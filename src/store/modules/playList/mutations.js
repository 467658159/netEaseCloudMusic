/**
 * Created by Administrator on 2018/9/6.
 */
export default {
	//获取歌曲列表
	GET_SONGS_LIST(state, payload) {
		state.songsListInfo = payload;
	}
}