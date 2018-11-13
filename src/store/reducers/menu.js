import {handleActions} from 'redux-actions'
import {
  GET_DISH_TYPE,
  GET_ALL_DISH,
  UPDATE_MENU,
  UPDATE_ACTIVE_DISH_TYPE_INDEX,
  ADD_IN_MENU,
  SUBTRACT_IN_MENU,
  CLEAR_MENU,
} from '../types/menu'

export default handleActions({
  [GET_DISH_TYPE](state, action) {
    return {
      ...state,
      // dishType: action.payload
    }
  },
  [GET_ALL_DISH](state, action) {
    return {
      ...state,
      dishType: action.payload
    }
  },
  [UPDATE_MENU](state, action) {
    return {
      ...state,
      ...action.payload
    }
  },
  [UPDATE_ACTIVE_DISH_TYPE_INDEX](state, action) {
    return {
      ...state,
      activeDishTypeIndex: action.payload
    }
  },
  [ADD_IN_MENU](state, action) {
    const {id, index, typeIndex} = action.payload
    const dishType = state.dishType
    if (dishType[typeIndex].dishes[index].id === id){
      dishType[typeIndex].number = (dishType[typeIndex].number || 0) + 1
      dishType[typeIndex].dishes[index].number = (dishType[typeIndex].dishes[index].number || 0) + 1
    }
    return {
      ...state,
      dishType
    }
  },
  [SUBTRACT_IN_MENU](state, action) {
    const {id, index, typeIndex} = action.payload
    const dishType = state.dishType
    if (dishType[typeIndex].dishes[index].id === id){
      dishType[typeIndex].number = dishType[typeIndex].number - 1
      dishType[typeIndex].dishes[index].number = dishType[typeIndex].dishes[index].number - 1
    }
    return {
      ...state,
      dishType
    }
  },
  [CLEAR_MENU](state, action) {
    const dishType = state.dishType
    dishType.map(item => {
      item.number = 0
      item.dishes.map(dish => {
        dish.number = 0
      })
    })
    return {
      ...state,
      dishType
    }
  },
}, {
  dishType: [],
  activeDishTypeIndex: 0,
})
