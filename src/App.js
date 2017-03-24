import React, { Component } from 'react';
import GameEnclosure from './components/gameEnclosure';
import Header from './components/header';
import HowToPlay from './components/howtoplay';

class App extends Component {
  render() {
    return (
      <div className="app">
        <HowToPlay />
        <Header />
        <GameEnclosure />
      </div>
    );
  }
}

export default App;
