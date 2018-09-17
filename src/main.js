// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import FastClick from 'fastclick'

Vue.config.productionTip = false;

//引入懒加载插件
import VueLazyload from 'vue-lazyload'
//定义懒加载插件
Vue.use(VueLazyload, {
  error: require('./assets/img/404nofind.jpg'),
  // loading: require('./assets/img/loading.gif'),
  attempt: 1
})

FastClick.attach(document.body);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
