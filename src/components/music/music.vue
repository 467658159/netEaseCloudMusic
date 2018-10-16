<template>
	<div class="music" v-show="isShow">
		<audio :src="musicUrl" autoplay ref="player" @ended="initMusicStatus"></audio>
		<div class="miniAudio">
			<div class="miniMusicInfo">
				<div class="thumbnail">
					<img v-lazy="songDetails.picUrl" alt="">
				</div>
				<div class="info">
					<div class="musicName">{{songDetails.name}}</div>
					<div class="musicDesc">{{songDetails.singer}}</div>
				</div>
			</div>
			<i @click="playMusic" class="iconfont icon-zanting1" v-if="playStatus"></i>
			<i @click="playMusic" class="iconfont icon-bofang" v-else></i>
		</div>
	</div>
</template>
<script>
	import { mapState } from 'vuex';

	export default {
		name: 'music',
		props: ['isShow'],
		data () {
			return {}
		},
		created() {
			console.log(this.playStatus)
		},
		computed: {
			...mapState({
				// 音乐地址
				musicUrl: state => state.playSongs.musicUrl,
				// 歌曲状态
				playStatus: state => state.playSongs.playStatus,
				//歌曲详情
				songDetails: state => state.playSongs.songDetails,
			})
		},
		watch: {
			playStatus(state) {
				if (state) {
					this.$nextTick(() => {
						this.$refs.player.play();
					})
				} else {
					this.$refs.player.pause();
				}
			}
		},
		methods: {
			playMusic() {
				this.$store.commit('SET_SONG_STATUS', !this.playStatus);
			},
			initMusicStatus() {
				this.$store.commit('SET_SONG_STATUS', false);
			}
		}
	}
</script>
<style scoped lang="less">
	@import url('../../assets/style/mixin');
	.miniAudio{
		.mx_wh(100%, .5rem);
		position: absolute;
		bottom: 0rem;
		background: #fff;
		z-index: 2;
		display: flex;
	    border-top: 1px solid #eee;
		.miniMusicInfo{
			width: 3rem;
			display:flex;
			align-items: center;
			.thumbnail{
				margin-left: .1rem;
				.mx_wh(.4rem, .4rem);
				img{
					.mx_wh(100%, 100%);
					.mx_bdrs(3px);
				}
			}
			.info{
				display: flex;
				flex-direction: column;
				margin-left: 10px;
				.musicName{
					font-weight: bold;
					font-size: 14px;
				}
				.musicDesc{
					font-size: 12px;
					color: #999;
				}
			}
		}
		.iconfont{
			font-size: 30px;
		}
	}
</style>