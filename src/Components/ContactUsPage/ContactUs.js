import React from "react";
import """

import "./ContactUs.css";
import { Button } from "react-bootstrap";

function ContactUs() {
  return (
    <div className="contactUs-container">
      <div className="contactUs-header">
        <h3>Contact Us</h3>
      </div>
      <div className="contactUs-middle-container">
        <div className="contactUs-left-side">
          <div className="d-6">
            <h5>Chat with us</h5>
            <p>Our friendly team is here to help </p>
            <p>help@momeals.in</p>
            <p>info@momeals.in</p>
          </div>
          <div className="d-6">
            <h5>Chat with us</h5>
            <p>Come say hello at our office HQ. </p>
            <p>Kot Mit Singh,Amritsar, Punjab</p>
          </div>
          <div className="d-6">
            <h5>Call Us</h5>
            <p>Available All Time To Help You. </p>
            <p>+91-8567085690</p>
          </div>
          <img src={} alt=""/>
          <img src={} alt=""/>
          <img src={} alt=""/>
        </div>
        <div className="contactUs-right-side">
         
          <h3><spam style={{color:"#2EB167"}}>Got Ideas?</spam> Let’s Team Up And Make A <spam style={{color:"#2EB167"}}>Difference</spam> With Us.</h3>
          <input type="text" placeholder="Your Name" />
          <br/><br/>
          <input type="email" placeholder="yourname@gmail.com" />
          <p style={{margin:"1rem 0rem"}}>Share Your Idea,How Can You Make A difference?</p>
          <input type="text" placeholder="" />
          
    
          <p style={{margin:"1rem 0rem"}}>How can you help us to make this world better ?</p>
          <form >
            <div className="radio">
              <label>
                <input type="radio" value="Funds  Allocation" />
                Funds Allocation
              </label>
            </div>
            <div className="radio">
              <label>
                <input type="radio" value="Female" />
                Become A Member
              </label>
            </div>
            <div className="radio">
              <label>
                <input type="radio" value="Donate Items" />
                Donate Items
              </label>
            </div>
            <div className="radio">
              <label>
                <input type="radio" value="Voluteer" />
                Voluteer
              </label>
            </div>
            <button className="contactUs1-btn" >
             Contact Us
            </button>
          </form>
        </div>
      </div>
    </div>
   
  );
}

export default ContactUs;
