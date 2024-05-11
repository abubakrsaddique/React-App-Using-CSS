import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "./myswipercomponent.css";
import slider from "../../images/slider.png";

const MySwiperComponents = () => {
  return (
    <div className="slider-container">
      <Swiper
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        pagination={{ clickable: true }}
        className="swiper"
      >
        <SwiperSlide>
          <img src={slider} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider} alt="" />
        </SwiperSlide>
      </Swiper>
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
      <div className="swiper-pagination"></div>
      <p className="slide-circle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="61"
          height="61"
          viewBox="0 0 61 61"
          fill="none"
        >
          <circle
            cx="30.1698"
            cy="30.17"
            r="30"
            transform="rotate(30 30.1698 30.17)"
            fill="url(#paint0_linear_1_189)"
          ></circle>
          <defs>
            <linearGradient
              id="paint0_linear_1_189"
              x1="30.1698"
              y1="0.169971"
              x2="30.1698"
              y2="60.17"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4361EE"></stop>
              <stop offset="1" stopColor="#4361EE" stopOpacity="0"></stop>
            </linearGradient>
          </defs>
        </svg>
      </p>
      <span
        className="swiper-notification"
        aria-live="assertive"
        aria-atomic="true"
      ></span>
    </div>
  );
};

export default MySwiperComponents;
