import React from 'react';
import './App.css';
import Login from "./pages/Login"
import Splash from './pages/Splash';
import PlayerComparisons from './pages/PlayerComparisons';
import Team from './pages/Team';
import AppBar from './components/AppBar';
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Component } from "react";




class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark">
          <Link to={"/"} className="navbar-brand">
            FPL Assistant
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/"} className="nav-link">
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/playercomp"} className="nav-link">
                Player Comparisons
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/team"} className="nav-link">
                Transfer Planner
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/login"} className="nav-link">
                Login
              </Link>
            </li>
          </div>
        </nav>

        <div>
          <Switch>
            <Route exact path="/" component={Splash} />
            <Route exact path="/playercomp" component={PlayerComparisons} />
            <Route path="/team" component={Team} />
            <Route path="/login" component={Login} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
