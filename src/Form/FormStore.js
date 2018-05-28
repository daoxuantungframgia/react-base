import { observable, action, computed } from 'mobx'

class FormStore {
  @observable store = {}

  getPropertyForStore = (storeName) => {
    const currentStore = this.store[storeName]
    const values = {}
    Object.keys(currentStore).forEach((key) => {
      values[key] = currentStore[key].value
    })
    return values
  }

  hasErrorsCurrentForm = (storeName, validate) => (
    Object.keys(validate(this.getPropertyForStore(storeName))).length > 0
  )

  convertFromNormalValuesToStoreValues = (values) => {
    let storeValues = {}
    Object.keys(values).forEach((key) => {
      storeValues[key] = {
        value: values[key],
        meta: {
          touched: false
        }
      }
    })

    return storeValues
  }

  @action addStore = (storeName) => {
    this.store[storeName] = {}
  }

  @action setAllTouched = (storeName) => {
    const currentStore = this.store[storeName]
    let newStore = currentStore
    Object.keys(currentStore).forEach((key) => {
      const currentProperty = currentStore[key] || {meta: {}}
      const objTouched = {
        ...currentProperty,
        meta: {
          ...currentProperty.meta,
          touched: true
        }
      }
      newStore = { ...newStore, [key]: objTouched }
    })

    this.store = {...this.store, [storeName]: newStore}
  }

  @action validateForm = (storeName, validate) => {
    if (!validate) {
      return
    }
    const currentStore = this.store[storeName]
    let newStore = currentStore
    let errors = validate(this.getPropertyForStore(storeName))
    if (errors) {
      Object.keys(errors).forEach((key) => {
        const currentProperty = currentStore[key] || {meta: {}}
        const objValidate = {
          ...currentProperty,
          meta: {
            ...currentProperty.meta,
            error: errors[key]
          }
        }
        newStore = { ...newStore, [key]: objValidate }
      })
      this.store = {...this.store, [storeName]: newStore}
    }
  }

  @action initialStore = (storeName, validate) => {
    this.addStore(storeName)
    this.validateForm(storeName, validate)
  }

  @action setPropertyForStore = ({ store, key, value, validate }) => {
    this.store[store] = {
      ...this.store[store],
      [key]: {
        value,
        meta: {
          touched: true
        }
      }
    }
    this.validateForm(store, validate)
  }

  @action initialValues = ({ store, values }) => {
    this.store = {...this.store, [store]: this.convertFromNormalValuesToStoreValues(values)}

    // cần chạy lại validate...
  }

  @action clearValues = ({ store }) => {
    const emptyObj = {}
    Object.keys(this.store[store]).forEach((key) => {
      emptyObj[key] = {
        value: '',
        meta: {
          touched: false,
          error: null
        }
      }
    })
    this.store = {...this.store, [store]: emptyObj }
  }

  @computed get getStore() {
    return this.store
  }

  @action removeStore = (storeName) => {
    delete this.store[storeName]
  }

}

export default new FormStore()
