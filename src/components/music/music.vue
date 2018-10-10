<template>
	<div class="music" v-show="isShow">
		<audio :src="musicUrl" autoplay ref="player"></audio>
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
				musicUrl: state => state.playSongs.musicUrl,

			})
		}
	}
</script>
<style scoped lang="less">
	
</style>