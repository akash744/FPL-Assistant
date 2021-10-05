import React from 'react';
import Navbar from "../components/Navbar/Navbar";
import RadarGraph from "../components/Radar/RadarGraph"
import DashBoard from  "../components/AppBar"
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { withRouter } from 'react-router-dom';
import BookData from "../Data.json";
import SearchBar from "../components/SearchBar/SearchBar";






function PlayerComparisons() {

  return (
    <div className="App">
      <div >
        <div >
          <SearchBar placeholder="Enter a Player to Compare..." data={BookData} />
        </div>
        <div className="radar__content">
          <h1 className="radar__title" style = {{marginBottom : 20 }}>Player Comparisons</h1>
          <div className="image__content" style = {{marginBottom : 20 }}>
              <img src={"https://resources.premierleague.com/premierleague/photos/players/250x250/p118748.png"} alt="Travel" className="player__image1" />
              <img src={"https://resources.premierleague.com/premierleague/photos/players/250x250/p110979.png"} alt="Travel" className="player__image2" />
          </div>
          <div>
              <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto natus facere atque aut deserunt iste sit distinctio totam, inventore placeat praesentium cupiditate. Numquam culpa, maiores dolore eum quibusdam quas placeat!
              </p>
          </div>
        </div>
        <RadarGraph></RadarGraph>  
      </div>  
    </div>
  );
}

export default PlayerComparisons;