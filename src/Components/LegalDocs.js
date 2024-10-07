import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/LegalDocs.css";

function LegalDocs() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  return (
    <div className="legal-section-title">
      <h1 className="legal-siteTitle">
        <Link to="/">
          Health <span className="legal-siteSign">+</span>
        </Link>
      </h1>

      <div className="legal-text-content">
        <p className="legal-title">General Info</p>
        <p className="legal-description">
        Welcome to Tru-Ride, your trusted transportation platform. 
        Our mission is to provide accessible and personalized rides for individuals seeking reliable travel options. 
        By using our platform, you agree to the terms outlined in our Privacy Policy and Terms of Service.
        </p>

        <p className="legal-title">Privacy Policy</p>
        <p className="legal-description">
        Your privacy is our top priority. Our Privacy Policy explains how we collect, use, and 
        safeguard your personal information. We are committed to secure data handling, 
        ensuring that your information is treated with the highest level of confidentiality and trust.
        </p>

        <p className="legal-title">Terms of Service</p>
        <p className="legal-description">
        By using Tru-Ride, you agree to our Terms of Service. 
        These terms include guidelines for utilizing our platform, engaging with drivers, 
        and outlining the responsibilities of all parties involved. Understanding these terms is crucial for 
        ensuring a smooth experience for everyone.
        </p>

        <p className="legal-title">Consultations</p>
        <p className="legal-description">
        Our platform connects you with professional drivers who offer safe
         and reliable transportation services. While these services are 
         convenient for travel needs, they do not replace the necessity of in-person
          transport for certain situations. Providing accurate pick-up and drop-off information is essential to ensure you receive the best service possible.
        </p>

        <p className="legal-title">How it Works</p>
        <p className="legal-description">
        TruRide is designed to simplify your travel experience. You can select a
         driver, schedule a ride, and enjoy a seamless journey. Our drivers provide 
         personalized services tailored to your needs. Please remember that urgent travel situations 
         should be addressed promptly, and you may need alternative transportation options in such cases.
        </p>
      </div>

      <div className="legal-footer">
        <p>© 2014 TruRide. All rights reserved.</p>
      </div>
    </div>
  );
}

export default LegalDocs;
