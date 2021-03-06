import axios from 'axios'
import router from "../router"
// import qs from 'qs'
// 配置默认的host,假如你的API host是：http://api.htmlx.club
// axios.defaults.baseURL = 'http://api.htmlx.club'

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么

  console.log(config)
  console.log('在发送请求之前做些什么')
  return config
}, function (error) {
  // 对请求错误做些什么
  console.log('对请求错误做些什么')
  return Promise.reject(error)
})

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  console.log('对响应数据做点什么')
  console.log()
  router.push({
    path: "/log"
  })
  return response
}, function (error) {
  // 对响应错误做点什么
  console.log('对响应错误做点什么')

  return Promise.reject(error)
})
