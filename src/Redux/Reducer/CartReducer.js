
import { ADD_CART, GET_CART, REMOVE_CART } from '../action';

const initialValue = {
    cart: []
}

const CartReducer = (state = initialValue, action) => {
    switch (action.type) {
        case ADD_CART:
            return {
                ...state, cart: [...state.cart, action.payload]
            }
        case GET_CART:
            return state
        case REMOVE_CART:
            return {
                ...state , cart : state.cart.filter((v, i) => v.id != action.payload)
            }
        default:
            return state
    }
}

export default CartReducer;