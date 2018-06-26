import React, { Component } from 'react'
import { observer } from 'mobx-react'
import FormStore from 'Form/FormStore'
import CategoriesTable from './CategoriesTable'
import CategoriesStore from './stores/Categories'
import classes from './Categories.scss'
import CategoriesForm from './CategoriesForm'

const categoriesStore = new CategoriesStore()

@observer
export default class Categories extends Component {

  componentDidMount() {
    categoriesStore.fetchCategoies()
  }

  render() {
    return (
      <div>
        <div className={classes.createNew}>
          <CategoriesForm categoriesStore={categoriesStore}
          />
        </div>
        <CategoriesTable categoriesStore={categoriesStore}
          categoriesForm={FormStore.getPropertyForStore('categoriesForm')}
        />
      </div>
    )
  }
}
