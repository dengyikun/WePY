import {createAction} from 'redux-actions'
import {LOGIN} from '../types/user'
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

    const userData = await requestWithToken({
      url: '/guest/currentUserInfo'
    }).catch(reject)

    resolve(userData.guestInfo)
  })
})
