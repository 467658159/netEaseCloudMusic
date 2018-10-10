/**
 * Created by Administrator on 2018/8/29.
 */
import apiList from './apiList';
import axios from 'axios';

export default async (pathName, queryData) => {
  let str = 'http://192.168.1.15:3000';
  // let str = 'http://localhost:3000';
  let url = str.concat(apiList[pathName]);
  let result;
  console.log(url);
  if (queryData) {
    result = await axios.get(url, {
      params: queryData
    });
  } else {
    result = await axios.get(url)
  }
  return new Promise((resolve, reject) => {
    resolve( result )
  })
}
