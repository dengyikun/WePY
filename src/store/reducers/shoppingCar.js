import {handleActions} from 'redux-actions'
import {SETTABLEID} from '../types/shoppingCar'

export default handleActions({
  [SETTABLEID](state, action) {
    return {
      ...state,
      tableId: action.payload
    }
  }
}, {
  tableId: '',
})
