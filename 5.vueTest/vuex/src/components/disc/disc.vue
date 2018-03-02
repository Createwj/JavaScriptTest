<template>
  <div style="border:1px solid red;">
    <div>这是disc组件</div>
    <div>vue Router接收到的参数</div>
    <span>{{date}}</span>
  </div>
</template>
<script>
  export default {
    created() {
      this.date = this.$route.params
      console.log(this.$route)
      console.log(this.$route.params)
    },
    data() {
      return {
        date: {}
      }
    }
  }
</script>

<style>

</style>
