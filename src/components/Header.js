import React from 'react'
import PropTypes from 'prop-types'
import './Header.css';
import { debounce } from './essentials';
import { FaShoppingCart } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';

function Header({title}) {
    const history = useHistory();
    const handleClick = e => {
        e.preventDefault();
        console.log('clicked');
        debounce(() => console.log('Hi'),2000);
        history.push({
            pathname: '/cart'
        })
    }
    return (
        <div className='header'>
            <div className={'title'}>{title}</div>
            <div className={'icon'}>
                <button className={'cart-button'} type='button' onClick={handleClick}>
                    <FaShoppingCart size={18} color={'#fff'} />
                </button>
            </div>
        </div>
    )
}

Header.propTypes = {
    title: PropTypes.string
}

export default Header
