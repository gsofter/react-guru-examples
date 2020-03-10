import React from 'react';
import NavBar from './components/NavBar'
import Game1 from './stages/game1';
import Game2 from './stages/game2';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import './style.css';

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <div className="container">
        <Router>
          <Switch>
              <Route exact path='/'>
                <Game1/>
              </Route>
              <Route path="/game1">
                <Game1/>
              </Route>
              <Route path="/game2">
                <Game2/>
              </Route>
          </Switch>
        </Router>
      </div>
    </React.Fragment>
  );
}

export default App;
