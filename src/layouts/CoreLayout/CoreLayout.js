import React, { Component } from 'react'
import { observer } from 'mobx-react'
import classes from './CoreLayout.scss'
import apiStore from 'store/ApiStore'
import Notification from 'components/Notification'
import loadingImage from 'assets/loading.gif'

@observer
export default class CoreLayout extends Component {
  render() {
    const { loading, notification } = apiStore
    return (
      <div className={classes.wrapper}>
        { loading &&
          <div className={classes.loading}>
            <img src={loadingImage} alt='loading' />
          </div>
        }
        {
          notification &&
          <div className={classes.notification}>
            <Notification notification={notification} />
          </div>
        }
        {this.props.children}
      </div>
    )
  }
}