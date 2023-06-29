import React from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import "./FoodHunger.css"


function Container1() {
  return (
    <div class="container1-wrapper" >
            <h5 >
              Every year, hunger claims the lives of approximately 25 lakh
              individuals in India. Shockingly, this figure is five times
              greater than the total fatalities caused by the COVID-19 pandemic,
              which is widely considered to be the greatest threat to humanity.
              The prevalence of issues such as food insecurity and wastage is a
              major concern worldwide, but particularly in India, where the
              problem is reaching alarming levels. <br/>
              <br/>
              According to the 2021 Global
              Hunger Index (GHI), India has a score of 27.5, indicating a
              serious level of hunger throughout the country. Despite the fact
              that India has enough food in its reserves to feed the entire
              population for five years, even if food production were to cease,
              a staggering 14% of the population is unable to afford even two
              meals a day.
            </h5>    
          <div className="sponso">
            <Card
              style={{boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)", width: "20rem",  marginLeft:"10rem", borderRadius:"10px", padding:"0" }}
            >
              <Card.Body style={{display:"flex", alignItems:"center", justifyContent:"center", borderRadius: "30px"}} >
                <Card.Title>Sponsor a Child</Card.Title>
                </Card.Body>
                <Card.Body style={{ padding:"1.5rem", background:"#ED4B4B", color:"#FFFFFF", borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px"}}>         
                <Card.Text style={{width:"17rem",textAlign:"center",fontFamily:"Comfortaa"}}>
                  Make monthly contribution to help a child to have better
                  accesibilty to resources.
                </Card.Text>
                <Form>
                  <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Control type="text" placeholder="your Name"  style={{ borderRadius: '20px' }}/>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Control type="text" placeholder="Mobile Number" style={{ borderRadius: '20px' }}/>
                  </Form.Group>
                </Form>
                <Row>
                <Button variant="danger" style={{background:"#FFFFFF", color:"#D90000", width :"7rem", marginLeft:"6rem", marginBottom:"3rem", borderRadius:"30px"}}>Donate</Button>
                </Row>
              </Card.Body>
            </Card>
          </div>        
    </div>
  );
}

export default Container1;
