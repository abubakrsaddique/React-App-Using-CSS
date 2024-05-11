import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-item">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="18"
          viewBox="0 0 14 18"
          fill="none"
        >
          <path
            d="M13 7.4C13 10.9346 7 17 7 17C7 17 1 10.9346 1 7.4C1 3.86538 3.68629 1 7 1C10.3137 1 13 3.86538 13 7.4Z"
            stroke="white"
            stroke-width="1.2"
          ></path>
          <path
            d="M7 8.2001C7.41422 8.2001 7.75 7.84194 7.75 7.4001C7.75 6.95827 7.41422 6.6001 7 6.6001C6.58578 6.6001 6.25 6.95827 6.25 7.4001C6.25 7.84194 6.58578 8.2001 7 8.2001Z"
            fill="#2B2B2B"
            stroke="white"
            stroke-width="1.2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
        <span>Rezilla, 18 Grattan St, Brooklyn </span>
      </div>

      <div className="header-items header-phone">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M15.5425 1.66261L15.5161 1.64609L12.1749 0L8.56855 4.8084L10.2277 7.02078C10.1781 7.85512 9.82426 8.6423 9.23324 9.23331C8.64223 9.82432 7.85504 10.1781 7.0207 10.2278L4.80836 8.56859L0 12.1748L1.6324 15.4881L1.64613 15.5161L1.66269 15.5425C1.7498 15.6829 1.87139 15.7986 2.01588 15.8787C2.16036 15.9587 2.32295 16.0005 2.48814 16H3.3503C5.01148 16 6.6564 15.6728 8.19114 15.0371C9.72587 14.4014 11.1204 13.4696 12.295 12.295C13.4696 11.1203 14.4014 9.72584 15.0371 8.1911C15.6728 6.65636 16 5.01144 16 3.35026V2.48807C16.0005 2.32287 15.9588 2.16029 15.8787 2.0158C15.7986 1.87131 15.6829 1.74972 15.5425 1.66261ZM14.7653 3.35026C14.7653 9.64451 9.64451 14.7653 3.3503 14.7653H2.65267L1.56047 12.548L4.8086 10.1119L6.61698 11.4682H6.82276C8.05445 11.4668 9.23529 10.9769 10.1062 10.106C10.9772 9.23502 11.4671 8.05418 11.4684 6.82249V6.61671L10.1122 4.80836L12.548 1.56043L14.7653 2.65283V3.35026Z"
            fill="white"
          ></path>
        </svg>
        <span>+1 206-214-229 </span>
      </div>

      <div className="header-items header-em">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="13"
          viewBox="0 0 18 13"
          fill="none"
        >
          <path
            d="M5 4.2002L9 7.00019L13 4.2002"
            stroke="white"
            stroke-width="1.2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M1 10.6V2.6C1 1.71634 1.71634 1 2.6 1H15.4C16.2837 1 17 1.71634 17 2.6V10.6C17 11.4837 16.2837 12.2 15.4 12.2H2.6C1.71634 12.2 1 11.4837 1 10.6Z"
            stroke="white"
            stroke-width="1.2"
          ></path>
        </svg>
        <span>support@rezilla.com </span>
      </div>
    </div>
  );
};

export default Header;
