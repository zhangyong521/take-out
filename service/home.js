import request from './network.js'

//首页请求数据(封装到service/network.js)
//直接返回请求数据，home/home.js拿去
export function getMultiData(){
  return request({
    url: '/home/multidata'
  })
}