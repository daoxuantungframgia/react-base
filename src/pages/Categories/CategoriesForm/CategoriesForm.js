import React, { Component } from 'react'
import mobxForm from 'Form/MobxForm'
import Form from 'Form/Form'
import InputField from 'components/InputField'
import Field from 'Form/Field'
import { validateCategoriesForm } from './validate/validateCategoriesForm'

class CategoriesForm extends Component {
  render() {
    const { submitForm, updateProperty, values, categoriesStore } = this.props
    return (
      <div>
        <Form onSubmit={submitForm(categoriesStore.submitCategory)}>
          <Field label='tên danh mục'
            placeholder='nhập tên danh mục'
            name='name'
            value={values.name}
            updateProperty={updateProperty}
            component={InputField}
            type='text'
          />

          <Field label='địa chỉ'
            placeholder='nhập địa chỉ'
            name='address'
            value={values.address}
            updateProperty={updateProperty}
            component={InputField}
            type='text'
          />
          <button type='submit'> submit </button>
        </Form>
      </div>
    )
  }
}

export default mobxForm({
  form: 'categoriesForm',
  validate: validateCategoriesForm
})(CategoriesForm)
