import { observable, action, flow } from 'mobx'
import * as API from 'api/api'
import moment from 'moment'
import bootbox from 'bootbox'

class CategoriesStore {
  @observable categories = []

  @action removeEmptyFormRow = () => {
    this.categories.splice(0, 1)
  }

  fetchCategoies = flow(function* fetchCategoies() {
    const categories = yield API.get({
      url: '/categories',
      params: {
        _sort: 'createdDate',
        _order: 'desc'
      }
    })

    this.categories = categories
  })

  submitCategory = async (category) => {
    if (category.id) {
      await API.put({
        url: `/categories/${category.id}`,
        data: category
      })
    } else {
      await API.post({
        url: '/categories',
        data: {...category, createdDate: moment().format('YYYY/MM/DD HH:mm:SS')}
      })
    }

    this.fetchCategoies()
  }

  deleteCategory = (category) => () => {
    bootbox.confirm('bạn có chắc chắn muốn xoá?', (result) => {
      if (result) {
        API.deleteData({
          url: `/categories/${category.id}`
        }).then(() => {
          this.fetchCategoies()
        })
      }
    })
  }

}

export default CategoriesStore
