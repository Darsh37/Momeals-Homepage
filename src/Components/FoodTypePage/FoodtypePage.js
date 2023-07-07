import React, { useState } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";

import img1 from "../Images/Cooked food.jpg";
import img2 from "../Images/frozen food.jpg";
import img3 from "../Images/veggies and fruits 1 (1).jpg";
import img4 from "../Images/Raw food 1.jpg";
import arrow4 from "../Images/Arrow 4.png";

import imga from "../Images/Cooked food active 1.png";
import imgb from "../Images/frozen food active 1 (1).png";
import imgc from "../Images/veggies and fruits active 1 (1).png";
import imgd from "../Images/raw food active 1.png";

import momealslogo from "../Images/momealslogo.png";
import menuicon from "../Images/menuicon.png";
import "./Foodtypepage.css";

function FoodtypePage() {
  const [activeImage, setActiveImage] = useState(null);

  const handleClick = (imageId) => {
    setActiveImage(imageId === activeImage ? null : imageId);
  };

  const [images, setImages] = useState([
    {
      id: "myImage",
      src: img1,
      title: "Surplus Food",
      info: "Cooked Food",
      activeSrc: imga,
    },
    {
      id: "myImage1",
      src: img2,
      title: "Frozen Food",
      info: "Ready To Eat",
      activeSrc: imgb,
    },
    {
      id: "myImage2",
      src: img3,
      title: "Raw Veg/ Fruits",
      info: "Veggies/ Fruits",
      activeSrc: imgc,
    },
    {
      id: "myImage3",
      src: img4,
      title: "Wheat, Rice, Pulses",
      info: "Raw Products",
      activeSrc: imgd,
    },
  ]);

  return (
    <div id="container">
      <div>
        <img className="arrowimage" src={arrow4} />
      </div>
      <center>
        <p className="header mt-5">Want To Share Food?</p>
        <p className="para mb-3">Choose what type of food you have</p>
      </center>

      <div className="row p-lg-5 p-md-1 ">
        <Row
          xs={12}
          md={12}
          lg={4}
          className="d-flex justify-content-center align-items-center pt-lg-5 pt-md-5"
          style={{ margin: "0px" }}
        >
          {images.map((image) => (
            <Col xs={6} lg={3} key={image.id} className=" mt-lg-5">
              <Card
                className={`card d-flex justify-content-center align-items-center  mt-5 ${
                  activeImage === image.id ? "active" : ""
                }`}
                style={{ border: "none", background: "none" }}
              >
                <div
                  style={{ width: "140px" }}
                  className={`d-flex justify-content-center align-items-center ${
                    activeImage === image.id ? "border  rounded-circle" : ""
                  }`}
                  onClick={() => handleClick(image.id)}
                >
                  {activeImage !== image.id && (
                    <Card.Img
                      variant="top"
                      src={image.src}
                      alt={image.title}
                      className="imgs rounded-circle"
                      style={{
                        width: "100%",
                        height: "100%",
                        padding: "12px",
                        boxSizing: "content-box",
                        borderRadius: "50%",
                        background: "white",
                        border: "1px solid black",
                      }}
                    />
                  )}

                  {activeImage === image.id && (
                    <Card.Img
                      variant="top"
                      src={image.activeSrc}
                      alt={image.title}
                      className="imgs rounded-circle"
                      style={{
                        width: "100%",
                        height: "100%",
                        padding: "22px",
                        boxSizing: "content-box",
                        borderRadius: "50%",
                        background: "black",
                      }}
                    />
                  )}
                </div>
                <Card.Body>
                  <Card.Title className="titlecard text-center">
                    {image.info}
                  </Card.Title>
                  <Card.Text className="infocard text-center">
                    {image.title}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <div className="text-center ">
          <Button className="btn rounded-pill mt-4 mb-4 mt-md-5 mb-md-1 ">
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}

export default FoodtypePage;
