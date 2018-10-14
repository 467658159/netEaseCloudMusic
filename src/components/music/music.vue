<template>
	<div class="music" v-show="isShow">
		<audio :src="musicUrl" autoplay ref="player"></audio>
		<div class="miniAudio">
			<div class="miniMusicInfo">
				<div class="thumbnail">
					<img v-lazy="songDetails.picUrl" alt="">
				</div>
				<div class="info">
					<div class="musicName">{{songDetails.name}}</div>
					<div class="musicDesc"></div>
				</div>
			</div>
			<i @click="playMusic">{{playStatus?'播放':'暂停'}}</i>
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
		}
		
	}
</style>