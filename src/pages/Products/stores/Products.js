import { observable, action } from 'mobx'
import * as API from 'api/api'
import moment from 'moment'
import bootbox from 'bootbox'

export default class Products {
  @observable products = []

  @action fetchProducts = async () => {
    const products = await API.get({
      url: '/products',
      params: {
        _sort: 'subCategory',
        _order: 'asc'
      }
    })
    this.products = products
  }

  @action submitProducts = async (values) => {
    if (values.id) {
      await API.put({
        url: `/products/${values.id}`,
        data: values
      })
    } else {
      await API.post({
        url: 'products',
        data: {
          ...values,
          createdDate: moment().format('YYYY/MM/DD HH:mm:ss')
        }
      })
    }

    this.fetchProducts()
  }

  @action deleteProduct = (productId) => () => {
    bootbox.confirm('bạn có chắc chắn muốn xoá', async (result) => {
      if (result) {
        await API.deleteData({
          url: `products/${productId}`
        })

        this.fetchProducts()
      }
    })
  } 

}
