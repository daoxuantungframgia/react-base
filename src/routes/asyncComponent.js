import React, { Component } from 'react'

export default function asyncComponent(getComponent) {
  return class AsyncComponent extends Component {
    static Component = null
    state = { Component: AsyncComponent.Component }

    componentDidMount() {
      if (!this.state.Component) {
        getComponent().then(({ default: Component }) => {
          AsyncComponent.Component = Component
          this.setState({ Component })
        })
      }
    }

    render() {
      const { Component } = this.state
      if (Component) {
        return <Component {...this.props} />
      }
      return <div> Loading... </div>
    }
  }
}