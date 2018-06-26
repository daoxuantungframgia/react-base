import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { asyncComponent } from 'routes'
import AdminMenu from 'components/AdminMenu'
import classes from './AdminLayout.scss'

const Categories = asyncComponent(() => import('pages/Categories'))
const SubCategories = asyncComponent(() => import('pages/SubCategories'))
const Products = asyncComponent(() => import('pages/Products'))

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
