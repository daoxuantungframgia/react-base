import React from 'react'
import loadingImage from 'assets/loading.gif'
import classes from './WrapperLoading.scss'

const WrapperLoading = ({ loading, children }) => (
  <div className={classes.container}>
    { loading &&
      <div className={classes.loading}>
        <img src={loadingImage} alt='loading' />
      </div>
    }
    { children }
  </div>
)

export default WrapperLoading
