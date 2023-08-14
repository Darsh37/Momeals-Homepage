<<<<<<< HEAD
import React from 'react';
import './Fromleft.css';
import { Button, Col, Row } from 'react-bootstrap';

function Fromleft() {
  return (
    <div className="donation-caption m-4">
      
      <div className="first-half">FIGHT AGAINST<br />HUNGER, DONATING</div>
=======
// Fromleft.js

import React from 'react';
import './Fromleft.css';
import { Button, Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Fromleft() {
  // React Router navigation hook
  const navigate = useNavigate();

  // Function to navigate to the FoodtypePage
  const handleClick = () => {
    navigate('/FoodtypePage');
  };

  // Function to navigate to the donationdetailsform page
  const donationhandleClick2 = () => {
    navigate('/donationdetailsform');
  };

  return (
    <div className="donation-caption m-4">
      {/* First half of the caption */}
      <div className="first-half">FIGHT AGAINST<br />HUNGER, DONATING</div>

      {/* Second half of the caption */}
>>>>>>> momeals-frontend/master
      <div className="second-half">
        FOOD TODAY
        <div className="underline"></div>
      </div>
<<<<<<< HEAD
=======

      {/* Cause description */}
>>>>>>> momeals-frontend/master
      <section className="cause-description">
        <div className="mt-4">
          Join the community of change makers and make an impact on society for a good change.
        </div>
      </section>
<<<<<<< HEAD
      <div className="donate-buttons mb-3">
      <Row className="justify-content-center btnrow">
        <Col xs="auto" className="d-sm-flex justify-content-sm-start">
          <Button className="btn-1">Give Food</Button>
        </Col>
        <Col xs="auto" className="d-sm-flex justify-content-sm-start ">
          <Button className="btn-2">Donate</Button>
        </Col>
      </Row>
        
     
    
=======

      {/* Buttons for giving food and donation */}
      <div className="donate-buttons mb-3">
        <Row className="justify-content-center btnrow">
          <Col xs="auto" className="d-sm-flex justify-content-sm-start fromleftcolbtns">
            {/* Button to give food */}
            <Button className="fromleftbtn-1" onClick={handleClick}>
              Give Food
            </Button>
          </Col>
          <Col xs="auto" className="d-sm-flex justify-content-sm-start fromleftcolbtns">
            {/* Button for donation */}
            <Button className="fromleftbtn-2" onClick={donationhandleClick2}>
              Donate
            </Button>
          </Col>
        </Row>
>>>>>>> momeals-frontend/master
      </div>
    </div>
  );
}

export default Fromleft;
