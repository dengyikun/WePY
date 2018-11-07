import {handleActions} from 'redux-actions'
import {LOGIN, UPDATE_USER} from '../types/user'

export default handleActions({
  [LOGIN](state, action) {
    return  {
      ...state,
    }
  },
  [UPDATE_USER](state, action) {
    return  {
      ...state,
      ...action.payload
    }
  },
}, {
  openid: '',
  wechatNickName: '',
  profilePic: '',
  country: '',
  province: '',
  city: '',
  gender: 0,
  language: '',
  mobile: '',
})
