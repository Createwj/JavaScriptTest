<template>
  <div>
    <h1>信息</h1>
    <div @click="jump">去歌手页面子路由</div>
    <router-view/>
  </div>
</template>
<script>
  export default {
    created() {
    },
    methods: {
      jump() {
        this.$router.push({
          path: `/singer`
        })
      }
    }
  }
</script>

<style>

</style>
