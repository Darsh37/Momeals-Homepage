import React, { useRef, useState } from "react";
import logo from "../layout/logo.png";
import "../layout/Navbar.css";
import CloseIcon from "@mui/icons-material/Close";
import { NavLink ,Link} from "react-router-dom";
import MenuIcon from './menu icon 1.png';
import { NavDropdown } from "react-bootstrap";

export const Navbar = () => {
  // const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // const handleDropdownOpen = () => {
  //   setIsDropdownOpen(true);
  // };

  // const handleDropdownClose = () => {
  //   setIsDropdownOpen(false);
  // };

  const [open, setOpen] = useState(false);
  const close = useRef(null);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <nav className="navbar  navbar-expand-sm bg-light  justify-content-between px-lg-5 px-md-3 nav1">
        {/* <div className="navbar ml-auto main_navbar"> */}
          <NavLink className="logo m-0" to="/">
            <img src={logo} alt="coolwiilogo" className="logo-img" id="logo-img"/>
          </NavLink>
          <div className="nav-elements d-flex align-items-center">
            <ul className="navbar-nav First-ul gap-xl-4" id="First-ul">
              <li>
                <NavLink className="nav-link" id="nav-link" to="/linchello">Meallo</NavLink>
              </li>
              <li>
                <NavLink  className="nav-link" id="nav-link" to="/ourStory">Our Story</NavLink>
              </li>
              <li>
                  <NavDropdown title="Causes" >
                  <NavDropdown.Item ><Link to="/FoodWastage" id="navdrop" >Food Wastage</Link></NavDropdown.Item>
                  <NavDropdown.Item ><Link to="/FoodHunger" id="navdrop">Food Hunger</Link></NavDropdown.Item>
                  <NavDropdown.Item ><Link to="/causes/women-empowerment" id="navdrop" >Women<br/> Empowerment</Link></NavDropdown.Item>
                  </NavDropdown>
              </li>
           {/* First Dropdown  */}
               {/* <li
                className={`dropdown ${isDropdownOpen ? "active" : ""}`}
                onMouseEnter={handleDropdownOpen}
                onMouseLeave={handleDropdownClose}
              >  <NavLink  className="nav-link" to="/causes">Causes</NavLink> 
                 
               {isDropdownOpen && (
                <div className="dropdown-content first-dropdown">
                    <Link to="/FoodWastage">Food wastage</Link>
                    <Link to="/FoodHunger">Food hunger</Link>
                    <Link to="#">Women Empowerment</Link>
                  </div> 
                )} 
              </li>  */}
              <li className="last_editor">
                <NavLink  className="nav-link" id="nav-link" to="/foodworrierpage">Food Warrior</NavLink>
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
    <div className="sidebar-elements mt-4 m-lg-3 m-md-2 m-4" style={{ textDecoration: "none" }} >
      <ul style={{ display: "flex", flexDirection: "column", listStyleType: "none" }}>
        <li>
          <Link id="nav-link" to="/">Home</Link>
        </li>
        <li>
          <Link id="nav-link" to="/linchello">Meallo</Link>
        </li>
        <li>
          <Link id="nav-link" to="/ourStory">Our Story</Link>
        </li>
        <li>
          <Link id="nav-link" to="/foodworrierpage">Food Warrior</Link>
        </li>
        <li className="causes-dropdown">
                  <NavDropdown title="Causes">
                  <NavDropdown.Item ><Link to="/FoodWastage" >Food Wastage</Link></NavDropdown.Item>
                  <NavDropdown.Item ><Link to="/FoodHunger">Food Hunger</Link></NavDropdown.Item>
                  <NavDropdown.Item ><Link to="/causes/women-empowerment" >Women<br/> Empowerment</Link></NavDropdown.Item>
                  </NavDropdown>
          </li>
        {/* Second Dropdown */}
        {/* <li
          className={`dropdown ${isDropdownOpen ? "active" : ""}`}
          onMouseEnter={handleDropdownOpen}
          onMouseLeave={handleDropdownClose}
        >
          <Link to="/causes">Causes</Link>
          {isDropdownOpen && (
            <div className="dropdown-content second-dropdown">
              <Link to="#">FoodWastage</Link>
              <Link to="#">FoodHunger</Link>
              <Link to="#">WomenEmpowerment</Link>
            </div>
          )}
        </li> */}
        
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
          <button className="joinUs1  rounded-pill" id="joinUsbtn">  JOIN US</button>
          </div>
          
        {/* </div> */}
      </nav>
    </>
  );
};
