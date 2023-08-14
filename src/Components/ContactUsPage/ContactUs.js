<<<<<<< HEAD
import React from "react";
import Arrow from "./../Images/Arrow 4 (1).png";
import phone from "./../Images/Phone.png";
import whatsapp from "./../Images/WhatsApp.png";
import insta from "./../Images/Instagram.png";
import "./ContactUs.css";
import { useNavigate } from "react-router-dom";

function ContactUs() {
  const navigate = useNavigate();

=======
// ContactUs.js

import React, { useState } from "react";
import Arrow from "../Images/Arrow 4 (1).png";
import phone from "../Images/Phone.png";
import whatsapp from "../Images/WhatsApp.png";
import insta from "../Images/Instagram.png";
import "./ContactUs.css";
import { useNavigate } from "react-router-dom";
import { Col, Row } from "react-bootstrap";

function ContactUs() {
  // React Router navigation hooks
  const navigate = useNavigate();
  const navigate1 = useNavigate();

  // Function to navigate back to the homepage
>>>>>>> momeals-frontend/master
  const handleNavigate = () => {
    navigate("/");
  };

<<<<<<< HEAD
  return (
    <div className="contactUs-container">
        
      <div className="contactUs-header">
      <img src={Arrow} alt="" onClick={handleNavigate}></img>
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
          <img src={phone} alt="" />
          <img src={insta} alt="" />
          <img src={whatsapp} alt="" />
        </div>
        <div className="contactUs-right-side">
          <h3>
            <spam style={{ color: "#2EB167" }}>Got Ideas?</spam> Let’s Team Up
            And Make A <spam style={{ color: "#2EB167" }}>Difference</spam> With
            Us.
          </h3>
          <input
            className="d-7"
            type="text"
            placeholder="Your Name"
            style={{ width: "25rem" }}
          />
          <br />
          <br />
          <input
           className="d-7"
            type="email"
            placeholder="yourname@gmail.com"
            style={{ width: "25rem" }}
          />
          <p style={{ margin: "1rem 0rem" }}>
            Share Your Idea,How Can You Make A difference?
          </p>
          <input className="d-7" type="text" placeholder="" style={{ width: "25rem" }} />

          <p style={{ margin: "1rem 0rem" }}>
            How can you help us to make this world better ?
          </p>
          <form>
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
            <button className="contactUs1-btn">Contact Us</button>
          </form>
        </div>
      </div>
=======
  // State for form submission and form data
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    contact_no: "",
    help_us: "",
  });

  // Function to handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    let updatedValue = value;

    // Form input validations based on the field name
    if (name === "name") {
      // Only allow alphabetic characters and spaces
      updatedValue = value.replace(/[^A-Za-z\s]/g, "");
    } else if (name === "email") {
      // Remove any invalid characters for email
      updatedValue = value.replace(/[^a-zA-Z0-9@.\-_]/g, "");
    } else if (name === "contact_no") {
      // Only allow digits and limit to 10 characters
      updatedValue = value.replace(/[^0-9]/g, "").slice(0, 10);
    }

    setFormData((prevData) => ({
      ...prevData,
      [name]: updatedValue,
    }));
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Disable submit button to prevent multiple submissions
    setIsSubmitting(true);

    // Basic form input validations
    if (!formData.name.trim()) {
      alert("Please enter a valid name.");
      setIsSubmitting(false);
      return;
    }

    if (!formData.email.trim()) {
      alert("Please enter a valid email address.");
      setIsSubmitting(false);
      return;
    }

    if (formData.contact_no.trim().length !== 10) {
      alert("Please enter a valid 10-digit contact number.");
      setIsSubmitting(false);
      return;
    }

    // If all validations pass, make a POST request to the API endpoint
    fetch("https://server-ulyp.onrender.com/api/contactUs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the API response
        console.log(data);
        // Reset the form
        setFormData({
          name: "",
          email: "",
          message: "",
          contact_no: "",
          help_us: "",
        });
        // Redirect to the thank you page after successful form submission
        navigate1("/thankyoupage1");
      })
      .catch((error) => {
        console.error("Error:", error);
      })
      .finally(() => {
        // Re-enable the submit button
        setIsSubmitting(false);
      });
  };

  return (
    <div className="contactUs-container mx-3 mx-md-1 mx-sm-1 pb-md-4 ">
      {/* Back button */}
      <div>
        <img
          className="contactarrow"
          src={Arrow}
          alt=""
          onClick={handleNavigate}
        />
      </div>
      {/* Contact header */}
      <div className="contactUs-header ">
        <h3 className="contactUs-headerh3 text-center">CONTACT US</h3>
      </div>

      {/* Contact details and form */}
      <Row className="mt-5 justify-content-evenly contactUs-row">
        {/* Contact details */}
        <Col xl={4} md={4} className="contactus1st-col">
          <div className="contactus1st-div">
            <div className="mt-lg-4 mt-md-4 mt-3 mt-lg- mt-md-1">
              <h5 className="contactUs-headerh5">Chat with us</h5>
              <p className="contactUs-p1">Our friendly team is here to help</p>
              <p className="contactUs-p2">help@momeals.in</p>
              <p className="contactUs-p2">info@momeals.in</p>

              <h5 className="contactUs-headerh5 pt-3">Visit us</h5>
              <p className="contactUs-p1">Come say hello at our office HQ.</p>
              <p className="contactUs-p2">Kot Mit Singh, Amritsar, Punjab</p>

              <h5 className="contactUs-headerh5 pt-3">Call Us</h5>
              <p className="contactUs-p1">Available All Time To Help You.</p>
              <p className="contactUs-p2">+91-8567085690</p>
            </div>
            {/* Social media icons */}
            <div className="d-flex contctus-imgs mb-3 mt-4 mt-lg-5">
              <img src={phone} alt="" />
              <img src={insta} alt="" />
              <img src={whatsapp} alt="" />
            </div>
          </div>
        </Col>
        
        {/* Contact form */}
        <Col xl={4} md={6} className="p-2">
          <div className="contactUs-right-side p-4">
            <h3 className="contactUs-righth3">
              <span style={{ color: "#2EB167" }}>Got Ideas?</span> Let's Team Up
              And Make A <span style={{ color: "#2EB167" }}>Difference</span> With
              Us.
            </h3>
            <form onSubmit={handleSubmit}>
              <input
                className="contact-inp"
                type="text"
                required
                placeholder="Your Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                autoComplete="off"
              />
              <input
                required
                className="contact-inp"
                type="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                autoComplete="off"
              />
              <input
                required
                className="contact-inp"
                type="text"
                placeholder="Contact No."
                name="contact_no"
                value={formData.contact_no}
                onChange={handleChange}
                autoComplete="off"
              />
              <input
                required
                className="contact-inp"
                type="text"
                placeholder="Share Your Idea, How Can You Make A difference?"
                name="message"
                value={formData.message}
                onChange={handleChange}
                autoComplete="off"
              />
              <p className="mt-1 contactus-rightp">
                How can you help us to make this world better?
              </p>
              <div className="contactus-right-radio">
                <div className="radio">
                  <label>
                    <input
                      required
                      type="radio"
                      name="help_us"
                      value="Funds Allocation"
                      checked={formData.help_us === "Funds Allocation"}
                      onChange={handleChange}
                    />
                    Funds Allocation
                  </label>
                </div>
                <div className="radio">
                  <label>
                    <input
                      required
                      type="radio"
                      name="help_us"
                      value="Become A Member"
                      checked={formData.help_us === "Become A Member"}
                      onChange={handleChange}
                    />
                    Become A Member
                  </label>
                </div>
                <div className="radio">
                  <label>
                    <input
                      required
                      type="radio"
                      name="help_us"
                      value="Donate Items"
                      checked={formData.help_us === "Donate Items"}
                      onChange={handleChange}
                    />
                    Donate Items
                  </label>
                </div>
                <div className="radio">
                  <label>
                    <input
                      required
                      type="radio"
                      name="help_us"
                      value="Volunteer"
                      checked={formData.help_us === "Volunteer"}
                      onChange={handleChange}
                    />
                    Volunteer
                  </label>
                </div>
              </div>
              {/* Submit button */}
              <button className="contactUs1-btn text-center mt-3 p-2" type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </form>
          </div>
        </Col>
      </Row>
>>>>>>> momeals-frontend/master
    </div>
  );
}

export default ContactUs;
