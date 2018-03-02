<template>
  <div class="input-box clearFix">
    <div>
      <input v-model="age" v-verify="age" placeholder="age"/>
      <label class="fl" v-remind="age"></label>
    </div>
    <div>
      <input type="text" class="phoneIcon fl" placeholder="手机号码" v-model="regInfo.phone" v-verify="regInfo.phone">
      <label class="fl" v-remind="regInfo.phone"></label>
    </div>
    <div>
      <input v-model="regInfo.tea" v-verify="regInfo.tea" placeholder="tea"/>
      <label class="fl" v-remind="regInfo.tea"></label>
    </div>
    <button v-on:click="submit">提交</button>
  </div>
</template>

<script>
  import Vue from 'Vue'
  import verify from 'vue-verify-plugin'
  let myRules = {
    max6: {
      test: function(val) {
        if (val.length > 6) {
          return false
        }
        return true
      },
      message: '最大为6位'
    }
  }
  Vue.use(verify, {
    rules: myRules
  })
  export default {
    data() {
      return {
        age: '',
        regInfo: {
          tea: '',
          phone: ''
        }
      }
    },
    verify: {
      age: ['required', {message: '该项为必填项'}],
//      tea: 'max6',
      regInfo: {
        tea: ['required', 'max6'],
        phone: ['required', 'mobile']
      }
    },
    methods: {
      submit: function () {
        console.log(this.$verify.check())
      }
    }
  }
</script>
<style>
  .fl{
    width: 100px;
    height: 25px;
    display: inline-block;
    vertical-align: top;
    border:1px solid #000;
    color: red;
  }
</style>
