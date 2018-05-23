import { observable, action } from 'mobx'

class ApiStore {
  @observable loading = false
  @observable notification = null

  @action setLoading = ({ loading }) => {
    this.loading = loading
  }

  @action setNotification = ({ notification, time = 3000 }) => {
    this.notification = notification

    setTimeout(() => {
      this.notification = null
    }, time)
  }
}

export default new ApiStore()
