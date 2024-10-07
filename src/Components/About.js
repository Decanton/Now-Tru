import React from "react";
import Doctor from "../Assets/middle.webp";
import SolutionStep from "./SolutionStep";
import "../Styles/About.css";

function About() {
  return (
    <div className="about-section" id="about">
      <div className="about-image-content">
        <img src={Doctor} alt="Doctor Group" className="about-image1" />
      </div>

      <div className="about-text-content">
        <h3 className="about-title">
          <span>About Us</span>
        </h3>
        <p className="about-description">
        Your Journey, Your Adventure! Unlock a world of possibilities with our
         innovative app, connecting drivers to ride requests and unveiling hidden gems of local
          attractions at every destination. Drive, explore, and earn with Truride
           where every ride is a discovery!“
        </p>

        <h4 className="about-text-title">Your Solutions</h4>

        <SolutionStep
          title="Choose a Driver"
          description="Find your perfect driver and book with ease at Truride. Expert drivers prioritize you safety and comfort, offering tailored care."
        />

        <SolutionStep
          title="Book your Ride"
          description="Choose the date and time that suits you best, and let our dedicated team of professionals ensure your well-being with personalized care."
        />

        <SolutionStep
          title="Get Your Solutions"
          description="Our experienced drivers are here to provide expert advice and personalized journey and tourism plans, helping you achieve your best possible comfort."
        />
      </div>
    </div>
  );
}

export default About;
