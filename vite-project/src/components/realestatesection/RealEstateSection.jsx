import React from "react";
import MySwiperComponent from "../myswipercomponent/MySwiperComponent";
import ContactForm from "../contactform/ContactForm";
import "./realestatesection.css";

const RealEstateSection = () => {
  return (
    <div className="main" style={{ marginTop: "20%" }}>
      <div className="mar">
        <div style={{ width: "67%" }}>
          <h1 className="title">REAL ESTATE</h1>
          <h2 className="heading-h2">Find a perfect home you love..!</h2>
          <p className="para">
            Etiam eget elementum elit. Aenean dignissim dapibus vestibulum.
            Integer a dolor eu sapien sodales vulputate ac in purus.
          </p>
        </div>
        {/* <div className="">
          <MySwiperComponent />
        </div> */}
      </div>
      <div>
        <ContactForm />
      </div>
    </div>
  );
};

export default RealEstateSection;
