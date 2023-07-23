// Fromright.js

import React, { useState } from 'react';
import './Fromright.css';
import { Row, Col, Button } from 'react-bootstrap';

function Fromright() {
  // State to manage the custom amount input value
  const [inputValue, setInputValue] = useState('');

  // Function to update the custom amount input value when a button is clicked
  const updateValue = (event) => {
    setInputValue(event.target.innerText);
  };

  // Function to manually update the custom amount input value
  const manualUpdate = (event) => {
    setInputValue(event.target.value);
  };

  // State to manage the button colors for one-time and monthly donations
  const [button1Color, setButton1Color] = useState(true);
  const [button2Color, setButton2Color] = useState(false);

  // Function to handle click on the 'ONE TIME' button
  const handleButton1Click = () => {
    setButton1Color(true);
    setButton2Color(false);
  };

  // Function to handle click on the 'MONTHLY' button
  const handleButton2Click = () => {
    setButton1Color(false);
    setButton2Color(true);
  };

  return (
    <div className='fromrightform-modal'>
      <center>
        {/* Header */}
        <Row className='m-3'>
          <Col className='fromrightform-header pt-4'>
            DONATE NOW!!
          </Col>
        </Row>

        {/* Description */}
        <Row className='m-3'>
          <Col>
            <small>
              <center>Give a Hand, Change a Life:<br /> Donate and Make an Impact!</center>
            </small>
          </Col>
        </Row>

        {/* Buttons for one-time and monthly donations */}
        <Row className='d-flex justify-content-center mt-4 interval-btns' style={{ width: "100%" }}>
          <Col className='fromrightbutton-container'>
            <button
              className={`one-time ${button1Color ? 'active' : ''}`}
              onClick={handleButton1Click}
            >
              ONE TIME
            </button>
            <button
              className={`monthly ${button2Color ? 'active' : ''}`}
              onClick={handleButton2Click}
            >
              MONTHLY
            </button>
          </Col>
        </Row>

        {/* Buttons for predefined donation amounts */}
        <Row xs={3}   sm={3} md={3} xl={3} style={{width:"100%"}}  className='d-flex sm-justify-content-center fromrightamt-btn mt-4'>
          <Col  className='d-flex justify-content-center mb-3 '>
            <button onClick={updateValue} className='fromrightcustom-button'>
              Rs. 50
            </button>
          </Col>
          <Col  className='d-flex justify-content-center mb-3'>
            <button onClick={updateValue} className='fromrightcustom-button'>
              Rs. 100
            </button>
          </Col>
          <Col  className='d-flex justify-content-center mb-3'>
            <button onClick={updateValue} className='fromrightcustom-button'>
              Rs. 150
            </button>
          </Col>
          <Col  className='d-flex justify-content-center mb-3'>
            <button onClick={updateValue} className='fromrightcustom-button'>
              Rs. 200
            </button>
          </Col>
          <Col  className='d-flex justify-content-center mb-3'>
            <button onClick={updateValue} className='fromrightcustom-button'>
              Rs. 500
            </button>
          </Col>
          <Col  className='d-flex justify-content-center mb-3'>
            <button onClick={updateValue} className='fromrightcustom-button'>
              Rs. 1000
            </button>
          </Col>
        </Row>

        {/* Custom amount input */}
        <Row xs={12} sm={6} md={12} className='d-flex justify-content-center' style={{ width: "100%" }}  >
          <Col xs={12} sm={6} md={12}  >
            <div className='fromrightamt-input' >
              <input
                type='text'
                name='amt'
                id='amt'
                placeholder='Add Custom Amount'
                value={inputValue}
                onChange={manualUpdate}
                className='fromrightcustom-input'
              />
            </div>
          </Col>
        </Row>

        {/* Donate Now button */}
        <Row className='fromrightdonate-now' style={{ width: "100%" }}>
          <Col>
            <Button className='mb-5 fromrightdonatebtn' style={{ width: "100%" }} >Donate Now</Button>
          </Col>
        </Row>
      </center>
    </div>
  );
}

export default Fromright;
