import { PRODUCTS, GET_PRODUCT, PAGINATED_PRODUCTS } from '../actions/types';

const initialState = {
    error: null,
    data: null,
    loading: true,
    successMsg: null,
    productsCount: 0
}

function products(state = initialState,action) {
    const { type,payload } = action;

    switch (type) {
        case PRODUCTS:
            return {
                ...initialState,
                error: payload && payload.data ? null : 'Error occured',
                data: payload && payload.data && payload.data.length > 0 ? payload.data : null,
                successMsg: null,
                loading: false,
                productsCount: payload && payload.count
            }
            
        case GET_PRODUCT:
            return {
                ...initialState,
                error: payload ? null : 'Error occured',
                data: payload ? payload : null,
                successMsg: payload ? 'successfully added' : null,
                loading: false
            }
            
        case PAGINATED_PRODUCTS:
            return{
                ...initialState,
                error: payload ? null : 'Error occured',
                data: payload ? payload : null,
                successMsg: null,
                loading: false
            }
            
        default:
            return state;
    }
}

export default products;
