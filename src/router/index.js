import Vue from 'vue'
import Router from 'vue-router'
import recommend from '@/pages/recommend/recommend'
import login from '@/pages/login/login'
import loginIn from '@/pages/login/loginIn'
import account from '@/pages/account/account'
import search from '@/pages/search/search'
import recommendRouters from './recommend'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      meta:{index:0},
      redirect: '/recommend'
    }, {
      path: '/recommend',
      name: 'recommend',
      meta:{index:1},
      component: recommend,
      children: recommendRouters
    },{
      path: '/login',
      name: 'login',
      meta:{index:1},
      component: login
    },{
      path: '/loginIn/:loginType',
      name: 'loginIn',
      meta:{index:2},
      component: loginIn
    },{
      path: '/account',
      name: 'account',
      meta:{index:1},
      component: account
    },{
      path: '/search',
      name: 'search',
      meta:{index:1},
      component: search
    }
  ]
})
