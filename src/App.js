import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Bussi from './bussi/bussi.js';
import Saa from './saa/saa.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Bussi">
          <Bussi />
        </div>
        <div className="Saa">
          <Saa />
        </div>
      </div>
    );
  };
}

export default App;
