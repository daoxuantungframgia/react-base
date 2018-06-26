import React, { Component } from 'react'
import { observer } from 'mobx-react'
import FormStore from 'Form/FormStore'
import ProductsTable from './ProductsTable'
import classes from './Products.scss'
import ProductsForm from './ProductsForm'
import ProductsStore from './stores/Products'
import SubCategoriesStore from '././../SubCategories/stores/SubCategories'

const subCategoriesStore = new SubCategoriesStore()
const productsStore = new ProductsStore()

@observer
export default class Products extends Component {

  componentDidMount() {
    productsStore.fetchProducts()
    subCategoriesStore.fetchSubCategories()
  }

  render() {
    return (
      <div>
        <div className={classes.productsForm}>
          <ProductsForm productsStore={productsStore}
            subCategories={subCategoriesStore.convertSubCategoriesToOptions}
          />
        </div>
        <div className={classes.products}>
          <ProductsTable products={productsStore.products}
            deleteProduct={productsStore.deleteProduct}
            productEdit={FormStore.getPropertyForStore('productsForm')}
          />
        </div>
      </div>
    )
  }
}
