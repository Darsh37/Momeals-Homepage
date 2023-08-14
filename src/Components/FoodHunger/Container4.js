import React from 'react'
<<<<<<< HEAD
=======
import { Col, Row } from 'react-bootstrap';
>>>>>>> momeals-frontend/master


export const Container4 = () => {
    const data = [
<<<<<<< HEAD
        { count: '245+', description: 'KG Of Food We Saved' },
        {count: '150+', description: 'Childrens We Fed' },
        {count: '120+', description: 'Families We Served' },
        { count: '50+', description: 'Women’s We Empowered' },
      ];
  return (
    <div className='container4-wrapper' >
        <h3 className='container4-heading'>WHAT WE DID SO FAR?</h3>
        <div className='container4-counter' >
        {data.map((item, index) => (
        <div className='d-5' key={index}>
          <h3>{item.count}</h3>
          <p> {item.description}</p> 
        </div>
        ))}
        </div>
=======
        { count: '150+', description: 'KG Of Food We Saved' },
        {count: '120+', description: 'Childrens We Fed' },
        {count: '150+', description: 'Families We Served' },
        { count: '50+', description: "Women's We Empowered" },
      ];
  return (
    <div className='container4-wrapper px-2' >
         <h3 className="container4-heading text-center pt-5 pb-4">WHAT WE DID SO FAR?</h3>
      <Row className="justify-content-center pb-5">
        {data.map((item, index) => (
          <Col md={2} lg={3} xl={2} key={index} className="container4-wrappercounters  text-center  d-flex flex-column align-items-center">
            
            <h3>{item.count}</h3>
            <p>{item.description}</p>
            
          </Col>
        ))}
      </Row>
>>>>>>> momeals-frontend/master
        </div>
 )}
  
