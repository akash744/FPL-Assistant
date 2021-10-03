import React from 'react';
import './App.css';
import Login from "./pages/Login"
import Splash from './pages/Splash';
import PlayerComparisons from './pages/PlayerComparisons';
import Team from './pages/Team';
import AppBar from './components/AppBar';
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";


function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={Splash}>
          </Route>
          <Route path="/splash" component={Splash}>
          </Route>
          <Route path="/playercomparisons" component={Login}> 
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
