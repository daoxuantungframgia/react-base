import React from 'react'
import classNames from 'classnames'
import { initialValues } from 'Form/Api'
import classes from './SubCategoriesCell.scss'

const initialValueForForm = (values) => () => {
  initialValues({store: 'subCategoriesForm', values})
}

const SubCategoriesCell = ({ subCategory, deleteSubCategory, subCategoryEdit }) => (
  <tr className={classNames(subCategoryEdit && subCategoryEdit.id === subCategory.id && classes.active)}>
    <td> {subCategory.parentCategoryId} </td>
    <td> {subCategory.name} </td>
    <td> {subCategory.createdDate} </td>
    <td className={classes.action}>
      <span className={classNames('glyphicon glyphicon-edit', classes.mr15)}
        onClick={initialValueForForm(subCategory)}
      />
      <span className={'glyphicon glyphicon-trash'}
        onClick={deleteSubCategory(subCategory.id)}
      />
    </td>   
  </tr>
)

export default SubCategoriesCell
