import React, { Component } from 'react'


export default class Form extends Component {

  handleSubmit = (event) => {
    this.props.onSubmit()
    event.preventDefault()
  }

  render() {
    const { children } = this.props
    return (
      <form onSubmit={this.handleSubmit}>
        { children }
      </form>
    )
  }
}
