<template>
  <h1>登陆页面</h1>
</template>
<script>
  import axios from 'axios'

  export default {
    name: 'log',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    methods: {
      getImg () {
        axios.get('http://tc.bjjt.cn/customer_h5/platformData/gallery/banner/90a71791-a5c3-41b5-83f6-ee228798c943.JPG')
          .then((response) => {
            console.log(response)
          }).catch((error) => {
            console.log(error)
          })
      },
      addInterceptors () {
        axios.interceptors.request.use(function (config) {
          // Do something before request is sent
          console.log('开始请求')
          console.log(`请求地址: ${config.url}`)
          return config
        }, function (error) {
          // Do something with request error
          console.log('请求失败')
          return Promise.reject(error)
        })

        axios.interceptors.response.use(function (config) {
          // Do something before request is sent
          console.log('接收响应')
          return config
        }, function (error) {
          // Do something with request error
          console.log('响应出错')
          return Promise.reject(error)
        })
      }
    },
    mounted () {
      this.addInterceptors()
      this.getImg()
    }
  }
</script>
<style>

</style>
