<template>
	<div class="loginIn">
		<div class="loginTitle">
			<XHeader
			:left-options = "{backText:''}"
			:title = "loginType=='emailLogin'?'电子邮箱登录':'手机号登录'"
			></XHeader>
		</div>
		<div class="loginFrom">
			<div class="emailLogin" v-if="loginType == 'emailLogin'">
				<i class="iconfont  icon-mail"></i>
				<input type="text" placeholder="电子邮箱" v-model.number.trim="loginInfo.emailLogin">
			</div>
			<div class="phoneLogin" v-else>
				<i class="iconfont  icon-phone"></i>
				<input type="text" placeholder="手机号" v-model.number.trim="loginInfo.phoneLogin">
			</div>
			<div class="password">
				<i class="iconfont  icon-lock"></i>
				<input type="password" placeholder="密码" v-model.number.trim="loginInfo.password">
			</div>
			<x-button type="primary" class="submitBtn" :disabled="loginDisabled" @click.native="loginIn">登录</x-button>
      <toast v-model="showLoginErr" type="cancel" width="1.5rem">
        {{loginType=='emailLogin'?'邮箱或密码错误':'手机号或密码错误'}}
      </toast>
      <toast v-model="showLoginLimit" type="cancel" width="1.5rem">
        登录过于频繁
      </toast>
		</div>
	</div>
</template>
<script>
	import { mapState } from 'vuex'
  import { XHeader, XButton, Toast, cookie } from 'vux'

	export default {
		name: 'loginIn',
		components: {
			XHeader,
			XButton,
      Toast
    },
		data () {
			return {
        loginInfo: {
          emailLogin: '',
          phoneLogin: '',
          password: ''
        },
        showLoginErr: false,
        showLoginLimit: false
			}
		},
		created () {
			let loginType = this.$route.params.loginType;
			this.$store.commit('GET_LOGINTYPE', loginType);
		},
		computed: {
      loginDisabled () {
          return !Boolean((this.loginInfo.phoneLogin || this.loginInfo.emailLogin) && this.loginInfo.password)
      },
			...mapState({
				loginType: state => state.login.loginType,
        loginValue: state => state.login.loginValue
			})
		},
		methods: {
      //点击登录
      async loginIn () {
        await this.$store.dispatch('loginIn', this.loginInfo);
        let loginCode = this.loginValue.code;
//        判断登录是否成功
//        登录成功
        if (loginCode === 200) {
//          将登录返回值存储到cookie
          cookie.set('loginValue', JSON.stringify(this.loginValue), {
            expires: 30
          });
          this.$router.replace({path: '/'})
//          登录过于频繁
        } else if(loginCode === 415) {
          this.showLoginLimit = true
//          登录失败
        } else {
          this.showLoginErr = true
        }
      }
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
    .submitBtn:active{
      background-color: #ce3d3a;
    }
    i.iconfont{
      font-size: .16rem;
    }
	}

</style>
