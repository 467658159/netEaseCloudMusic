<template>
	<div class="drawerInfo">
		<div class="cover" v-if="userDetail.profile">
          <div class="personalInfo" :style="{backgroundImage:'url('+userDetail.profile.backgroundUrl+')'}">
            <div class="avatar">
              <img :src="userDetail.profile.avatarUrl" alt="" >
              <p class="nickname">
              	{{userDetail.profile.nickname}} 
              	<span class="level">lv.{{userDetail.level}}</span>
              </p>
            </div>
            <div class="signIn" @click="sign">
            	<i class="iconfont icon-qiandao"></i>
            	<span>{{signIn?'已签到':' 未签到'}}</span>
            </div>
          </div>
        </div>
	</div>
</template>
<script>
    import { mapState } from 'vuex'
    import { cookie } from 'vux'
	export default {
		name: 'drawerInfo',
		data () {
			return {

			}
		},
		created() {
			//获取是否签到
			this.$store.commit('SIGN_IN', cookie.get('signIn'));
		},
		computed: {
			...mapState({
      			userDetail: state => state.home.userDetail,
      			signIn: state => state.signIn
			})
		},
		methods: {
			//签到
			sign() {
				this.$store.dispatch('signIn');
				cookie.set('signIn', true, {
		            expires: 1
		        })
			}
		}
	}
</script>
<style scoped lang="less">
	@import '../../assets/style/mixin';
	.personalInfo{
		background-size: 100%, 100%;
	    background-position-y: center;
		.mx_wh(100%, 2rem);
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		.avatar{
			.mx_wh(.8rem, auto);
			text-align: center;
			.mx_fc(18px, #fff);
			padding-top: .7rem;
			padding-left: .1rem;
			img{
				.mx_wh(.8rem, .8rem);
				.mx_bdrs(50%);
			}
			span.level{
				display: inline-block;
				font-size: 14px;
				padding: 0px 2px;
				.mx_bd(1px, #fff);
				.mx_bdrs(5px);
			}
		}
		.signIn{
			.mx_wh(.8rem, .3rem);
			.mx_fc(14px, #fff);
			.mx_bdrs(15px);
			margin-top: 1.6rem;
			margin-right: .2rem;
			color: #fff;
			.mx_bd(1px, #fff);
			.mx_flex_mid;
			font-weight: bold;
			justify-content: space-around;
		}
	}
</style>