import React from 'react'
import { observer } from 'mobx-react'

const InputField = ({
  value,
  meta: {touched, error},
  onChange,
  label,
  placeholder,
  name
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
    />
    { touched && error &&
      <span className='alert alert-danger'> {error} </span>
    }
  </div>
)

export default observer(InputField)
