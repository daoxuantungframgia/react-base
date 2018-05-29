import React from 'react'
import classes from './InputField.scss'

const InputField = ({
  value,
  meta: {touched, error},
  onChange,
  label,
  placeholder,
  name,
  type
}) => (
  <div className='form-group'>
    <label className='control-label'>
      { label }
    </label>
    <input className='form-control'
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      type={type}
    />
    { touched && error &&
      <span className={classes.error}> {error} </span>
    }
  </div>
)

export default InputField
