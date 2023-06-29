import React from "react";
import rectangle from "../Images/Rectangle 229 (1).png";
import "./donationDetails.css";
import Card from "react-bootstrap/Card";
import WhatsApp from "../Images/whatsapp logo.png"
import youtube from '../Images/youtube icon.png'
import instagarm from '../Images/instagram icon.png'
import twitter from '../Images/twitter icon.png'

const Data = [
  {
    id: 1,
    img: "img2",
    name: "Drushti",
    Amount: "500",
    time: "1 hour",
    comment: "God bless you",
  },

  {
    id: 2,
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
    comment: "God bless you",
  },
  {
    id: 4,
    img: "img1",
    name: "Drushti",
    Amount: "500",
    time: "1 hour",
    comment: "God bless you",
  },
];

function DonationDetails() {
  return (
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
    </div>
    </div>
  );
}

export default DonationDetails;
