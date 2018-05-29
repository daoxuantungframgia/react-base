import React, { Component } from 'react'
import mobxForm from 'Form/MobxForm'
import Form from 'Form/Form'
import InputField from 'components/InputField'
import Field from 'Form/Field'
import classNames from 'classnames'
import { validateCategoriesForm } from './validate/validateCategoriesForm'
import classes from './CategoriesForm.scss'

class CategoriesForm extends Component {

  render() {
    const { submitForm, updateProperty, values, categoriesStore } = this.props
    return (
      <div className={classes.categoriesFormWrapper}>
        <Form onSubmit={submitForm(categoriesStore.submitCategory)}>
          <Field label='tên danh mục'
            placeholder='nhập tên danh mục'
            name='name'
            value={values.name}
            updateProperty={updateProperty}
            component={InputField}
            type='text'
          />

          <button type='submit' className={classNames('btn btn-success', classes.btnSubmit)}>
            submit
          </button>
        </Form>
      </div>
    )
  }
}

export default mobxForm({
  form: 'categoriesForm',
  validate: validateCategoriesForm
})(CategoriesForm)
