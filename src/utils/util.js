/**
 * Created by Administrator on 2018/9/12.
 */
export default {
  setCookie(key,value,exdays) {
    let exdate=new Date();//获取时间
    exdate.setTime(exdate.getTime() + 24*60*60*1000*exdays);//保存的天数
    //字符串拼接cookie
    window.document.cookie = `${key}=${value};path=/;expires=${exdate.toGMTString()}`
  },
  //读取cookie
  getCookie (key) {
    if (document.cookie.length>0) {
      let arr=document.cookie.split('; ');//这里显示的格式需要切割一下自己可输出看下
      let value;
      for (let item of arr) {
        let [keyStr, ...valueArr] = item.split('=');
        let valueStr = valueArr.join('=');
        //判断查找相对应的值
        if (keyStr === key) {
          value = valueStr
        }
      }
      return value;
    }
  },
  //清除cookie
  clearCookie () {
    this.setCookie("","",-1);//修改2值都为空，天数为负1天就好了
  }
}
