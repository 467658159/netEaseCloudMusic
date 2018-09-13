/**
 * Created by Administrator on 2018/9/13.
 */
import myMusic from '@/pages/recommend/myMusic/myMusic'
import discoverMusic from '@/pages/recommend/discoverMusic/discoverMusic'
import videoMusic from '@/pages/recommend/videoMusic/videoMusic'

export default [
  {
    path: 'myMusic',
    name: 'myMusic',
    meta:{index:0},
    component: myMusic
  },{
    path: 'discoverMusic',
    name: 'discoverMusic',
    meta:{index:1},
    component: discoverMusic
  },{
  	path: 'videoMusic',
  	name: 'videoMusic',
    meta:{index:2},
  	component: videoMusic
  }
]
