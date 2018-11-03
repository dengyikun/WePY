import {handleActions} from 'redux-actions'
import {LOGIN} from '../types/user'

export default handleActions({
  [LOGIN](state, action) {
    return {
      ...state,
      ...action
    }
  }
}, {
  nickName: '',
  avatarUrl: '',
  country: '',
  province: '',
  city: '',
  gender: 0,
  language: '',
})
