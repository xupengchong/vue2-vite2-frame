import demo from '@/views/demo.vue'
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const originalReplace = Router.prototype.replace
Router.prototype.replace = function replace(location) {
  return originalReplace.call(this, location).catch(err => err)
}

export default new Router({
  routes: [
    {
      path: '/',
      component: demo
    },
    {
      path: '/demo',
      component: demo
    }
    // 404 page must be placed at the end !!!
    // { path: '*', redirect: '/404', hidden: true }
  ]
})
