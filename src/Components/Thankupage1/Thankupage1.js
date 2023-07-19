import React from 'react';
import thanuimg1 from '../Images/Thank you heart 1.png'; // Importing an image
import { Link, useNavigate } from 'react-router-dom'; // Importing the Link component from react-router-dom
import './Thankupage1.css'; // Importing the ThankU.css file



//this thankyou page connect to contactpage
const Thankupage1 = () => {
    const navigate = useNavigate();
const Thankuclick = () => {
  navigate('/');
}; 
  return (
    <div className='ThankUpage-1 pb-5'> {/* Outer container with the class name ThankUpage */}
      <center> {/* Centering the content */}
        <img className='Thankuimg-1' src={thanuimg1} /> {/* Image component with the class name Thankuimg and the image source from thanuimg variable */}
        <h1 className="ThankUpage-1h1 mb-2">Thank You!!</h1> {/* Heading with the class name ThankUpageh1 */}
        <h4 className="ThankUpage-1h4 mb-5">
            Your submission was submitted successfully.<br/>
We will contact with you soon.</h4> {/* Subheading with the class name ThankUpageh4 */}
        <Link className="ThankUpage-1link mt-5" to="/" onClick={Thankuclick}>
            Redirect To Homepage {">"}</Link> {/* Link component with the class name ThankUpagelink */}
      </center>
    </div>
  );
};

export default Thankupage1; // Exporting the ThankU component