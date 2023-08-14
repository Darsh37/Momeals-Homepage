// Ourstory.js
import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import './Ourstory.css'; // Import the CSS file for styling
import { Tabs, Tab, Col, Row } from 'react-bootstrap';
import Storycards from './Storycards';

const Ourstory = () => {
  const [data] = useState([
    {
      head: "Hunger Awareness Promotion",
      para: "Momeals provides education and campaigns to spread awareness about hunger around the globe. We create campaigns that focus on informing people about the issues of food insecurity, poverty, and waste reduction. Through our efforts, we have been able to reach a wide range of audiences in an effort to educate them on the importance of ending hunger. Additionally, we provide resources and materials for anyone interested in helping us make a difference by joining our cause.",
      background: "#44543C"
    },
    {
      head: "Donation Collection",
      para: "Our donation collection services provide those who wish to give away leftover food or other eatables a platform where they can submit pickup requests with details of the food and their personal information for verification. We also visit restaurants, hotels and occasions where food is frequently produced in excess and urge them to donate it rather than discarding it. All donations are verified before being sent out for distribution among those in need.",
      background: " #2D3F24"
    },
    {
      head: "Waste Reduction Strategies",
      para: "At Momeals we strive to reduce food waste by using innovative strategies such as promoting awareness about the issue of hunger, providing resources and information for those experiencing hunger or poverty, collecting donations from individuals willing to give away leftovers or other eatables, visiting restaurants, hotels or occasions with potential surplus food items, urging them to donate instead of throwing away unused items, etc. We believe that together we can make a positive impact on reducing global hunger while taking care of our environment at the same time!",
      background: " #44543C"
    }
  ]);

  const [isOpen, setIsOpen] = useState(false);

  const leftSideAnimation = useSpring({
    transform: isOpen ? 'translateX(-100%)' : 'translateX(0%)',
    config: { tension: 0, friction: 0 },
  });

  const rightSideAnimation = useSpring({
    transform: isOpen ? 'translateX(100%)' : 'translateX(0%)',
    config: { tension: 0, friction: 0 },
  });

  const handleScroll = () => {
    setIsOpen(true);
  };

  const handleScrollUp = () => {
    if (window.scrollY === 0) {
      setIsOpen(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  React.useEffect(() => {
    window.addEventListener('scroll', handleScrollUp);
    return () => {
      window.removeEventListener('scroll', handleScrollUp);
    };
  }, []);

  return (
    <div className='storypage'>
      <div className="storyanimation-container">
        <animated.div className="storyleft-side" style={leftSideAnimation}>
          <div className="storyleft-content px-4 ">
            <h2>BE DIFFERENT MAKE A DIFFERENCE</h2>
          </div>
        </animated.div>

        <animated.div className="storyright-side" style={rightSideAnimation}>
          <div className="storyright-content  px-4">
            <h2 className="storyintro ">
              At Momeals, our mission is to combat hunger and reduce food waste.
            </h2>
          </div>
        </animated.div>

        {isOpen && (
          <div className="storycontent-wrapper d-flex justify-content-center text-center ">
            <section className="storyparent_container ">
              <div className="storymain_container">
                <h2 className="storyheading mb-3">M.O.M</h2>
                <div className="storyfull">
                  <h2> <span>M</span>AN <span>O</span>N <span>M</span>ISSION</h2>
                </div>
                <div className="storypara px-md-5 px-lg-5 px-3">
                  <p className="storyparagraph mt-3 mx-lg-5">
                    Welcome to our community of like-minded human beings, united by a
                    common goal of benefiting humanity. We are dedicated to raising
                    awareness about the harmful effects of food waste and food
                    insecurity nationwide. Our mission involves rescuing surplus food
                    and distributing it to those in need, while also utilizing
                    bio-waste to protect our environment from contamination.
                  </p>
                </div>
                <div className="storyend_line"><b>Together We Can Bring Difference</b></div>
              </div>
            </section>
          </div>
        )}
      </div>

      <div className='tabs-section mt-lg-5'>
        <Tabs defaultActiveKey="MISSION" className='gap-0 d-flex justify-content-between  px-5 tabs' id="tabs-example">
          <Tab eventKey="MISSION" title="MISSION">
            <div className="green-tab-content p-4 px-5">
              <p>Our mission at Momeals is to reduce hunger by spreading awareness about its global impacts while providing essential resources for those experiencing poverty or suffering from malnutrition.</p>
            </div>
          </Tab>
          <Tab eventKey="STORY" title="STORY">
            <div className="green-tab-content  p-4 px-5">
              <p>At Momeals, we believe in making an impactful difference in people's lives. We provide innovative services that focus on hunger awareness, food bank management, donation collection, waste reduction measures, and volunteer recruitment. Our goal is to spread awareness about the global problem of hunger and help those in need by providing resources and support. We have created a platform where those who wish to give away leftover food or other eatable stuff can submit a pickup request with the details of the food and their personal information for verification. We also take a field strategy visiting restaurants, hotels and occasions where food is frequently produced in excess and making an effort to convince them to donate it rather than throw it away.</p>
            </div>
          </Tab>
          <Tab eventKey="WHY US" title="WHY US">
            <div className="green-tab-content  p-4 px-5">
              <p>We recognize that there are many causes vying for attention but at Momeals we are passionate about making sure that no one goes hungry or wastes food unnecessarily. Join us as we work towards creating lasting change for individuals across the globe as well as communities within Amritsar!</p>
            </div>
          </Tab>
          <Tab eventKey="GOAL" title="GOAL">
            <div className="green-tab-content  p-4 px-5">
              <p>At Momeals we value integrity which drives us to follow ethical practices throughout all of our operations. We strive for excellence when it comes to providing quality service for all customers while remaining conscious of our environmental impact. Together we can make a difference!</p>
            </div>
          </Tab>
        </Tabs>
      </div>

      <div className='sm-tabs-section px-lg-5 px-md-5 px-4  pt-4 pb-3'>
        <h2>MISSION</h2>
        <p>Our mission at Momeals is to reduce hunger by spreading awareness about its global impacts while providing essential resources for those experiencing poverty or suffering from malnutrition.</p>
        <h2>STORY</h2>
        <p>At Momeals, we believe in making an impactful difference in people's lives. We provide innovative services that focus on hunger awareness, food bank management, donation collection, waste reduction measures, and volunteer recruitment. Our goal is to spread awareness about the global problem of hunger and help those in need by providing resources and support. We have created a platform where those who wish to give away leftover food or other eatable stuff can submit a pickup request with the details of the food and their personal information for verification. We also take a field strategy visiting restaurants, hotels and occasions where food is frequently produced in excess and making an effort to convince them to donate it rather than throw it away.</p>
        <h2>WHY US</h2>
        <p>We recognize that there are many causes vying for attention but at Momeals we are passionate about making sure that no one goes hungry or wastes food unnecessarily. Join us as we work towards creating lasting change for individuals across the globe as well as communities within Amritsar!</p>
        <h2>GOAL</h2>
        <p>At Momeals we value integrity which drives us to follow ethical practices throughout all of our operations. We strive for excellence when it comes to providing quality service for all customers while remaining conscious of our environmental impact. Together we can make a difference!</p>
      </div>

      <div className='storypara-2 px-lg-5 px-md-5 px-4 pt-5 pb-5 text-center'>
        <p className='px-lg-5'>When you choose Momeals, you can be sure that your donations are being used ethically and efficiently. We value integrity which drives us to follow ethical practices throughout all of our operations while striving for excellence when it comes to providing quality service for all customers. Together we can make an impactful difference!</p>
      </div>

      <div className='storysection-cards '>
        <Row xs={1} md={1} lg={1} xl={3} className="g-0 ">
          {data.map((dta, id) => {
            return (
              <Col key={id}>
                <div className='storysection-cards-class  px-xl-4 px-lg-5 p-lg-4 p-md-5 p-4 ' style={{ background: dta.background, color: "white", borderRadius: "0%" }}>
                  <h5 className='storycard-title'>
                    {dta.head}
                  </h5>
                  <p className='storycard-text mt-3'>
                    {dta.para}
                  </p>
                </div>
              </Col>
            )
          })}
        </Row>
      </div>

      <div>
        <Storycards />
      </div>
    </div>
  );
};

export default Ourstory;
