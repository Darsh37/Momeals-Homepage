// Animationtext.js

import React, { useState, useEffect } from "react";
import { useTransition, animated } from "react-spring";
import animate1 from '../Images/Hunger free world 1.png'
import animate2 from '../Images/Save Food 1.png'
import animate3 from '../Images/re-born 2.png'
import Row from 'react-bootstrap/Row';
import { Col, Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

import './Animationtext.css'; // Import the CSS file

function Animationtext() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/DonationPage');
  }; 

  const data = [
    {
      text1: "Build",
      Color: "#044EAF",
      text2: "Hunger-Free World",
      imgages: animate1
    },
    {
      text1: "Think",
      Color: "#067A46",
      text2: "Stop Food Wastage",
      imgages: animate2
    },
    {
      text1: "Born",
      Color: "#FD7E14",
      text2: "Feed The World",
      imgages: animate3
    },
  ];


  const [index, setIndex] = useState(0);

  // The useTransition hook will animate the text1 changes
  const text1Transitions = useTransition(data[index], {
    from: {opacity: 1,  transform: "translate3d(0, 0%, 0)" },
    enter: { opacity: 1, transform: "translate3d(0%, 10%, 0)" },
    //leave: { opacity: 0, transform: "translate3d(0, -100, 0)" },
  });

  // Function to update the index and trigger text1 change
  const changeText = () => {
    setIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  // UseEffect to update the index every 2 seconds
  useEffect(() => {
    const interval = setInterval(changeText, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="animate-part">
      <Row className="animatecontainer  d-flex pt-4 px-xl-5 px-lg-5 justify-content-between px-md-4">
        <Col xl={5} lg={5} xs={12} className="animatecol mt-lg-5 px-lg-2 px-xl-5">
          <div className="animatecontainertext">
            <h2 className="mt-2">Re-</h2>
            <div>
              {text1Transitions(({ opacity, transform }, item) => (
                <animated.div
                  className="animated-text"
                  style={{ opacity, transform,color: item.Color }}
                  onClick={changeText}
                >
                   <h2>{item.text1}</h2>
                </animated.div>
              ))}
            </div>
          </div>
          <div>
          {text1Transitions(({ opacity, transform }, item) => (
              <animated.div
                className="animated-text2"
                style={{ opacity, transform }}
                onClick={changeText}
              >
                <h3>{item.text2}</h3>
              </animated.div>
            ))}
          </div>
          {/* large screen btn hide in small */}
          <div className="mt-lg-5 mt-md-5 mt-4 homebtnrow" id="animatebtn1">
            
            <Button
              onClick={handleClick}
              className="homebtn-2"
            >
              DONATE
            </Button>
          </div>
        </Col>
        {/* <Col  md={0}  lg={0} xl={1} className="d-none d-lg-block"></Col> */}
        <Col xl={5} lg={6} xs={12} className="mt-3 mb-5 next-col px-lg-0 px-md-0 px-5">
        <div>
       {text1Transitions(({ opacity, transform }, item) => (
            <animated.div
              style={{
                opacity,
                transform
                ,overflow:"hidden",
               
              }}
              onClick={changeText}
            >
              <img className="Animated-Image" src={item.imgages} alt="Animated Image"  />
            </animated.div>
          ))}
       </div>
       {/* small screen btn hide in large */}
       <div className="mt-lg-5 mt-md-5 mt-5 homebtnrow" id="animatebtn2">
            
            <Button
              onClick={handleClick}
              className="homebtn-2 mt-4"
            >
              DONATE
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Animationtext;
