import React,{useState} from 'react'
import {Row,Col,Card,Button} from 'react-bootstrap'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import arrow from '../Images/arrow-icon.png';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import '../Homepage/SloganCard3.css'
const SloganCard3 = () => {
  const data = [
    { dta: "Donate and Save Lives",txt:"We ensure that donations made by you utilize in betterment of lives.", background: "#172B0D" },
    { dta: "Become Food Warrior", txt:"You can take a charge to save food from getting thrown away in trash.",background: "#2D3F24" },
    { dta: "Eat Together, Share Together",txt:"Don’t just taste food alone, share it with others too.", background: "#44543C" }
  ];
    const sliderRef = React.useRef(null);
    const settings = {
      // dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1200, // Extra-large screens
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 992, // Large screens
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 576, // iPad mini and similar small screens
          settings: {
            slidesToShow: 1,
            arrows: false,
          },
        },
      ],
    };
     const slideNext = () => {
    sliderRef.current.slickNext();
  };

  const slidePrev = () => {
    sliderRef.current.slickPrev();
  };
  
  return (
    <div className="slide-contain px-lg-5">
          <Slider {...settings} ref={sliderRef}>
        {data.map((obj, index) => (
          <div key={index} className="slogan3card-row  px-lg-4">
            <Card
              className="slogan3card-text2nd m-md-1 m-lg-2 px-5 pt-4"
              id="slogan3card-text2nd"
              style={{background: obj.background, position: "relative"}}
            >
              
             <Card.Title className='mb-0'>
             <div>
             <p className="slogan3card-text2ndp " style={{ color: "white" }}>{obj.dta}</p>
             </div>
             </Card.Title>
            <Card.Text>
          <div>
          <p className="slogan3card-textpara" style={{ color: "white" }}>{obj.txt}</p>
          </div>
            </Card.Text>
              <div style={{ position: "absolute", bottom: "0px", right: "10px" }}>
                <img src={arrow} alt="Arrow Icon" />
              </div>
             
            </Card>
          </div>
          
        ))}
       </Slider>
       <div className="slide-buts p-2 mt-2 ">
            <Button className="slider-butn"  id="slid-btns" onClick={slidePrev}>
              <FaAngleLeft />
            </Button>
            <Button className="slider-butn"  id="slid-btns" onClick={slideNext}>
              <FaAngleRight />
            </Button>
          </div>
          </div>
          
  )
}

export default SloganCard3