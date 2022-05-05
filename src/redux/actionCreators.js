import Api from "../api/Api.js"
import { AUTH_SUCCESS, SET_NEW_PIZZA, SET_PENDING, SET_PIZZA, SET_PIZZAS } from "./actionTypes.js"

export const ACsetPizza = (data) => ({
  type: SET_PIZZAS,
  data: data
})

export const ACsetNewPizza = (data) => ({
  type: SET_NEW_PIZZA,
  data: data
})

export const ACsetPending = () => ({
  type: SET_PENDING
})

export const setPizzaAC = (data) => ({
  type: SET_PIZZA,
  payload: data
})

export const setAuthAC = (data) => ({
  type: AUTH_SUCCESS,
  payload: data
})

export const getPizzaAC = () => {
  return async (dispatch) => {
    const res = await Api.getPizzas()
    console.log(res);
    dispatch(ACsetPending())
    if (res.status === 200) {
      dispatch(ACsetPizza(res.data.data.data))
    }
    // .finally(() => {
    //   dispatch( ACsetPending() )
    // })
    // .then((res) => {
    //   dispatch( ACsetPizza(res.data) )
    // })
  }
}

export const authAC = (data) => {
  return async (dispatch) => {
    Api.auth(data)
      .then((res) => {
        if (res.data?.token) {
          dispatch(setAuthAC(res.data))
        }
      })
  }
}