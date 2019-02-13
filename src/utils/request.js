import wepy from 'wepy'

const apiHost = 'https://www.russan.xyz/wxapp/order_meal'

const codeMessage = {
  200: '200 成功获取请求的数据',
  201: '201 新建或修改数据成功',
  202: '202 请求正在排队',
  204: '204 删除数据成功',
  400: '400 发出的请求有异常',
  401: '401 用户没有权限。',
  403: '403 用户被禁止访问',
  404: '404 请求的资源不存在',
  406: '406 请求的格式不可得',
  410: '410 请求的资源被删除',
  422: '422 创建对象时发生异常',
  500: '500 服务器发生异常',
  502: '502 网关异常',
  503: '503 服务器暂时过载或维护',
  504: '504 网关超时',
};

export const request = (options) => new Promise((resolve, reject) => {
  wepy.request({
    ...options,
    url: apiHost + options.url,
  })
    .then((data) => {
      const statusCode = data.statusCode
      if (statusCode >= 200 && statusCode < 207) {
        resolve(data.data)
      } else{
        wx.showToast({
          title: codeMessage[statusCode],
          icon: 'none'
        })
        reject(data.data)
      }
      if (statusCode === 401) {
      }
      if (statusCode === 401) {
      }
      if (statusCode === 403) {
      }
      if (statusCode <= 504 && statusCode >= 500) {
      }
      if (statusCode >= 404 && statusCode < 422) {
      }
    })
    .catch(error => {
      console.log(error, 'request:' + options.url)
      reject(error)
    })
})

export const requestWithToken = (options) => {
  return request({
    ...options,
    header: {
      ...options.header,
      Token: wx.getStorageSync('token')
    }
  })
}

export default {request, requestWithToken}
