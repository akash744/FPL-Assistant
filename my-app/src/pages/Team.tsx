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


type State = {
  text: string;
};


class Team extends React.Component<State>  {

  navbarLinks = [
    { url: "#", title: "Home" },
    { url: "#", title: "Player Comparisons" },
    { url: "#", title: "Team Maker" },
  ];
  
  state = {
    text: "Enter Player Id",
  };

  // typing on RIGHT hand side of =
  onChange = (e: React.FormEvent<HTMLInputElement>): void => {
    this.setState({ text: e.currentTarget.value });
  };

  render(){
    return (
      <div className="App">
        <Navbar navbarLinks={this.navbarLinks} />
        
        <div className="top">
          <TextField
            variant="outlined"
            margin="normal"
            required
            color="secondary"
            id="playerId"
            label="Enter your Player ID"
            name="playerId"
            autoComplete="playerId"
            autoFocus    
            />
            <Button className="Button" variant="contained">Contained</Button>

        </div>
        
        
      </div>
    );
  }
}

export default Team;