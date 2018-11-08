import {handleActions} from 'redux-actions'
import {GET_ORDER} from '../types/order'

export default handleActions({
  [GET_ORDER](state, action) {
    return  {
      ...state,
    }
  },
}, {
  list: [],
})
