import {handleActions} from 'redux-actions'
import {GETDISHTYPE, GETALLDISH} from '../types/menu'

export default handleActions({
  [GETDISHTYPE](state, action) {
    return {
      ...state,
      // dishType: action.payload
    }
  },
  [GETALLDISH](state, action) {
    return {
      ...state,
      dishType: action.payload
    }
  }
}, {
  dishType: [],
  activeDishTypeIndex: 0,
})
