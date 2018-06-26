import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { asyncComponent } from 'routes'
import classes from './AuthorizedPageLayout.scss'

const Dashboard = asyncComponent(() => import('pages/Dashboard'))
const Counter = asyncComponent(() => import('pages/Counter'))
const AdminLayout = asyncComponent(() => import('../AdminLayout'))

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
