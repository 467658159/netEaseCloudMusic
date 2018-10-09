/**
 * Created by Administrator on 2018/9/6.
 */
import getData from '../../../api/getData';

export default {
	async getSongsList (context) {
		let playListId = context.state.playListId
		let res = await getData('querySongListDetail', {
			id: playListId
		})
	}
}