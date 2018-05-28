import axios from 'axios'
import apiStore from 'store/ApiStore'


const instance = axios.create({
  baseURL: 'http://localhost:1234',
  timeout: 15000,
})

const handleError = (error) => {
  const notification = {
    error: { message: 'có lỗi trên hệ thống, vui lòng thử lại' }
  }
  if (error.code === 'ECONNABORTED') {
    notification.error.message = 'yêu cầu của bạn bị hết hạn do hết thời gian'
  }

  apiStore.setNotification({ notification })
}

const sendRequest = ({ url, method, params, data }) => {
  apiStore.setLoading({loading: true})

  return instance({
    url,
    method,
    params,
    data,
    headers: {
      'Content-Type': 'application/json',
    }
  }).then((response) => {
    apiStore.setLoading({ loading: false })
    return response.data
  }).catch((error) => {
    apiStore.setLoading({ loading: false })
    handleError(error)
  })
}

export const get = ({ url, params }) => (
  sendRequest({ url, params, method: 'GET' })
)

export const post = ({ url, params, data }) => (
  sendRequest({ url, params, data, method: 'POST' })
)

export const put = ({ url, params, data }) => (
  sendRequest({ url, params, data, method: 'PUT' })
)

export const deleteData = ({ url, params, data }) => (
  sendRequest({ url, params, data, method: 'DELETE' })
)
