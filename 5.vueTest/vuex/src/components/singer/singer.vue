<template>
  <div>
    <h5>歌手页面--二级路由</h5>
    <div @click="jump">去三级路由</div>
    <router-view/>
  </div>
</template>
<script>
  export default {
    methods: {
      jump() {
        this.$router.push({
          path: `/song`
        })
      }
    }
  }
</script>
<style >

</style>
