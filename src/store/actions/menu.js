import {createAction} from 'redux-actions'
import {GET_DISH_TYPE, GET_ALL_DISH} from '../types/menu'
import {requestWithToken} from '../../utils/request'

export const getDishType = createAction(GET_DISH_TYPE, () => {
  return new Promise(async (resolve, reject) => {

    const data = await requestWithToken({
      url: '/dishType/getDishType'
    }).catch(reject)

    resolve(data)
  })
})

export const getAllDish = createAction(GET_ALL_DISH, () => {
  return new Promise(async (resolve, reject) => {

    const data = await requestWithToken({
      url: '/dish/getAllDish'
    }).catch(reject)

    resolve(data)
  })
})
