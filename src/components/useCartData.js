import { useReducer, useEffect } from 'react';

let initialState = {
    cartData: []
}

if(window && !window['cartData']) {
    window['cartData'] = []
}

function reducer(state,action){
    const { type, payload } = action;
    const { id, productData } = payload;
    let data = [...state.cartData];
    let isProductPresent = data.find(item => item.id === id);
    let remainingData = data.filter(item => item.id !== id)
    
    switch (type) {
        case 'add':
            if(isProductPresent){                
                isProductPresent['count'] = (isProductPresent['count'] || 0) + 1;
                
                return {
                    cartData: [...remainingData, {...isProductPresent}]
                }
            } else {
                productData['count'] = (productData['count'] || 0) + 1;
                return {
                    cartData: [...remainingData,{...productData}]
                }
            }                        
        case 'remove':
            if(isProductPresent && isProductPresent.count > 1) {
                isProductPresent['count'] = isProductPresent['count'] > 1 ?  isProductPresent['count'] - 1 : {};
                return {
                    cartData: [...remainingData,isProductPresent]
                }
            } else {
                return {
                    cartData: [...remainingData]
                }
            }                        
        default:
            throw new Error();
    }
}

export default function useCartData(){
    const [state,dispatch] = useReducer(reducer,initialState);
    const { cartData } = window;
    useEffect(() => {     
        if(state && Object.values(state).length > 0 && state.cartData && state.cartData.length > 0){
            let productId = state.cartData[0].id;
            let countValue = state.cartData[0].count;
            let existInCartData = cartData && cartData.length > 0 && cartData.find(product => product.id === productId)
            if(existInCartData) {
                existInCartData['count'] = countValue;
            } else {
                cartData.push(state.cartData[0]);
            }             
        }   
    },[state])

    return [state,dispatch];
}
