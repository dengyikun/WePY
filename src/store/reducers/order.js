import {handleActions} from 'redux-actions'
import {GET_ORDER, CLEAR_ORDER} from '../types/order'

export default handleActions({
  [GET_ORDER](state, action) {
    return {
      ...state,
      ...action.payload,
      list: [...state.list, ...action.payload.list]
    }
  },
  [CLEAR_ORDER](state, action) {
    return {
      ...state,
      firstPage: true,
      lastPage: false,
      list: [],
      pageNumber: 1,
      pageSize: 10,
      totalPage: 1,
      totalRow: 0,
      activeOrder: {},
    }
  },
}, {
  firstPage: true,
  lastPage: false,
  list: [],
  pageNumber: 1,
  pageSize: 10,
  totalPage: 1,
  totalRow: 0,
})
