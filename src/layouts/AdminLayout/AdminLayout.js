import React from 'react'
import { Switch, Route } from 'react-router-dom'
import AdminMenu from 'components/AdminMenu'
import Categories from 'pages/Categories'
import SubCategories from 'pages/SubCategories'
import Products from 'pages/Products'
import classes from './AdminLayout.scss'

const AdminLayout = ({ match, history }) => (
  <div className={classes.wrapper}>
    <AdminMenu history={history}/>
    <div>
      <Switch>
        <Route path={`${match.path}/categories`} component={Categories} />
        <Route path={`${match.path}/sub-categories`} component={SubCategories} />
        <Route path={`${match.path}/products`} component={Products} />
      </Switch>
    </div>
  </div>
)

export default AdminLayout
