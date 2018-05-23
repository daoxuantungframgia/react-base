import { observable, action, flow } from 'mobx'
import * as API from 'api/api'

class CounterStore {
  @observable count = 0
  @observable users = []

  @action increaseCount = () => {
    this.count += 1
  }

  @action decreaseCount = () => {
    this.count -= 1
  }

  fetchUsers = flow(function* fetchUsers () {
    const users = yield API.get({ url: '/users' })
    if (users) {
      this.users = users
    }
  })

}

export default new CounterStore()
