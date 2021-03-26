import React,{ useEffect,useState } from 'react'
import PropTypes from 'prop-types'
import ParentWrapper from './ParentWrapper'
import Header from './Header';
import { getProducts, getPaginatedProducts } from '../actions/products';
import { connect } from 'react-redux';
import './Products.css';
import ProductItem from './ProductItem';
import SearchFilter from './SearchFilter';
import Pagination from "@material-ui/lab/Pagination";

function Products({data,getProducts,getPaginatedProducts,...props}) {
    const [products,setProducts] = useState([]);
    const [filteredProducts,setFilteredProducts] = useState([]);
    const [inputValue,setInputValue] = useState('');

    useEffect(() => {
        getProducts(4);
    },[getProducts])

    useEffect(() => {
        if(data && !data.loading && data.data && data.data.length > 0){
            console.log(typeof(data.data))
            setProducts(data.data)
        }        
    },[data])

    useEffect(() => {
        setFilteredProducts([...products])
    },[products])

    const handleChange = (e, value) => {
        e.preventDefault();
        console.log(e.target.innerHTML, value);
        getPaginatedProducts(value,4);
    };
    
    console.log(data,'data');
    return (
        <ParentWrapper isHeaderPresent={true}>
            <div className={'products'}>
                <Header title={'Products'} />
                <SearchFilter products={products} inputValue={inputValue} setInputValue={setInputValue} placeholder={'Search for name,category'} filteredProducts={filteredProducts} setFilteredProducts={setFilteredProducts} />
                <div className={'products-data'}>
                    {
                        filteredProducts && filteredProducts.length > 0 &&
                        <div className={'content'}>
                            {
                                filteredProducts.map(product => {
                                    return(
                                        <ProductItem product={product} />
                                    )
                                })
                            }
                        </div>
                    }
                </div>
                <div className={'outer-div'}>
                    <Pagination
                        count={4}
                        defaultPage={1}
                        onChange={handleChange}
                        type={"start-ellipsis"}
                        color={'primary'}
                    />
                </div>
            </div>
        </ParentWrapper>
    )
}

Products.propTypes = {
    data: PropTypes.object,
    getProducts: PropTypes.func.isRequired,
    getPaginatedProducts: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    data : state.products
})

export default connect(mapStateToProps,{getProducts,getPaginatedProducts})(Products)
