import React from "react";
import DriversCard from "./Truride";
import profile1 from "../Assets/driver1.jpeg";
import profile2 from "../Assets/driver2.jpeg";
import profile3 from "../Assets/driver3.jpeg";
import profile4 from "../Assets/driver2.jpeg";
import "../Styles/Drivers.css";

function Drivers() {
  return (
    <div className="driver-section" id="drivers">
      <div className="dt-title-content">
        <h3 className="dt-title">
          <span>Meet Our Drivers</span>
        </h3>

        <p className="dt-description">
        Meet our outstanding team of drivers, committed to providing safe and reliable transportation with TruRide.
        Trust in their experience and local knowledge to ensure you reach your n destination comfortably and on time. Whether it's a daily commute or an adventure, our drivers are here to make your ride smooth, efficient, and enjoyable.
        </p>
      </div>

      <div className="dt-cards-content">
        <DriversCard
          img={profile1}
          name="Sam Kioko"
          title="Professional Rideshare Driver"
          stars="4.9"
          reviews="1800"
        />
        <DriversCard
          img={profile2}
          name="William Okoth"
          title="Professional Rideshare Driver"
          stars="4.8"
          reviews="700"
        />
        <DriversCard
          img={profile3}
          name="Samwel Kammy"
          title="Professional Rideshare Driver"
          stars="4.7"
          reviews="450"
        />
        <DriversCard
          img={profile4}
          name="Suleiman Hussein"
          title="Professional Rideshare Driver"
          stars="4.8"
          reviews="500"
        />
      </div>
    </div>
  );
}

export default Drivers;
