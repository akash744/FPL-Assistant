import React from 'react';
import './App.css';
import Login from "./pages/Login"
import Splash from './pages/Splash';

function App() {

  const navbarLinks = [
    { url: "#", title: "Home" },
    { url: "#", title: "Player Comparisons" },
    { url: "#", title: "Team Maker" },
  ];

  return (
    <div className="App">
      <Splash></Splash>
    </div>
  );
}

export default App;
