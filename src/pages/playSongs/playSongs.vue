<template>
	<div 
	class="playSongsBg" 
	:style="{backgroundImage:'url('+songDetails.picUrl+')'}"
	v-if="songDetails">
		<!-- 音乐详情 -->
		<div class="playSongs"v-if="songDetails">
			<x-header :left-options="{backText: ''}" style="background-color: transparent">{{songDetails.name}}</x-header>
		</div>
	</div>
	<div v-else class="playSongsBg noMusic">
		<x-header :left-options="{backText: ''}" style="background-color: transparent;">暂无歌曲</x-header>
	</div>
</template>
<script>
    import { mapState } from 'vuex';
    import { XHeader } from 'vux';

	export default {
		name: 'playSongs',
		components:{
            XHeader,
		},
		data() {
			return {

			}
		},
		async created() {
			let songId = this.$route.params;
			console.log('音乐ID', songId)
			this.$store.dispatch('getSongUrl', songId);
			this.$store.dispatch('getSongDetail', songId);
		},
		computed: {
			...mapState({
				songDetails: state => state.playSongs.songDetails,
			})
		},
		watch: {
	    	
		},
	}
</script>
<style scoped lang="less">
	@import '../../assets/style/mixin';
	.playSongsBg{
		.mx_wh(100%, 100%);
		background-color: #000;
		background-repeat: no-repeat;
		background-size: 100% 100%;
		position: relative;
		z-index: -3;
		overflow: hidden;
	}
	.noMusic{
		background-image:url('../../assets/img/login-bg.jpg');
	}
	.playSongsBg:after{
		content: "";
	    width:120%;
	    height:120%;
	    position: absolute;
	    left:-40px;
	    top:-40px;
	    background: inherit;
	    filter: blur(20px) contrast(.8) brightness(.7);
	    z-index: -2;
	}

</style>
