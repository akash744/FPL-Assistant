import React from 'react';
import './App.css';
import Login from "./pages/Login"
import Splash from './pages/Splash';
import PlayerComparisons from './pages/PlayerComparisons';

function App() {

  const navbarLinks = [
    { url: "#", title: "Home" },
    { url: "#", title: "Player Comparisons" },
    { url: "#", title: "Team Maker" },
  ];

  return (
    <div className="App">
      <PlayerComparisons></PlayerComparisons>
    </div>
  );
}

export default App;
