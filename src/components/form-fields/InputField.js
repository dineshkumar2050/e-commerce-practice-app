import React from 'react'
import PropTypes from 'prop-types'
import Input from '@material-ui/core/Input';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    inputFilter: {
        backgroundColor: '#fff',
        borderRadius:'3px',
        border:'1px solid rgba(0,0,0,0.42)',
        padding:'3px 10px'
    }
})

function InputField({placeholder='Enter text'}) {
    const handleChange = e => {
        e.preventDefault();
        const { value } = e.target;
    }
    return (
        <div className={'input-field'}>
            <Input className={classes.inputFilter} fullWidth onChange={handleChange} type={'text'} placeholder={placeholder} />
        </div>
    )
}

InputField.propTypes = {
    placeholder: PropTypes.string
}

export default InputField

