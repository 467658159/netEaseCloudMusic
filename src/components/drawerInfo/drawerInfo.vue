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
          </div>
        </div>
	</div>
</template>
<script>
    import { mapState } from 'vuex'
	export default {
		name: 'drawerInfo',
		data () {
			return {

			}
		},
		computed: {
			...mapState({
      			userDetail: state => state.home.userDetail
			})
		}
	}
</script>
<style scoped lang="less">
	@import '../../assets/style/mixin';
	.personalInfo{
		background-size: 100%, 100%;
	    background-position-y: center;
		.mx_wh(100%, 2rem);
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
	}
</style>