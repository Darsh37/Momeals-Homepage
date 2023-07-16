import React from "react";
import CallIcon from '@mui/icons-material/Call';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import heartimg from '../Components/Images/heart.png'
import '../layout/header.css'

export const Header = () => {
  return (
    <>
       
        <div className="subHeader d-flex justify-content-between align-items-center px-2 pt-2" style={{height:57, margin:0,backgroundColor:'#010101', color:'white'}}>
          <h6 className="momeal">help@momeals.in</h6>
          <h6 className="one">
            <img
              src={heartimg} width="35px" height="35px"
              alt=""
            />
            One Hand For Others
          </h6>
          <ul className="mx-3 icons-list d-flex align-items-center">
           
            <CallIcon className="mx-2 fs-5"/>
            <InstagramIcon  className="mx-2 fs-5"/>
            <WhatsAppIcon  className="mx-2 fs-5"/>
          </ul>
        </div>
      
    </>
  );
};
