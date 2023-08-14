import React from "react";
import "../Container/container.css";
import ServicePurpose from "../Service & Purpose/ServicePurpose";
import UserResponsibilities from "../UserResponsibilities/UserResponsibilities";
import LimitationOfLiability from "../LimitationOfLiability/LimitationOfLiability";
import IntellectualProperty from "../IntellectualProperty/IntellectualProperty";
import Donations from "../Donations/Donations";
const Container = () => {
  return (
    <div className="condition p-5">
      <div className="condition-details"> 
        <p className="condition-detailsp">
          Welcome to Momeals! These terms and conditions outline the rules and
          regulations for the use of our web-app and services. By accessing and
          using our platform, we assume you accept these terms and conditions in
          full. Do not continue to use Momeals if you do not agree to all the
          terms and conditions stated on this page.
        </p>
        <br />
        <p className="condition-detailsp">
          The following terminology applies to these Terms and Conditions,
          Privacy Policy, and any or all Agreements: "User," "You," and "Your"
          refers to you, the person accessing and using our web-app and
          services. "Momeals," "We," "Us," and "Our" refers to Momeals, a
          non-profit organization. "Party," "Parties," or "Us" refers to both
          the User and Momeals, or either the User or Momeals. All terms refer
          to the offer, acceptance, and consideration of participation necessary
          to utilize our services in the most appropriate manner, in accordance
          with and subject to prevailing laws and regulations.
        </p>
        <ServicePurpose />
        <UserResponsibilities />
        <LimitationOfLiability />
        <IntellectualProperty />
        <Donations />
      </div>
        <p  className="condition-detailsp" style={{textAlign:"center"}}>
          For any inquiries or concerns related to these terms and conditions,
          please contact us at <span className="condition-detailsspan">info@momeals.in</span> .
        </p>
    </div>
  );
};

export default Container;
