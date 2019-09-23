import React from 'react';
import PropTypes from 'prop-types';

const TextAreaControl = (props) => (
    <div className="form-group">
        <label className="col-md-4 control-label">{props.title}</label>
        <div className="col-md-6 inputGroupContainer">
            <div className="input-group"><span className="input-group-addon">
                <i className="glyphicon glyphicon-user"></i>
            </span>
                <textarea className="form-control"
                    name={props.name}
                    rows={props.rows}
                    value={props.content}
                    onChange={props.controlFunc}
                    placeholder={props.placeholder} />
            </div>
        </div>
    </div>
);

TextAreaControl.propTypes = {  
    title: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    rows: PropTypes.number.isRequired,
    content: PropTypes.string
}

export default TextAreaControl;  