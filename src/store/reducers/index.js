import { combineReducers } from 'redux'
import user from './user'
import menu from './menu'
import shoppingCar from './shoppingCar'
import order from './order'
import counter from './counter'

export default combineReducers({
  user,
  menu,
  shoppingCar,
  order,
  counter,
})
