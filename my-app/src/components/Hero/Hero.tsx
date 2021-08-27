import React from "react";
import "./Hero.css";

type HeroProps = {
    imageSrc: any; 
    
}

const Hero = ({ imageSrc }: HeroProps) => {
  return (
    <div className="hero">
      <img src={imageSrc} alt="Football" className="hero__image" />
      <div className="hero__content">
        <div className="text-1">
            Fast & Effective
        </div>
        <div className="text-2">
            Solutions With 
        </div>
        <div className="text-3">
            FPL Assistant
        </div>
      </div>
    </div>
  );
};

export default Hero;

