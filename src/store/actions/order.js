import {createAction} from 'redux-actions'
import {GET_ORDER} from '../types/order'
import wepy from 'wepy'
import {request, requestWithToken} from '../../utils/request'

export const getOrder = createAction(GET_ORDER, () => {
  return new Promise(async (resolve, reject) => {
    const data = await requestWithToken({
      url: '/order/page',
      data: {
        page: 1,
        pageSize: 10,
      }
    }).catch(reject)

    resolve({
    })
  })
})
