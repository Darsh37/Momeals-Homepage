import React from 'react';
import './Fromleft.css';
import { Button, Col, Row } from 'react-bootstrap';

function Fromleft() {
  return (
    <div className="donation-caption m-4">
      
      <div className="first-half">FIGHT AGAINST<br />HUNGER, DONATING</div>
      <div className="second-half">
        FOOD TODAY
        <div className="underline"></div>
      </div>
      <section className="cause-description">
        <div className="mt-4">
          Join the community of change makers and make an impact on society for a good change.
        </div>
      </section>
      <div className="donate-buttons mb-3">
        <Row className="justify-content-center justify-content-sm-start btnrow">
          <Col className="col-auto">
            <Button className="btn-1">Give Food</Button>
          </Col>
          <Col className="col-auto">
            <Button className="btn-2">Donate</Button>
          </Col>
        </Row>
        
     
    
      </div>
    </div>
  );
}

export default Fromleft;
