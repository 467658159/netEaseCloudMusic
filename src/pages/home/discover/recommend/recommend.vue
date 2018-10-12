<template>
  <div class="recommend">
    <div class="headerBackground"></div>  
    <!-- 轮播图 -->
    <div class="swiperBox">
      <swiper  loop auto :aspect-ratio="336/730" height="1.68rem"  width="100%" class="recommendSwiper" dots-position="center">
        <swiper-item v-for="(item, i) in bannerList" :key="i">
          <img width="100%" height="100%" v-lazy="item.picUrl">
        </swiper-item>
      </swiper>
    </div>
    <!-- 分类 -->
    <div class="category">
      <ul>
        <li @click="toFM">
          <span><i class="iconfont icon-FM"></i></span>
          <p>私人FM</p>
        </li>
        <li><span><i class="iconfont icon-tuijian"></i></span><p>每日推荐</p></li>
        <li><span><i class="iconfont icon-gedan"></i></span><p>歌单</p></li>
        <li><span><i class="iconfont icon-paihangbang"></i></span><p>排行榜</p></li>
      </ul>
    </div>
    <!-- 推荐歌单 -->
    <div class="recommendList">
      <div class="listTitle">推荐歌单<x-icon type="ios-arrow-right" size="24" fill="#999"></x-icon></div>
      <column :lists="recommendList.result?recommendList.result.slice(0, showNum):[]"></column>
    </div>
  </div>
</template>
<script>
  import { mapState } from 'vuex'
  import { Swiper, SwiperItem } from 'vux'
  import column from '../../../../components/column/column'

  export default {
    name: 'recommend',
    components: {
      column,
      Swiper,
      SwiperItem
    },
    data () {
        return {
            showNum: 6
        }
    },
    created () {
      this.$store.dispatch('initRecommend');
    },
    watch: {
      
    },
    computed: {
      ...mapState({
        bannerList: state => state.recommend.bannerList,
        recommendList: state => state.recommend.recommendList,
        latestSongs: state => state.recommend.latestSongs
      })
    },
    methods: {
      //跳转到FM
      async toFM () {
        await this.$store.dispatch('getFMSongDetails');
        let songId = this.$store.state.FMDetail.id;
        this.$router.push({ name: 'playSongs', params: { songId } });
      }
    }
  }
</script>
<style scoped lang="less">
  @import '../../../../assets/style/mixin.less';
  .recommend{
    position: absolute;
    top: 108px;
    bottom: 0px;
    overflow-y: scroll;
    .headerBackground{
      .mx_wh(100%, 1.3rem);
      background-color: #ce3d3a;
      .mx_postl(0rem, 0rem);
      z-index: -1;
    }
    .swiperBox{
      .recommendSwiper{
        margin: 0rem .075rem;
        .mx_bdrs(.05rem);
        margin-top: .05rem;
      }
    }
    .category{
      ul {
        .mx_wh(3.75rem, 1.2rem);
        .mx_flex_mid;
        flex-direction: row;
        justify-content: space-around;
        border-bottom: .01rem solid #efefef;
        li{
          a{
            .mx_fc(12px, #000);
          }
          text-align: center;
          span{
            display: block;
            .mx_wh(.55rem, .55rem);
            .mx_flex_mid;
            background-color: #ce3d3a;
            .mx_bdrs(50%);
            box-shadow: 0px 0px 4px #d66664;
            i.iconfont{
              .mx_fc(.3rem, #fff);
            }
          }
          p{
            margin-top: .05rem;
          }
        }
      }

    }
    .recommendList{
      .listTitle{
        .mx_fc(18px, #444);
        font-weight: bold;
        margin: .2rem .1rem .1rem;
        display: flex;
        align-items: center;
      }
    }

  }
  .recommend::-webkit-scrollbar {
    display:none
  }
</style>
