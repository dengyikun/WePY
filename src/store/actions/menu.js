import {createAction} from 'redux-actions'
import {GETDISHTYPE, GETALLDISH} from '../types/menu'
import wepy from 'wepy'
import {request, requestWithToken} from '../../utils/request'

export const getDishType = createAction(GETDISHTYPE, () => {
  return new Promise(async (resolve, reject) => {

    const data = await requestWithToken({
      url: '/dishType/getDishType'
    }).catch(reject)

    resolve(data)
  })
})

export const getAllDish = createAction(GETALLDISH, () => {
  return new Promise(async (resolve, reject) => {

    const data = await requestWithToken({
      url: '/dish/getAllDish'
    }).catch(reject)

    resolve(data)
  })
})
