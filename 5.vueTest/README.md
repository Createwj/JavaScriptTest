axios 拦截器的使用[拦截器](https://www.cnblogs.com/waitingbar/archive/2017/11/23/7885028.html)
### 路由的嵌套使用
```
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
    }
```
### 编程式导航
声明式vs编程式
```
<router-link :to></router-link>

this.$router.push({ })
```

### vue Router  url传递参数

```
router.push('home')
router.push({path: 'home'})
router.push({name: 'user', params: { userId: 123 } }) // 注意 name
router.push({ path: 'register', query: { plan: 'private' }})
路由设置格式
 {
      children: [
        {
          path: '/name/:name/tv/:tv',
          component: disc
        }
      ]
    },
 参数传递格式
 this.$router.push({
           path: `/name/:${this.name}/tv/:${this.tv}`
         })
```
**注意 如果提供了 path，params 会被忽略，上述例子中的 query 并不属于这种情况。取而代之的是下面例子的做法，你需要提供路由的 name 或手写完整的带有参数的 path：**
router.push({ name: 'user', params: { userId }}) // -> /user/123
router.push({ path: `/user/${userId}` }) // -> /user/123
// 这里的 params 不生效
router.push({ path: '/user', params: { userId }}) // -> /user

**router.replace()**
不会向党前的history添加一条记录 只会替换掉当前的url

**router.go()**
router.go(1) 前进一步
router.go(-1) 后退一步等同 router.back()

### 路由重定向
```
const router = new VueRouter({
  routes: [
    { path: '/a', redirect: '/b' }
  ]
})
```

### 路由懒加载   按需加载  优化性能
```
声明不引用
const UserCenter = (resolve) => {
  import('components/user-center/user-center').then((module) => {
    resolve(module)
  })
}

component: Recommend,  使用
```




## vueX 基本使用

##### vue自身状态管理模式
状态自管理应用包含以下几个部分
 - state 驱动应用的数据源
 - view 以声明方式将state映射到视图
 - actions 通过用户输入的信息 改变state状态

下图表示单项数据流的极简示例
<div style='margin:auto'>
  <img width=600 height=400 src='https://vuex.vuejs.org/zh-cn/images/flow.png' />
</div>

**缺点**
 - 多个视图依赖于同一状态。
 - 来自不同视图的行为需要变更同一状态。

### vueX基本示意图

<div style='margin:auto'>
  <img width=600 height=400 src='https://vuex.vuejs.org/zh-cn/images/vuex.png' />
</div>

v-console引用链接
http://wechatfe.github.io/vconsole/lib/vconsole.min.js?v=3.0.0.0
