<template>
	<div class="playSongs">
		
	</div>
</template>
<script>
	export default {
		name: 'playSongs',
		data() {
			return {

			}
		},
		created() {
			this.$store.dispatch('getSongDetails');
		}
	}
</script>
<style scoped lang="less">
	
</style>
