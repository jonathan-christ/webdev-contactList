import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'

import $ from 'jquery'

const Input = ({ error, symbol, placeholder, id, width, maxLength, type, onChange}) => {
    return (
        <div className={"input-group mb-" + width}>
            <div className="input-group-prepend">
                <span className="input-group-text">{symbol}</span>
            </div>
            <input id={id} className="form-control" type={type} placeholder={placeholder} name={id}
                maxLength={maxLength}
                aria-describedby={"validation" + id}
                onChange={(e) => {
                    onChange(e.target.value)
                }} 
                required
                />
            <div id={"validation" + id} className="invalid-feedback">
                {error}
            </div>
        </div>
    )
}

Input.defaultProps = {
    type: "text",
    pattern: /\w/,
    maxLength: 50,
    width: 3,
}

Input.propTypes = {
    type: PropTypes.string,
    onChange: PropTypes.func,
}

export default Input