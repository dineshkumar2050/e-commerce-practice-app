import React from 'react'
import PropTypes from 'prop-types'
import './ParentWrapper.css';

function ParentWrapper({isHeaderPresent, children}) {
    const styles = {
        overflow: isHeaderPresent ? 'hidden' : 'scroll'
    }
    return (    
        <div className='parent' style={styles}>
            { children }
        </div>        
    )
}

ParentWrapper.propTypes = {
    isHeaderPresent: PropTypes.bool
}

export default ParentWrapper

