import React, { Component } from 'react'
import { observer } from 'mobx-react'
import classes from './SubCategories.scss'
import SubCategoriesTable from './SubCategoriesTable'
import SubCategoriesStore from './stores/SubCategories'
import SubCategoriesForm from './SubCategoriesForm'
import CategoriesStore from 'pages/Categories/stores/Categories'
import FormStore from 'Form/FormStore'

const subCategoriesStore = new SubCategoriesStore()
const categoriesStore = new CategoriesStore()

@observer
export default class SubCategories extends Component {

  componentDidMount() {
    subCategoriesStore.fetchSubCategories()
    categoriesStore.fetchCategoies()
  }

  render() {
    return (
      <div className={classes.wrapper}>
        <div className={classes.subCategoiesForm}>
          <SubCategoriesForm subCategoriesStore={subCategoriesStore}
            options={categoriesStore.convertCategoriesToOptions()}
          />
        </div>
        <div className={classes.subCategories}>
          <SubCategoriesTable subCategories={subCategoriesStore.subCategories}
            deleteSubCategory={subCategoriesStore.deleteSubCatategory}
            subCategoryEdit={FormStore.getPropertyForStore('subCategoriesForm')}
          />
        </div>
      </div>
    )
  }
}
