import {handleActions} from 'redux-actions'
import {
  SET_TABLE_ID,
  ADD_IN_SHOPPING_CAR,
  SUBTRACT_IN_SHOPPING_CAR,
  CLEAR_SHOPPING_CAR,
  UPDATE_SHOPPING_CAR,
} from '../types/shoppingCar'

export default handleActions({
  [SET_TABLE_ID](state, action) {
    return {
      ...state,
      tableId: action.payload
    }
  },
  [ADD_IN_SHOPPING_CAR](state, action) {
    let {dishes, number, total} = state
    const payload = action.payload
    let index = dishes.findIndex(item => item.id === payload.id)
    if (index !== -1) {
      dishes[index] = {
        ...payload,
        number: dishes[index].number + 1,
      }
    } else {
      dishes.push({
        ...payload,
        number: 1,
      })
    }
    total = (parseFloat(total) + payload.price).toFixed(2)
    number++
    return {
      ...state,
      dishes,
      number,
      total,
    }
  },
  [SUBTRACT_IN_SHOPPING_CAR](state, action) {
    let {dishes, number, total} = state
    const payload = action.payload
    let index = dishes.findIndex(item => item.id === payload.id)
    if (index !== -1) {
      if (dishes[index].number > 1) {
        dishes[index] = {
          ...payload,
          number: dishes[index].number - 1,
        }
      } else {
        dishes.splice(index, 1)
      }
      total = (parseFloat(total) - payload.price).toFixed(2)
      number--
    }
    return {
      ...state,
      dishes,
      number,
      total,
    }
  },
  [CLEAR_SHOPPING_CAR](state, action) {
    return {
      ...state,
      dishes: [],
      number: 0,
      total: "0.00"
    }
  },
  [UPDATE_SHOPPING_CAR](state, action) {
    return {
      ...state,
      ...action.payload
    }
  },
}, {
  tableId: '',
  dishes: [],
  number: 0,
  total: "0.00",
  people: null,
  time: null,
  remark: '',
})
