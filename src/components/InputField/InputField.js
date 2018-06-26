import React from 'react'
import renderField from 'Form/renderField'

const InputField = ({
  value,
  onChange,
  placeholder,
  name,
  type
}) => (
  <input className='form-control'
    placeholder={placeholder}
    name={name}
    value={value}
    onChange={onChange}
    type={type}
  />
)

export default renderField(InputField)
