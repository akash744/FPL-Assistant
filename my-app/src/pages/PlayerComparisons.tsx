import React from 'react';
import Navbar from "../components/Navbar/Navbar";
import RadarGraph from "../components/Radar/RadarGraph"



function PlayerComparisons() {

  const navbarLinks = [
    { url: "#", title: "Home" },
    { url: "#", title: "Player Comparisons" },
    { url: "#", title: "Team Maker" },
  ];

  return (
    <div className="App">
      <Navbar navbarLinks={navbarLinks} />
      <div style = {{marginTop : 200 }}>
        <RadarGraph></RadarGraph>  
      </div>
    </div>
  );
}

export default PlayerComparisons;