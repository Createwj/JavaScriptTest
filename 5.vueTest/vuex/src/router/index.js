import Vue from 'vue'
import Router from 'vue-router'
import order from '@/components/order/order'
import info from '@/components/info/info'
import disc from '@/components/disc/disc'
import log from '@/components/log/log'
import song from '@/components/song/song'
import singer from '@/components/singer/singer'
import vuexs from '@/components/vuexs/vuexs'
import vuef from '@/components/vuex-f/vuex-f'
import input from '@/components/input/input'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'order',   // 默认路径
      component: order,
      children: [
        {
          path: '/name/:name/tv/:tv',
          component: disc
        }
      ]
    },
    {
      path: '/log',   // 登录页面  用于测试axios拦截器
      component: log
    },
    {
      path: '/info',
      name: 'info',
      component: info,
      children: [
        {
          path: '/singer',
          component: singer,
          children: [
            {
              path: '/song',
              component: song
            }
          ]
        }
      ]
    },
    {
      path: '/vuexs',
      name: 'vuexs',
      component: vuexs,
      children: [
        {
          path: '/vuef',
          component: vuef
        }
      ]
    },
    {
      path: '/input',
      component: input
    }
  ]
})
