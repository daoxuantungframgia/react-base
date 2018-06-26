import React from 'react'
import classes from './renderField.scss'

export default function renderField(Component) {
  return ({ label, meta: { touched, error }, ...rest }) => (
    <div className={classes.container}>
      <label> {label} </label>
      <Component {...rest} />
      { touched && error && <span className={classes.error}> {error} </span> }
    </div>
  )
}