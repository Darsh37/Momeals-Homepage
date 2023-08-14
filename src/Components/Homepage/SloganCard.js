import React from "react";
import { useNavigate } from "react-router-dom";
import  '../Homepage/homeStyle.css';


export const SloganCard = ({card,src,slogan,para, destination}) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(destination);
  }; 
 
  
  return (
    <div className={card} onClick={handleClick}>
      <img src={src} className="img-fluid" alt="card1" />
<<<<<<< HEAD
      <div className="card-text">
      <h5 className="card-heading my-2" >{slogan}</h5>
      <p className="card-para">{para}</p> 
=======
      <div className="slogancard-text mx-2">
      <h5 className="slogancard-heading my-2" >{slogan}</h5>
      <p className="slogancard-para">{para}</p> 
>>>>>>> momeals-frontend/master
      </div> 
    </div>
  );
};
