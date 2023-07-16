import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import '../Homepage/ImgMediaCard.css';

import cardImg from "../Images/card-img.png";

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

function ImgMediaCard() {
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobileView, setIsMobileView] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const getVisibleCards = () => {
    if (isMobileView) {
      const startIndex = (currentPage - 1) * 1;
      const endIndex = startIndex + 1;
      return cardItems.slice(startIndex, endIndex);
    } else {
      const startIndex = (currentPage - 1) * 3;
      const endIndex = startIndex + 3;
      return cardItems.slice(startIndex, endIndex);
    }
  };

  const visibleCards = getVisibleCards();
  const totalCards = isMobileView ? 1 : 3;
  const totalPages = Math.ceil(cardItems.length / totalCards);

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => (prevPage === 1 ? totalPages : prevPage - 1));
  };

  const goToNextPage = () => {
    setCurrentPage((prevPage) => (prevPage === totalPages ? 1 : prevPage + 1));
  };

  return (
    <div>
    <div className='Img-card'>
     
      {visibleCards.map((card) => (
        <Card
          className='img-cards'
          id="img-cards"
          key={card.id}
          sx={{ width: isMobileView ? '100%' : 'calc(100% / 3)', margin: '0 30px', background: "#CFE1FF", position: "relative" }}
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
              <Button
                size="small"
                sx={{
                  fontWeight: 400, fontSize: 15,
                  '@media (max-width: 600px)': {
                    fontSize: '15px', textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', fontWeight: '400', fontFamily: 'Arvo'
                  }
                }}
              >
                {card.name}
              </Button>
            </CardActions>
          </div>
        </Card>
      ))}
      </div>
       <div className='imggridslide d-flex mt-3 mx-4'>
       <div >
       <button className="pre-btn p-3"> <ArrowBackIosNewIcon onClick={goToPreviousPage} /></button>
      </div>
      <div >
      <button className="nxt-btn p-3"> <ArrowForwardIosIcon onClick={goToNextPage} disabled={currentPage === totalPages} /></button>
      </div>
       </div>
    </div>
  );
}

export default ImgMediaCard;
