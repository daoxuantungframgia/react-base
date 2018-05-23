import React from 'react'
import PropTypes from 'prop-types'
import classes from './Notification.scss'

const Notification = ({ notification }) => (
  <div className={classes.notification}>
    {notification.error && <p className={'alert alert-danger text-center'}> {notification.error.message} </p> }
  </div>
)

Notification.propTypes = {
  notification: PropTypes.object
}

export default Notification
