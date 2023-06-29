import React, { useState } from 'react'
import './Fromright.css'
import {Row,Col,Container, Button} from 'react-bootstrap'
function Fromright() {
    const [inputValue, setInputValue] = useState('');
  const updateValue = (event) => {
    setInputValue(event.target.innerText);
  };
  const manualUpdate = (event) => {
    setInputValue(event.target.value);
  };

  const [button1Color, setButton1Color] = useState(true);
  const [button2Color, setButton2Color] = useState(false);

  const handleButton1Click = () => {
    setButton1Color(true);
    setButton2Color(false);
  };

  const handleButton2Click = () => {
    setButton1Color(false);
    setButton2Color(true);
  };

  return (
    <div className=' form-modal'>
        <Row className='m-3'>
        <Col className='form-header pt-3'>
            DONATE NOW!!
        </Col>
        </Row>
       <Row  className='m-3'>
        <Col>
        <small>
            <center>Give a Hand, Change a Life:<br/> Donate and Make an Impact!</center>
        </small>
        </Col>
       </Row>
  <Row className='d-flex justify-content-center mt-5 interval-btns'  style={{width:"100%"}}>
  <Col className='button-container'>
    <button
      className={`one-time ${button1Color ? 'active' : ''}`}
      onClick={handleButton1Click}
    >
      ONE TIME
    </button>
    <button
      className={`monthly ${button2Color ? 'active' : ''}`}
      onClick={handleButton2Click}
    >
      MONTHLY
    </button>
  </Col>
</Row>

      
        <Row xs={3}   sm={3} md={3} xl={3} style={{width:"100%"}}  className='d-flex sm-justify-content-center amt-btn mt-4'>
          <Col  className='d-flex justify-content-center mb-3'>
            <button onClick={updateValue} className='custom-button'>
              Rs. 50
            </button>
          </Col>
          <Col  className='d-flex justify-content-center mb-3'>
            <button onClick={updateValue} className='custom-button'>
              Rs. 100
            </button>
          </Col>
          <Col  className='d-flex justify-content-center mb-3'>
            <button onClick={updateValue} className='custom-button'>
              Rs. 150
            </button>
          </Col>
          <Col  className='d-flex justify-content-center mb-3'>
            <button onClick={updateValue} className='custom-button'>
              Rs. 200
            </button>
          </Col>
          <Col  className='d-flex justify-content-center mb-3'>
            <button onClick={updateValue} className='custom-button'>
              Rs. 500
            </button>
          </Col>
          <Col  className='d-flex justify-content-center mb-3'>
            <button onClick={updateValue} className='custom-button'>
              Rs. 1000
            </button>
          </Col>
        </Row>
      
        {/* <div className='amt-btn'>
            <button onClick={updateValue}>Rs. 50</button>
            <button onClick={updateValue}>Rs. 100</button>
            <button onClick={updateValue}>Rs. 150</button>
            <button onClick={updateValue}>Rs. 200</button>
            <button onClick={updateValue}>Rs. 500</button>
            <button onClick={updateValue}>Rs. 1000</button>
        </div> */}
        <Row xs={12} sm={6} md={12} className='d-flex justify-content-center' style={{width:"100%"}}  >
          <Col xs={12} sm={6} md={12}  >
            <div className='amt-input' >
              <input
                type='text'
                name='amt'
                id='amt'
                placeholder='Add Custom Amount'
                value={inputValue}
                onChange={manualUpdate}
                className='custom-input'
               
              />
            </div>
          </Col>
        </Row>
        <Row className='donate-now' style={{width:"100%"}}>
           <Col>
           <Button className='mb-5 donatebtn'style={{width:"100%"}} >Donate Now</Button>
           </Col>
        </Row>
    </div>
  )
}

export default Fromright