import React from 'react'
import PropTypes from 'prop-types'
import './Cart.css';
import ParentWrapper from './ParentWrapper'
import Header from './Header';

function Cart(props) {
    const { cartData } = window;
    return (  
        <ParentWrapper isHeaderPresent={true}>
            <Header title={'Cart'} />
            <div className={'cart'}>
            {
                 cartData && cartData.length > 0 ? cartData.map(product => {
                    return(
                        <div key={product.id} className={'inner-cart'}>
                            <div className={'left-section'}>
                                <img src={product.productImageUrl} alt='product' />
                            </div>
                            <div className={'right-section'}>
                                <div className={'top-content'}>
                                    <div className={'product-name'}>{product.prodcutName || ''}</div>
                                    <div className={'product-name'}>{product.category || ''}</div>                                    
                                </div>
                                <div className={'down-content'}>
                                    <div className={'left-data'}>
                                        <div className={'product-name'} style={{marginRight:'10px'}}>{product.discountPercent}% off</div>
                                        <div className={'product-name'}>
                                            <b style={{marginRight:'5px'}}>&#8377;{product.discountedPrice}</b>
                                            <s>&#8377;{product.mrp}</s>
                                        </div>
                                    </div>
                                    {product.count && <div className={'product-name'}>{product.count || ''}</div>}
                                </div>
                            </div>
                        </div>
                    )
                }) :
                <div className={'no-data'}>No data found</div>   
            }
            </div>            
        </ParentWrapper>             
    )
}

Cart.propTypes = {

}

export default Cart

