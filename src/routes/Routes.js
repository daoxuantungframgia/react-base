import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import asyncComponent from './asyncComponent'

const AuthorizedPageLayout = asyncComponent(() => import('layouts/AuthorizedPageLayout'))
const UnAuthorizedPageLayout = asyncComponent(() => import('layouts/UnAuthorizedPageLayout'))
const PageNotFound = asyncComponent(() => import('pages/PageNotFound'))
const HomePage = asyncComponent(() => import('pages/HomePage'))

const Routes = () => (
  <Switch>
    <Route path='/' exact component={HomePage} />
    <Route path='/auth' component={UnAuthorizedPageLayout} />
    <Route path='/app' component={AuthorizedPageLayout}/>
    <Route path='/page-not-found' component={PageNotFound}/>
    <Redirect to='/page-not-found'/>
  </Switch>
)

export default Routes
