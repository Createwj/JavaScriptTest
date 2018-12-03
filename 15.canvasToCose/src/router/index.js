import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import index from '@/components/index'
import indexs from '@/components/indexs'
import animat from '@/components/animat'
import blok from '@/components/blok'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/s',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/a',
      name: 'indexs',
      component: indexs
    },{
      path: '/blok',
      name: 'blok',
      component: blok
    },
    {
      path: '/animat',
      name: 'animat',
      component: animat
    }
  ]
})
