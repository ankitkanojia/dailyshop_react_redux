import React from 'react';
import PropTypes from 'prop-types';

const InputControl = (props) => (
    <input min={props.minvalue} onChange={props.controlFunc} className={props.className} type={props.inputType} value={props.value} />
);

InputControl.propTypes = {  
    inputType: PropTypes.oneOf(['text', 'number']).isRequired,
    value: PropTypes.string.isRequired,
    minvalue: PropTypes.number.isRequired,
    className: PropTypes.string.isRequired,
    controlFunc: PropTypes.func.isRequired,
}

export default InputControl;  