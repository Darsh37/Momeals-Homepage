// Importing necessary modules and components
import React, { useState } from 'react';
import { Button, Row, Col, Form,Card, InputGroup } from 'react-bootstrap';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import './fooddonation.css';
import arrow4image from '../Images/Arrow 4.png';
import { useNavigate } from 'react-router-dom';

const FoodDonation = () => {
  // State for slider and time input
  const [sliderValue, setSliderValue] = useState(5);
  const [timeInputValue, setTimeInputValue] = useState('12:00');
  
  // Get current date for date input
  const now = new Date();
  const today = now.toISOString().split('T')[0];

  // Function to navigate back to foodtype page
  const navigated = useNavigate();
  const handleClickd = () => {
    navigated('/FoodtypePage');
  }; 

  // Function to navigate to fooddonarpage
  const navigate = useNavigate();
  const donarhandleClick = () => {
    navigate('/fooddonarpage');
  }; 

  // Handler for slider change
  const handleSliderChange = (event) => {
    setSliderValue(parseInt(event.target.value));
  };

  // Handler for time input change
  const handleTimeInputChange = (event) => {
    setTimeInputValue(event.target.value);
  };

  // State and handler for selected city in the pickup location data
  const [selectedCity, setSelectedCity] = useState('Amritsar');
  const handleCityChange = (event) => {
    const selectedCity = event.target.value;
    if (selectedCity === 'Amritsar') {
      setSelectedCity(selectedCity);
    } else {
      setSelectedCity('Amritsar'); // Reset to empty string if a different city is selected
    }
  };

  // Array of cities for the dropdown
  const cities = ['Hyderabad', 'Agra', 'Bengaluru', 'Kolkata'];

  // JSX content of the component
  return (
    <div className='formpage1'>
      <img className='formpage1arrowimage' src={arrow4image} onClick={handleClickd}/>
      <div className="container">
        <Row id="formpage1row">
          {/* Left column */}
          <Col lg={6} md={6} sm={12}>
            <div className="card-body mt-4">
              <div className="formpage1form">
                <p className="formpage1h6">DONATE FOOD DETAILS</p>
                <form className="formpage1form-class">
                  {/* Input fields */}
                  <div className="input-with-dropdown">
                    <InputGroup style={{ width: '100%' }}>
                      <select
                        id="formpage1inp"
                        className="dropdown-select"
                        value={selectedCity}
                        onChange={handleCityChange}
                      >
                        <option disabled value="">
                          Select a city
                        </option>
                        <option value="Amritsar">Amritsar</option>
                        {cities.map((city) => (
                          <option
                            key={city}
                            value={city}
                            disabled={city !== 'Amritsar'}
                            style={{
                              // Apply gray color to disabled options
                              color: city !== 'Amritsar' ? 'lightgray' : 'inherit',
                            }}
                          >
                            {city}
                          </option>
                        ))}
                      </select>
                    </InputGroup>
                  </div>

                  <input type="text"  id="formpage1inp" placeholder="Food Items (s)" />
                  {/* Input fields */}
                 
                  <input type="time" id="formpage1inp" className="timeinput" value={timeInputValue} onChange={handleTimeInputChange} placeholder="Preferred Time" />
                  <input type="date" id="formpage1inp" className="date-input"  min={today} />
                  <input type="text" id="formpage1inp" className="imp" placeholder="Serving Size" value={sliderValue} />
  
                  {/* Slider */}
                  <div className="range-slider d-flex flex-column align-items-center">
                    {/* Value display */}
                    <div className="text-center ">{sliderValue}</div>
                    {/* Slider input */}
                    <div className="d-flex justify-content-center w-100">
                      <Box width="100%">
                        <Slider
                          aria-label="Default"
                          valueLabelDisplay="off" // Set valueLabelDisplay to "off"
                          min={5}
                          max={600}
                          value={sliderValue}
                          onChange={handleSliderChange}
                          className="slider-rail"
                          ThumbComponent="span"
                          classes={{
                            thumb: 'slider-thumb',
                          }}
                        />
                      </Box>
                    </div>
                    {/* Labels */}
                    <div className="d-flex justify-content-between w-100 " style={{fontSize:"18px"}}>
                      <label htmlFor="points" className="formpage1min">Min: 5</label>
                      <label htmlFor="points" className="formpage1max">Max: 600</label>
                    </div>
                  </div>
  
                  {/* Checkbox */}
                  <Form.Group className="mt-4 " controlId="formpage1checkbox1" id="formpage1checkbox1">
                    <Form.Check inline className="formpage1checkinfo" label="By checking the box, you assure that food quality and hygiene are maintained, and you agree to abide by the terms and conditions given." />
                  </Form.Group>
  
                  {/* Submit button */}
                  <div>
                    <Button className="btn-submit mt-5" id="formpage1btn1" onClick={donarhandleClick}>Submit</Button>
                  </div>
                </form>
              </div>
            </div>
          </Col>
  
          {/* Spacing */}
          <Col lg={2} md={1} sm={12}></Col>
  
          {/* Right column */}
          <Col lg={4} md={5} sm={12}>
            <Row className="d-flex justify-content-center align-items-center" id="row2">
              <h4 id="formpage1heading3" className="mt-5 mb-5">Add Image Of Food</h4>
              <div className="formpage1flex-container m-lg-5 m-md-5">
                {/* First Card */}
                <Col sm={6} className="mb-lg-5 mb-md-5 mb-4 ">
                  <Card className='formpage1card'>
                    <Card.Body className="d-flex justify-content-center align-items-center">
                      <div className="rounded-circle formpage1dashed-circle">
                        <button className="rounded-circle formpage1plus-btn" >+</button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
                {/* Second Card */}
                <Col sm={6}  className="mb-lg-5 mb-md-5 mb-4 ">
                  <Card className='formpage1card'>
                    <Card.Body className="d-flex justify-content-center align-items-center">
                      <div className="rounded-circle formpage1dashed-circle">
                        <button className="rounded-circle formpage1plus-btn">+</button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              </div>
              <h4 className="formpage1heading4">Add the photo of the food<br /> item you want to give.</h4>
            </Row>
          </Col>
  
          {/* Checkbox and Submit button at the bottom */}
          <Form.Group className="mt-4" controlId="formpage1checkbox2"  id="formpage1checkbox2">
            <Form.Check inline className="formpage1checkinfo" label="By checking the box, you assure that food quality and hygiene are maintained, and you agree to abide by the terms and conditions given." />
          </Form.Group>
          <div className="text-center mt-5 mb-4">
            <Button className="btn-submit w-10 h-90" id="formpage1btn2" onClick={donarhandleClick}>Submit</Button>
          </div>
        </Row>
      </div>
    </div>
  );
};

export default FoodDonation;
