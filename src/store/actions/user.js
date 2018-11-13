import {createAction} from 'redux-actions'
import {LOGIN, GET_USER} from '../types/user'
import wepy from 'wepy'
import {request, requestWithToken} from '../../utils/request'

export const login = createAction(LOGIN, () => {
  return new Promise(async (resolve, reject) => {
    const codeData = await wepy.login().catch(reject)

    const tokenData = await request({
      url: '/guest/applogin',
      data: {code: codeData.code}
    }).catch(reject)

    wx.setStorageSync('token', tokenData.data)

    resolve(tokenData)
  })
})

export const getUser = createAction(GET_USER, () => {
  return requestWithToken({
    url: '/guest/currentUserInfo'
  })
})
