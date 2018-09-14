/**
 * Created by Administrator on 2018/9/14.
 */
/**
 * Created by Administrator on 2018/9/13.
 */
import recommend from '@/pages/home/discover/recommend/recommend'
import friends from '@/pages/home/discover/friends/friends'
import broadcast from '@/pages/home/discover/broadcast/broadcast'

export default [
  {
    path: 'recommend',
    name: 'recommend',
    meta:{index:0},
    component: recommend
  },{
    path: 'friends',
    name: 'friends',
    meta:{index:1},
    component: friends
  },{
    path: 'broadcast',
    name: 'broadcast',
    meta:{index:2},
    component: broadcast
  }
]
