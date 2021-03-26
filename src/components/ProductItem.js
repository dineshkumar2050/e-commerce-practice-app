import React, { useReducer } from 'react'
import PropTypes from 'prop-types';
import './ProductItem.css';
import AddToCartButton from './AddToCartButton'

const initialState = {count: 0};

function reducer(state,action){
    const { type, payload } = action;
    switch (type) {
        case 'increment':
            return {
                count: payload
            };
            break;
        case 'decrement':
            return {
                count: payload
            }
        default:
            throw new Error();
    }
}

function ProductItem({product}) {
    const { id, category, productImageUrl, prodcutName, mrp, discountPercent, discountedPrice } = product;
    const [state, dispatch] = useReducer(reducer,initialState);
    return (
        <div className={'product-item'} key={id}>
            <div className={'top-content'}>
                <img src={productImageUrl} alt={'product'} />
            </div>
            <div className={'bottom-content'}>
                <div className={'product-name'}>
                    {prodcutName}
                </div>
                <div className={'category-name'}>
                    {category}
                </div>
                <div className={'prices'}>
                    <span className={'after-discount'}>&#8377;{discountedPrice}</span>
                    <span className={'mrp'}><s>&#8377;{mrp}</s></span>
                </div>
                <div className={'discount'}>
                    {discountPercent}% off
                </div>
                <AddToCartButton dispatch={dispatch} state={state} product={product} />
            </div>
        </div>
    )
}

ProductItem.propTypes = {
    product: PropTypes.object.isRequired
}

export default ProductItem

