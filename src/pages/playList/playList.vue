<template>
	<div class="playList">
		
	</div>
</template>
<script>
	export default {
		name: 'playlist',
		data () {
			return {

			}
		},
		created () {
			let playListId = this.$route.params.playListId
			console.log(this.$store)
			this.$store.commit('GET_PLAYLIST_ID', playListId);
		}
	}
</script>
<style scoped lang="less">
	
</style>