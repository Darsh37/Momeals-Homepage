<<<<<<< HEAD
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { DoubleArrow } from "@mui/icons-material";


=======
// HelpCard.js

import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { DoubleArrow } from "@mui/icons-material";
>>>>>>> momeals-frontend/master
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./HelpCard.css";

function HelpCard() {
<<<<<<< HEAD


  return (
    <div className="mt-5 help_container pb-5">
      <Row className="mb-5 pt-5 mt-5 ">
        <Col xs={12} lg={12} xl={6} md={12} className="help_left " >
          <p className="p_heading" style={{color:"black"}}>One Hand For Others</p>
          <h1 className="h1_heading mt-4">
            We Born To <span style={{ color: "orange" }}> Help</span> Them
          </h1>
          <p className="p_low_heading mt-3" style={{color:"black"}}>
            With one purpose, we are clear with our mind what to do for these
            people and we  will keep helping them with the best possible resources
=======
  return (
    <div className="mt-5 help_container pb-5">
      {/* Left section of the help card */}
      <Row className="mb-5 pt-5 mt-5 ">
        <Col xs={12} lg={12} xl={6} md={12} className="help_left " >
          <p className="p_heading" style={{ color: "black" }}>One Hand For Others</p>
          <h1 className="h1_heading mt-4">
            We Born To <span style={{ color: "orange" }}> Help</span> Them
          </h1>
          <p className="p_low_heading mt-3" style={{ color: "black" }}>
            With one purpose, we are clear with our mind what to do for these
            people and we will keep helping them with the best possible resources
>>>>>>> momeals-frontend/master
            we have.
          </p>
          <button className="mt-3 mb-5 but_help">Help them</button>
        </Col>
<<<<<<< HEAD
        <Col xs={12} lg={12} xl={6} md={12} className="help_right">
          <div className="cards_help">
            
            <Card className="inner_card p-3">
              <Card.Title className="card-title">Therapeutic Food</Card.Title>
              <Card.Text className="card-text">
                Provide and distribute therapeutic food to undernutrition children.
              </Card.Text>
=======

        {/* Right section of the help card */}
        <Col xs={12} lg={12} xl={6} md={12} className="help_right">
          <div className="cards_help">
            {/* Card 1 */}
            <Card className="inner_card p-3 inner-hcard1" id="inner-card1" >
              <Card.Title className="helpcard-title">Therapeutic Food</Card.Title>
              <div>
                <Card.Text className="helpcard-text mt-3">
                  Provide and distribute therapeutic food to undernutrition children.
                </Card.Text>
              </div>
>>>>>>> momeals-frontend/master
              <div className="arrow arrow1">
                <DoubleArrow />
              </div>
              <div className="color-line1"></div>
            </Card>
<<<<<<< HEAD
            <Card className="inner_card p-3">
              <Card.Title>Malnutrition Testing</Card.Title>
              <Card.Text>
                Trace Malnutrition Children’s and provide them MAUC Tape to test it on their own.
              </Card.Text>
=======

            {/* Card 2 */}
            <Card className="inner_card p-3 inner-hcard2" id="inner-card2">
              <Card.Title className="helpcard-title">Malnutrition Testing</Card.Title>
              <div>
                <Card.Text className="helpcard-text  mt-3">
                  Trace Malnutrition Children's and provide them MAUC Tape to test it on their own.
                </Card.Text>
              </div>
>>>>>>> momeals-frontend/master
              <div className="arrow arrow2">
                <DoubleArrow />
              </div>
              <div className="color-line2"></div>
            </Card>
<<<<<<< HEAD
            <Card className="inner_card p-3">
              <Card.Title>Education Facilities</Card.Title>
              <Card.Text>
                Provide proper meals to malnourished children to help them grow up better.
              </Card.Text>
=======

            {/* Card 3 */}
            <Card className="inner_card p-3 inner-hcard3" id="inner-card">
              <Card.Title className="helpcard-title">Education Facilities</Card.Title>
              <div>
                <Card.Text className="helpcard-text  mt-3">
                  Provide proper meals to malnourished children to help them grow up better.
                </Card.Text>
              </div>
>>>>>>> momeals-frontend/master
              <div className="arrow arrow3">
                <DoubleArrow />
              </div>
              <div className="color-line3"></div>
            </Card>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default HelpCard;
