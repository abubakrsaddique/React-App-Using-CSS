import React from "react";
import "./contactform.css";

const ContactForm = () => {
  return (
    <div className="form">
      <div className="contactus">
        <h1 className="contact-h1" style={{ color: "rgb(58, 12, 163)" }}>
          Contact Us Now
        </h1>
        <div className="line">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="344"
            height="5"
            viewBox="0 0 344 5"
            fill="none"
          >
            <path
              d="M2 1.5L342 2.97399"
              stroke="#3A0CA3"
              strokeWidth="3"
              strokeLinecap="round"
            ></path>
          </svg>
        </div>
        <hr className="hr" />
        <div className="form-input" style={{ height: "90%" }}>
          <div style={{ maxWidth: "300px" }}>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="in-field "
              placeholder="Full Name"
              value=""
            />
            <input
              id="email"
              name="email"
              required
              className="in-field"
              type="text"
              placeholder="Email Address"
              value=""
            />
            <textarea
              id="message"
              name="message"
              required
              className="text-field"
              placeholder="Message"
              cols="30"
              rows="8"
            ></textarea>
            <button type="submit" className="Submit-btn">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
