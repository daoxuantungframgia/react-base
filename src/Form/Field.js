import React, { Component } from 'react'

const addAllProps = (Component) => (props) => (
  <Component {...props}/>
)

export default class Field extends Component {

  component = addAllProps(this.props.component)

  handleChange = (event) => {
    this.props.updateProperty(event.target.name, event.target.value)
  }

  handleChangeValue = (value) => {
    const {name, updateProperty} = this.props
    updateProperty(name, value)
  }

  render() {
    const { component, value, ...rest } = this.props
    const inputValue = (value && value.value) || ''
    const meta = (value && value.meta) || {}
    return (
      <div>
        { <this.component {...rest}
            value={inputValue}
            meta={meta}
            onChange={this.handleChange}
            changeValue={this.handleChangeValue}
          />
        }
      </div>
    )
  }
}
