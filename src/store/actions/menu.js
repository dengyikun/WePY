import {createAction} from 'redux-actions'
import {GET_DISH_TYPE, GET_ALL_DISH} from '../types/menu'
import {requestWithToken} from '../../utils/request'

export const getDishType = createAction(GET_DISH_TYPE, () => {
  return requestWithToken({
    url: '/dishType/getDishType'
  })
})

export const getAllDish = createAction(GET_ALL_DISH, () => {
  return requestWithToken({
    url: '/dish/getAllDish'
  })
})
