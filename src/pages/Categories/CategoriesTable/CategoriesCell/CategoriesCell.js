import React from 'react'
import classNames from 'classnames'
import { observer } from 'mobx-react'
import classes from '../CategoriesTable.scss'
import { initialValues } from 'Form/Api'

const handleEditCategory = (category) => () => {
  initialValues({
    store: 'categoriesForm',
    values: category
  })
}

const CategoriesCell = ({ category, categoriesStore, categoriesForm }) => (
  <tr className={classNames(categoriesForm && categoriesForm.id === category.id && classes.active)}>
    <td> { category.name } </td>
    <td> { category.createdDate } </td>
    <td className={classes.action}>
      <span className={classNames('glyphicon glyphicon-edit', classes.mr15)}
        onClick={handleEditCategory(category)}
      />
      <span className={'glyphicon glyphicon-trash'}
        onClick={categoriesStore.deleteCategory(category)}
      />
    </td>      
  </tr>
)

export default observer(CategoriesCell)
