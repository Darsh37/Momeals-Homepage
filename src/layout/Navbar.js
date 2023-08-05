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
  const handleDropdownOpen = () => {
    setIsDropdownOpen(true);
  };

  // Function to close the dropdown
  const handleDropdownClose = () => {
    setIsDropdownOpen(false);
  };

  // State to manage the sidebar
  const [open, setOpen] = useState(false);
  const close = useRef(null);

  // Function to close the sidebar
  const handleClose = () => {
    setOpen(false);
  };

  // Function to open the sidebar
  const handleOpen = (event) => {
    if (event.target.id === "causes") {
      // Prevent toggling the sidebar if the Causes dropdown is clicked
      return;
    }
    setOpen(!open);
  };

  return (
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

