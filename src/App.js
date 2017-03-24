import React, { Component } from 'react';
import GameEnclosure from './components/gameEnclosure';
import Header from './components/header';

import './App.css';


class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <GameEnclosure />
      </div>
    );
  }
}

export default App;
