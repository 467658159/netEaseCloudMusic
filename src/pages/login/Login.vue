<template>
  <div class="login">
    <div class="phoneLogin">
      手机号登陆
    </div>
    <div class="rigistry">
      注册
    </div>
  </div>
</template>
<script>
  export default {
      name: 'Login',
      data(){
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
    flex-direction: column;
    .mx_flex_mid;
  }

  .phoneLogin{
    .mx_wh(3rem, .4rem);
    .mx_fc(.16rem, #ce3d3a);
    .mx_bdrs(.4rem);
    .mx_bd(.01rem,#ce3d3a);
    .mx_flex_mid;
    font-weight:bold;

  }
  .rigistry{
    margin-top: .15rem;
    .phoneLogin();
  }
</style>
