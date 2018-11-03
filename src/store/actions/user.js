import {createAction} from 'redux-actions'
import {LOGIN} from '../types/user'
import wepy from 'wepy'
import {request, requestWithToken} from '../../utils/request'

export const login = createAction(LOGIN, () => {
  return new Promise(async (resolve, reject) => {
    const codeData = await wepy.login()
    const tokenData = await request({
      url: '/guest/applogin',
      data: {code: codeData.code}
    })
    wx.setStorageSync('token', tokenData.data)
    const userData = await requestWithToken({
      url: '/guest/currentUserInfo'
    })
    resolve(userData.guestInfo)
  })
})
