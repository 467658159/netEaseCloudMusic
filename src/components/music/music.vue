<template>
	<div class="music" v-show="isShow">
		<audio :src="musicUrl" autoplay ref="player"></audio>
		<div class="miniAudio">
			<i @click="playMusic">播放</i>
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
			//判断歌曲播放状态
		    console.log(this.playStatus);
		    if (this.playStatus) {
		      this.$store.commit('MINI_MUSIC_IS_SHOW', true);
		    }
		},
		computed: {
			...mapState({
				// 音乐地址
				musicUrl: state => state.playSongs.musicUrl,
				// 歌曲状态
				playStatus: state => state.playSongs.playStatus,
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
	}
</style>