import React, { Component } from 'react'

const addAllProps = (Component) => (props) => (
  <Component {...props}/>
)

export default class Field extends Component {

  component = addAllProps(this.props.component)

  handleChange = (event) => {
    this.props.updateProperty(event.target.name, event.target.value)
  }

  render() {
    const { component, value, ...rest } = this.props
    const inputValue = value && value.value
    const meta = value ? value.meta : {}
    return (
      <div>
        { <this.component {...rest}
            value={inputValue}
            meta={meta}
            onChange={this.handleChange}
          />
        }
      </div>
    )
  }
}
