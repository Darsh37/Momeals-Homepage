// Importing necessary modules and components
import React, { useRef, useState } from "react";
import { Button, Row, Col, Form, Card, InputGroup } from "react-bootstrap";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import "./fooddonation.css";
import arrow4image from "../Images/Arrow 4.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const FoodDonation = () => {
  // State for slider and time input
  const [sliderValue, setSliderValue] = useState(5);
  // New state variable for the "Serving Size" input
  const [servingSizeValue, setServingSizeValue] = useState("");
  const [timeInputValue, setTimeInputValue] = useState("12:00");
  const [dateInputValue, setDateInputValue] = useState("");
  const [foodName, setFoodName] = useState("");
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedImage2, setSelectedImage2] = useState("");

  console.log(selectedImage, selectedImage2, "selectedImage");
  // Get current date for date input
  const now = new Date();
  const today = now.toISOString().split("T")[0];

  // Function to navigate back to foodtype page
  const navigated = useNavigate();
  const handleClickd = () => {
    navigated("/FoodtypePage");
  };

  // Function to navigate to fooddonarpage
  const navigate = useNavigate();
  const [inputError, setError] = useState("");
  console.log(inputError);

  // Function to handle changes in the slider
  const handleSliderChange = (event, newValue) => {
    setSliderValue(newValue);
    setServingSizeValue(newValue); // Set the same value to "Serving Size" input field
  };
  // Function to handle changes in the "Serving Size" input field
  const handleServingSizeInputChange = (event) => {
    setServingSizeValue(event.target.value);
  };

  // Handler for time input change
  const handleTimeInputChange = (event) => {
    setTimeInputValue(event.target.value);
  };

  // State and handler for selected city in the pickup location data
  const [selectedCity, setSelectedCity] = useState("Amritsar");
  const handleCityChange = (event) => {
    const selectedCity = event.target.value;
    if (selectedCity === "Amritsar") {
      setSelectedCity(selectedCity);
    } else {
      setSelectedCity("Amritsar"); // Reset to empty string if a different city is selected
    }
  };
  const [isCheck, setIsChecked] = useState(false);
  // Array of cities for the dropdown
  const cities = ["Hyderabad", "Agra", "Bengaluru", "Kolkata"];

  const handleFileChange = (index, event) => {
    const files = event.target.files; // Get the selected files from the input element
    console.log(files, "files");
    const allowedTypes = [
      "video/mp4",
      "image/jpeg",
      "image/jpg",
      "image/png",
      "application/pdf",
    ];

    // Process the selected files
    const updatedFiles = [];
    for (let i = 0; i < files.length; i++) {
      const file = files[i];

      // Check if the file type is allowed
      if (allowedTypes.includes(file.type)) {
        // Perform your desired operations with the file here
        console.log("Uploading file:", file.name);
        updatedFiles.push(file);
      } else {
        // Handle invalid file types
        console.log("Invalid file type:", file.name);
      }
    }
    if (index === 0) {
      setSelectedImage(event.target.files[0]);
    } else {
      setSelectedImage2(event.target.files[0]);
    }
  };
  const donarhandleClick = async () => {
   
    if (
      servingSizeValue === "" ||
      dateInputValue === "" ||
      foodName === "" ||
      selectedImage === ""
    ) {
      setError("Please enter all field and also upload atleast one image");
    } else {
      try {
        let fdata = new FormData();
        fdata.append("location", selectedCity);
        fdata.append("time", timeInputValue)
          fdata.append("date", dateInputValue)
          fdata.append("serving_size", servingSizeValue);
        fdata.append("food_item", "food");
        if (selectedImage2) {
         
          const temp=[]
          // temp.push(selectedImage)
          // temp.push(selectedImage2)
          fdata.append("images", selectedImage);
          fdata.append("images", selectedImage2);
          
        
        } else {
          fdata.append("images", selectedImage);
        }

        const res = await axios.post(
          "https://server-ulyp.onrender.com/api/donateItem",
          fdata
        );
      
        console.log(res.data.data,'res');
        if(res?.data?.statusCode==200){
          navigate('/fooddonarpage');
        }else{
          alert('something went wrong try again !')
        }
      } catch (error) {
        console.log(error);
      }
    }

    
  };

  // JSX content of the component
  return (
    <div className="formpage1">
      <img
        className="formpage1arrowimage"
        src={arrow4image}
        onClick={handleClickd}
      />
      <div className="container">
        <Row id="formpage1row">
          {/* Left column */}
          <Col lg={6} md={6} sm={12}>
            <div className="card-body mt-4">
              <div className="formpage1form">
                <p className="formpage1h6">DONATE FOOD DETAILS</p>
                <div>
                  {inputError && (
                    <p className=" text-danger"> * {inputError}</p>
                  )}
                </div>
                <form className="formpage1form-class">
                  {/* Input fields */}
                  <div className="input-with-dropdown">
                    <InputGroup style={{ width: "100%" }}>
                      <select
                        id="formpage1inp"
                        className="dropdown-select"
                        value={selectedCity}
                        onChange={handleCityChange}
                      >
                        <option disabled value="">
                          Select a city
                        </option>
                        <option value="Amritsar">Amritsar</option>
                        {cities.map((city) => (
                          <option
                            key={city}
                            value={city}
                            disabled={city !== "Amritsar"}
                            style={{
                              // Apply gray color to disabled options
                              color:
                                city !== "Amritsar" ? "lightgray" : "inherit",
                            }}
                          >
                            {city}
                          </option>
                        ))}
                      </select>
                    </InputGroup>
                  </div>

                  <input
                    type="text"
                    id="formpage1inp"
                    placeholder="Food Items (s)"
                    value={foodName}
                    onChange={(e) => setFoodName(e.target.value)}
                  />
                  {/* Input fields */}

                  <input
                    type="time"
                    id="formpage1inp"
                    className="timeinput"
                    value={timeInputValue}
                    onChange={handleTimeInputChange}
                    placeholder="Preferred Time"
                  />
                  <input
                    type="date"
                    id="formpage1inp"
                    className="date-input"
                    min={today}
                    value={dateInputValue}
                    onChange={(e) => setDateInputValue(e.target.value)}
                  />
                  <input
                    type="text"
                    id="formpage1inp"
                    className="imp"
                    onChange={handleServingSizeInputChange}
                    placeholder="Serving Size"
                    value={servingSizeValue}
                  />

                  {/* Slider */}
                  <div className="range-slider d-flex flex-column align-items-center">
                    {/* Value display */}
                    <div className="text-center ">{sliderValue}</div>
                    {/* Slider input */}
                    <div className="d-flex justify-content-center w-100">
                      <Box width="100%">
                        <Slider
                          aria-label="Default"
                          valueLabelDisplay="off" // Set valueLabelDisplay to "off"
                          min={5}
                          max={600}
                          value={sliderValue}
                          onChange={handleSliderChange}
                          className="slider-rail"
                          ThumbComponent="span"
                          classes={{
                            thumb: "slider-thumb",
                          }}
                        />
                      </Box>
                    </div>
                    {/* Labels */}
                    <div
                      className="d-flex justify-content-between w-100 "
                      style={{ fontSize: "18px" }}
                    >
                      <label htmlFor="points" className="formpage1min">
                        Min: 5
                      </label>
                      <label htmlFor="points" className="formpage1max">
                        Max: 600
                      </label>
                    </div>
                  </div>

                  {/* Checkbox */}
                  <Form.Group
                    className="mt-4 "
                    controlId="formpage1checkbox1"
                    id="formpage1checkbox1"
                  >
                    <Form.Check
                      inline
                      className="formpage1checkinfo"
                      label="By checking the box, you assure that food quality and hygiene are maintained, and you agree to abide by the terms and conditions given."
                      value={isCheck}
                      onChange={() => setIsChecked(!isCheck)}
                   />
                  </Form.Group>

                  {/* Submit button */}
                  <div>
                    <Button
                     disabled={!isCheck ? true : false}
                      className="btn-submit mt-5"
                      id="formpage1btn1"
                      onClick={donarhandleClick}
                    >
                      Submit
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </Col>

          {/* Spacing */}
          <Col lg={2} md={1} sm={12}></Col>

          {/* Right column */}
          <Col lg={4} md={5} sm={12}>
            <Row
              className="d-flex justify-content-center align-items-center"
              id="row2"
            >
              <h4 id="formpage1heading3" className="mt-5 mb-5">
                Add Image Of Food
              </h4>
              <div className="formpage1flex-container m-lg-5 m-md-5">
                {/* First Card */}
                <Col sm={6} className="mb-lg-5 mb-md-5 mb-4 ">
                  <Card className="formpage1card overflow-hidden">
                    {selectedImage ? (
                      <img
                        src={URL.createObjectURL(selectedImage)}
                        alt="dummy"
                        width="100%"
                      />
                    ) : (
                      <Card.Body className="d-flex justify-content-center align-items-center">
                        <label
                          htmlFor="upload-button"
                          className="rounded-circle formpage1dashed-circle"
                        >
                          <div className="rounded-circle formpage1plus-btn">
                            +
                          </div>
                        </label>
                        <input
                          id="upload-button"
                          type="file"
                          accept=".jpeg,.jpg,.png"
                          style={{ display: "none" }}
                          value={selectedImage}
                          onChange={(e) => handleFileChange(0, e)}
                        />
                      </Card.Body>
                    )}
                  </Card>
                </Col>
                {/* Second Card */}
                <Col sm={6} className="mb-lg-5 mb-md-5 mb-4 ">
                  <Card className="formpage1card overflow-hidden">
                    {selectedImage2 ? (
                      <img
                        src={URL.createObjectURL(selectedImage2)}
                        alt="dummy"
                        width="100%"
                      />
                    ) : (
                      <Card.Body className="d-flex justify-content-center align-items-center">
                        <label
                          htmlFor="upload-button2"
                          className="rounded-circle formpage1dashed-circle"
                        >
                          <div className="rounded-circle formpage1plus-btn">
                            +
                          </div>
                        </label>
                        <input
                          id="upload-button2"
                          type="file"
                          accept=".jpeg,.jpg,.png"
                          value={selectedImage2}
                          style={{ display: "none" }}
                          onChange={(e) => handleFileChange(1, e)}
                        />
                      </Card.Body>
                    )}
                  </Card>
                </Col>
              </div>
              <h4 className="formpage1heading4">
                Add the photo of the food
                <br /> item you want to give.
              </h4>
            </Row>
          </Col>

          {/* Checkbox and Submit button at the bottom */}
          <Form.Group
            className="mt-4"
            controlId="formpage1checkbox2"
            id="formpage1checkbox2"
          >
            <Form.Check
              inline
              className="formpage1checkinfo"
              label="By checking the box, you assure that food quality and hygiene are maintained, and you agree to abide by the terms and conditions given."
              value={isCheck}
              onChange={() => setIsChecked(!isCheck)}
            />
          </Form.Group>

          <div className="text-center mt-5 mb-4">
            <Button
             disabled={!isCheck ? true : false}
              className="btn-submit w-10 h-90"
              id="formpage1btn2"
              onClick={donarhandleClick}
            >
              Submit2
            </Button>
          </div>
        </Row>
      </div>
    </div>
  );
};

export default FoodDonation;
