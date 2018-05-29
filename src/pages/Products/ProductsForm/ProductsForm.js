import React from 'react'
import classNames from 'classnames'
import mobxForm from 'Form/MobxForm'
import Form from 'Form/Form'
import Field from 'Form/Field'
import InputField from 'components/InputField'
import SelectField from 'components/SelectField'
import classes from './ProductsForm.scss'
import { validateProductsForm } from './validate/validateProductsForm'

const ProductsForm = ({ submitForm, updateProperty, productsStore, subCategories, values }) => (
  <Form onSubmit={submitForm(productsStore.submitProducts)}>
    <div className={classes.field}>
      <Field
        name='subCategory'
        component={SelectField}
        label='danh mục con'
        options={subCategories}
        value={values.subCategory}
        updateProperty={updateProperty}
      />
    </div>
    <div className={classes.field}>
      <Field
        name='productDescriptions'
        label='mô tả sản phẩm'
        component={InputField}
        placeholder='Nhập mô tả sản phẩm'
        type='text'
        value={values.productDescriptions}
        updateProperty={updateProperty}
      />
    </div>
    <div className={classes.field}>
      <Field
        name='bannerLink'
        label='Banner link'
        component={InputField}
        placeholder='copy banner link'
        type='text'
        value={values.bannerLink}
        updateProperty={updateProperty}
      />
    </div>
    <div className={classes.field}>
      <Field
        name='navigateLink'
        label='Navigate link'
        component={InputField}
        placeholder='copy navigate link'
        type='text'
        value={values.navigateLink}
        updateProperty={updateProperty}
      />
    </div>

    <button type='submit' className={classNames('btn btn-success', classes.btnSubmit)}>
      Submit
    </button>
  </Form>
)

export default mobxForm({
  form: 'productsForm',
  validate: validateProductsForm
})(ProductsForm)
