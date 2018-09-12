<template>
	<div class="account">
		<button @click="loginOut">退出登录</button>
	</div>
</template>
<script>
	import util from '../../utils/util'

	export default {
		name: 'account',
		data () {
			return {

			}
		},
		methods: {
			loginOut () {
				util.clearCookie('loginValue')
				this.$router.replace('/login')
			}
		}
	}
</script>
<style scoped lang="less">
	
</style>