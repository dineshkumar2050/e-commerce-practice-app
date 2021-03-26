// import { useState, useEffect } from 'react';

// if(window && !window['cartInfo']){
//     window['cartInfo'] = []
// }

// let { cartInfo } = window;

// export default function useCartInfo(id,product,type){
//     const [cartData,setCartData] = useState([]);

//     useEffect(() => {
//         let data = [...cartData];
//         let remainingData = data && data.length > 0 && data.find(product => product.id !== id)
//         let isProductPresent = data && data.length > 0 && data.find(product => product.id === id)
//         if(isProductPresent) {
//             if(type === 'add'){
//                 isProductPresent['count'] += 1;
//                 setCartData([...remainingData,isProductPresent])
//             } else if(type === 'remove'){
//                 if(isProductPresent.count > 1){
//                     isProductPresent['count'] -= 1;
//                     setCartData([...remainingData,isProductPresent])
//                 } else {
//                     delete isProductPresent['count'];
//                     setCartData([...remainingData])
//                 }
//             }
//         } else {
//             let productToBeAdded = {...product}            
//             if(type === 'add'){
//                 productToBeAdded['count'] = 1
//                 setCartData([...remainingData,productToBeAdded])
//             }
//         }
//     },[cartData])

//     return cartData;
// }


// import React,{ useReducer, useEffect } from 'react';

// let initialState = {
//     cartData: []
// }

// if(window && !window['cartData']) {
//     window['cartData'] = []
// }

// function reducer(state,action){
//     const { type, payload } = action;
//     const { id, productData } = payload;
//     let data = [...state.cartData];
//     let isProductPresent = data.find(item => item.id === id);
//     let remainingData = data.filter(item => item.id !== id)
//     console.log(localStorage,state,data,isProductPresent,remainingData,'data','isProductPresent','remainingData')
//     switch (type) {
//         case 'add':
//             if(isProductPresent){
//                 console.log(isProductPresent['count'],'isProductPresent 1');
//                 isProductPresent['count'] = (isProductPresent['count'] || 0) + 1;
//                 console.log(isProductPresent['count'],'isProductPresent 2');
//                 return {
//                     cartData: [...remainingData, {...isProductPresent}]
//                 }
//             } else {
//                 productData['count'] = (productData['count'] || 0) + 1;
//                 return {
//                     cartData: [...remainingData,{...productData}]
//                 }
//             }
                        
//         case 'remove':
//             if(isProductPresent && isProductPresent.count > 1) {
//                 isProductPresent['count'] = isProductPresent['count'] > 1 ?  isProductPresent['count'] - 1 : {};
//                 return {
//                     cartData: [...remainingData,isProductPresent]
//                 }
//             } else {
//                 return {
//                     cartData: [...remainingData]
//                 }
//             }
                        
//         default:
//             throw new Error();
//     }
// }

// export default function useCartData(){
//     const [state,dispatch] = useReducer(reducer,initialState);
//     const { cartData } = window;
//     useEffect(() => {        
//         // let previousState = {...state};
//         // initialState = previousState;
//         cartData.push(state.cartData)
//         console.log(initialState,'initialState',localStorage,cartData);
//     },[state])

//     return [state,dispatch];
// }
