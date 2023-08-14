import React from "react";
import Container1 from "./Container1";
import Container2 from "./Container2";
import Container3 from "./Container3";
import { Container4 } from "./Container4";

import "./FoodHunger.css";
<<<<<<< HEAD
=======
import { Col, Row } from "react-bootstrap";
>>>>>>> momeals-frontend/master

function FoodHunger() {
  return (
    <div className="foodhunger-main-container">
<<<<<<< HEAD
      <div style={{ margin: "2rem 5rem" }}>
        <h1> Food Hunger</h1>
      </div>
=======
      <Row className="d-flex justify-content-center pt-4 pb-2 px-5 ">
        <Col className=" pb-2 px-lg-5">
        <h1 className=" text-left food-hungerh1"> Food Hunger</h1>
        </Col>
      </Row>
>>>>>>> momeals-frontend/master

      <div>
        <Container1 />
      </div>
      <div >
        <Container2 />
      </div>
      <div >
        <Container3 />
      </div>
      <div >
        <Container4 />
      </div>
    </div>
  );
}

export default FoodHunger;
