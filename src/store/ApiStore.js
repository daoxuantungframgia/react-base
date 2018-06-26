import { observable, action } from 'mobx'

class ApiStore {
  @observable loading = false
  @observable numberApiCall = 0
  @observable notification = null

  @action setLoading = ({ loading }) => {
    if (loading) {
      this.numberApiCall += 1
    } else {
      this.numberApiCall -= 1
    }

    if (loading && this.numberApiCall === 1) {
      this.loading = true
    } else if (this.numberApiCall === 0) {
      this.loading = false
    }
  }

  @action setNotification = ({ notification, time = 3000 }) => {
    this.notification = notification

    setTimeout(() => {
      this.notification = null
    }, time)
  }
}

export default new ApiStore()
