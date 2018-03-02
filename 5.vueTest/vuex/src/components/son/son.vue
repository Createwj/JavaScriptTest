<template>
  <h2 class="h2" @click="sell">这是派发事件的子组件</h2>
</template>
<script>
  export default {
    props: {
      name: {
        type: String,
        default: ''
      }
    },
    created() {
      console.log(this.$parent)
    },
    methods: {
      sell() {
        this.$emit('scroll', this.name)
      }
    }
  }
</script>
<style>
  .h2{
    border:1px solid red;
  }
</style>
