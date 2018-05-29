import { observable, action, computed } from 'mobx'

class FormStore {
  @observable store = {}
  @observable test = 'test'
  // biến phục vụ clear timeout
  runTimeoutValidate = null

  /*
    get ra value only from store không chưa meta object
  */
  getPropertyForStore = (storeName) => {
    const currentStore = this.store[storeName]
    const values = {}
    if (currentStore) {
      Object.keys(currentStore).forEach((key) => {
        values[key] = currentStore[key].value
      })
    }
    return values
  }

  /**
   * check xem còn lỗi không để phục vụ khi submit form
   */
  hasErrorsCurrentForm = (storeName, validate) => (
    Object.keys(validate(this.getPropertyForStore(storeName))).length > 0
  )

  /**
   * convert from normal value thành store value có thêm meta object
   */
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

  /* chạy validate sau khi gõ lần cuối cùng 500ms */
  setRunTimeoutValidate = (store, validate) => {
    this.runTimeoutValidate = setTimeout(() => {
      this.validateForm(store, validate)
    }, 500)
  }

  runValidation = (store, validate) => {
    if (!this.runTimeoutValidate) {
      this.setRunTimeoutValidate(store, validate)
    } else {
      clearTimeout(this.runTimeoutValidate)
      this.setRunTimeoutValidate(store, validate)
    }
  }

  @action addStore = (storeName) => {
    this.store[storeName] = {}
  }
  // đánh dấu toàn bộ field trong form là touched
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

  // check form error và add vào meta object
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

  /**
   * khởi tạo store 
   */
  @action initialStore = (storeName, validate) => {
    this.addStore(storeName)
    this.validateForm(storeName, validate)
  }

  /**
   * set Property cho 1 store
   */
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
    this.runValidation(store, validate)
  }

  // khơi tao form values
  @action initialValues = ({ store, values }) => {
    this.store = {...this.store, [store]: this.convertFromNormalValuesToStoreValues(values)}

    // cần chạy lại validate...
  }

  // reset form values
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

  // get all form store
  @computed get getStore() {
    return this.store
  }

  // xoá 1 form store khỏi store
  @action removeStore = (storeName) => {
    delete this.store[storeName]
  }

}

export default new FormStore()
