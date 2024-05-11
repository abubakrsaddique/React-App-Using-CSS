import React from "react";
import "./marqueecomponent.css";
import Google from "../../images/google.png";
import Amazon from "../../images/amazon.png";
import Logitech from "../../images/logitech.png";
import Netflix from "../../images/netflix.png";
import Samsung from "../../images/samsung.png";
import Spotify from "../../images/spotify.png";

const MarqueeComponent = () => {
  return (
    <div style={{ width: "100%" }}>
      <div className="marque-cont" style={{ width: "100%" }}>
        <h1 className="marque-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="101"
            height="101"
            viewBox="0 0 101 101"
            fill="none"
          >
            <circle
              opacity="0.5"
              cx="50.3013"
              cy="50.3013"
              r="50"
              transform="rotate(-30 50.3013 50.3013)"
              fill="url(#paint0_linear_1_491)"
            ></circle>
            <defs>
              <linearGradient
                id="paint0_linear_1_491"
                x1="50.3013"
                y1="0.30127"
                x2="50.3013"
                y2="100.301"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#4361EE"></stop>
                <stop offset="1" stop-color="#4361EE" stop-opacity="0"></stop>
              </linearGradient>
            </defs>
          </svg>
        </h1>
        <h1 className="marque-text" style={{ color: "rgb(128, 128, 128)" }}>
          Trusted by 100+ Companies across the globe
        </h1>
        <div className="icon-container">
          <div className="icon-container-detail">
            <div className="image-item">
              <img src={Google} alt="" />
            </div>
            <div className="image-item">
              <img src={Amazon} alt="" />
            </div>
            <div className="image-item">
              <img src={Logitech} alt="" />
            </div>
            <div className="image-item">
              <img src={Netflix} alt="" />
            </div>
            <div className="image-item">
              <img src={Samsung} alt="" />
            </div>
            <div className="image-item">
              <img src={Spotify} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarqueeComponent;
