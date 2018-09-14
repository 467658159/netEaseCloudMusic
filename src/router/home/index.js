/**
 * Created by Administrator on 2018/9/13.
 */
import my from '@/pages/home/my/my'
import discover from '@/pages/home/discover/discover'
import videos from '@/pages/home/videos/videos'
import discoverRouters from './discover'

export default [
  {
    path: 'my',
    name: 'my',
    meta:{index:0},
    component: my
  },{
    path: 'discover',
    name: 'discover',
    meta:{index:1},
    component: discover,
    children: discoverRouters
  },{
  	path: 'videos',
  	name: 'videos',
    meta:{index:2},
  	component: videos
  }
]
