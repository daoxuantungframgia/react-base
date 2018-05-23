import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import AuthorizedPageLayout from '../layouts/AuthorizedPageLayout'
import UnAuthorizedPageLayout from '../layouts/UnAuthorizedPageLayout'
import PageNotFound from '../pages/PageNotFound'
import HomePage from '../pages/HomePage'

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
