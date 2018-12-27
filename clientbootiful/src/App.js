import * as React from 'react';
import './App.css';
import BeerList from './beer/BeerList.js';
import BeerAdd from './beer/BeerAdd.js';

import logo from './logo.svg';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BeerList/>
        <br/>
        <BeerAdd/>
        <br/>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
      </div>
    );
  }
}

export default App;
