<template>
	<div class="playList">
		<h2>{{songsListInfo.name}}</h2>
		<div class="songsList">
			<div class="songItem" v-for='(item, index) in songsListInfo.tracks'>
				<div class="songName">
					<router-link :to="{name: 'playSongs', params: {songId: item.id}}">{{item.name}}</router-link>
				</div>
				<div class="songRelative">
					<span class="relativeVideo"><i class=""></i></span>
					<span class="relativeHandle"><i class=""></i></span>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import { mapState } from 'vuex';

	export default {
		name: 'playlist',
		data () {
			return {

			}
		},
		created () {
			let playListId = this.$route.params.playListId
			this.$store.dispatch('getSongsListInfo', {playListId});
		},
		computed: {
			...mapState({
				songsListInfo: state => state.playList.songsListInfo
			})
		},
		methods: {

		},
	}
</script>
<style scoped lang="less">
	
</style>