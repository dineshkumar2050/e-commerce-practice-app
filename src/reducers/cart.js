import { ADD_CART_DATA, GET_CART_DATA } from '../actions/types';

const initialState = {
    error: null,
    data: null,
    loading: true,
    successMsg: null
}

function cart(state=initialState,action) {
    const { type,payload } = action;
    switch (type){
        case ADD_CART_DATA:
            return {
                ...initialState,
                error: payload ? null : 'Error occured',
                data: payload ? payload : null,
                successMsg: null,
                loading: false,
            }
        case GET_CART_DATA:
            return {
                ...initialState,
                error: payload  ? null : 'Error occured',
                data: payload ? payload : null,
                successMsg: null,
                loading: false,
            }
        default:
            return state;
    }
}

export default cart;
