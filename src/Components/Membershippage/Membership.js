import React from 'react'
import Arrow from "./../Images/Arrow 4 (1).png";
import { useNavigate } from 'react-router-dom';
import './Membership.css'

function Membership() {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/");
  };

  return (
    <div className='membership-container'>
      <div style={{margin:'2rem 0rem'}}>
        <img src={Arrow} alt="" onClick={handleNavigate}></img>
      </div>
      <div className='memebership-middle-container'>
      <div className='menbership-left-side'>
        <h1>BECOME A MEMBER OF <br/><span style={{color:'#5565FF'}}>MOMEALS FAMILY</span></h1>
        <h6>And avail following Benefits</h6>
        <div style={{margin:"2rem 0rem"}} >
       
            <div className="radio1">
              <label>
                <input type="radio" value="Funds  Allocation" />
                Assurance of helping a Child
              </label>
            </div>
            <div className="radio1">
              <label>
                <input type="radio" value="Female" />
                Certificate of Membership
              </label>
            </div>
            <div className="radio1">
              <label>
                <input type="radio" value="Donate Items" />
                A welcome gift
              </label>
            </div>
            <div className="radio1">
              <label>
                <input type="radio" value="Voluteer" />
                Access to events
              </label>
            </div>
            <div className="radio1 ">
              <label>
                <input type="radio" value="Voluteer" />
                Part of Community of Change Makers
              </label>
            </div>   
         
        </div>

      </div>
      <div className='membership-right-side'>
        <h3>What and how  should we  call you ?</h3>
        <input
            className="d-7"
            type="text"
            placeholder="Your Name"
          />
            <input
            className="d-7"
            type="text"
            placeholder="yourname@gmial.com"
          />
            <input
            className="d-7"
            type="text"
            placeholder="Mobile Number"   
          />
            <input
            className="d-7"
            type="text"
            placeholder="Country"
          
          />
            <input
            className="d-7"
            type="text"
            placeholder="Pincode"
          
          />

    <button className="contactUs1-btn">Submit Details</button>


      </div>
      </div>
    </div>

  )
}

export default Membership