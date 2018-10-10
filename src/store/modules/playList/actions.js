/**
 * Created by Administrator on 2018/9/6.
 */
import getData from '../../../api/getData';

export default {
	//获取歌曲列表信息
	async getSongsListInfo (context) {
		let playListId = context.state.playListId
		let res = await getData('querySongListDetail', {
			id: playListId
		})
		console.log(res.data.playlist)
		context.commit('GET_SONGS_LIST', res.data.playlist)
	}
}