<<<<<<< HEAD
import React, { useRef, useState } from "react";
import logo from "../layout/logo.png";
import "../layout/Navbar.css";
import CloseIcon from "@mui/icons-material/Close";
import { NavLink } from "react-router-dom";
import MenuIcon from './menu icon 1.png';

export const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

=======
// Import necessary modules and components
import React, { useRef, useState } from "react";
import logo from "../Components/Images/momealslogo.png";
import "../layout/Navbar.css";
import CloseIcon from "@mui/icons-material/Close";
import { NavLink ,Link} from "react-router-dom";
import MenuIcon from './menu icon 1.png';
import { NavDropdown } from "react-bootstrap";

// Define the Navbar component
export const Navbar = () => {
  // State to manage the dropdown menu
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Function to open the dropdown
>>>>>>> momeals-frontend/master
  const handleDropdownOpen = () => {
    setIsDropdownOpen(true);
  };

<<<<<<< HEAD
=======
  // Function to close the dropdown
>>>>>>> momeals-frontend/master
  const handleDropdownClose = () => {
    setIsDropdownOpen(false);
  };

<<<<<<< HEAD
  const [open, setOpen] = useState(false);
  const close = useRef(null);

=======
  // State to manage the sidebar
  const [open, setOpen] = useState(false);
  const close = useRef(null);

  // Function to close the sidebar
>>>>>>> momeals-frontend/master
  const handleClose = () => {
    setOpen(false);
  };

<<<<<<< HEAD
  const handleOpen = () => {
=======
  // Function to open the sidebar
  const handleOpen = (event) => {
    if (event.target.id === "causes") {
      // Prevent toggling the sidebar if the Causes dropdown is clicked
      return;
    }
>>>>>>> momeals-frontend/master
    setOpen(!open);
  };

  return (
<<<<<<< HEAD
    <>
      <nav className="navbar  navbar-expand-sm bg-light  justify-content-between px-lg-5 px-md-3 nav1">
        {/* <div className="navbar ml-auto main_navbar"> */}
          <NavLink className="logo m-0" to="/">
            <img src={logo} alt="coolwiilogo" className="logo-img" id="logo-img"/>
          </NavLink>
          <div className="nav-elements d-flex align-items-center">
            <ul className="navbar-nav First-ul gap-xl-4" id="First-ul">
              <li>
                <NavLink className="nav-link" to="/linchello">Lunchello</NavLink>
              </li>
              <li>
                <NavLink  className="nav-link" to="/ourStory">Our Story</NavLink>
              </li>
              {/* First Dropdown */}
              <li
                className={`dropdown ${isDropdownOpen ? "active" : ""}`}
                onMouseEnter={handleDropdownOpen}
                onMouseLeave={handleDropdownClose}
              >
                  <NavLink  className="nav-link" to="/causes">Causes</NavLink>
                {isDropdownOpen && (
                  <div className="dropdown-content first-dropdown">
                    <a href="/FoodWastage">Food wastage</a>
                    <a href="/FoodHunger">Food hunger</a>
                    <a href="#">Women Empowerment</a>
                  </div>
                )}
              </li>
              <li className="last_editor">
                <NavLink  className="nav-link" to="/FoodWarrior">Food Warrior</NavLink>
              </li>
            </ul>
           
          </div>
          <div className="d-flex align-items-center icons m-0">
          <div ref={close} onClick={handleOpen}>
          <div className="menu-icon2">
          <span className="menutext">Menu</span> <img src={MenuIcon} alt="menu-icon" />
          </div>
          <div className={`sidebar ${open && "active"}`}>
    <div className="sidebar-toggle">
      <CloseIcon onClick={handleClose} />
    </div>
    <img
      style={{
        padding: 15,
        height: 630,
        width: 700,
        borderRadius: 10,
      }}
      className="sidebar-img"
      alt="img"
      src="https://staging-beplusthemes.kinsta.cloud/wp-content/uploads/2021/08/ymr-popup-1.png"
    />
    <div className="sidebar-elements" style={{ textDecoration: "none" }}>
      <ul style={{ display: "flex", flexDirection: "column", listStyleType: "none" }}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/linchello">Lunchello</a>
        </li>
        <li>
          <a href="/ourStory">Our Story</a>
        </li>
        <li>
          <a href="/FoodWarrior">Food Warrior</a>
        </li>
        {/* Second Dropdown */}
        <li
          className={`dropdown ${isDropdownOpen ? "active" : ""}`}
          onMouseEnter={handleDropdownOpen}
          onMouseLeave={handleDropdownClose}
        >
          <a href="/causes">Causes</a>
          {isDropdownOpen && (
            <div className="dropdown-content second-dropdown">
              <a href="#">FoodWastage</a>
              <a href="#">FoodHunger</a>
              <a href="#">WomenEmpowerment</a>
            </div>
          )}
        </li>
        <li>
          <a href="/foodWarrior">About Us</a>
        </li>
        <li>
          <a href="/ContactUs">Contact Us</a>
        </li>
        <li>
          <a href="/ourStory">Become A Member</a>
        </li>
        <li>
          <a href="/ourStory">Blogs</a>
        </li>
      </ul>
    </div>
  </div>
  </div>
          <button className="joinUs1  rounded-pill" id="joinUsbtn">  JOIN US</button>
          </div>
          
        {/* </div> */}
      </nav>
    </>
  );
};
=======
    <div >
      <div className="navbarpage ">
      {/* Main navigation */}
      <nav className="navbar   navbar-expand-sm bg-light  justify-content-between px-xl-5 px-xxl-5 px-lg-3 px-md-2  nav1">
        <div className="col-lg-3 col-xl-3  col-xxl-3 px-0">
          {/* Logo */}
          <NavLink className="logo " to="/">
            <img src={logo} alt="coolwiilogo" className="logo-img" id="logo-img"/>
          </NavLink>
        </div>
        <div className="nav-elements d-flex  col-lg-5 col-md-6  col-xxl-5">
          <ul className="navbar-nav First-ul gap-xl-3 "  id="First-ul">
            {/* Navigation Links */}
            <li>
              <NavLink className="nav-link" id="nav-link" to="/meallopage">Meallo</NavLink>
            </li>
            <li>
              <NavLink  className="nav-link" id="nav-link" to="/Ourstory">Our Story</NavLink>
            </li>
            <li>
              {/* Dropdown for Causes */}
              <NavDropdown title="Causes" id="causes" >
                <NavDropdown.Item ><Link to="/FoodWastage" id="navdrop" >Food Wastage</Link></NavDropdown.Item>
                <NavDropdown.Item ><Link to="/FoodHunger" id="navdrop">Food Hunger</Link></NavDropdown.Item>
                <NavDropdown.Item ><Link to="/#" id="navdrop" >Women<br/> Empowerment</Link></NavDropdown.Item>
              </NavDropdown>
            </li>
            <li className="last_editor">
              <NavLink  className="nav-link" id="nav-link" to="/foodworrierpage">Food Warrior</NavLink>
            </li>
          </ul>
        </div>
        <div className="d-flex align-items-center icons m-0">
          <div ref={close} onClick={handleOpen}>
            {/* Sidebar Menu Icon */}
            <div className="menu-icon2">
              <span className="menutext">Menu</span> <img className="mx-1 mx-lg-0 mx-md-0" src={MenuIcon} alt="menu-icon" />
            </div>
            {/* Sidebar */}
            <div className={`sidebar ${open && "active"}`}>
              <div className="sidebar-toggle">
                <CloseIcon onClick={handleClose} />
              </div>
              <img
                style={{
                  padding: 15,
                  height: 630,
                  
                  borderRadius: 10,
                }}
                className="sidebar-img"
                alt="img"
                src="https://staging-beplusthemes.kinsta.cloud/wp-content/uploads/2021/08/ymr-popup-1.png"
              />
              <div className="sidebar-elements mt-4 m-lg-3 m-md-2 m-4" style={{ textDecoration: "none" }} >
                <ul style={{ display: "flex", flexDirection: "column", listStyleType: "none" }}>
                  {/* Sidebar Navigation Links */}
                  <li>
                    <Link id="nav-link" to="/">Home</Link>
                  </li>
                  <li>
                    <Link id="nav-link" to="/meallopage">Meallo</Link>
                  </li>
                  <li>
                    <Link id="nav-link" to="/Ourstory">Our Story</Link>
                  </li>
                  <li>
                    <Link id="nav-link" to="/foodworrierpage">Food Warrior</Link>
                  </li>
                  {/* Second Dropdown in the Sidebar */}
                  <li
                    className={`dropdown ${isDropdownOpen ? "active" : ""}`}
                    onMouseEnter={handleDropdownOpen}
                    onMouseLeave={handleDropdownClose}
                  >
                    <Link to="/causes">Causes</Link>
                    {isDropdownOpen && (
                      <div className="custom-dropdown-content ">
                        <NavDropdown.Item><Link to="/FoodWastage">FoodWastage</Link><br/></NavDropdown.Item>
                        <NavDropdown.Item><Link to="/FoodHunger">FoodHunger</Link><br/> </NavDropdown.Item>
                        <NavDropdown.Item><Link to="/#">WomenEmpowerment</Link><br/> </NavDropdown.Item>
                      </div>
                    )}
                  </li>
                  <li>
                    <Link id="nav-link" to="/contactpage">Contact Us</Link>
                  </li>
                  <li>
                    <Link  id="nav-link" to="/blogpage">Blogs</Link>
                  </li>
                  <li>
                    <Link id="nav-link" to="/terms and conditionspage">Privacy  And Policies</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <button className="joinUs1  rounded-pill" id="joinUsbtn">JOIN US</button>
        </div>
      </nav>
    </div>
    </div>
  );
};

>>>>>>> momeals-frontend/master
