import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

import ff from '../Components/Images/f-Facebook Circled.png'
import fw from '../Components/Images/fWhatsApp (1).png'
import fi from '../Components/Images/f-Instagram (1).png'
import "./footer.css";
export const Footer = () => {
  return (
    <footer>
      <div className="row pt-2 d-flex justify-content-evenly pb-4">
        <div className="col-md-3  text-center mt-sm-3  first-div">
          <h3 className="mb-1 mb-lg-5 mb-md-5 mb-3" style={{ color: "rgb(199, 242, 171)" }}>Momeals</h3>
          <h6>
            Be a part of positive change,
            <br /> be a part of something that is
            <br /> bigger than living normal life
          </h6>
          <br />
          <h6>
          <FontAwesomeIcon icon={faPhone} />
          
            +91-8567085690
          </h6>
          <h6>
          <FontAwesomeIcon icon={faEnvelope} />
            
            help@momeals.in
          </h6>
          <h6 style={{ margin: 0 }}>
          <FontAwesomeIcon icon={faMapMarkerAlt} />
            
            Kot Mit Singh,&nbsp;<span className="asr">Asr, 143001</span>
          </h6>
         
        </div>
        <div className="col-md-3  text-center mt-sm-3  second-div">
          <h3 className="mb-1 mb-lg-5 mb-md-5 mb-3"  style={{ color: "rgb(199, 242, 171)" }}>Quick Links</h3>
          
          <h6>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" d="M0 0h24v24H0V0z" />
              <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
            </svg>{" "}
            Donate Now
          </h6>
          <h6>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" d="M0 0h24v24H0V0z" />
              <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
            </svg>{" "}
            Join Us
          </h6>
          <h6>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" d="M0 0h24v24H0V0z" />
              <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
            </svg>{" "}
            Become a Volunteer
          </h6>
          <h6>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" d="M0 0h24v24H0V0z" />
              <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
            </svg>{" "}
            Careers
          </h6>
          <h6>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" d="M0 0h24v24H0V0z" />
              <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
            </svg>{" "}
            Contact Us
          </h6>
        </div>
        <div className="col-md-3 mt-sm-3   text-center  last-div">
          <h3 className="mb-1 mb-lg-5 mb-md-5 mb-3" style={{ color: "rgb(199, 242, 171)" }}>Join The Newsletter</h3>
          <form >
            <input className="p-2 ipt" type="email" placeholder="Your Email here" />
            <br />
            <button className="Subscribe p-2">Subscribe Now</button>
            <br />
            <br />
            <div className="socialIcon">
              <a href="" aria-label="facebook" rel="noopener" target="_blank">
              <img src={ff}/>
              </a>
              <a
                href="https://wa.me/91########"
                aria-label="whatsapp"
                rel="noopener"
                target="_blank"
              >
               <img src={fw}/>
              </a>
              <a href="" aria-label="twitter" rel="noopener" target="_blank">
          
                <img src={fi}/>
              </a>
              
            </div>
          </form>
        </div>
      </div>
      <div className="footerBorder " />
      <h6 className="pb-3 pt-3" style={{ textAlign: "center", fontSize: 15 }}>
        All Rights Reserved 2023 <spann style={{fontWeight:"600"}}>Momeals</spann>
      </h6>
    </footer>
  );
};
