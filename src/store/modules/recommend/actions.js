/**
 * Created by Administrator on 2018/9/6.
 */
import getData from '../../../api/getData'

export default {
  async initRecommend({dispatch}){
    // 获取banner
    dispatch('getRecommendBanners');
    //获取推荐歌单
    dispatch('getRecommendList');
    //获取最新音乐
    dispatch('getLatestSongs');
  },
  //获取banner
  async getRecommendBanners({commit}){
    let res = await getData('queryBanner');
    commit('GET_BANNERS', res.data.banners)
  },
  //获取推荐歌单
  async getRecommendList({commit}){
    let res = await getData('queryPrSongList');
    console.log('推荐歌单', res.data)
    commit('GET_RECOMMEND_LIST', res.data);
  },
  //获取最新音乐
  async getLatestSongs({commit}){
    let res = await getData('queryNewSong');
    console.log(res.data);
    commit('GET_LATEST_SONGS', res.data);
  },
}
