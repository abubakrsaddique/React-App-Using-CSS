import React, { useEffect } from "react";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import SliderImage1 from "../../images/pic1.jpg";
import SliderImage2 from "../../images/slider.jpg";
import "./myswipercomponent.css";

const MySwiperComponent = () => {
  useEffect(() => {
    const swiper = new Swiper(".swiper-container", {
      slidesPerView: 1,
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
    return () => {
      swiper.destroy();
    };
  }, []);

  const handleNextButtonClick = () => {
    const swiper = document.querySelector(".swiper-container").swiper;
    swiper.slideNext();
  };

  const handlePrevButtonClick = () => {
    const swiper = document.querySelector(".swiper-container").swiper;
    swiper.slidePrev();
  };

  return (
    <div className="swiper-container">
      <div className="swiper-wrapper">
        <div className="swiper-slide">
          <img src={SliderImage1} alt="" className="slider-image" />
        </div>
        <div className="swiper-slide">
          <img src={SliderImage2} alt="" className="slider-image" />
        </div>
      </div>
      <div className="swiper-button-prev" onClick={handlePrevButtonClick}></div>
      <div className="swiper-button-next" onClick={handleNextButtonClick}></div>
    </div>
  );
};

export default MySwiperComponent;
