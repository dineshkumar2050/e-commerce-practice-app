import React,{ useState,useEffect } from 'react';
import Input from '@material-ui/core/Input';
import PropTypes from 'prop-types';
import './SearchFilter.css';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    inputFilter: {
        backgroundColor: '#fff',
        borderRadius:'3px',
        border:'1px solid rgba(0,0,0,0.42)',
        padding:'3px 10px'
    }
})

export default function SearchFilter({products,inputValue,setInputValue,placeholder,filteredProducts,setFilteredProducts}) {
    console.log(products,inputValue,'inputValue');
    const classes = useStyles();
    const handleChange = e => {
        e.preventDefault();
        const { value } = e.target;
        console.log(e.target.value,'e.target.value');
        setInputValue(value)
        let filterData = products && products.length > 0 && products.filter(product => product.category.toLowerCase().includes(value.toLowerCase()) || product.prodcutName.toLowerCase().includes(value.toLowerCase()))
        setFilteredProducts([...filterData]);
    }
    return(
        <div className={'search-filter'}>
            <Input className={classes.inputFilter} fullWidth onChange={handleChange} type={'text'} placeholder={placeholder} />
        </div>
    )
}

SearchFilter.propTypes = {
    placeholder: PropTypes.string,
    filteredProducts: PropTypes.array,
    setFilteredProducts: PropTypes.func,
    inputValue: PropTypes.string,
    setInputValue: PropTypes.func,
    products: PropTypes.array
}
