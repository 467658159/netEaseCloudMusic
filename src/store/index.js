/**
 * Created by Administrator on 2018/8/22.
 */
import Vue from 'vue';
import Vuex from 'vuex';
import state from './state';
import mutations from './mutations';
import actions from './actions';
import getters from './getters';
import login from './modules/login';
import home from './modules/home';
import recommend from './modules/recommend';
import discover from './modules/discover';
import playSongs from './modules/playSongs';
import playList from './modules/playList';

Vue.use(Vuex);

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
    login,
    home,
    recommend,
    playSongs,
    playList,
    discover
  }
})
