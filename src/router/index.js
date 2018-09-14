import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home/home'
import login from '@/pages/login/login'
import loginIn from '@/pages/login/loginIn'
import account from '@/pages/account/account'
import search from '@/pages/search/search'
import homeRouters from './home'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      meta:{index:0},
      redirect: '/home'
    }, {
      path: '/home',
      name: 'home',
      meta:{index:1},
      component: home,
      children: homeRouters
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
