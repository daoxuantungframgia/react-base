import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { asyncComponent } from 'routes'
import classes from './UnAuthorizedPageLayout.scss'

const Login = asyncComponent(() => import('pages/Login'))

const UnAuthorizedPageLayout = ({ match }) => (
  <div className={classes.wrapper}>
    <div className='row'>
      <div className='col-md-4'>
        this is sidebar content
      </div>
      <div className='col-md-8'>
        <Switch>
          <Route path={`${match.path}/login`} component={Login} />
        </Switch>
      </div>
    </div>
  </div>
)

export default UnAuthorizedPageLayout