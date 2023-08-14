import React from 'react'
import {Button, Col, Row} from 'react-bootstrap'
import melloimg from '../Images/meallo transparent 2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import './Meallo.css'
const Meallo = () => {
  React.useEffect(() => {
    document.body.classList.add('meallocustom-body'); 
    return () => {
      document.body.classList.remove('meallocustom-body');
    };
  }, []);
  return (
    <div className='justify-content-center text-center meallocustom px-5 py-lg-5 pb-lg-5 pt-lg-4'>
       <Row className=' justify-content-center '>
        <div className='justify-content-center mt-3 mt-lg-1 mt-md-5' >
        <img  className='melloimg' src={melloimg} />
        </div>
        <div className='line1 ' style={{border:"2px solid #010101"}}></div>
        <h2 className='mealloh2 mt-5 mb-md-5 mt-lg-3 mb-lg-2'>Delicious Things Take Time To Cook</h2>
        <h3 className='mealloh3 mt-4 mb-md-5 mb-lg-1 mt-lg-2' >Coming Soon</h3>
        <div>
        <Button className='text-center meallobtn mt-5 mt-lg-3 mb-5' style={{transform: "rotate(-4.911deg)",background:"#010101",color:"#C7F2AB"}}>Stay Tuned</Button><br/>

        </div>
        <div className='line2  mt-4 mt-md-5 mt-lg-0' style={{border:"2px solid #010101"}}></div>
       </Row>
       
       <Row className='d-flex justify-content-center text-center mt-3 mb-lg-5 mb-4 meallofooter'>
        
          <Col lg={2} md={4}>
          <p  className='d-flex '><span className='px-2'> <FontAwesomeIcon icon={faGlobe} /></span>www.momeals.in</p>
          </Col>
          <Col  lg={1} md={3}>
          <p className='d-flex'><span className='px-2'>   <FontAwesomeIcon icon={faLocationDot} /></span>Amritsar</p>
          </Col>
       
       
        
     
       </Row>
    </div>
  )
}

export default Meallo
