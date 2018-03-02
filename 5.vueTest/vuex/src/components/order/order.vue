<template>
  <div>
    <h1>Vue</h1>
    <p @click="jump">点击通过URL向路由子组件传递参数</p>
    <p @click="sonlu">点击跳转路由页面</p>
    <p @click="vuexs">点击查看vuex设置管理状态</p>
    <router-view/>
    <br>
    <!--<div>点击此处显示子组件  子组件可以派发事件到父组件执行</div>-->
    <son @scroll="sell" :name="name"></son>
  </div>
</template>
<script>
  import son from '@/components/son/son'
  export default {
    components: {
      son
    },
    data() {
      return {
        name: '胡歌',
        tv: '猎场'
      }
    },
    methods: {
      sell(a) {
        alert('这是子组件派发出来的事件, 这是父组件向子组件传递的参数{' + a + '}')
      },
      jump() {
        this.$router.push({
          path: `/name/:${this.name}/tv/:${this.tv}`
        })
      },
      sonlu() {
        this.$router.push({
          path: `/info`
        })
      },
      vuexs() {
        this.$router.push({
          path: `/vuexs`
        })
      }
    }
  }
</script>

<style>
</style>
