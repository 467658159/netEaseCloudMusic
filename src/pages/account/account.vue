<template>
	<div class="account">
		<button @click="loginOut">退出登录</button>
	</div>
</template>
<script>
  import { cookie } from 'vux'

	export default {
		name: 'account',
		data () {
			return {

			}
		},
		methods: {
			loginOut () {
        cookie.remove('loginValue');
				this.$router.replace('/login')
			}
		}
	}
</script>
<style scoped lang="less">

</style>
