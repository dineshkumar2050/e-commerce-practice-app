import React,{ useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import './AddToCartButton.css'
import useCartData from './useCartData';

function AddToCartButton({product}) {
    const { id } = product;
    const [state,dispatch] = useCartData();
    const [count, setCount] = useState()
    useEffect(() => {
        let item = state && state.cartData && state.cartData.length > 0 && state.cartData.find(data => data.id === id);
        if(item) {
            setCount(item.count)
        } else {
            setCount(0)
        }
    },[count,state])

    const payloadData = {
        id: id,
        productData: product
    }

    const handleClick = e => {
        e.preventDefault();
        const { name } = e.target;
        dispatch({type: name, payload: payloadData})
    }
    
    console.log(state,'state');
    return (
        <div className={'cart-buttons'}>
            <button name={'remove'} disabled={count < 1 ? true : false} className={'button'} type={'button'} onClick={handleClick}>-</button>
            <span className={'count'}>{count}</span>
            <button name={'add'} className={'button'} type={'button'} onClick={handleClick}>+</button>
        </div>
    )
}

AddToCartButton.propTypes = {
    state: PropTypes.any,
    product: PropTypes.object
}

export default AddToCartButton

