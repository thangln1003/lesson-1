import React, { Component } from 'react';
import './App.css';

import './pages/homepage/home.component';
import Home from './pages/homepage/home.component';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Home />
      </div>
    )
  }
}

export default App;
