import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import {Button} from 'react-bootstrap';
import Typography from '@mui/material/Typography';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../Homepage/ImgMediaCard.css';

import cardImg from "../Images/card-img.png";

function ImgMediaCard() {
  const cardItems = [
    {
      id: 1,
      image: cardImg,
      copy: "5 ways to use your leftover food?",
      name: "Byname"
    },
    {
      id: 2,
      image: cardImg,
      copy: "How to store cooked food?",
      name: "Byname"
    },
    {
      id: 3,
      image: cardImg,
      copy: "How serious is the hunger problem in India?",
      name: "Byname"
    },
    {
      id: 4,
      image: cardImg,
      copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      name: "Byname"
    },
    {
      id: 5,
      image: cardImg,
      copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      name: "Byname"
    },
    {
      id: 6,
      image: cardImg,
      copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      name: "Byname"
    },
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
    <div className='img-grid'>
      <Slider {...settings} ref={sliderRef}>
        {cardItems.map((card) => (
          <div key={card.id} className='Img-card'>
            <Card
              className='img-card'
              id="img-cards"
              sx={{ margin: '0 30px', background: "#CFE1FF", position: "relative" }}
            >
              <CardMedia component="img" alt="green iguana" height="140" image={card.image} />
              <CardContent className="mb-3 " sx={{ fontFamily: 'Poppins', fontWeight: 400 }}>
                <Typography
                  sx={{
                    fontWeight: 400, fontSize: 24,
                    '@media (max-width: 600px)': {
                      fontSize: '15px', textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', fontWeight: '400', fontFamily: 'Arvo'
                    }
                  }}>{card.copy}</Typography>
              </CardContent>
              <div className='mt-5' >
                <CardActions style={{ position: "absolute", bottom: "0px", right: "10px" }}>
                  <Typography
                    size="small"
                    sx={{
                      fontWeight: 400, fontSize: 15,
                      '@media (max-width: 600px)': {
                        fontSize: '15px', textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', fontWeight: '400', fontFamily: 'Arvo'
                      }
                    }}
                  >
                    {card.name}
                  </Typography>
                </CardActions>
              </div>
            </Card>
          </div>
        ))}
      </Slider>
      <div className="img-grid-buttons mb-3 mt-3 p-2 px-lg-5 px-md-5">
        <Button className="img-grid-button " id="img-grid-btn" onClick={slidePrev}>
          <FaAngleLeft />
        </Button>
        <Button className="img-grid-button"  id="img-grid-btn" onClick={slideNext}>
          <FaAngleRight />
        </Button>
      </div>
    </div>
  );
}

export default ImgMediaCard;
