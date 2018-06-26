import React, { Component } from 'react';
import { BrowserRouter, NavLink } from 'react-router-dom'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import 'react-select/dist/react-select.css'
import Routes from './routes'
import CoreLayout from './layouts/CoreLayout'

class App extends Component {

  state = { hasError: false }

  componentDidCatch(error, info) {
    this.setState({ hasError: true })
    console.log(error, info)
  }

  render() {
    const { hasError } = this.state
    if (hasError) {
      return <div> đã có lỗi xảy ra </div>
    }
    return (
      <div className="App">
        <CoreLayout>
          <BrowserRouter>
            <div>
              <div>
                <NavLink to='/'> dashboard </NavLink>
                <NavLink to='/app/counter'> counter </NavLink>
                <NavLink to='/app/admin/categories'> admin categories </NavLink>
                <NavLink to='/app/admin/sub-categories'> admin subcategories </NavLink>
                <NavLink to='/app/admin/products'> admin products </NavLink>
                <NavLink to='/auth/login'> login </NavLink>
              </div>
              <Routes />
            </div>
          </BrowserRouter>
        </CoreLayout>
      </div>
    );
  }
}

export default App;
