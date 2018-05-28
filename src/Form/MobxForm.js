import React, { Component } from 'react'
import { observer } from 'mobx-react'
import FormStore from './FormStore'

const mobxForm = ({ form, validate }) => ( MyComponent ) => (
  observer( class MobxForm extends Component {
    componentWillMount() {
      FormStore.initialStore(form, validate)
    }

    updateProperty = (key, value) => {
      FormStore.setPropertyForStore({ store: form, key, value, validate })
    }

    initialValues = (values) => {
      FormStore.initialValues({ store: form, values })
    }

    clearValues = () => {
      FormStore.clearValues({ store: form })
    }

    submitForm = (submitFunction) => () => {
      FormStore.setAllTouched(form)
      if (!FormStore.hasErrorsCurrentForm(form, validate)) {
        submitFunction(FormStore.getPropertyForStore(form))
        .then(() => {
          this.clearValues()
        })
      }
    }

    render() {
      const values = FormStore.store[form]
      return (
        <MyComponent {...this.props}
          updateProperty={this.updateProperty}
          submitForm={this.submitForm}
          initialValues={this.initialValues}
          clearValues={this.clearValues}
          values={values}
        />
      )
    }

    componentWillUnMount() {
      FormStore.removeStore(form)
    }

  })
)


export default mobxForm
