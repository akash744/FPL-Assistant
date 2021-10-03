import React from "react";
import "./Pitch.css";

type PitchProps = {
    imageSrc: any; 
    
}

const Pitch = ({ imageSrc }: PitchProps) => {
  return (
    <div className="pitch">
      <img src={imageSrc} alt="Football" className="pitch__image" />
    </div>
  );
};

export default Pitch;

