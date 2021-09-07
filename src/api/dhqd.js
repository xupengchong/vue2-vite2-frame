import request from '@/utils/request'
// 拼接 用 params 隐士 data
// 添加 电话清单
export function addDhqd(params) {
  return request({
    url: '/Information/PhoneListApply',
    method: 'post',
    params
  })
}
