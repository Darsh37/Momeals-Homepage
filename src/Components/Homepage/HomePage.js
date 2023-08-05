// Importing necessary dependencies and components
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Animationtext from "./Animationtext";
import SloganCard3 from "./SloganCard3";
import SloganCard4 from "./SloganCard4";
import { SloganCard, SloganCard2, SloganCard2Carousel } from "./SloganCard";
import { Accordian } from "./Accordian";
import ImgMediaCard from "./ImgMediaCard";

// Importing images and styles
import "../Homepage/homeStyle.css";
import box from "../Images/Donate.png";
import m1 from "../Images/foodwastage1.png";
import m2 from "../Images/foodhungerrr2.png";
import m3 from "../Images/Women.png";
import heart from "../Images/heart.png";
import be from "../Images/Be.png";
import MOMEALS from "../Images/MOMEALS Hero Image 1.png";
import faq from "../Images/faq.png";
import factory from "../Images/Final_illustration_transparent.png";
import img1 from "../Images/img1.png";
import img2 from "../Images/img2.png";
import img3 from "../Images/img3.png";
import img4 from "../Images/img4.png";
import arrow2 from "../Images/arrow-2.png";

// Define the HomePage component
export const HomePage = () => {
  // Data for the counters
  const data = [
    { img: img1, count: "245+", description: "KG Of Food We Saved" },
    { img: img2, count: "150+", description: "Children We Fed" },
    { img: img3, count: "120+", description: "Families We Served" },
    { img: img4, count: "50+", description: "Women We Empowered" },
  ];

  // State to manage the input value for donation amount
  const [inputValue, setInputValue] = useState("");
  const [inputName, setInputName] = useState("");

  // Using React Router's `useNavigate` hook to handle navigation
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/DonationPage");
  };

  // State to determine if the current view is mobile or not
  const [isMobileView, setIsMobileView] = useState(true);

  // useEffect hook to check the window size and determine mobile view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        // Mobile view, show only one card
        setIsMobileView(false);
      }
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Call handleResize initially to set the correct initial state
    handleResize();

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle the donation amount button click
  const handleButtonClick = (amount) => {
    setInputValue(amount);
  };

  const [inputError,setError]=useState("")

  const submitDonationHandler=()=>{
    if(!inputName || inputValue=="")
    {
      setError("Please enter both field")
    }else{
      setError("")
      console.log(inputName,inputValue)
    }
  }

  return (
    <div>
      {/* Section with animation text */}
      <section className=" mb-md-5 pb-md-5 ">
          {/* headerh6 */}
        <h6 className="header-title text-center  mt-5 mb-3 px-lg-2 px-md-2 px-3">
          Powered By Human To Empower Humans
        </h6>
        <Animationtext />
      </section>

      {/* Counter section */}
      <div className="home-counter pt-lg-4 pt-md-3 ">
        <div className="d-flex justify-content-around  counter" id="counter-home">
          {data.map((item, index) => (
            <div className="capsule" key={index}>
              <img
                className="m-3  mb-3 capsule-imgs"
                src={item.img}
                width="50px"
                height="50px"
                alt=""
              />
              <div className="count-details pt-2 pb-2">
                <div className="count">{item.count}</div>
                <div className="descript"> {item.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section with three cards */}
      <div style={{ background: "black", color: "white" }}>
        <div className="head-section d-flex justify-content-center ">
          <div className="title text-center">
            <p className="text1  px-md-5 ">
              {" "}
              <img className="section-img" src={heart} alt="" /> Building a
              Better World: <br />
              <span className="text2 mt-3">
                {" "}
                Uniting Efforts, Inspiring Change, Creating Lasting Impact.
              </span>
            </p>
          </div>
        </div>

        <div className="mand-v pb-5">
          <div className="section-cards ">
            {/* SloganCard component with different data */}
            <SloganCard
              destination="/FoodWastage"
              para={<div style={{ maxWidth: '200px' }} className="homesloaganpara">Collect Eatable Leftover Foods from Eateries.</div>}
              card="card1"
              slogan={<div style={{ color: '#4ECD99' }}>ZERO FOOD WASTAGE</div>}
              src={m1}
            />
            {/* SloganCard component with different data */}
            <SloganCard
              destination="/FoodHunger"
              para={<div style={{ maxWidth: '200px' }} className="homesloaganpara">Feed Homeless and Malnutrition Childrens For Free.</div>}
              card="card2"
              slogan={<div style={{ color: '#FCAD30' }}>ZERO FOOD HUNGER</div>}
              src={m2}
            />
            {/* SloganCard component with different data */}
            <SloganCard
              para={<div style={{ maxWidth: '200px' }} className="homesloaganpara">Empowering Homeless and Unemployed women's.</div>}
              card="card3"
              slogan={<div style={{ color: '#FCC0C5' }}>EMPOWERMENT</div>}
              src={m3}
            />
          </div>
        </div>
      </div>

      {/* Ethical practices section */}
      <div className="pb-5 p-3 px-md-5 px-lg-3" style={{ background: "#c7f2ab" }}>
        <p className="m-lg-5 para2 text-left px-lg-4 px-md-2 px-2">
          MAKE A LASTING IMPRESSION ON INDIVIDUALS AND COMMUNITIES WITH MOMEALS'
          ETHICAL PRACTICES.
        </p>
        {/* SloganCard3 component */}
        <SloganCard3 />
      </div>

      {/* Be different, make a difference section */}
      <div className="be-diff p-lg-5 pb-lg-0 p-4 p-md-5 px-md-5 ">
        <div className="para-side m-lg-5  mt-1 m-xs-2">
          <h3 className="para-sideh3">Be Different, Make <span style={{color:"#067749"}}>Difference.</span></h3>
          <p className="para-sidep mt-3">
            At Momeals, we strive to make a meaningful impact by combating hunger and reducing food waste simultaneously. Our dedicated team delivers top-notch service while staying environmentally conscious at every step. Together, let's ensure no one goes hungry and minimize wastage of precious food resources.
          </p>
          <img className="img-arrow mt-3" src={arrow2} />
          <div className="d-flex justify-content-center">
            <button className="btn-diff ">READ MORE</button>
          </div>
        </div>
      </div>
      {/* main-worrior section */}
      <div className="main-worrior">
        <div className="worrior p-5">
          <h6>BE A FOOD WORRIOR AND SAVE LIVES</h6>

          <button className="btn-join">JOIN</button>
        </div>
      </div>
      {/* Section for donation form */}
      <Row className="DonateNow d-flex justify-content-evenly px-4 pb-3 pb-lg-2 pb-md-2  p-md-5 p-lg-5 pt-lg-5 pt-md-5 align-items-center">
        <Col md={5} lg={4} className="left-intro mt-4 mt-lg-5  pt-md-5">
          <h6>
            {" "}
            <img src={heart} alt="" width={40} /> DONATE NOW
          </h6>
          <h1 className="mt-3">
            Be A Happy Helping Hand For Homeless and Hopeless.
          </h1>
          <h4 className="mt-4 mb-5" style={{ color: "#C7F2AB" }}>
            Two million children die every year due to malnutrition.
            <span style={{ color: "white" }}>
              Help us save lives and create a world free from hunger
            </span>
          </h4>
        </Col>
        <Col lg={2}  md={1}></Col>
        <Col md={6}  lg={4} className="donateclassright-form  mt-lg-5 pt-lg-5 pt-md-5 px-lg-5">
          <div className="donate">
            <h4 className="donatenow">DONATE NOW </h4>
          </div>
          <div className="inputfield ">
            <h6
              className="mb-3 inputfieldh6"
              style={{ textAlign: "center", color: "white" }}
            >
              Every Bite Counts and every contribution can make an Impact
            </h6>
            <input
              type="text"
              name=""
              placeholder="Your Name"
              className="rounded-pill my-2"
              value={inputName}
              onChange={(e) => setInputName(e.target.value)}
            />
            <input
              type="text"
              name=""
              placeholder="Amount Value"
              className="rounded-pill my-2"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <div className="button">
              <button className="rounded-pill money"  onClick={() => handleButtonClick("50 Rs")}>50 Rs</button>
              <button className="rounded-pill money"  onClick={() => handleButtonClick("100 Rs")}>100 Rs</button>
              <button className="rounded-pill money"  onClick={() => handleButtonClick("500 Rs")}>500 Rs</button>
            </div>
            {
              inputError && (
                <p className=" text-center"> * {inputError}</p>
              )
            }
            <div className="button-sec mb-5">
              <button className=" button-donate rounded-pill p-3" type="submit" onClick={submitDonationHandler}>
               
                DONATE NOW
              </button>
            </div>
          </div>
        </Col>
      </Row>

      {/* Good change section */}
      <div>
        <SloganCard4 />
        <div className="Good-change pt-5 pb-4 p-3">
          <div className="para-text">
            <Container>
              <Row className="justify-content-center">
                <h1 className="h1-GC">
                  Be A Part of Good Change ,{" "}
                  <span style={{ color: "rgb(46, 177, 103)" }}>Save Lives</span>
                </h1>
                <Col xs={12} md={8} xl={6}>
                  <p className="p-GC pt-3">
                    "We are a community of like-minded individuals united by the sole purpose of providing three meals a day to every person. Our mission is to combat food wastage, and by doing so, we can achieve this goal. Let's join forces and work together to feed the world."
                  </p>
                </Col>
              </Row>
            </Container>
          </div>
          <div className="btn-GC pt-3 pb-3">
            <button className="b-GC rounded-pill homejoin-btn">JOIN US</button>
          </div>
        </div>

        {/* Blogs section */}
        <div className="blogs pt-5 pb-5">
          <div className="intro mt-2">
            <h4
              className="blog"
              style={{ color: "rgb(237, 75, 75)", textAlign: "center" }}
            >
              Blog Posts
            </h4>
            <h2 className="text-center update mt-3">
              Our Latest Blogs and Updates
            </h2>
            {/* ImgMediaCard component */}
            <div className="mx-lg-5 mx-md-5 mt-5 px-lg-5">
              <ImgMediaCard />
            </div>
          </div>
        </div>

        {/* Button to view more */}
        <div className="but  mb-4">
          <button className="btn-update rounded-pill" style={{ color: "white" }}>
            VIEW MORE
          </button>
        </div>
      </div>

      {/* FAQ section */}
      <div className="wrapper px-lg-3 px-xl-3 pt-2 pb-2 px-md-5 px-3">
        <div className="accordian">
          <h5 className="mt-5">
            FREQUENTLY ASKED <span style={{ color: "blue" }}>QUESTIONS</span>
          </h5>
          <br />
          {/* Accordian component with different data */}
          <Accordian
            head="What services does Momeals provide?"
            para="We provide innovative services that focus on hunger awareness, food bank management, donation collection, waste reduction measures, and volunteer recruitment."
          />
          <Accordian
            head="How do you reduce food waste?"
            para="We have created a platform where those who wish to give away leftover food or other eatable stuff can submit a pickup request with the details of the food and their personal information for verification. We also take a field strategy, visiting restaurants, hotels and occasions where food is frequently produced in excess and making an effort to convince them to donate it rather than throw it away."
          />
          <Accordian
            head="What is your mission?"
            para="Our goal is to spread awareness about the global problem of hunger and help those in need by providing resources and support. At Momeals we believe in making an impactful difference in people’s lives. We are committed to finding solutions that will reduce food waste while also providing essential resources for those experiencing hunger or poverty."
          />
          <Accordian
            head="How do you ensure ethical practices?"
            para="We value integrity at Momeals which drives us to follow ethical practices throughout all of our operations. We strive for excellence when it comes to providing quality service for all customers while remaining conscious of our environmental impact."
          />
          <Accordian
            head="What can I do to help make a difference?"
            para="Together we can make a difference! You can join us as a volunteer or donate funds towards our cause so that we can continue working towards reducing hunger and eliminating food waste around the world."
          />
        </div>
        <div className="faqImg">
          <img src={faq} alt="" width="100%" />
        </div>
      </div>
    </div>
  );
};
