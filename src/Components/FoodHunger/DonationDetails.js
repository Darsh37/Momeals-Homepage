import React from "react";
import rectangle from "../Images/Rectangle 229 (1).png";
import "./donationDetails.css";
import Card from "react-bootstrap/Card";
<<<<<<< HEAD
import WhatsApp from "../Images/whatsapp logo.png"
import youtube from '../Images/youtube icon.png'
import instagarm from '../Images/instagram icon.png'
import twitter from '../Images/twitter icon.png'
=======
import instagarm from '../Images/fp-insta.png'
import WhatsApp from "../Images/fp-whatsapp.png"
import facebook from '../Images/fp-facebook.png'
import fdi1 from '../Images/fp-img1.png' 
import fdi2 from '../Images/fp-img2.png' 
import fdi3 from '../Images/fp-img3.png' 
import fdi4 from '../Images/fp-img4.png' 
import { Col, Row } from "react-bootstrap";
>>>>>>> momeals-frontend/master

const Data = [
  {
    id: 1,
<<<<<<< HEAD
    img: "img2",
    name: "Drushti",
    Amount: "500",
    time: "1 hour",
=======
    imgs: fdi1,
    name: "Drishti",
    Amount: "500",
    time: "1 Hour ago",
>>>>>>> momeals-frontend/master
    comment: "God bless you",
  },

  {
    id: 2,
<<<<<<< HEAD
    img: "img1",
    name: "Drushti",
    Amount: "200",
    time: "1 hour",
    comment: "God bless you",
  },
  {
    id: 3,
    img: "img1",
    name: "Drushti",
    Amount: "500",
    time: "1 hour",
=======
    imgs:fdi2,
    name: "Paras",
    Amount: "2000",
    time: "3 Hours ago",
    comment: "We always pray for you",
  },
  {
    id: 3,
    imgs: fdi3,
    name: "Jas",
    Amount: "1000",
    time: "1 Hour ago",
>>>>>>> momeals-frontend/master
    comment: "God bless you",
  },
  {
    id: 4,
<<<<<<< HEAD
    img: "img1",
    name: "Drushti",
    Amount: "500",
    time: "1 hour",
=======
    imgs:fdi4,
    name: "Kirat",
    Amount: "1000",
    time: "1 Hour ago",
>>>>>>> momeals-frontend/master
    comment: "God bless you",
  },
];

function DonationDetails() {
  return (
<<<<<<< HEAD
    <div>
    <div className="Donation-container">
        <h3>RECENT DONATION</h3>
      {Data.map((data, id) => (
        <Card key={id} className="donar-card" >
          <Card.Img variant="top" src={rectangle}  style={{height:"5rem", width:"5rem"}}/>
          <Card.Body>
            <p className="data-amount">{data.Amount}</p>
            <div className="d-2">
            <p className="data-name">{data.name}</p>
            <p className="data-time">{data.time}</p>
            </div>
            <p className="data-comment">{data.comment}</p>
          </Card.Body>
        </Card>
      ))}
    </div>
    <div className='share-cause-Container' style={{borderRadius:"15px", padding:"1rem 2rem"}}>
        <h3>Share Cause</h3>
        <div className="share-cause-list">
            <ul>
                <li><img src={instagarm} alt="instagarm.png" /></li>
                <li><img src={WhatsApp} alt="whatsapp.png" /></li>
                <li><img src={twitter} alt="twitter.png" /></li>
                <li><img src={youtube} alt="youtube.png" /></li>
            </ul>
        </div>
=======
    <div className="">
      {/* Donation Details Section */}
    <div className="Donation-container p-3">
        <h3 className="mt-3">RECENT DONATION</h3>
         {/* Displaying each donation card using map */}
      {Data.map((data, id) => (
        <Card key={id} className="donar-card" >
          <Row>
          <Col lg={3} xs={4} md={3} className="mt-4">
          <Card.Img variant="top" src={data.imgs}/>
          </Col >
          <Col  lg={8} xs={8}  md={8} style={{textAlign:"left"}}>
          <Card.Body>
            <p className="data-amount">{data.Amount}</p>
            <div className="d-flex flex-wrap ">
            <p className="data-name ">{data.name}</p>&nbsp;
            <p className="data-time px-lg-2">{data.time}</p>
            </div>
            <p className="data-comment" style={{color:" #908E8E"}}>{data.comment}</p>
          </Card.Body>
          </Col>
          </Row>
          
         
          
        </Card>
      ))}
    </div>
     {/* Share Cause Section */}
    <div className='share-cause-Container pt-3 mb-2 pb-3' style={{borderRadius:"15px"}}>
    <h3 className="text-center">Share Cause</h3>
      <Row className="share-cause-list justify-content-center">
        <Col xs="auto">
          <img src={instagarm} alt="instagarm.png" />
        </Col>
        <Col xs="auto">
          <img src={facebook} alt="whatsapp.png" />
        </Col>
        <Col xs="auto">
          <img src={WhatsApp} alt="twitter.png" />
        </Col>
        
      </Row>
>>>>>>> momeals-frontend/master
    </div>
    </div>
  );
}

export default DonationDetails;
