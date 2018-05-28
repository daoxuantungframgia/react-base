import React from 'react'

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
      <span className='alert alert-danger'> {error} </span>
    }
  </div>
)

export default InputField
