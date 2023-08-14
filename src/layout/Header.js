import React from "react";
import CallIcon from '@mui/icons-material/Call';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
<<<<<<< HEAD

=======
import heartimg from '../Components/Images/heart.png'
>>>>>>> momeals-frontend/master
import '../layout/header.css'

export const Header = () => {
  return (
    <>
       
<<<<<<< HEAD
        <div className="subHeader d-flex justify-content-between align-items-center px-2 pt-2" style={{height:57, margin:0,backgroundColor:'#010101', color:'white'}}>
          <h6 className="momeal">help@momeals.in</h6>
          <h6 className="one">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAaCAYAAADWm14/AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGhSURBVHgB7ZbPK0RRFMfP82PByELSzAJDWVKEaZSyHKuxnqSUkpUUdiILIv+C7JSlibUfezbKQs1mhFmhTH42ju/NUdP13sy7zzwl86lPb2buPT/m1L09ojL/HavYBmYO4BGFQzAIs/AUJi3Lupc9TXjEYA+sgxl4AA+xJ0deQeI2uM/feYdjsqcTntnseYV7sIO8gMAwTDkUX4XVsBumuTAqR4hMQdC2Q8IVWY/AG3bHDqw0Kd4KX2wSqbEGZT2tTWUadsEl2ZePytVi0kCc7bmQ9Qmt+IwWH4MZLTZu0kDCoYEnWAtD8A6+wSmJ6YNHcES+98OrvNhRkwai7Myy7FGNBORzL3yQ9SxcgBWwGR7L7wMmDdRr3bM28k35x+oIbsg0dNb586SoXBEyRY0WXkpBryS/puQJBFdJI8/snUH6CdKEuhNybM41bKdSgERzbIZqOEGlAska4Bq7m8QjnCU/QOItFw0skl8geSOcZPvToe6AeVhDfoMiJ1pxdSuO02+BYud5xW9ZrmBTir4RFWggjMcwVOPexZtPisr8RT4AGoMOjXuk84IAAAAASUVORK5CYII="
=======
        <div className="subHeader d-flex justify-content-between align-items-center px-lg-4 px-md-3 px-3 pt-2" style={{height:57,backgroundColor:'#010101', color:'white'}}>
          <h6 className="momeal mx-lg-2">help@momeals.in</h6>
          <div>
          <h6 className="one">
            <img
            
              src={heartimg} width="35px" height="35px"
>>>>>>> momeals-frontend/master
              alt=""
            />
            One Hand For Others
          </h6>
<<<<<<< HEAD
          <ul className="mx-3 icons-list d-flex align-items-center">
           
            <CallIcon className="mx-2 fs-5"/>
            <InstagramIcon  className="mx-2 fs-5"/>
            <WhatsAppIcon  className="mx-2 fs-5"/>
=======
          </div>
          <ul className="icons-list d-flex gap-3 mx-lg-4 align-items-center">
           
            <CallIcon className="fs-5"/>
            <InstagramIcon  className="fs-5"/>
            <WhatsAppIcon  className="fs-5"/>
>>>>>>> momeals-frontend/master
          </ul>
        </div>
      
    </>
  );
};
