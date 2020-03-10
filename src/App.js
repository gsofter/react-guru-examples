import React from 'react';
import Game from './components/game';
import './App.css';
import './style.css';

function App() {
  return (
    <React.Fragment>
      <h1> Tic-Tok by Guru </h1>
      <div className="container">
        <Game />
      </div>
    </React.Fragment>
  );
}

export default App;
