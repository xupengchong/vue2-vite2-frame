import Cookies from 'js-cookie'

export function getToken() {
  return Cookies.get('token')
}

// export function setToken(token) {
//   return Cookies.set(TokenKey, token)
// }

// export function removeToken() {
//   return Cookies.remove(TokenKey)
// }

// export function getUserInfo() {
//   const code = Cookies.get(userInfo)
//   return code ? decodeURI(code) : '{}'
// }

// export function setUserInfo(info) {
//   const code = encodeURI(info);
//   return Cookies.set(userInfo, code)
// }

// export function removeUserInfo() {
//   return Cookies.remove(userInfo)
// }

