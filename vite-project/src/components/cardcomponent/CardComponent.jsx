import React from "react";
import "./cardcomponent.css";
import Image from "../../images/card2.png";

const CardComponent = () => {
  return (
    <div className="cards-container">
      <div className="">
        <div className="cards-p">
          <div className="card-1">
            <div
              className="card-1-detail"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <h1 className="card-1-h1">
                72k+ Happy <br />
                Customers
              </h1>
            </div>
          </div>
          <div className="card-2">
            <div
              className="card-2-detail"
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <img src={Image} alt="" className="img-card-2" />
              <h1 className="card-2-h1">
                200+ New <br />
                Listings Everyday!
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
