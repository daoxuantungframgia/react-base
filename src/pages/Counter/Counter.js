import React, { Component } from 'react'
import { observer } from 'mobx-react'
import counterStore from './store/Counter'

@observer
export default class Counter extends Component {

  componentDidMount() {
    counterStore.fetchUsers()
  }

  render() {
    const { count, increaseCount, decreaseCount, users } = counterStore
    return (
      <div>
        <p> count: { count } </p>
        {users.map((user) => <p key={user.id}> {user.name} - {user.location} </p>)}
        <button onClick={increaseCount}> + </button>
        <button onClick={decreaseCount}> - </button>
      </div>
    )
  }
}