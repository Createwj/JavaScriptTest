import Vue from 'vue'
import Router from 'vue-router'
import order from '@/components/order/order'
import info from '@/components/info/info'
import disc from '@/components/disc/disc'
import page from '@/components/page/page'
import song from '@/components/song/song'
import singer from '@/components/singer/singer'
import vuexs from '@/components/vuexs/vuexs'
import vuef from '@/components/vuex-f/vuex-f'
import log from '@/components/log/log'
import index from '@/components/index/index'
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
      path: '/page',   // 登录页面  用于测试axios拦截器
      component: page
    },
    {
      path: '/index',   // 登录页面  用于测试axios拦截器
      meta: {
        requireAuth: true  // 添加该字段，表示进入这个路由是需要登录的
      },
      component: index
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
