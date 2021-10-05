import React from 'react';
import Hero from "../components/Hero/Hero";
import Pitch from "../components/Pitch/Pitch";
import Navbar from "../components/Navbar/Navbar";
import Slider from "../components/Slider/Slider";
import travel_01 from "../assets/travel-01.jpg";
import travel_02 from "../assets/travel-02.jpg";
import travel_03 from "../assets/travel-03.jpg";
import test_1 from "../assets/test_1.jpg";
import footballPitch from "../assets/football-pitch.svg";
import "./Team.css";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import DashBoard from  "../components/AppBar"
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { withRouter , RouteComponentProps  } from 'react-router-dom';
import SearchBar from "../components/SearchBar/SearchBar";
import BookData from "../Data.json";


type State = {
  text?: string;
};


class Team extends React.Component<State & RouteComponentProps>  {


  state = {
    text: "Enter Player Id",
  };

  onChange = (e: React.FormEvent<HTMLInputElement>): void => {
    this.setState({ text: e.currentTarget.value });
  };

  render(){
    return (
      <div className="App">
        
        <div className="top">
          <div className="search">
            <SearchBar placeholder="Add a Player to your Team..." data={BookData} />
          </div>
        </div>

      </div>
    );
  }
}

export default withRouter(Team);