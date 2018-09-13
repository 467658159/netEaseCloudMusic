<template>
  <div class="login">
    <div class="phoneLogin">
      <router-link :to="{ name:'loginIn', params: { loginType: 'phoneLogin' } }">手机号登陆</router-link>
    </div>
    <div class="emailLogin">
      <router-link :to="{ name:'loginIn', params: { loginType: 'emailLogin' } }">电子邮箱登陆</router-link>
    </div>
  </div>
</template>
<script>
  export default {
      name: 'login',
      data () {
          return {

        }
      }
  }
</script>
<style scoped lang="less">
  @import '../../assets/style/mixin';
  @images: '../../assets/img';

  .login{
    .mx_wh(100%,6.67rem);
    background:url('@{images}/login-bg.jpg') no-repeat;
    background-size: contain;
    .mx_flex_mid;
    flex-direction: column;
  }

  .phoneLogin{
    a{
      .mx_wh(3rem, .4rem);
      .mx_fc(.16rem, #ce3d3a);
      .mx_bdrs(.4rem);
      .mx_bd(.01rem,#ce3d3a);
      .mx_flex_mid;
      font-weight:bold;
    }
    a:active{
      background: #ce3d3a;
      color: #fff;
    }
  }
  .emailLogin{
    margin-top: .15rem;
    .phoneLogin();
  }
</style>
