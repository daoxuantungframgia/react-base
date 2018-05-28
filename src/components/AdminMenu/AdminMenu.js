import React from 'react'
import classNames from 'classnames'
import classes from './AdminMenu.scss'

const navigateTo = ({ history, path }) => () => {
  history.push(path)
}

const AdminMenu = ({ active, history }) => {
  const pathName = history.location.pathname
  const categoriesPath = '/app/admin/categories'
  const subCategoriesPath = '/app/admin/sub-categories'
  const productsPath = '/app/admin/products'
  return (
    <ul className={classes.menus}>
      <li className={classNames(classes.menuItem, pathName === categoriesPath && classes.active)}
        onClick={navigateTo({ history, path: categoriesPath })}
      >
        Danh Mục Cha
      </li>
      <li className={classNames(classes.menuItem, pathName === subCategoriesPath && classes.active)}
        onClick={navigateTo({ history, path: subCategoriesPath })}
      >
        Danh Mục Con
      </li>
      <li className={classNames(classes.menuItem, pathName === productsPath && classes.active)}
        onClick={navigateTo({ history, path: productsPath })}
      >
        Danh Sách Sản Phẩm
      </li>
    </ul>
  )
}

export default AdminMenu
