<template>
  <div>
    <p>
      <input type="text" placeholder="名称" v-model="name">
    </p>
    <p>
      <input type="text" placeholder="密码" v-model="pwa">
    </p>
<button @click="login">登陆</button>
  </div>
</template>

<script>
  export default {
    name: "log",
    data(){
      return{
        name:'',
        pwa:''
      }
    },
    mounted(){
    },
    methods:{
      login(){
        console.log(this.name)
        console.log(this.pwa)
      }
    }
  }
</script>

<style scoped>
input{
  border: 1px solid #000;
}
</style>
