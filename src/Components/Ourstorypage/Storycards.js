// Import required modules and components
import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import Slider from "react-slick";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Storycards.css';

const Storycards = () => {
  // Data for the testimonials
  const data=[
    {
        testminals:"Testimonials",
        dta:"Momeals has been a great help to me and my family. I was able to get the food we needed that I would have otherwise struggled to obtain. Thank you for all your hard work!",
        name:"Jack B."
    },
    {
        testminals:"Testimonials",
        dta:"I volunteered with Momeals recently and it was an incredible experience. The team is passionate about their mission and really want to make a difference in the world.",
        name:"Sarah S."
    },
    {
        testminals:"Testimonials",
        dta:"I'm so grateful for Momeals' commitment to helping those in need while also reducing food waste. They are making a positive impact in our community.",
        name:"Chris P."
    },
    {
        testminals:"Testimonials",
        dta:"My family and I have utilized Momeals' services multiple times over the past year, and they have never failed to provide us with quality resources in an efficient manner.",
        name:"Lisa W."
    },
    {
        testminals:"Testimonials",
        dta:"The team at Momeals always follows ethical practices and cares deeply about their environmental impact which makes me proud to support them!",
        name:"Kyle H.",
    },
    {
        testminals:"Testimonials",
        dta:"As someone who regularly donates food, I value having an organization like Momeals that takes extra care when collecting donations.",
        name:"Nick B."
    }
]
 
  // Reference to the slider
  const sliderRef = React.useRef(null);

  // Settings for the slider
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      // Breakpoint settings for different screen sizes
      // Other breakpoints can be added as needed
      {
        breakpoint: 1200, // Extra-large screens
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 992, // Large screens
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 576, // iPad mini and similar small screens
        settings: {
          slidesToShow: 1,
          arrows: false, // Hide arrows for small screens
        },
      },
    ],
  };

  // Function to slide to the next testimonial
  const slideNext = () => {
    sliderRef.current.slickNext();
  };

  // Function to slide to the previous testimonial
  const slidePrev = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div className="storycardsslider-container pt-md-5 pt-lg-5 p-3 px-lg-5">
      {/* Slider component */}
      <Slider {...settings} ref={sliderRef}>
        {/* Map through data and create individual testimonial cards */}
        {data.map((obj, index) => (
          <div key={index} className="storycards-row p-md-5">
            <Card className="storycards-3rd" id="storycards-3rd">
              {/* Testimonials heading */}
              <div>
                <p className='storycards-3rdcardpara1' id="storycards-3rdcardpara1">{obj.testminals}</p><br />
              </div>
              {/* Testimonials content */}
              <div className="storycards-3rdmiddle-text-container px-lg-3">
                <p className="storycards-3rdcardpara2 px-lg-5" id="storycards-3rdcardpara2">"{obj.dta}'</p>
              </div>
              {/* Testimonials name */}
              <div className='mt-5 px-lg-5'>
                <p className='storycards-3rdcardpara3 mt-5 px-lg-5 ' id="storycards-3rdcardpara3" style={{ position: "absolute", bottom: 0, right: 0, marginTop: "5px" }}>{obj.name}</p>
              </div>
            </Card>
          </div>
        ))}
      </Slider>
      {/* Buttons to navigate through testimonials */}
      <div className="storycards-buttons mb-3 mx-lg-5 px-lg-5 px-md-5">
        <Button className="storycards-button" id="storycards-btn" onClick={slidePrev}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </Button>
        <Button className="storycards-button" id="storycards-btn" onClick={slideNext}>
          <FontAwesomeIcon icon={faArrowRight} />
        </Button>
      </div>
    </div>
  );
};

export default Storycards;
