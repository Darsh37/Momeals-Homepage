import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Container1() {
  return (
    <div class="container1-wrapper">
      <h5 >
              India, the land of abundant agricultural resources, is facing a
              startling reality. Despite being the second-largest producer of
              food on the planet, it is ranked a dismal 107th out of 121
              countries in terms of food hunger crises. The situation is
              alarming, to say the least. Adding fuel to the fire is the fact
              that every year, a whopping 70 million tonnes of food, valued at a
              staggering 95000 crores, goes to waste. That's nearly half the
              amount of the value of food security that the Indian government
              provides for its impoverished citizens. It's a grave concern that
              demands urgent attention.<br/><br/> There are numerous factors that
              contribute to food wastage in India, including climate disasters,
              poor infrastructure, and distribution systems. However, we will
              focus on the avoidable factors.
            </h5>
         
         <div>
            <Card
              style={{
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
                width: "20rem",
                marginLeft: "10rem",
                borderRadius: "10px",
                padding: "0",
              }}
            >
              <Card.Body
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "30px",
                }}
              >
                <Card.Title>Join Us</Card.Title>
              </Card.Body>
              <Card.Body
                style={{
                  padding: "1.5rem",
                  background: "#ED4B4B",
                  color: "#FFFFFF",
                  borderBottomLeftRadius: "10px",
                  borderBottomRightRadius: "10px",
                }}
              >
                <Card.Text
                  style={{ width:"17rem", textAlign: "center", fontFamily: "Comfortaa" }}
                >
                  Become a food warrior and rescue leftover food and save lives
                  of millions
                </Card.Text>
                <Form>
                  <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Control
                      type="text"
                      placeholder="your Name"
                      style={{ borderRadius: "20px" }}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Control
                      type="text"
                      placeholder="Mobile Number"
                      style={{ borderRadius: "20px" }}
                    />
                  </Form.Group>
                </Form>
                <Row>
                  <Button
                    variant="danger"
                    style={{
                      background: "#FFFFFF",
                      color: "#D90000",
                      width: "7rem",
                      marginLeft: "6rem",
                      marginBottom: "3rem",
                      borderRadius: "30px",
                    }}
                  >
                    Join Us
                  </Button>
                </Row>
              </Card.Body>
            </Card>
            </div>   
    </div>
  );
}

export default Container1;
