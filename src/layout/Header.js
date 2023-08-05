import React from "react";
import CallIcon from '@mui/icons-material/Call';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import heartimg from '../Components/Images/heart.png'
import '../layout/header.css'

export const Header = () => {
  return (
    <>
       
        <div className="subHeader d-flex justify-content-between align-items-center px-lg-4 px-md-3 px-3 pt-2" style={{height:57,backgroundColor:'#010101', color:'white'}}>
          <h6 className="momeal mx-lg-2">help@momeals.in</h6>
          <div>
          <h6 className="one">
            <img
            
              src={heartimg} width="35px" height="35px"
              alt=""
            />
            One Hand For Others
          </h6>
          </div>
          <ul className="icons-list d-flex gap-3 mx-lg-4 align-items-center">
           
            <CallIcon className="fs-5"/>
            <InstagramIcon  className="fs-5"/>
            <WhatsAppIcon  className="fs-5"/>
          </ul>
        </div>
      
    </>
  );
};
