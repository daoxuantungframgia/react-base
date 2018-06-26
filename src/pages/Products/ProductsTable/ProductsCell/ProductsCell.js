import React from 'react'
import classes from './ProductsCell.scss'
import classNames from 'classnames'
import { initialValues } from 'Form/Api'

const initialProductsForm = (values) => () => {
  initialValues({
    store: 'productsForm',
    values
  })
}

const ProductsCell = ({ product, deleteProduct, productEdit }) => (
  <tr className={classNames(productEdit && productEdit.id === product.id && classes.active)}>
    <td> {product.subCategory} </td>
    <td> {product.productDescriptions} </td>
    <td> {product.bannerLink} </td>
    <td> {product.navigateLink} </td>
    <td> {product.createdDate} </td>
    <td className={classes.action}>
      <span className={classNames('glyphicon glyphicon-edit', classes.mr10)}
        onClick={initialProductsForm(product)}
      />
      <span className={'glyphicon glyphicon-trash'}
        onClick={deleteProduct(product.id)}
      />
    </td>
  </tr>
)

export default ProductsCell
