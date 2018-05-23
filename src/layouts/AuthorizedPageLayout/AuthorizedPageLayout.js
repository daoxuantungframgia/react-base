import React from 'react'
import { Switch, Route } from 'react-router-dom'
import classes from './AuthorizedPageLayout.scss'
import Dashboard from '../../pages/Dashboard'
import Counter from '../../pages/Counter'

const AuthorizedPageLayout = ({ match }) => (
  <div className={classes.wrapper}>
    <div className={classes.header}>
      this is header authorized page
    </div>

    <div className={classes.content}>
      <Switch>
        <Route path={`${match.path}`} exact component={Dashboard} />
        <Route path={`${match.path}/counter`} component={Counter} />
      </Switch>
    </div>
  </div>
)

export default AuthorizedPageLayout
