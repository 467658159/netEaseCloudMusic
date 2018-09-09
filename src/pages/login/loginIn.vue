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
			<div class="emailLogin" v-if="loginType == 'emailLogin'">
				<i class="iconfont  icon-mail"></i>
				<input type="text" placeholder="电子邮箱" v-model.number.trim="emailLogin">
			</div>
			<div class="phoneLogin" v-else>
				<i class="iconfont  icon-phone"></i>
				<input type="text" placeholder="手机号" v-model.number.trim="phoneLogin">
			</div>
			<div class="password">
				<i class="iconfont  icon-lock"></i>
				<input type="password" placeholder="密码" v-model.number.trim="password">
			</div>
			<x-button type="primary" class="submitBtn" :disabled="true">登录</x-button>
		</div>
	</div>
</template>
<script>
	import { XHeader, XButton } from 'vux'
	import { mapState } from 'vuex'

	export default {
		name: 'loginIn',
		components: {
			XHeader,
			XButton
		},
		data () {
			return {
				emailLogin: '',
				phoneLogin: '',
				password: '',
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
	@import '../../assets/style/mixin';
	.loginTitle{
		.mx_wh(3.75rem, auto)
	}
	.loginFrom{
		flex-direction: column;
		.mx_flex_mid;
		input{
			border: none;
			.mx_wh(3.2rem, .4rem);
			text-indent: .08rem;
			font-size: .14rem;
		}
		.iconfont{
			margin-left: .03rem;
		}
		.password{
			margin-top: .2rem;
			border-bottom: 1px solid #eee;
		}
		.emailLogin, .phoneLogin{
			margin-top: 0rem;
			.password()
		}
		.submitBtn{
			margin-top: .3rem;
			//color: #fff;
			.mx_wh(3.5rem, .4rem);
			.mx_bd(1px, #ce3d3a);
			.mx_bdrs(.3rem);
			background-color: #ce3d3a;
		}
	}
	
</style>