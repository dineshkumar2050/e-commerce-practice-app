import React from 'react'
import PropTypes from 'prop-types'
import ParentWrapper from './ParentWrapper'
import './NotFound.css';

function NotFound(props) {
    return (
        <ParentWrapper isHeaderPresent={false}>
            <div className='NotFound'>
                Not Found
            </div>
        </ParentWrapper>
    )
}

NotFound.propTypes = {

}

export default NotFound