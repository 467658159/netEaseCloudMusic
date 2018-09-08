<template>
	<div class="loginIn">
		<div class="loginTitle">
			<XHeader 
			style="background-color: #ce3d3a;"
			:left-options = "{backText:''}" 
			:title = "loginType=='emailLogin'?'电子邮箱登录':'手机号登录'"
			></XHeader>
		</div>
		<div class="loginFrom">
			<input type="text" v-if="loginType == 'emailLogin'" placeholder="电子邮箱">
			<input type="text" v-else placeholder="手机号">
			<input type="password" placeholder="密码">
		</div>
	</div>
</template>
<script>
	import { XHeader } from 'vux'
	import { mapState } from 'vuex'

	export default {
		name: 'loginIn',
		components: {
			XHeader
		},
		data () {
			return {

			}
		},
		created () {
			let loginType = this.$route.params.loginType
			this.$store.commit('GET_LOGINTYPE', loginType)
		},
		computed: {
			...mapState({
				loginType: state => state.login.loginType
			})
		},
		methods: {
			
		}

	}
</script>
<style scoped lang="less">
	

</style>