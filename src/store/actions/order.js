import {createAction} from 'redux-actions'
import {GET_ORDER, GET_ORDER_BY_ID, CREATE_ORDER, ORDER_PAY, CONFIRM_ORDER_PAY} from '../types/order'
import {requestWithToken} from '../../utils/request'

export const getOrder = createAction(GET_ORDER, (data) => {
  return requestWithToken({
    url: '/order/page',
    data,
  })
})

export const getOrderById = createAction(GET_ORDER_BY_ID, (data) => {
  return requestWithToken({
    url: '/order/getOrderById',
    data,
  })
})

export const createOrder = createAction(CREATE_ORDER, (data) => {
  return requestWithToken({
    url: '/order/order',
    method: 'POST',
    data
  })
})

export const orderPay = createAction(ORDER_PAY, (data) => {
  return requestWithToken({
    url: '/appPay/order',
    data,
  })
})

export const confirmOrderPay = createAction(CONFIRM_ORDER_PAY, (data) => {
  return requestWithToken({
    url: '/appPay/paying',
    data,
  })
})
