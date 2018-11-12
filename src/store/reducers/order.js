import {handleActions} from 'redux-actions'
import {GET_ORDER, CREATE_ORDER} from '../types/order'

export default handleActions({
  [GET_ORDER](state, action) {
    return  {
      ...state,
    }
  },
  [CREATE_ORDER](state, action) {
    debugger
    return  {
      ...state,
    }
  },
}, {
  list: [],
})
