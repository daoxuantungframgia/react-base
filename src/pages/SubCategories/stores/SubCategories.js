import { observable, action, computed } from 'mobx'
import moment from 'moment'
import * as API from 'api/api'
import bootbox from 'bootbox'

export default class SubCategoriesStore {
  @observable subCategories = []

  @action fetchSubCategories = async () => {
    const subCategories = await API.get({
      url: '/subCategories',
      params: {
        _sort: 'parentCategory',
        _order: 'asc'
      }
    })

    this.subCategories = subCategories
  }

  @computed get convertSubCategoriesToOptions() {
    return this.subCategories.map((subCategory) => ({
      value: subCategory.id,
      label: subCategory.name
    }))
  }

  submitSubCategories = async (values) => {
    if (values.id) {
      await API.put({
        url: `/subCategories/${values.id}`,
        data: values
      })
    } else {
      await API.post({
        url: '/subCategories',
        data: {
          ...values,
          createdDate: moment().format('YYYY/MM/DD HH:mm:ss')
        }
      })
    }

    this.fetchSubCategories()
  }

  deleteSubCatategory = (subCategoryId) => () => {
    bootbox.confirm('bạn có chắc chắn muốn xoá không', async (result) => {
      if (result) {
        await API.deleteData({
          url: `/subCategories/${subCategoryId}`
        })
        this.fetchSubCategories()
      }
    })
  }
}
