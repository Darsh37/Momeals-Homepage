import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

import ff from '../Components/Images/f-Facebook Circled (2).png'
import fw from '../Components/Images/fWhatsApp (2).png'
import fi from '../Components/Images/f-Instagram (2).png'
import "./footer.css";
export const Footer = () => {
  return (
    <footer className="footerdiv mb-5 mb-lg-0 mb-md-0">
      <div className="row pt-2 d-flex justify-content-evenly pb-4">
        <div className="col-md-4 col-lg-3 col-sm-12 col-xs-12 mt-sm-3  first-div">
          <h3 className="mb-1 mb-lg-5 mb-md-5 mb-3" style={{ color: "rgb(199, 242, 171)" }}>Momeals</h3>
          <h6 className="footerdivh6">
            Be a part of positive change,
            <br /> be a part of something that is
            <br /> bigger than living normal life
          </h6>
          <br />
          <h6>
          <FontAwesomeIcon icon={faPhone}  />
          
           <span className="px-2"> +91-8567085690</span>
          </h6>
          <h6>
          <FontAwesomeIcon icon={faEnvelope} />
          <span className="px-2">  help@momeals.in</span>
           
          </h6>
          <h6 style={{ margin: 0 }}>
          <FontAwesomeIcon icon={faMapMarkerAlt} />
          <span className="px-2"> Kot Mit Singh,&nbsp;<span className="asr">Asr, 143001</span></span>
           
          </h6>
         
        </div>
        <div className="col-md-3 col-lg-2 col-sm-12 col-xs-12  mt-sm-3  second-div">
          <h3 className="mb-1 mb-lg-5 mb-md-5 mb-3"  style={{ color: "rgb(199, 242, 171)" }}>Quick Links</h3>
          
          <h6 className="d-flex">
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
           <div>Donate Now</div>
          </h6>
          <h6 className="d-flex">
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
           <div> Join Us</div>
          </h6>
          <h6 className="d-flex">
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
           <div> Become a Volunteer</div>
          </h6>
          <h6 className="d-flex">
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
            <div>Careers</div>
          </h6>
          <h6 className="d-flex">
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
           <div> Contact Us</div>
          </h6>
        </div>
        <div className="col-md-3 col-lg-3 col-sm-12 col-xs-12  mt-sm-3 last-div">
          <h3 className="mb-1 mb-lg-5   mb-md-5 mb-3" style={{ color: "rgb(199, 242, 171)" }}>Join The Newsletter</h3>
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
      <div className="footerBorder" />
      <h6 className="pb-lg-4 pb-md-4 pb-5 pt-3" style={{ textAlign: "center", fontSize: 15 }}>
        All Rights Reserved 2023 <spann style={{fontWeight:"600"}}>Momeals</spann>
      </h6>
    </footer>
  );
};
