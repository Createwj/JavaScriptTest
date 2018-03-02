<template>
  <div>
    <h1>vuex</h1>
    <span @click="setSing">点击设置singer</span>
    <router-link to="/vuef">打开vuef组件</router-link>
    <br>
    <b @click="pil">点击action批量修改vueX-state 父组件修改</b>
    <p>{{singer}}</p>
    <p>{{playing}}</p>
    <p>{{fullScreen}}</p>
    <router-view/>
  </div>
</template>
<script>
  import {mapGetters, mapMutations, mapActions} from 'vuex'

  export default {
    created() {
      console.log(this.singer)
    },
    computed: {
      ...mapGetters([
        'singer',
        'playing',
        'fullScreen'
      ])
    },
    methods: {
      setSing() {
        this.setSinger({name: '通过vuexs组件设置的对象', tv: '猎场'})
      },
      pil() {
        this.selectPlay({
          list: true,
          index: true
        })
      },
      ...mapMutations({
        setSinger: 'SET_SINGER'
      }),
      ...mapActions([
        'selectPlay'   // mapAction  相当于事件 设置对应的参数 vuex提交commit
      ])
    }
  }
</script>

<style>

</style>
