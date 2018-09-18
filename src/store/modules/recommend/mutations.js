/**
 * Created by Administrator on 2018/9/6.
 */
export default {
  //获取banner
  GET_BANNERS (state, payload) {
    state.bannerList = payload
  },
  //获取推荐歌单
  GET_RECOMMEND_LIST (state, payload) {
  	state.recommendList = payload
  },
  //获取最新音乐
  GET_LATEST_SONGS (state, payload) {
  	state.latestSongs = payload
  },
}
