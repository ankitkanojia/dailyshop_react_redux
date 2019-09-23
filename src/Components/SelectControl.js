import React from 'react';
import PropTypes from 'prop-types';

const SelectControl = (props) => (
    <select value={props.selectedOption} onChange={props.controlFunc}>
        {props.options.map(opt => {
            return (
                <option
                    key={opt}
                    value={opt}>{opt}</option>
            );
        })}
    </select>
);

SelectControl.propTypes = {
    options: PropTypes.array.isRequired,
    selectedOption: PropTypes.string,
    controlFunc: PropTypes.func.isRequired
}

export default SelectControl;  