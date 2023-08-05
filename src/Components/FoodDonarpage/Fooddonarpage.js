// Importing necessary modules and components
import React, { useRef, useState } from "react";
import { Button, Row, Col, Card, InputGroup, Form } from "react-bootstrap";
import "./Fooddonarpage.css";
import arrow4image from "../Images/Arrow 5.png";
import Donorverifyimg from "../Images/Donor verify 1.png";
import { useNavigate } from "react-router-dom";
import FirebaseServices from "../../Services/FirebaseServices";
import axios from "axios";

const Fooddonarpage = () => {
  const [contact, setContact] = useState("");
  const [otp, setOtp] = useState("");
  const [userName, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [msg, setmsg] = useState("");
  const [msg1, setmsg1] = useState("");
  const [errorOTp, seterrorOtp] = useState("");
  const [isCheck, setIsChecked] = useState(false);
  // Defining state and navigation functions
  const navigate = useNavigate();
  const [inputError, setError] = useState("");

  const fooddonarinfoClick =async () => {
    if (userName === "" || location === "" ||contact === "") {
      setError("Please enter all field");
    } else {
      const fdata={
        location:location,
        name:userName,
        contact_no:contact
      }
      const res = await axios.post(
        "https://server-ulyp.onrender.com/api/donar",
        fdata
      );
    
      navigate("/Thanku");
    }
  };

  //back to fooddonationpage
  const navigatee = useNavigate();
  const handleClicke = () => {
    navigatee("/fooddonationpage");
  };
  // console.log(contact)

  const sendOtp = async (e) => {
    e.preventDefault();

    try {
      setmsg("sending....");
      await FirebaseServices.sendOTP("+91" + contact);
      setmsg("OTP sent");
    } catch (error) {
      console.log(error.message);
    }
  };
  const verifyOtp = async (e) => {
    e.preventDefault();
    try {
      await FirebaseServices.verifyOTP(otp);
      seterrorOtp("")
      setmsg1("OPT verified successfully");
    } catch (error) {
      seterrorOtp(error.message)
      console.log(error.message);
    }
  };

  // Effect hook to add custom class to the body
  React.useEffect(() => {
    document.body.classList.add("donarcustom-body");
    return () => {
      document.body.classList.remove("donarcustom-body");
    };
  }, []);

  // JSX content of the component
  return (
    <div className="donarformpage">
      <img
        className="donararrowimage"
        src={arrow4image}
        onClick={handleClicke}
      />
      <div className="container">
        <Row id="donarrow ">
          {/* Left column */}
          <p className="donarh6 mt-3">FOOD DONOR DETAILS</p>
          <Col lg={6} md={5} sm={12}>
            <div className="card-body ">
              <div className="form">
                <form className="form-class">
                  <input
                    type="text"
                    id="donerinp"
                    placeholder="Your Name"
                    value={userName}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <input
                    type="text"
                    id="donerinp"
                    placeholder="Live Location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                  <input
                    type="text"
                    id="donerinp"
                    placeholder="Mobile Number"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                  />

                { msg && <div className=" text-dark fw-bold mb-2">{msg}</div>}
                  <button onClick={sendOtp} className=" mx-auto btn btn-dark">
                    Send OTP
                  </button>
                  <div id="recaptcha"></div>
                  <input
                    type="text"
                    id="donerinp"
                    placeholder="Enter OTP"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                  />
                { msg1 && <div className=" text-success fw-bold mb-2">{msg1}</div>}
                 {errorOTp && <div className=" text-danger fw-bold mb-2">{errorOTp}</div>}
                  <button onClick={verifyOtp} className=" mx-auto btn btn-dark">
                    Verify OTP
                  </button>

                  <div>
                    {inputError && (
                      <p className=" text-danger"> * {inputError}</p>
                    )}
                  </div>

                  <Form.Group
                    className="mt-4 "
                    controlId="donarcheckbox"
                    id="donarcheckbox"
                  >
                    <Form.Check
                      inline
                      className="donarcheckinfo"
                      label="I assure that food quality and hygiene is maintained and Information that I provided is true."
                      value={isCheck}
                      onChange={() => setIsChecked(!isCheck)}
                    />
                  </Form.Group>

                  {/* Submit button */}
                  <Row className="justify-content-center justify-content-sm-start donarbtnrow">
                    <Col className="col-auto">
                      <div className="text-center mt-5 mb-4">
                        <Button
                          disabled={!isCheck ? true : false}
                          className="donarbtn-submit w-10 h-90"
                          id="donarbtn2"
                          onClick={fooddonarinfoClick}
                        >
                          Submit
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </form>
              </div>
            </div>
          </Col>

          {/* Spacing */}
          <Col lg={1} md={1} sm={12}></Col>
          <Col lg={5} md={6} sm={12} className="fooddonarcolright">
            <img className="Donorverifyimg" src={Donorverifyimg} width="100%" />
          </Col>
        </Row>
      </div>
      <div id="recaptcha"> </div>
    </div>
  );
};

export default Fooddonarpage;
