import axios from 'axios'
import { Message, MessageBox } from 'element-ui'
// create an axios instance
const service = axios.create({
  baseURL: '/api', // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 10000 // request timeout
})

// 请求拦截器
service.interceptors.request.use(
  request => {
    // console.log(store.getters.token, getToken())
    // let token = null
    // if (store.getters.token) token = store.getters.token
    // if (getToken() && !store.getters.token) {
    //   token = JSON.parse(getToken())
    //   store.commit('system/SET_TOKEN', token)
    // }
    // if (!token) MessageBox('登录超时').then(() => {
    //   router.replace({path: '/login?name=1&age=2'})
    //   location.reload()
    // })
    return request
  },
  config => {
    // do something before request is sent
    //
    // if (store.getters.token) {
    // let each request carry token
    // ['X-Token'] is a custom headers key
    // please modify it according to the actual situation
    // config.headers['token'] = 1231
    // }
    config.headers['Content-Type'] = 'application/json;charset=UTF-8'
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
  */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {

    const res = response.data
    // console.log(res)

    // if the custom code is not 20000, it is judged as an error.
    if (!res.success || res.success == 'false') {
      Message({
        message: res.msg || 'Error',
        type: 'error',
        duration: 5 * 1000
      })

      // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
      if (res.status === 401) {
        // to re-login
        MessageBox.confirm('您已经登出，您可以取消停留在此页面，或再次登录', '确认注销', {
          confirmButtonText: '重新登录',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          // store.dispatch('user/resetToken').then(() => {
          //   location.reload()
          // })
          // store.dispatch('permission/removeRouter')
        })
      }
      return Promise.reject(new Error(res.msg || 'Error'))
    } else {
      return res
    }
  },
  error => {
    console.log('err' + error) // for debug
    if (!error.response) {
      Message({
        message: error.msg || '接口错误',
        type: 'error',
        duration: 5 * 1000
      })
      return
    }
    if (error.response.status === 401) {
      MessageBox.confirm('您已经登出，您可以取消停留在此页面，或再次登录', '确认注销', {
        confirmButtonText: '重新登录',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        // store.dispatch('user/resetToken').then(() => {
        //   location.reload()
        // })
        // store.dispatch('permission/removeRouter')
      })
    } else {
      Message({
        message: error.response.data.msg  || '接口错误',
        type: 'error',
        duration: 5 * 1000
      })
    }
    return Promise.reject(error)
  }
)

export default service
