import React from 'react'
import { Switch, Route, NavLink } from 'react-router-dom'
import Nav from 'components/Nav'
import classes from './AuthorizedPageLayout.scss'
import Dashboard from '../../pages/Dashboard'
import Counter from '../../pages/Counter'
import AdminLayout from '../AdminLayout'

const AuthorizedPageLayout = ({ match, history }) => (
  <div className={classes.wrapper}>
    <div className={classes.content}>
      <Switch>
        <Route path={`${match.path}`} exact component={Dashboard} />
        <Route path={`${match.path}/counter`} component={Counter} />
        <Route path={`${match.path}/admin`} component={AdminLayout} />
      </Switch>
    </div>
  </div>
)

export default AuthorizedPageLayout
