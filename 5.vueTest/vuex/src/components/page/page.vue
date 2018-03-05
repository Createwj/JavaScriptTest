<template>
  <h1>页面</h1>
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
      putPost () {
        axios.post('http://tc.bjjt.cn/customer_h5/platformData/gallery/banner/90a71791-a5c3-41b5-83f6-ee228798c943.JPG')
          .then((response) => {
            console.log(response)
          }).catch((error) => {
            console.log(error)
          })
      }
    },
    mounted () {
      // this.getImg()
      this.putPost()
    }
  }
</script>
<style>

</style>
