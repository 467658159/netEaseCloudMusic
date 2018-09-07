/**
 * Created by Administrator on 2018/9/6.
 */
import getData from '../../../api/getData'

export default {
  async init({dispatch}){
    // 获取banner
    dispatch('getRecommendBanners');
  },
  //获取banner
  async getRecommendBanners({commit}){
    let res = await getData('queryBanner');
    commit('GET_BANNERS', res.data.banners)
  }
}
