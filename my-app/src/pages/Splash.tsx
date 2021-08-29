import React from 'react';
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import Slider from "../components/Slider/Slider";
import travel_01 from "../assets/travel-01.jpg";
import travel_02 from "../assets/travel-02.jpg";
import travel_03 from "../assets/travel-03.jpg";
import test_1 from "../assets/test_1.jpg";


function Splash() {

  const navbarLinks = [
    { url: "#", title: "Home" },
    { url: "#", title: "Player Comparisons" },
    { url: "#", title: "Team Maker" },
  ];

  return (
    <div className="App">
      <Navbar navbarLinks={navbarLinks} />
      <Hero imageSrc={test_1} />
      <Slider
        imageSrc={travel_02}
        title={"Be an explorer."}
        subtitle={
          "Our platform offers a wide variety of unique travel locations!"
        }
        flipped={false}
      />
      <Slider
        imageSrc={travel_03}
        title={"Memories for a lifetime."}
        subtitle={"Your dream vacation is only a few clicks away."}
        flipped={true}
      />
      
    </div>
  );
}

export default Splash;