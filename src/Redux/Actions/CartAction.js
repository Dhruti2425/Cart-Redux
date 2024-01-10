
import { ADD_CART, GET_CART, REMOVE_CART } from '../action';

export const add_cart = (record) => {
    return {
        type: ADD_CART,
        payload: record
    }
}

export const get_cart = () => {
    return {
        type: GET_CART
    }
}

export const remove_cart = (id) => {
    return {
        type: REMOVE_CART,
        payload : id
    }
}