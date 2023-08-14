import React from "react";
<<<<<<< HEAD
import Stack from "react-bootstrap/Stack";
=======
import {Stack,Row,Col} from "react-bootstrap";
>>>>>>> momeals-frontend/master
import DonationDetails from "./DonationDetails";
import "./FoodHunger.css";

function Container2() {
  return (
<<<<<<< HEAD
    <div className="container2-wrapper">
     
      <div className="happens-container" >
      <div className="d-3">
        <h1 className='d-3' style={{margin:" 1rem 10rem"}}>WHY IT HAPPENS?</h1>
=======
    <div className="container2-wrapper pt-5">
     <Row className="d-flex justify-content-center px-md-3 px-lg-0">
      <Col  lg={6} xl={7}  md={7} xs={12}>
     <div className="happens container" >
      <div >
        <h1 className='d-3'>WHY IT HAPPENS?</h1>
>>>>>>> momeals-frontend/master
        <p style={{ fontSize:"18px"}} >
          The issue of widespread malnutrition and hunger is a result of a
          complex web of interconnected factors, including poverty, inequality,
          conflict, climate change, gender discrimination, and inadequate
          government and health systems. Unsfortunately, millions of families
          around the world are affected by this problem, preventing them from
          accessing nutritious food.
        </p>
<<<<<<< HEAD
        <h3 className="d-4" style={{margin:" 2rem 9rem"}}>Main factors why it happens:</h3>
      </div>
        <Stack gap={3} >
          <div className="p-2">
            <h3>
              1.<span style={{ color: "#E6545F", margin:"0.5rem" }}>Poverty</span>
            </h3>
            <p style={{ fontSize:"18px"}}  >
=======
        <h3 className="d-4">Main factors why it happens:</h3>
      </div>
        <Stack gap={3} >
          <div className="p-2">
            <h3 className="d-flex">
              1.<span style={{ color: "#E6545F"}}>
                <div>Poverty</div>
              </span>
            </h3>
            <p className="px-3" style={{ fontSize:"18px"}}>
>>>>>>> momeals-frontend/master
              India has one of the highest rates of poverty in the world, with
              over 30% of the population living on less than $1.25 per day.
              Women and children are particularly vulnerable, and 1.4 million
              children die each year in India before their fifth birthday due to
              inadequate access to nutritious food, clean water, and healthcare.
              Chronic undernutrition affects one in three children in low- and
              middle-income countries, leading to stunted growth, limited mental
              and emotional development, and even death.
            </p>
          </div>
          <div className="p-2">
<<<<<<< HEAD
            <h3>
              2.
              <span style={{ color: "#E6545F",margin:"0.5rem" }}>
                Water Sanitation and Hygiene
              </span>
            </h3>
            <p style={{ fontSize:"18px"}} >
=======
            <h3 className="d-flex">
              2.<span style={{ color: "#E6545F"}}>
                <div>
                Water Sanitation and Hygiene
                </div>
              </span>
            </h3>
            <p className="px-3"  style={{ fontSize:"18px"}} >
>>>>>>> momeals-frontend/master
              Inadequate water, sanitation, and hygiene (WASH) services in
              India's health facilities contribute to a high neonatal mortality
              rate, which is currently 24 deaths per 1000 live births in India.
              Without clean water, diseases such as diarrhea, parasites, and
              chronic intestinal inflammation are common. These illnesses
              prevent children from absorbing key nutrients, making them more
              susceptible to malnutrition and other health issues.
            </p>
          </div>
          <div className="p-2">
<<<<<<< HEAD
            <h3>
              3.<span style={{ color: "#E6545F",margin:"0.5rem" }}> Excess Food Wastage</span>
              <p style={{ fontSize:"18px"}} >
=======
            <h3 className="d-flex">
              3.<span style={{ color: "#E6545F" }}><div>Excess Food Wastage</div></span>
              </h3>
              <p className="px-3" style={{ fontSize:"18px"}} >
>>>>>>> momeals-frontend/master
                The cycle of food waste, climate change, and hunger intensifies
                each other. Wasted food requires significant resources such as
                energy, land, water, and labor to produce, store, harvest,
                transport, package, and sell. When we waste food, we're throwing
                away precious resources that could have been used to feed hungry
                people, contributing to climate change by producing three
                billion tons of greenhouse gases like methane. Preventing food
                waste could cut global emissions by 8%, free up valuable land
                and resources, and save enough food to feed 2 billion hungry
                people.
              </p>
<<<<<<< HEAD
            </h3>
          </div>
          <div className="p-2">
            <h3>
              4.<span style={{ color: "#E6545F", margin:"0.5rem" }}>Inequity</span>{" "}
            </h3>
            <p style={{ fontSize:"18px"}} >
=======
            
          </div>
          <div className="p-2">
            <h3 className="d-flex">
              4.<span style={{ color: "#E6545F"}}><div>Inequity</div></span>
            </h3>
            <p className="px-3"  style={{ fontSize:"18px"}} >
>>>>>>> momeals-frontend/master
              Access to nutritious food is not equal in an unequal world. Those
              marginalized within a community - such as women, displaced people,
              refugees, and those with disabilities - face more barriers to
              essential services, jobs, income, and resources, deepening
              inequity and causing chronic hunger.
            </p>
          </div>
          
        </Stack>
      </div>
<<<<<<< HEAD
      <div className="second-col-wrapper">
        <DonationDetails />
      </div>
=======
      </Col>
      <Col  lg={5} xl={4}  xs={12}>
      <div className="second col-wrapper p-3 p-lg-0 p-md-0">
        <DonationDetails />
      </div>
      </Col>
      </Row>
>>>>>>> momeals-frontend/master
    </div>
  );
}

export default Container2;
