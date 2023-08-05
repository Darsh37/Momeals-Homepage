import React, { useState } from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import img1 from '../Images/cooked food (2).png';
import img2 from '../Images/frozen food (2).png';
import img3 from '../Images/Fruits and Veges 1.png';
import img4 from '../Images/Raw food (2).png';
import arrow4 from '../Images/foodtypepageArrow.png';

import './Foodtypepage.css';

function FoodtypePage() {
  // State to keep track of the active image
  const [activeImage, setActiveImage] = useState(null);
  const navigate = useNavigate();

  // Function to handle click on an image card
  const handleClick = (imageId) => {
    setActiveImage((prevActiveImage) => (prevActiveImage === imageId ? null : imageId));
  };
  const [inputError,setError]=useState("")
  // Function to handle click on the "Next" button
  const handleNextClick = () => {
    
    if (activeImage === null) {
      setError("Please choose food type")
      // navigate('/fooddonationfopage');
    } else {
      navigate('/fooddonationpage');
    }
  };

  // Function to navigate back to the DonationPage
  const navigateb = useNavigate();
  const handleClickb = () => {
    navigateb('/DonationPage');
  };

  // Array of images with their details
  const images = [
    { id: 'myImage', src: img1, title: 'Surplus Food', info: 'Cooked Food' },
    { id: 'myImage1', src: img2, title: 'Frozen Food', info: 'Ready To Eat' },
    { id: 'myImage2', src: img3, title: 'Raw Veg/ Fruits', info: 'Veggies/ Fruits' },
    { id: 'myImage3', src: img4, title: 'Wheat, Rice, Pulses', info: 'Raw Products'},
  ];

  return (
    <div className="foodtype" id="container">
      <div>
        <img className="foodtypearrowimage" src={arrow4} alt="Arrow"  onClick={handleClickb}/>
      </div>
      <center>
        <p className="foodtypeheader mt-5 mt-lg-1">Want To Share Food?</p>
        <p className="foodtypepara mb-3 mb-lg-1">Choose what type of food you have</p>
      </center>
      <div className="foodtyperow p-lg-5 p-md-1 ">
        {/* Rendering image cards */}
        <Row xs={12} md={12} lg={2} className="d-flex justify-content-center align-items-center pt-lg-2 pt-md-5" style={{ margin: '0px' }}>
          {images.map((image) => (
            <Col xs={6} sm={6} md={6} lg={3} key={image.id} className="mt-md-5 mb-md-5 mb-lg-1 mt-lg-5">
              <Card
                className={`foodtypecard d-flex justify-content-center align-items-center mb-md-5  mt-5 ${activeImage === image.id ? 'active' : ''}`}
                style={{ border: 'none', background: 'none' }}
                onClick={() => handleClick(image.id)}
              >
                {/* Conditional rendering of image based on the active state */}
                <div
                  style={{ width: '140px' }}
                  className={`d-flex justify-content-center align-items-center ${activeImage === image.id ? 'border  rounded-circle' : ''}`}
                >
                  {activeImage !== image.id && (
                    <Card.Img
                      variant="top"
                      src={image.src}
                      alt={image.title}
                      className="foodimgs rounded-circle"
                      style={{
                        boxSizing: 'content-box',
                        borderRadius: '50%',
                        background: 'white',
                        border: '1px solid black',
                      }}
                    />
                  )}
                  {activeImage === image.id && (
                    <Card.Img
                      variant="top"
                      src={image.src}
                      alt={image.title}
                      className="foodimgs rounded-circle"
                      style={{
                        boxSizing: 'content-box',
                        borderRadius: '50%',
                        background: 'black',
                      }}
                    />
                  )}
                </div>
                <Card.Body>
                  <Card.Text className="foodtypetitlecard text-center">{image.info}</Card.Text>
                  <Card.Text className="foodtypeinfocard text-center">{image.title}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        {
          inputError && (

            <div className=' text-center text-danger mb-4 fw-bold'> * {inputError}</div>
          )
        }
        <div className="text-center">
          <Button className="foodtypebtn rounded-pill mt-4 mt-lg-0 mb-4 mt-md-5 mb-md-5" onClick={handleNextClick}>
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}

export default FoodtypePage;
