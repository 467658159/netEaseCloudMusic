import Vue from 'vue'
import Router from 'vue-router'
import Recommend from '@/pages/recommend/Recommend'
import Login from '@/pages/login/Login'
import LoginIn from '@/pages/login/loginIn'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      meta:{index:0},
      redirect: '/recommend'
    }, {
      path: '/recommend',
      name: 'Recommend',
      meta:{index:1},
      component: Recommend
    },{
      path: '/login',
      name: 'Login',
      meta:{index:1},
      component: Login
    },{
      path: '/loginIn/:loginType',
      name: 'loginIn',
      meta:{index:2},
      component: LoginIn
    }
  ]
})
