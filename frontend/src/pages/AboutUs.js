import React from "react";
import "./AboutUs.css";
import teamImage from "../assets/team.avif";
import missionImage from "../assets/mission_image.jpg";
import visionImage from "../assets/vision.jpg";
const AboutUs = () => {
  return (
    <div className="us">
    <div className="about-us">
      <h2 className="about-heading" style={{ fontFamily: "Montserrat, sans-serif", color: "#007074", fontSize: "45px" }}>Who Are We?</h2>
      <div className="about-section section-one">
        <div className="about-text">
          <h3>We're a small team with a big dream.</h3>
          <p style={{ fontFamily: "Acme, sans-serif", fontSize: "22px" }}>
            At EasyRide, we’re a group of passionate developers and thinkers
            working to revolutionize bus booking. Our goal is to make your
            journey smoother, simpler, and more accessible.
          </p>
        </div>
        <div className="about-image">
          <img src={teamImage} alt="Our Team" />
        </div>
      </div>



      <div className="about-section section-three">
         <div className="about-image">
          <img src={visionImage} alt="Our Team" />
        </div>
        <div className="about-text">
          <h3>Our Vision</h3>
          <p style={{ fontFamily: "Acme, sans-serif", fontSize: "22px" }}>
             Our vision is to become the most trusted and widely-used travel platform across India, empowering millions to explore new destinations effortlessly. 
             We envision a world where booking a bus is as easy as sending a message — accessible to all, backed by real-time technology, and dedicated to customer satisfaction.
          </p>
        </div>
      </div>

            <div className="about-section section-two">
        <div className="about-image">
          <img src={missionImage} alt="Our Mission" />
        </div>
        <div className="about-text">
          <h3>Our Mission</h3>
          <p style={{ fontFamily: "Acme, sans-serif", fontSize: "22px" }}>
             Our mission is to simplify travel for everyone by providing a seamless, secure, and efficient bus booking experience. 
             We aim to connect cities and communities with reliable transportation options while prioritizing user convenience, affordability, and eco-conscious travel.
          </p>
        </div>
      </div>
    </div>
       <footer className="custom-footer text-center py-4 border-top">
        <p className="mb-0">© 2025 EasyRide. All rights reserved.</p>
      </footer>
      </div>
  );
};

export default AboutUs;

