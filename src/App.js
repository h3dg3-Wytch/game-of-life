import React from 'react';
import logo from './logo.svg';
import './App.css';

import Game from './componets/Game';

function App() {
  return (
    <div className="App">
      <h1>Conway's Game of Life</h1>
      <Game /> 
    </div>
  );
}

export default App;
