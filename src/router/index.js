import index from '@/layout/index.vue'
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const originalReplace = Router.prototype.replace
Router.prototype.replace = function replace(location) {
  return originalReplace.call(this, location).catch(err => err)
}

const baseRoutes = [
  {
    path: '/',
    redirect: '/index'
  },

  // 404 page must be placed at the end !!!
  {path: '*', redirect: '/404', hidden: true}
]

export let menuRoutes = [
  {
    path: '/index',
    component: index,
    name: 'index',
    title: '首页',
    redirect: {name: 'Hindex'},
    children: [
      {
        path: 'Hindex',
        component: () => import('@/views/test/index'),
        name: 'Hindex',
        title: '首页'
      },
      {
        path: 'home',
        name: 'home',
        title: '信息发布',
        component: () => import('components/baseView/baseView'),
        // redirect: {name: 'yjxx'},
        children: [
          {
            path: 'yjxx',
            component: () => import('@/views/test/yjxx'),
            name: 'yjxx',
            title: '应急信息'
          },
          {
            path: 'yyxx',
            component: () => import('@/views/test/yjxx'),
            name: 'yyxx',
            title: '运营信息'
          }
        ]
      }
    ]
  }

]
let routes = baseRoutes.concat(menuRoutes)

let routerR = new Router({
  // mode: 'history',
  routes
})

export default routerR
