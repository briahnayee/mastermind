import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GameBoard from './components/GameBoard/GameBoard'
import ColorPicker from './components/ColorPicker';
import GameTimer from './components/GameTimer';
import NewGameButton from './components/ NewGameButton';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">React Mastermind</header>
        <div className="contentBoard">
          <div className="board">
            <GameBoard />
          </div>
          <div className="gameEls">
            <ColorPicker />
            <GameTimer />
            <NewGameButton />
          </div>
        </div>
          <Footer />
      </div>
    );
  }
}

export default App;
