import React from "react";
import InformationCard from "./InformationCard";
import { faHeartPulse, faTruckMedical, faTooth } from "@fortawesome/free-solid-svg-icons";
import "../Styles/Info.css";

function Info() {
  return (
    <div className="info-section" id="services">
      <div className="info-title-content">
        <h3 className="info-title">
          <span>What We Do</span>
        </h3>
        <p className="info-description">
        We bring transportation to your fingertips, offering a comprehensive
         range of on-demand ride services tailored to your needs. 
         Our platform connects you with professional drivers who provide reliable travel options, 
         ensuring you reach your destination comfortably and efficiently whenever you require it.
        </p>
      </div>

      <div className="info-cards-content">
        <InformationCard
          title="Urgent Ride Services"
          description="Our Urgent Ride Service is your dependable solution in critical travel 
          situations. Whether its an unexpected trip to the hospital, 
          a late-night ride home, or any urgent transportation need, 
          our team of professional drivers is available 24/7 to provide prompt and reliable service."
          icon={faTruckMedical}
        />

        <InformationCard
          title="Heartfelt Rides"
          description="Our Heartfelt Rides service connects you with experienced drivers
           who understand the importance of comfort and safety during your travel. 
           Equipped with state-of-the-art vehicles, we ensure a smooth ride tailored to your needs.
            Whether its a trip to a healthcare appointment or a special event, we are dedicated to making your journey as pleasant as possible."
          icon={faHeartPulse}
        />

        <InformationCard
          title="Comfort Rides"
          description="Enjoy a comfortable journey with our Comfort Rides service,
           designed to meet all your transportation needs. Our professional drivers 
           provide a wide range of services, from routine airport transfers to special event 
           transportation, ensuring you arrive at your destination relaxed and on time. 
           Trust us for safe, reliable, and enjoyable rides every time."
          icon={faTooth}
        />
      </div>
    </div>
  );
}

export default Info;
