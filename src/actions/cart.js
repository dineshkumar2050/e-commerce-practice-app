import api from '../utils/api';
import { ADD_CART_DATA , GET_CART_DATA} from './types';

export const getDataFromCart = () => async dispatch => {
    try{
        const res = await api.get('/getCartData');
        dispatch({
            type: GET_CART_DATA,
            payload: res.data
        })
    } catch(err) {
        console.log(err)
    }
}

export const addDataToCart = (data) => async dispatch => {
    try{
        const res = await api.post('/addDataToCart',data);
        dispatch({
            type: ADD_CART_DATA,
            payload: res.data
        })
    } catch(err) {
        console.log(err)
    }
}