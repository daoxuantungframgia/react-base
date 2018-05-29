import React from 'react'
import mobxForm from 'Form/MobxForm'
import Form from 'Form/Form'
import Field from 'Form/Field'
import InputField from 'components/InputField'
import SelectField from 'components/SelectField'
import classNames from 'classnames'
import { validateSubcategoriesForm } from './validate/ValidateSubCategoriesForm'
import classes from './SubCategoriesForm.scss'

const SubCategoriesForm = ({ submitForm, values, updateProperty, subCategoriesStore, options }) => (
  <Form onSubmit={submitForm(subCategoriesStore.submitSubCategories)}>
    <div className={classes.field}>
      <Field
        name='parentCategoryId'
        component={SelectField}
        label='danh mục cha'
        options={options}
        value={values.parentCategoryId}
        updateProperty={updateProperty}
      />
    </div>
    <div className={classes.field}>
      <Field
        name='name'
        label='danh mục con'
        placeholder='nhập danh mục con'
        type='text'
        value={values.name}
        updateProperty={updateProperty}
        component={InputField}
      />
    </div>
    <button className={classNames('btn btn-success', classes.btnSubmit)}
      type='submit'
    >
      Submit
    </button>
  </Form>
)

export default mobxForm({
  form: 'subCategoriesForm',
  validate: validateSubcategoriesForm
})(SubCategoriesForm)