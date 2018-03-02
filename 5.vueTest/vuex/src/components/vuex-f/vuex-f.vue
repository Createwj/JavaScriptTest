<template>
  <div>
    <h1>vuex-f子组件</h1>
    <span>{{singer}}</span>
    <p>{{playing}}</p>
    <p>{{fullScreen}}</p>
    <p @click="setSings">点击此处通过子组件设置singer</p>
    <b @click="pil">点击action批量修改vueX-state 子组件修改</b>
  </div>
</template>
<script>
  import {mapGetters, mapMutations, mapActions} from 'vuex'
  export default {
    computed: {
      ...mapGetters([
        'singer',
        'playing',
        'fullScreen'
      ])
    },
    methods: {
      setSings() {
        this.setSinger({name: '这是通过子组件设置的对象'})
      },
      pil() {
        this.selectPlay({
          list: false,
          index: false
        })
      },
      ...mapMutations({
        setSinger: 'SET_SINGER'
      }),
      ...mapActions([
        'selectPlay'
      ])
    }
  }
</script>

<style>

</style>
