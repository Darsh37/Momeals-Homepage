import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import bottomimg1 from '../Components/Images/bottomnav1.png';
import bottomimg2 from '../Components/Images/bottomnav2.png';
import bottomimg3 from '../Components/Images/bottomnav3.png';
import './Bottomnavbar.css'; // Import the external CSS file
import { Link } from 'react-router-dom';

const Bottomnavbar = () => {
  return (
    <Navbar fixed="bottom" bg="light" className="bottompage mx-auto d-flex justify-content-center" style={{ marginBottom: "-8px", borderRadius: "10px" }}>
      <Nav className="d-flex gap-3 gap-lg-5 gap-md-5">
        {/* Search item */}
        <Nav.Link id="bottomnav">
          {/* Center the icon */}
          <div className="bottomicon-center">
            <img src={bottomimg1} alt="icon1" />
          </div>
          {/* Text label */}
          <div className="text-center"><Link to="/DonationPage" className='b-link'>DONATE</Link></div>
        </Nav.Link>

        {/* Home item */}
        <Nav.Link id="bottomnav">
          {/* Circular icon container with border and background */}
          <div className="bottom-icon-container p-3">
            <img src={bottomimg2} alt="icon2" />
          </div>
          {/* Text label */}
          <div className="text-center mt-2"><Link  to="/" className='b-link' >HOME</Link></div>
        </Nav.Link>

        {/* Contact item */}
        <Nav.Link className="justify-content-center align-items-center"  id="bottomnav">
          {/* Center the icon */}
          <div className="bottomicon-center">
            <img src={bottomimg3} alt="icon3" />
          </div>
          {/* Text label */}
          <div className="text-center"><Link to="/FoodtypePage" className='b-link'>GIVE FOOD</Link></div>
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Bottomnavbar;
