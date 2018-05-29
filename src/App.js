import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import 'react-select/dist/react-select.css'
import Routes from './routes'
import CoreLayout from './layouts/CoreLayout'

class App extends Component {
  render() {
    return (
      <div className="App">
        <CoreLayout>
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        </CoreLayout>
      </div>
    );
  }
}

export default App;
